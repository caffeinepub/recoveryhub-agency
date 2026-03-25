import { Plus, Search, Upload } from "lucide-react";
import Badge from "../components/Badge";

const cases = [
  {
    id: "C2401",
    guard: "James Mokoena",
    bank: "FNB",
    desc: "Vehicle Repossession – Toyota Hilux",
    status: "Approved",
    date: "2026-03-18",
  },
  {
    id: "C2402",
    guard: "Lerato Dlamini",
    bank: "ABSA",
    desc: "Asset Recovery – BMW 3 Series",
    status: "Pending",
    date: "2026-03-19",
  },
  {
    id: "C2403",
    guard: "Thabo Nkosi",
    bank: "Standard Bank",
    desc: "Debt Recovery – Commercial",
    status: "Approved",
    date: "2026-03-19",
  },
  {
    id: "C2404",
    guard: "Priya Pillay",
    bank: "Nedbank",
    desc: "Vehicle Repossession – VW Polo",
    status: "Rejected",
    date: "2026-03-20",
  },
  {
    id: "C2405",
    guard: "Ahmed Hassan",
    bank: "Capitec",
    desc: "Asset Recovery – Laptop & Equipment",
    status: "Pending",
    date: "2026-03-21",
  },
  {
    id: "C2406",
    guard: "Nomvula Khumalo",
    bank: "ABSA",
    desc: "Vehicle Repossession – Ford Ranger",
    status: "Approved",
    date: "2026-03-21",
  },
  {
    id: "C2407",
    guard: "Sipho Zulu",
    bank: "FNB",
    desc: "Debt Recovery – Residential",
    status: "Pending",
    date: "2026-03-22",
  },
  {
    id: "C2408",
    guard: "David Botha",
    bank: "Investec",
    desc: "Asset Recovery – Office Furniture",
    status: "Approved",
    date: "2026-03-22",
  },
  {
    id: "C2409",
    guard: "Fatima Osman",
    bank: "Standard Bank",
    desc: "Vehicle Repossession – Audi A4",
    status: "Approved",
    date: "2026-03-23",
  },
  {
    id: "C2410",
    guard: "Rory van der Merwe",
    bank: "Nedbank",
    desc: "Debt Recovery – Micro Finance",
    status: "Rejected",
    date: "2026-03-23",
  },
  {
    id: "C2411",
    guard: "Zanele Moyo",
    bank: "Capitec",
    desc: "Vehicle Repossession – Hyundai i20",
    status: "Pending",
    date: "2026-03-24",
  },
  {
    id: "C2412",
    guard: "Bongani Shabalala",
    bank: "FNB",
    desc: "Asset Recovery – Industrial Equipment",
    status: "Approved",
    date: "2026-03-24",
  },
];

const pages = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "...", value: -1 },
  { label: "24", value: 24 },
];

export default function CaseUploads() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Case Uploads</h2>
          <p className="text-sm text-muted-foreground">
            Daily case upload records and status tracking
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          <Upload size={15} /> New Case Upload
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 flex-1">
            <Search size={14} className="text-muted-foreground" />
            <input
              placeholder="Search cases..."
              className="bg-transparent text-sm outline-none w-full"
            />
          </div>
          <input
            type="date"
            defaultValue="2026-03-24"
            className="bg-muted border-0 rounded-lg px-3 py-2 text-sm outline-none"
          />
          {["All", "Approved", "Pending", "Rejected"].map((f) => (
            <button
              type="button"
              key={f}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
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
                  "Case ID",
                  "Guard Name",
                  "Client/Bank",
                  "Description",
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
              {cases.map((c) => (
                <tr
                  key={c.id}
                  className="border-t border-border hover:bg-muted/30"
                >
                  <td className="px-4 py-3 font-mono text-xs font-medium">
                    {c.id}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{c.guard}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {c.bank}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">
                    {c.desc}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={c.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap text-xs">
                    {c.date}
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
                        className="text-xs px-2.5 py-1 rounded bg-muted text-muted-foreground hover:bg-muted/80"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-muted-foreground">
          <span>Showing 12 of 284 cases</span>
          <div className="flex gap-1">
            {pages.map((p) => (
              <button
                type="button"
                key={p.label}
                className={`w-7 h-7 rounded flex items-center justify-center text-xs ${
                  p.value === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
