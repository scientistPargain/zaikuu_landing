import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Delete Account -- ZaiKuu",
};

export default async function DeleteAccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { redirect("/login?redirect=/delete-account"); }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Delete Account</h1>
      <p className="mt-2 text-sm text-muted-foreground">Please read carefully before proceeding.</p>
      <div className="mt-8 space-y-6">
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <h2 className="text-lg font-semibold text-amber-300">What happens when you delete your account</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-amber-200">
            <li>Your account will be deactivated immediately</li>
            <li>All your personal data will be permanently deleted after 30 days</li>
            <li>Your order history will be anonymized</li>
            <li>You will be logged out of all devices</li>
            <li>This action can be cancelled within 30 days by contacting support</li>
          </ul>
        </div>
        <p className="text-muted-foreground">
          If you want to keep your account but remove specific data, consider
          using the <Link href="/delete-data" className="text-primary underline">Delete Data</Link> option instead.
        </p>
        <Link href="/delete-account/confirm"
          className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700">
          Continue to Account Deletion
        </Link>
      </div>
    </div>
  );
}
