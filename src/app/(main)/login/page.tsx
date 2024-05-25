"use client";
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { Input } from "@/components/ui/input";
import PasswordField from "@/components/ui/password-field";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState, useTransition } from "react";

export default function Login() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setError("");
    startTransition(() => {
      login(formData).then((data) => {
        setError(data?.error);
      });
    });
  };
  return (
    <div className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Input
              className="pl-10"
              name="email"
              placeholder="Email address"
              type="email"
            />
            <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4" />
          </div>
          <PasswordField />
          <div className="flex items-center justify-between">
            <Link
              className="text-sm font-medium text-gray-900 underline transition-colors hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:text-gray-50 dark:hover:text-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
              href="#"
            >
              Forgot your password?
            </Link>
            <Link
              className="text-sm font-medium text-gray-900 underline transition-colors hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:text-gray-50 dark:hover:text-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
              href="#"
            >
              Not a member? Register
            </Link>
          </div>
          <FormError message={error} />
          <Button
            disabled={isPending}
            className="w-full rounded-md bg-gray-900 py-2 px-4 font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-950"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
