"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AdminHeader({ email }: { email: string }) {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{email}</span>
        <button onClick={handleSignOut}
          className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted">
          Sign out
        </button>
      </div>
    </header>
  );
}
