import { Suspense } from "react";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Sign In -- ZaiKuu",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Suspense
        fallback={
          <div className="text-sm text-muted-foreground">Loading...</div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
