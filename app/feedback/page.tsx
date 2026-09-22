"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  { value: "bug", label: "Report a bug" },
  { value: "idea", label: "Feature idea" },
  { value: "general", label: "General feedback" },
  { value: "other", label: "Other" },
] as const;

type Category = (typeof CATEGORIES)[number]["value"];

export default function FeedbackPage() {
  const [category, setCategory] = useState<Category>("general");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserEmail(user?.email ?? null);
    });
  }, []);

  async function handleSubmitFeedback(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { error: insertError } = await supabase.from("feedback").insert({
        user_id: user?.id ?? null,
        category,
        message,
      });
      if (insertError) {
        setError(insertError.message);
        return;
      }
      setSuccess(true);
      setMessage("");
      setCategory("general");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
          <h2 className="text-xl font-semibold text-green-800">
            Feedback submitted
          </h2>
          <p className="mt-2 text-green-700">
            Thanks for taking the time to help us improve.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              Back home
            </Link>
            <button
              onClick={() => setSuccess(false)}
              className="rounded-lg border border-green-300 bg-white px-6 py-2 text-sm font-semibold text-green-700 hover:bg-green-100"
            >
              Submit another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        Share feedback
      </h1>
      <p className="mt-2 text-muted-foreground">
        Tell us what is working, what is broken, or what you would like to see.
      </p>

      <form
        onSubmit={handleSubmitFeedback}
        className="mt-8 space-y-6 rounded-2xl border border-border bg-card p-6"
      >
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-foreground"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="mt-1 block w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your feedback…"
            className="mt-1 block w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
          />
          <p className="mt-1 text-right text-xs text-muted-foreground">
            {message.length} / 5000
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          {userEmail
            ? `Submitting as ${userEmail}`
            : "You are not signed in — this will be submitted anonymously."}
        </p>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-50"
        >
          {loading ? "Submitting…" : "Submit feedback"}
        </button>
      </form>
    </div>
  );
}
