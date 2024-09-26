"use client";
import { Button } from "#components/ui/button";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "#features/auth";
import { Input } from "#components/ui/input";
import { Checkbox } from "#components/ui/checkbox";
export default function Page() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const onSubmit = () => {
    console.log("ok");
  };
  return (
    <div className=" mx-auto text-[#383838] bg-[#F8F5F5]  p-7">
      <h1 className="text-[#383838] text-[30px] font-bold  pt-20">
        Visitation Books
      </h1>

      <div className="flex justify-end">
        <X />
      </div>
      <div className="grid grid-cols-2 gap-5 bg-[#F8F5F5]">
        <div className=" mx-auto">
          <div className="bg-[#C6CACA] relative p-16 rounded flex flex-col justify-center items-center">
            <p className="text-[30px] pb-5 font-bold text-[#575252]">
              Jane Matteson
            </p>
            <img src="/images/header.svg" width={200} height={200} />
            <div
              className="absolute bottom-0 right-0"
              onClick={() => router.push("/admin/visitation-books/listen-book")}
            >
              <img src="/images/r-r.svg" width={50} height={50} />
            </div>
          </div>
        </div>
        <div>
          <p>Thank you for attending note</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-5">
              <div className="grid pt-7 grid-cols-1 gap-7">
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">
                        Email address to send this message from
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="input rounded-full bg-white border-gray-400"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <div>Message you want to send:</div>

                  <div>
                    <Button>Add message</Button>
                  </div>
                </div>
                <div className="flex gap-4 border bg-[#D9D9D940] rounded-lg py-4 px-2 justify-between">
                  <div>
                    <img src="/images/header.svg" width={200} height={200} />
                  </div>

                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, corrupti. Voluptatem praesentium consequatur,
                    possimus et consequuntur quasi sint. Inventore adipisci
                    voluptas ullam ipsa voluptatum unde animi officiis a
                    asperiores tenetur.
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          className="input mr-2  bg-white border-gray-400"
                          checked={true}
                          {...field}
                        />
                      </FormControl>
                      <FormLabel className="text-lg ">
                        Allow guest to add a picture to their name.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          className="input mr-2  bg-white border-gray-400"
                          checked={true}
                          {...field}
                        />
                      </FormControl>
                      <FormLabel className="text-lg ">
                        Allow guest to add a picture to their name.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          className="input mr-2  bg-white border-gray-400"
                          checked={true}
                          {...field}
                        />
                      </FormControl>
                      <FormLabel className="text-lg ">
                        Allow guest to add a picture to their name.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-7">
                <Button
                  onClick={() =>
                    router.push("/admin/visitation-books/upload-picture")
                  }
                  className="mt-5 justify-end rounded-full flex bg-[#f00]"
                  disabled={false}
                >
                  {false && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Complete Payment
                  <span className="sr-only"> Complete Payment</span>
                </Button>
                <Button
                  onClick={() =>
                    router.push("/admin/visitation-books/upload-picture")
                  }
                  className="mt-5 justify-end rounded-full flex bg-[#f00]"
                  disabled={false}
                >
                  {false && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Complete Payment
                  <span className="sr-only"> Complete Payment</span>
                </Button>
                <Button
                  onClick={() =>
                    router.push("/admin/visitation-books/upload-picture")
                  }
                  className="mt-5 justify-end rounded-full flex bg-[#f00]"
                  disabled={false}
                >
                  {false && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  Complete Payment
                  <span className="sr-only"> Complete Payment</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
