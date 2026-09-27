export const metadata = { title: "Deletions -- ZaiKuu Admin" };
export default function AdminDeletionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Deletion Requests</h1>
      <p className="mt-1 text-sm text-muted-foreground">Process account and data deletion requests. Coming soon.</p>
      <div className="mt-6 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-border">
        <p className="text-sm text-muted-foreground">Deletion request queue coming in a future update.</p>
      </div>
    </div>
  );
}
