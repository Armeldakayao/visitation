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
import { Checkbox } from "#components/ui/checkbox";
import { Input } from "#components/ui/input";
import PasswordInput from "#components/ui/password-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select";
import {
  LoginSchema,
  loginSchema,
  registerSchema,
  RegisterSchema,
  useLogin,
  useRegister,
} from "#features/auth";
import { errorsBind } from "#lib/errors-bind";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { mutate: login, isPending: loginPending } = useLogin({
    onSuccess(data) {
      toast.success("You has been login  successfully.");
      form.reset();
      console.log(data);

      closeModal(); // Close modal after success
    },
    onError(errors: any) {
      toast.dismiss(); // Dismiss loading toast on error
      errorsBind(errors as AxiosError);
    },
  });
  const { mutate: register, isPending } = useRegister({
    onSuccess(data) {
      toast.success("You has been register  successfully.");
      form.reset();

      closeModal(); // Close modal after success
    },
    onError(errors: any) {
      toast.dismiss(); // Dismiss loading toast on error
      errorsBind(errors as AxiosError);
    },
  });

  const onSubmit = (values: RegisterSchema) => {
    console.log(values, "values");
    const loadingToast = toast.loading("Login .....");
    // @ts-ignore
    register(values, {
      onSuccess: () => {
        toast.dismiss(loadingToast);
        // login(values)
        router.push("admin/visitation-books/home");
      },
      onError: () => {
        toast.dismiss(loadingToast);
      },
    });
  };
  const router = useRouter();
  // function onSubmit() {
  //   router.push("/admin/visitation-books/signin");
  //   // login(values)
  // }
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      closeModal();
    }
  }, [form.formState.isSubmitSuccessful]);
  const [showAdditionnalField, setShowAdditionnalField] = useState(false);
  console.log(form.getValues());
  return (
    <div>
      <Button
        onClick={openModal}
        className="bg-[#f00] h-8 font-[400]  text-white rounded-full"
      >
        Sign Up
      </Button>

      <CustomModal
        widthModal="w-[500px]"
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create an Account"
        description="Already have an account?"
        subDescription="Log in"
      >
        <div className="mt-5">
          <Form {...form}>
            <ScrollArea className="max-h-[1000px]">
              <form
                // @ts-ignore
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <div className="grid grid-cols-1 gap-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-white font-[400]">
                            Name
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
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-white font-[400]">
                            Address
                          </FormLabel>
                          <FormControl>
                            <Input className="input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                  {/* <FormField
                    control={form.control}
                    name="profile_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" text-white font-[400]">
                         Image
                        </FormLabel>
                        <FormControl>
                          <Input type="file" className="input" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="security_question"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-md font-[400]">
                            Security Question
                          </FormLabel>
                          <FormControl>
                            <Select
                              defaultValue={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="input border border-[#9C928F]">
                                <SelectValue placeholder="Add security question" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Questions</SelectLabel>
                                  <SelectItem value="What is your birthday?">
                                    What is your birthday?
                                  </SelectItem>
                                  <SelectItem value="What is your favourite color?">
                                    What is your favourite color?
                                  </SelectItem>
                                  <SelectItem value="Name of your pet?">
                                    Name of your pet?
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="security_answer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" text-white font-[400]">
                            Answer
                          </FormLabel>
                          <FormControl>
                            <Input className="input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-[400]">
                            Confirm Password
                          </FormLabel>
                          <FormControl>
                            <PasswordInput className="input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {showAdditionnalField && (
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name_funeral_home"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-[400]">
                              Name of funeral home
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white font-[400]">
                              Phone number
                            </FormLabel>
                            <FormControl>
                              <Input className="input" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                </div>

                <Checkbox
                  className="bg-white"
                  onClick={() => setShowAdditionnalField(!showAdditionnalField)}
                />

                <div className="flex  justify-between items-center  gap-4 pt-5">
                  <Link href="" className="text-white underline">
                    log in instead
                  </Link>
                  <Button
                    className="bg-[#f00]  rounded-full"
                    disabled={isPending}
                  >
                    {isPending && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create an Account
                  </Button>
                </div>
              </form>
            </ScrollArea>
          </Form>
        </div>
      </CustomModal>
    </div>
  );
}
