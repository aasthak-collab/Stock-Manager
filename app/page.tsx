const stats = [
  { label: "Total Items", value: "48", sub: "in stock" },
  { label: "Today's Sales", value: "₹12,400", sub: "4 transactions" },
  { label: "Low Stock Alerts", value: "6", sub: "items below threshold" },
  { label: "Pending Payments", value: "₹38,200", sub: "from buyers" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h2 className="text-beige text-2xl font-bold">Dashboard</h2>
        <p className="text-soft text-sm mt-1">
          Overview of your stock and operations
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-primary/10 border border-primary/30 rounded-xl p-5 flex flex-col gap-2"
          >
            <p className="text-soft text-sm">{stat.label}</p>
            <p className="text-beige text-3xl font-bold">{stat.value}</p>
            <p className="text-soft/60 text-xs">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
        <h3 className="text-beige text-lg font-semibold mb-4">
          Recent Activity
        </h3>
        <p className="text-soft/60 text-sm">
          Transactions will appear here once data is connected.
        </p>
      </div>
    </div>
  );
}