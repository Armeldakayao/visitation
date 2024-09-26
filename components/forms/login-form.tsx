import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/form";
import { CustomModal } from "#components/shared/modal";
import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import PasswordInput from "#components/ui/password-input";
import { LoginSchema, loginSchema, useLogin } from "#features/auth";
import { errorsBind } from "#lib/errors-bind";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { router } from "react-query-kit";

export default function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useLogin({
    onSuccess(data) {
      toast.success("You has been login  successfully.");
      form.reset();
      console.log(data);
      localStorage.setItem("ACCESS_TOKEN", data.data?.access);
      closeModal(); // Close modal after success
    },
    onError(errors: any) {
      toast.dismiss(); // Dismiss loading toast on error
      errorsBind(errors as AxiosError);
    },
  });

  const onSubmit = (values: LoginSchema) => {
    console.log(values, "values");
    const loadingToast = toast.loading("Login .....");

    login(values, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        router.push("admin/visitation-books/home");
      },
      onError: () => {
        toast.dismiss(loadingToast);
      },
    });
  };
  // const router = useRouter();
  // function onSubmit() {
  //   router.push("/admin/visitation-books/home");
  //   // login(values)
  // }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      closeModal();
    }
  }, [form.formState.isSubmitSuccessful]);

  return (
    <div>
      <Button
        onClick={openModal}
        className="text-black h-8 border font-[400] border-[#f00] rounded-full"
      >
        Log in
      </Button>

      <CustomModal
        widthModal="w-[500px]"
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Log in"
        description="New to Visitation Book?"
        subDescription="Sign up for free"
      >
        <div className="mt-5">
          <Form {...form}>
            <form
              onSubmit={
                // @ts-ignore
                form.handleSubmit(onSubmit)
              }
              className="space-y-2"
            >
              <div className="grid grid-cols-1 gap-4 space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-white font-[400]">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input className="input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-[400]">
                        Password
                      </FormLabel>
                      <FormControl>
                        <PasswordInput className="input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col justify-center items-center  gap-4 pt-5">
                <Link href="/forgot-password" className="text-white underline">
                  Forgot Password?
                </Link>
                <Button
                  className="bg-[#f00] w-full rounded-full"
                  disabled={isPending}
                >
                  {isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Login
                </Button>
              </div>
              <div className="flex flex-col mt-5 justify-center items-center">
                <p className="text-white">Or log in with</p>
                <div className="flex gap-4 mt-5">
                  <Button className="bg-[#ECEAEACC] text-black font-[400] px-7 rounded-full">
                    <img src="/images/facebook.svg" width={30} height={30} />
                    Facebook
                  </Button>
                  <Button className="bg-[#ECEAEACC] text-black px-7 font-[400] rounded-full">
                    <img src="/images/google.svg" width={30} height={30} />
                    Google
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CustomModal>
    </div>
  );
}
