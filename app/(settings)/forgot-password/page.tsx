"use client";

import { Button } from "#/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import { useForgotPassword } from "#features/auth/hooks/use-forgot-password";
import { ForgotPasswordSchema, forgotPasswordSchema } from "#features/auth/schema/forgot-password";
import { errorsBind } from "#lib/errors-bind";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });
const router = useRouter()
  const { mutate: forgotPassword, isPending } = useForgotPassword({
    onSuccess(data) {
      console.log(data);
      toast.success("Your mail is checked for successfully.");
      router.push("/reset-password")
    },
    onError(errors: any) {
      errorsBind(errors as AxiosError);
    },
  });

  function onSubmit(values: ForgotPasswordSchema) {
    forgotPassword(values);
  }
  return (
    <div className="shadow-md w-[522px] bg-white bg-opacity-30 backdrop-blur-lg backdrop-saturate-150 backdrop-filter  p-6  rounded-md border-t ">
      <Form {...form}>
        <form
          onSubmit={
            // @ts-ignore
            form.handleSubmit(onSubmit)
          }
          className=" space-y-2"
        >
          <img src="/images/LDM_Horizontal.svg" alt="logo" />
          <p className="text-2xl font-bold text-[#2F4858] text-center">
            Reset password
          </p>
          <p className="text-[#475467] text-sm text-center">
            Enter your Email Address .
          </p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="input mb-2" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-8 w-full bg-[#f00]" disabled={isPending}>
            {isPending && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Reset Password
            <span className="sr-only"> Reset Password</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
