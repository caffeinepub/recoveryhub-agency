import { CalendarDays } from "lucide-react";
import Badge from "../components/Badge";

const records = [
  {
    id: "r01",
    guard: "James Mokoena",
    date: "2026-03-21",
    in: "07:30",
    out: "16:30",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r02",
    guard: "Lerato Dlamini",
    date: "2026-03-21",
    in: "07:45",
    out: "16:45",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r03",
    guard: "Thabo Nkosi",
    date: "2026-03-21",
    in: "—",
    out: "—",
    status: "Absent",
    hours: "0h",
  },
  {
    id: "r04",
    guard: "Priya Pillay",
    date: "2026-03-21",
    in: "08:15",
    out: "17:15",
    status: "Late",
    hours: "9h 00m",
  },
  {
    id: "r05",
    guard: "Ahmed Hassan",
    date: "2026-03-21",
    in: "07:30",
    out: "16:30",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r06",
    guard: "Nomvula Khumalo",
    date: "2026-03-21",
    in: "07:25",
    out: "16:25",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r07",
    guard: "Sipho Zulu",
    date: "2026-03-21",
    in: "—",
    out: "—",
    status: "Absent",
    hours: "0h",
  },
  {
    id: "r08",
    guard: "David Botha",
    date: "2026-03-21",
    in: "07:30",
    out: "16:30",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r09",
    guard: "Fatima Osman",
    date: "2026-03-21",
    in: "08:05",
    out: "17:05",
    status: "Late",
    hours: "9h 00m",
  },
  {
    id: "r10",
    guard: "Rory van der Merwe",
    date: "2026-03-21",
    in: "07:30",
    out: "16:30",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r11",
    guard: "Zanele Moyo",
    date: "2026-03-21",
    in: "07:30",
    out: "16:30",
    status: "Present",
    hours: "9h 00m",
  },
  {
    id: "r12",
    guard: "Bongani Shabalala",
    date: "2026-03-21",
    in: "—",
    out: "—",
    status: "Absent",
    hours: "0h",
  },
];

export default function Attendance() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Attendance</h2>
          <p className="text-sm text-muted-foreground">
            Daily guard attendance tracking
          </p>
        </div>
        <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
          <CalendarDays size={14} className="text-muted-foreground" />
          <input
            type="date"
            defaultValue="2026-03-21"
            className="bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Present", count: 38, color: "text-green-600 bg-green-50" },
          { label: "Absent", count: 5, color: "text-red-600 bg-red-50" },
          { label: "Late", count: 4, color: "text-orange-600 bg-orange-50" },
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

      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {[
                "Guard Name",
                "Date",
                "Check-In",
                "Check-Out",
                "Status",
                "Hours Worked",
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
            {records.map((r) => (
              <tr
                key={r.id}
                className="border-t border-border hover:bg-muted/30"
              >
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  {r.guard}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{r.date}</td>
                <td className="px-4 py-3 font-mono text-xs">{r.in}</td>
                <td className="px-4 py-3 font-mono text-xs">{r.out}</td>
                <td className="px-4 py-3">
                  <Badge status={r.status} />
                </td>
                <td className="px-4 py-3 text-muted-foreground">{r.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
