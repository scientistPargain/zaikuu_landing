import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Delete Data -- ZaiKuu",
};

export default async function DeleteDataPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { redirect("/login?redirect=/delete-data"); }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Delete Data</h1>
      <p className="mt-2 text-sm text-gray-500">Please read carefully before proceeding.</p>
      <div className="mt-8 space-y-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <h2 className="text-lg font-semibold text-amber-800">What happens when you request data deletion</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-amber-700">
            <li>Your personal data will be permanently removed after 30 days</li>
            <li>Your account will remain active but anonymized</li>
            <li>Order history will be stripped of personal identifiers</li>
            <li>Chat messages will be anonymized</li>
            <li>Your profile information will be cleared</li>
            <li>This action can be cancelled within 30 days by contacting support</li>
          </ul>
        </div>
        <p className="text-gray-600">
          If you want to delete your entire account, use the{" "}
          <Link href="/delete-account" className="text-[#FF6B35] underline">Delete Account</Link> option instead.
        </p>
        <Link href="/delete-data/confirm"
          className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700">
          Continue to Data Deletion
        </Link>
      </div>
    </div>
  );
}
