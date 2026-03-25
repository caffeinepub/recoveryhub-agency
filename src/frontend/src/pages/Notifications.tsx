import {
  AlertTriangle,
  Bell,
  CheckCheck,
  CheckCircle,
  Info,
} from "lucide-react";
import { useState } from "react";

const all = [
  {
    id: 1,
    type: "info",
    title: "New case uploaded",
    msg: "James Mokoena uploaded Case #C2412",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "success",
    title: "Invoice paid",
    msg: "FNB settled Invoice INV-2601 (R48,500)",
    time: "1 hr ago",
    read: false,
  },
  {
    id: 3,
    type: "warning",
    title: "Overdue invoice",
    msg: "Standard Bank INV-2603 is overdue by 6 days",
    time: "2 hrs ago",
    read: false,
  },
  {
    id: 4,
    type: "info",
    title: "Guard checked in",
    msg: "Ahmed Hassan checked in at 07:30",
    time: "3 hrs ago",
    read: true,
  },
  {
    id: 5,
    type: "success",
    title: "Query resolved",
    msg: "Query #Q003 has been marked as resolved",
    time: "5 hrs ago",
    read: true,
  },
  {
    id: 6,
    type: "warning",
    title: "Guard absent",
    msg: "Sipho Zulu did not check in today",
    time: "6 hrs ago",
    read: true,
  },
  {
    id: 7,
    type: "info",
    title: "New client onboarded",
    msg: "TymeBank has been added as a client",
    time: "1 day ago",
    read: true,
  },
  {
    id: 8,
    type: "success",
    title: "Case approved",
    msg: "Case #C2409 has been approved by FNB",
    time: "1 day ago",
    read: true,
  },
  {
    id: 9,
    type: "info",
    title: "Monthly report ready",
    msg: "February 2026 report is ready to download",
    time: "2 days ago",
    read: true,
  },
  {
    id: 10,
    type: "warning",
    title: "Storage capacity",
    msg: "Warehouse A is at 80% capacity",
    time: "3 days ago",
    read: true,
  },
];

const icons: Record<string, React.ElementType> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
};
const iconColors: Record<string, string> = {
  info: "text-blue-500 bg-blue-50",
  success: "text-green-500 bg-green-50",
  warning: "text-orange-500 bg-orange-50",
};

export default function Notifications() {
  const [tab, setTab] = useState("All");

  const filtered =
    tab === "Unread"
      ? all.filter((n) => !n.read)
      : tab === "Read"
        ? all.filter((n) => n.read)
        : all;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            {all.filter((n) => !n.read).length} unread notifications
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 border border-border bg-card px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted"
        >
          <CheckCheck size={15} /> Mark all read
        </button>
      </div>

      <div className="flex gap-2">
        {["All", "Unread", "Read"].map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border divide-y divide-border">
        {filtered.map((n) => {
          const Icon = icons[n.type];
          return (
            <div
              key={n.id}
              className={`flex items-start gap-4 px-5 py-4 hover:bg-muted/30 transition-colors ${
                !n.read ? "bg-primary/5" : ""
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconColors[n.type]}`}
              >
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p
                    className={`text-sm font-medium ${!n.read ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {n.title}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {n.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{n.msg}</p>
              </div>
              {!n.read && (
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
