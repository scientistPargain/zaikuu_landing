export const metadata = { title: "Admin Dashboard -- ZaiKuu" };

const stats = [
  { label: "Total Users", value: "--", description: "Registered users" },
  { label: "Active Orders", value: "--", description: "Currently active" },
  { label: "Pending Deletions", value: "--", description: "Awaiting processing" },
  { label: "Vendors", value: "--", description: "Active vendors" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="mt-1 text-sm text-muted-foreground">Overview of your platform.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
