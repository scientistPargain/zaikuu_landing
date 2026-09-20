"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DeleteAccountConfirmPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletionDate, setDeletionDate] = useState<string>("");
  const router = useRouter();
  const supabase = createClient();

  async function handleConfirmDeletion() {
    setLoading(true);
    setError(null);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError("You must be logged in."); setLoading(false); return; }
    const scheduledFor = new Date();
    scheduledFor.setDate(scheduledFor.getDate() + 30);
    const { error: insertError } = await supabase.from("deletion_requests").insert({
      user_id: user.id, type: "account", status: "pending", scheduled_for: scheduledFor.toISOString(),
    });
    if (insertError) { setError(insertError.message); setLoading(false); return; }
    setDeletionDate(scheduledFor.toLocaleDateString());
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
          <h2 className="mt-4 text-xl font-semibold text-green-800">Deletion Request Submitted</h2>
          <p className="mt-2 text-green-700">
            Your account will be permanently deleted on{" "}
            {deletionDate}.
            You can cancel this request by contacting support within 30 days.
          </p>
          <button onClick={() => router.push("/")} className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Confirm Account Deletion</h1>
      <div className="mt-8 space-y-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h2 className="text-lg font-semibold text-red-800">Warning: This action is irreversible</h2>
          <p className="mt-2 text-red-700">
            Your account and all associated data will be permanently deleted
            after 30 days. During this period, you may contact support to
            cancel the deletion request.
          </p>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button onClick={handleConfirmDeletion} disabled={loading}
          className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50">
          {loading ? "Processing..." : "Confirm Deletion"}
        </button>
      </div>
    </div>
  );
}
