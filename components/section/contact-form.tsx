"use client";

import Required from "#/components/required";
import { Button } from "#/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import PasswordInput from "#/components/ui/password-input";
import { LoginSchema, loginSchema, useLogin } from "#features/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import { errorsBind } from "#lib/errors-bind";
import { AxiosError } from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Textarea } from "#components/ui/textarea";
import { Checkbox } from "#components/ui/checkbox";

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useLogin({
    onSuccess(data) {
      console.log(data, data.data?.additionnalData);
      
      toast.success("Your has been login successfully.");
    },
    onError(errors: any) {
      errorsBind(errors as AxiosError);
    },
  });

  function onSubmit(values: LoginSchema) {
    login(values);
  }
  return (
    <div className="f bg-[#BA3A381A] mt-10">
      <div className=" space-y-2 lg:px-36 py-10 gap-7 px-10 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex lg:hidden justify-center items-center space-x-1">
          <div className="flex flex-col space-y-7">
            <img src="/images/group.svg" width={300} height={300} />
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={
              // @ts-ignore
              form.handleSubmit(onSubmit)
            }
            className=" space-y-5"
          >
            <p className="text-[40px] font-bold text-[#2F4858]">Contact Us</p>
            <p className="text-black">
              Our friendly team would love to hear from you.
            </p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">
                    <Required />
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input border bg-white border-[#000]"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">
                    <Required />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input bg-white border border-[#000]"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">
                    <Required />
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input bg-white border border-[#000]"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">
                    <Required />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="input bg-white border border-[#000]"
                      {...field}
                      rows={4}
                      cols={7}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">
                    You agree to our friendly privacy policy
                  </FormLabel>
                  <FormControl>
                    <Checkbox />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-5 rounded-full bg-[#f00]"
              disabled={isPending}
            >
              {isPending && (
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              Send message
              <span className="sr-only"> Send message</span>
            </Button>
          </form>
        </Form>
        <div className="lg:flex hidden justify-center items-center space-x-1">
          <div className="flex flex-col space-y-7">
            <img src="/images/group.svg" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
