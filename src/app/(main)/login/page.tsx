"use client";

import { login } from "@/actions/login";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import PasswordField from "@/components/ui/password-field";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await login(data);
      if (response?.error) {
        toast.error(response.error);
        return;
      }
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your g-suite email and password to sign in.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <Input
              className="rounded-md pl-10 shadow-sm sm:text-sm"
              error={errors.email?.message}
              placeholder="Email address"
              type="email"
              icon={<MailIcon className="h-4 w-4" />}
              {...register("email")}
            />
          </div>
          <PasswordField register={register} errors={errors} />
          <div className="flex items-center justify-between">
            <Link
              className="text-sm font-medium text-gray-900 underline transition-colors hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200"
              href="/reset-password"
            >
              Forgot your password?
            </Link>
            <Link
              className="f text-sm font-medium text-gray-900 underline transition-colors hover:text-gray-800 dark:text-gray-50 dark:hover:text-gray-200"
              href="/registration"
            >
              Not a member? Register
            </Link>
          </div>
          <LoadingButton
            className="w-full"
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}
