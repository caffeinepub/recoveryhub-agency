import {
  Activity,
  DollarSign,
  FileText,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import Badge from "../components/Badge";
import StatCard from "../components/StatCard";

const guards = [
  {
    id: "G001",
    name: "James Mokoena",
    bank: "FNB",
    status: "On Duty",
    rating: 5,
  },
  {
    id: "G002",
    name: "Lerato Dlamini",
    bank: "ABSA",
    status: "On Duty",
    rating: 4,
  },
  {
    id: "G003",
    name: "Thabo Nkosi",
    bank: "Standard Bank",
    status: "Off Duty",
    rating: 4,
  },
  {
    id: "G004",
    name: "Priya Pillay",
    bank: "Nedbank",
    status: "Active",
    rating: 5,
  },
  {
    id: "G005",
    name: "Ahmed Hassan",
    bank: "Capitec",
    status: "On Duty",
    rating: 3,
  },
];

const uploads = [
  {
    id: "C2401",
    guard: "James Mokoena",
    bank: "FNB",
    desc: "Vehicle Repossession",
    status: "Approved",
    date: "2026-03-18",
  },
  {
    id: "C2402",
    guard: "Lerato Dlamini",
    bank: "ABSA",
    desc: "Asset Recovery",
    status: "Pending",
    date: "2026-03-19",
  },
  {
    id: "C2403",
    guard: "Thabo Nkosi",
    bank: "Standard Bank",
    desc: "Debt Recovery",
    status: "Approved",
    date: "2026-03-19",
  },
  {
    id: "C2404",
    guard: "Priya Pillay",
    bank: "Nedbank",
    desc: "Vehicle Repossession",
    status: "Rejected",
    date: "2026-03-20",
  },
  {
    id: "C2405",
    guard: "Ahmed Hassan",
    bank: "Capitec",
    desc: "Asset Recovery",
    status: "Pending",
    date: "2026-03-21",
  },
];

const activity = [
  {
    id: "act1",
    text: "James Mokoena completed Case #C2401",
    time: "2 min ago",
  },
  { id: "act2", text: "New invoice generated for FNB", time: "15 min ago" },
  { id: "act3", text: "Lerato Dlamini checked in at 07:45", time: "1 hr ago" },
  { id: "act4", text: "Query #Q012 marked as resolved", time: "2 hrs ago" },
  {
    id: "act5",
    text: "Guard Ahmed Hassan assigned to Capitec",
    time: "3 hrs ago",
  },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground">
          RecoveryHub Agency Dashboard
        </h2>
        <p className="text-sm text-muted-foreground">Overview — March 2026</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Cases"
          value="284"
          sub="+12 this week"
          trend="up"
          icon={<FileText size={18} />}
        />
        <StatCard
          title="Active Guards"
          value="47"
          sub="38 on duty today"
          icon={<Users size={18} />}
          color="bg-blue-100 text-blue-700"
        />
        <StatCard
          title="Revenue This Month"
          value="R145,200"
          sub="+8.4% vs last month"
          trend="up"
          icon={<DollarSign size={18} />}
          color="bg-green-100 text-green-700"
        />
        <StatCard
          title="Pending Queries"
          value="12"
          sub="3 high priority"
          trend="down"
          icon={<MessageCircle size={18} />}
          color="bg-orange-100 text-orange-700"
        />
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-sm">Guard Overview</h3>
            <span className="text-xs text-muted-foreground">5 of 47</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Guard
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Bank
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Status
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {guards.map((g) => (
                  <tr
                    key={g.id}
                    className="border-t border-border hover:bg-muted/30"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                          {g.name[0]}
                        </div>
                        <span className="font-medium">{g.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {g.bank}
                    </td>
                    <td className="px-4 py-3">
                      <Badge status={g.status} />
                    </td>
                    <td className="px-4 py-3 text-yellow-500">
                      {"★".repeat(g.rating)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-sm">Recent Case Uploads</h3>
            <span className="text-xs text-muted-foreground">5 of 284</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Case ID
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Client
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Status
                  </th>
                  <th className="text-left px-4 py-2 text-xs text-muted-foreground font-medium">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploads.map((u) => (
                  <tr
                    key={u.id}
                    className="border-t border-border hover:bg-muted/30"
                  >
                    <td className="px-4 py-3 font-mono text-xs font-medium">
                      {u.id}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {u.bank}
                    </td>
                    <td className="px-4 py-3">
                      <Badge status={u.status} />
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {u.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Activity + Query Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border flex items-center gap-2">
            <Activity size={15} className="text-primary" />
            <h3 className="font-semibold text-sm">Daily Activity Feed</h3>
          </div>
          <div className="divide-y divide-border">
            {activity.map((a) => (
              <div key={a.id} className="px-5 py-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  <TrendingUp size={12} />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-semibold text-sm">Query Management Summary</h3>
          </div>
          <div className="p-5 space-y-4">
            {[
              {
                label: "Resolved",
                count: 48,
                total: 60,
                color: "bg-green-500",
              },
              {
                label: "In Progress",
                count: 9,
                total: 60,
                color: "bg-blue-500",
              },
              { label: "Pending", count: 3, total: 60, color: "bg-red-500" },
            ].map((q) => (
              <div key={q.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{q.label}</span>
                  <span className="font-semibold">{q.count}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${q.color} rounded-full`}
                    style={{ width: `${(q.count / q.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-border text-sm flex justify-between">
              <span className="text-muted-foreground">Total Queries</span>
              <span className="font-bold text-foreground">60</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
