import { Plus, Search } from "lucide-react";
import Badge from "../components/Badge";

const queries = [
  {
    id: "Q001",
    title: "Guard deployment scheduling conflict",
    by: "Sarah Admin",
    priority: "High",
    status: "Open",
    date: "2026-03-18",
  },
  {
    id: "Q002",
    title: "Invoice discrepancy – FNB March",
    by: "John Billing",
    priority: "Medium",
    status: "In Progress",
    date: "2026-03-17",
  },
  {
    id: "Q003",
    title: "Asset storage capacity",
    by: "Lerato Dlamini",
    priority: "Low",
    status: "Resolved",
    date: "2026-03-15",
  },
  {
    id: "Q004",
    title: "Attendance system not syncing",
    by: "IT Support",
    priority: "High",
    status: "In Progress",
    date: "2026-03-19",
  },
  {
    id: "Q005",
    title: "New client onboarding – Capitec",
    by: "Sarah Admin",
    priority: "Medium",
    status: "Resolved",
    date: "2026-03-10",
  },
  {
    id: "Q006",
    title: "Guard uniform replacement",
    by: "HR Dept",
    priority: "Low",
    status: "Open",
    date: "2026-03-20",
  },
  {
    id: "Q007",
    title: "Case upload portal timeout",
    by: "IT Support",
    priority: "High",
    status: "In Progress",
    date: "2026-03-21",
  },
  {
    id: "Q008",
    title: "Monthly report template update",
    by: "Reports Team",
    priority: "Low",
    status: "Resolved",
    date: "2026-03-08",
  },
  {
    id: "Q009",
    title: "ABSA contact detail change",
    by: "John Billing",
    priority: "Medium",
    status: "Resolved",
    date: "2026-03-05",
  },
  {
    id: "Q010",
    title: "Overtime pay calculation review",
    by: "HR Dept",
    priority: "Medium",
    status: "Open",
    date: "2026-03-22",
  },
  {
    id: "Q011",
    title: "Vehicle tracker malfunctioning",
    by: "Ops Team",
    priority: "High",
    status: "Open",
    date: "2026-03-23",
  },
  {
    id: "Q012",
    title: "Billing cycle date change request",
    by: "Sarah Admin",
    priority: "Low",
    status: "Resolved",
    date: "2026-03-01",
  },
];

export default function QueryManagement() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Query Management</h2>
          <p className="text-sm text-muted-foreground">
            Track and resolve agency queries
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          <Plus size={15} /> New Query
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Open", count: 4, color: "text-blue-600 bg-blue-50" },
          {
            label: "In Progress",
            count: 3,
            color: "text-purple-600 bg-purple-50",
          },
          { label: "Resolved", count: 5, color: "text-green-600 bg-green-50" },
        ].map((s) => (
          <div
            key={s.label}
            className={`rounded-xl p-4 text-center ${s.color} border border-current/20`}
          >
            <p className="text-2xl font-bold">{s.count}</p>
            <p className="text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 flex-1">
            <Search size={14} className="text-muted-foreground" />
            <input
              placeholder="Search queries..."
              className="bg-transparent text-sm outline-none w-full"
            />
          </div>
          {["All", "Open", "In Progress", "Resolved"].map((f) => (
            <button
              type="button"
              key={f}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                f === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {[
                  "Query ID",
                  "Title",
                  "Submitted By",
                  "Priority",
                  "Status",
                  "Date",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs text-muted-foreground font-medium whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queries.map((q) => (
                <tr
                  key={q.id}
                  className="border-t border-border hover:bg-muted/30"
                >
                  <td className="px-4 py-3 font-mono text-xs font-medium">
                    {q.id}
                  </td>
                  <td className="px-4 py-3 max-w-xs">{q.title}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {q.by}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={q.priority} />
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={q.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                    {q.date}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="text-xs px-2.5 py-1 rounded bg-green-50 text-green-700 hover:bg-green-100"
                      >
                        Resolve
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
