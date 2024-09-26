"use client";

import { Button } from "#/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import PasswordInput from "#components/ui/password-input";
import { useResetPassword } from "#features/auth/hooks/use-reset-password";
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "#features/auth/schema/reset-password";
import { errorsBind } from "#lib/errors-bind";
import { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from "#components/ui/input";

export default function ResetPassword() {
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: resetPassword, isPending } = useResetPassword({
    onSuccess(data) {
      console.log(data);
      toast.success("Your has been reset password successfully.");
      router.push("/");
    },
    onError(errors: any) {
      errorsBind(errors as AxiosError);
    },
  });

  function onSubmit(values: ResetPasswordSchema) {
    const validValues = {
      password: values.password,
      token: values.token,
      confirmPassword: values.confirmPassword,
    };
    console.log(validValues);
    // @ts-ignore
    resetPassword(validValues);
  }
  return (
    <div className="shadow-md w-[522px] bg-[#fff]  p-6  rounded-md border-t ">
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
            New password
          </p>
          <p className="text-[#475467] text-sm text-center">
            Enter your New Password .
          </p>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label">Password</FormLabel>
                <FormControl>
                  <PasswordInput className="input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label">Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput className="input mb-2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="token"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label">Code</FormLabel>
                <FormControl>
                  <Input className="input" {...field} />
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
            Send
            <span className="sr-only">Send </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
