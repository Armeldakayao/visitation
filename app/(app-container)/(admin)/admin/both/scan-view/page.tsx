"use client";
import { Button } from "#components/ui/button";
import { ChevronLeftCircle, Loader2, X } from "lucide-react";
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
import { Textarea } from "#components/ui/textarea";
import { AppContext } from "#app/provider";
import { useContext } from "react";
export default function Page() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  // @ts-ignore
  const { isMe } = useContext(AppContext);
  const bookLength = isMe?.book_purchases?.length || 0;

  const id = bookLength > 0 ? isMe.book_purchases[bookLength - 1]?.id : null;
  const router = useRouter();
  const onSubmit = () => {
    console.log("ok");
  };
  return (
    <div className=" mx-auto text-[#383838] bg-[#F8F5F5]  p-7">
      <div className="flex items-center justify-end">
        <Button className="bg-purple-800">SHare copy</Button>
        <X />
      </div>
      <div className="flex items-center justify-start">
        <ChevronLeftCircle />
      </div>
      <div className="grid grid-cols-1 gap-5 bg-[#F8F5F5]">
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
        <div className="grid grid-cols-1 mx-auto">
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
                          className="input  bg-white border-gray-400"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="input  bg-white border-gray-400"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="input  bg-white border-gray-400"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="card_holder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">
                        Addresse
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="input  bg-white border-gray-400"
                          // @ts-ignore
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex  justify-endgap-7">
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
                  Next
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
