"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { AppContext } from "#app/provider";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { useCompletePayment } from "#features/auth/hooks/use-complete-payment";
import { useCreateBookPurchase } from "#features/auth/hooks/use-create-book-purchase";
import { useCreateProcessPayment } from "#features/auth/hooks/use-proccess-payment";
import { paymentSchema, PaymentSchema } from "#features/auth/schema/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51Q0vdYRZozRKGddD58H7hXRT2cEEIHHWVQaN2phqHnctMoTONkHXuVCzUyYAHqBdecM4atpASXA5t0sNlchrNo4200ElWas88G"
);
// @ts-ignore
function PaymentForm({ selectedBook, price, taxRate, totalAmount }) {
  const stripe = useStripe();
  const elements = useElements();
  const { mutate: completePayment, isPending } = useCompletePayment();
  const { mutate: bookPurchase, isPending: bookPend } = useCreateBookPurchase();
  const { mutate: proccessPayment, isPending: proccessPend } =
    useCreateProcessPayment();
  const form = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const book_token = searchParams.get("book_token");
  const router = useRouter();
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const bookSelect = isMe?.book_purchases?.find(
    (b: { id: string | null }) => b.id === token
  );
  console.log(bookSelect, "soooooooooooooo", isMe?.book_purchases);
  // Calculate tax and total
  const taxRate2 = 3;
  const price2 = Number(selectedBook?.price) || 0;
  const taxAmount = price * (taxRate / 100);
  const totalAmount2 = price + taxAmount;
  const onSubmit = async (data: PaymentSchema) => {
    if (!stripe || !elements) {
      console.error("Stripe has not been loaded yet.");
      return;
    }

    // Get card element
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card Element not found.");
      return;
    }

    // Create payment method with card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: data.card_holder,
      },
    });

    if (error) {
      console.error("Payment method creation failed:", error);
      return;
    }
    console.log(paymentMethod, "methide");
    const completeData = {
      ...data,
      payment_method_id: paymentMethod.id,
      user_id: isMe?.id,
      stripe_payment_method_id: paymentMethod.id,
      expiry_month: paymentMethod?.card?.exp_month,
      expiry_year: paymentMethod?.card?.exp_year,
      last4: paymentMethod?.card?.last4,
      card_brand: paymentMethod?.card?.brand,
      is_default: "true",
    };
    // @ts-ignore
    completePayment(completeData, {
      onSuccess: (response) => {
        console.log("Payment successful:", response);
        bookPurchase(
          // @ts-ignore
          { book_id: token },
          {
            onSuccess: (data) => {
              console.log("book successful:", data);

              proccessPayment(
                { book_id: data.data.id, payment_method_id: response.data.id }, // Pass both book_id and payment_method_id
                {
                  onSuccess: (dataResponse) => {
                    console.log("Payment successful:", dataResponse);
                    router.push(
                      `/admin/visitation-books/upload-picture?token=${data.data.id}`
                    );
                    toast.success("Payment done");
                  },
                  onError: (error) => {
                    console.error("Payment failed:", error);
                  },
                }
              );
            },
            onError: (error) => {
              console.error("book failed:", error);
            },
          }
        );
      },
      onError: (error) => {
        console.error("Payment failed:", error);
      },
    });
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        backgroundColor: "#f9fafb",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
    hidePostalCode: true,
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 lg:mx-20 mb-4"
      >
        <div className="grid pt-7 lg:grid-cols-7 px-10 grid-cols-1 gap-7">
          <div className="lg:col-span-2">
            {book_token ? (
              <div className="bg-white rounded-xl shadow-md p-4">
                <p className="font-bold text-black text-[18px]">
                  Receipt Summary
                </p>

                <div className="flex pt-3 text-black justify-between">
                  <p>Visitation Book :</p>
                  <p>$ {price2?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Subtotal:</p>
                  <p>$ {price2?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Taxes :</p>
                  <p>$ {taxAmount?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Discount :</p>
                  <p>$ 0.00</p>
                </div>

                <div className="flex pt-3 px-16 text-black justify-between">
                  <p>Total :</p>
                  <p className="text-2xl font-bold">
                    $ {totalAmount2?.toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-4">
                <p className="font-bold text-black text-[18px]">
                  Receipt Summary
                </p>

                <div className="flex pt-3 text-black justify-between">
                  <p>Visitation Book :</p>
                  <p>$ {price?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Subtotal:</p>
                  <p>$ {price?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Taxes :</p>
                  <p>$ {taxAmount?.toFixed(2)}</p>
                </div>

                <div className="flex pt-3 text-black justify-between">
                  <p>Discount :</p>
                  <p>$ 0.00</p>
                </div>

                <div className="flex pt-3 px-16 text-black justify-between">
                  <p>Total :</p>
                  <p className="text-2xl font-bold">
                    $ {totalAmount?.toFixed(2)}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-5 bg-white space-y-4 rounded-xl shadow-md mb-7 p-10 pb-7">
            <h3 className="font-bold text-black text-center text-[25px]">
              Payment information
            </h3>
            <FormField
              control={form.control}
              name="card_holder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-bold label">
                    Card Holder
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input rounded-full bg-white border-gray-400"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel className="text-lg label font-bold">
                Card Details
              </FormLabel>
              <FormControl>
                <div className="input border rounded-full bg-white border-gray-400 p-3">
                  <CardElement options={cardElementOptions} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
            <div className="flex justify-end">
              <Button
                className="mt-5  justify-end rounded-full flex bg-[#f00]"
                disabled={isPending || proccessPend || bookPend}
              >
                {isPending && (
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Complete Payment
                <span className="sr-only"> Complete Payment</span>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default function Page() {
  // @ts-ignore
  const { bookLists, isMe } = useContext(AppContext);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  // @ts-ignore
  const book_token = searchParams.get("book_token");
  console.log(book_token);
  const router = useRouter();
  // @ts-ignore
  // const { isMe } = useContext(AppContext);
  const bookSelectDetails = isMe?.book_purchases?.find(
    (b: { id: string | null }) => b.id === token
  );
  const selectedBook = bookLists?.find(
    (book: { id: string | null }) => book.id === token
  );
  const taxRate = 3;
  const price = Number(selectedBook?.price) || 0;
  const taxAmount = price * (taxRate / 100);
  const totalAmount = price + taxAmount;

 
  const price2 = Number(selectedBook?.price2) || 0;
  const taxAmount2 = price2 * (taxRate / 100);
  const totalAmount2 = price + taxAmount2;
  console.log(bookSelectDetails?.book.title, bookLists, "selectedBook");
  return (
    <div
      className="bg-[#F8F5F5] m-0 p-0"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/images/GOD.svg)`,
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex pt-16 justify-center gap-7 items-center lg:mx-80">
        <div className="text-[20px] pb-10 text-center font-bold text-[#504F46]">
          Welcome {isMe?.full_name} to Visitation Book.com
        </div>
      </div>
      {bookSelectDetails ? (
        <div className=" flex-col  lg:mx-20 p-10  relative">
          <div className="text-[30px] pb-20 text-center font-bold text-[#504F46]">
            You have selected the {bookSelectDetails?.book?.title}
          </div>
          <div className="relative top-0 left-0 ">
            <div className="relative left-50 right-50">
              <div className="flex justify-center ">
                <img src="/images/bady.svg" />
                <img // @ts-ignore
                  src={`http://34.44.9.82${bookSelectDetails?.custom_cover}`}
                  className="w-[200px]"
                />
              </div>
            </div>
            <img className="image2 absolute xl:px-80" src="/images/both.svg" />
          </div>
          <p className="text-black text-lg pb-10 pt-5 text-center font-bold">
            Please pay the fee of ${price2} + {taxRate}% service fee.
          </p>
        </div>
      ) : (
        <div className=" flex-col  lg:mx-20 p-10  relative">
          <div className="text-[30px] pb-20 text-center font-bold text-[#504F46]">
            You have selected the {selectedBook?.title}
          </div>
          <div className="relative top-0 left-0 ">
            <div className="relative left-50 right-50">
              <div className="flex justify-center ">
                <img src="/images/bady.svg" />

                <img src={selectedBook?.cover} />
              </div>
            </div>
            <img className="image2 absolute xl:px-80" src="/images/both.svg" />
          </div>
          <p className="text-black text-lg pb-10 pt-5 text-center font-bold">
            Please pay the fee of ${price} + {taxRate}% service fee.
          </p>
        </div>
      )}
      <Elements stripe={stripePromise}>
        <PaymentForm
          selectedBook={selectedBook}
          price={price}
          taxRate={taxRate}
          totalAmount={totalAmount}
        />
      </Elements>
    </div>
  );
}
