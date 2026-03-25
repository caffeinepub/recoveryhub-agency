import { Download, Plus } from "lucide-react";
import Badge from "../components/Badge";

const invoices = [
  {
    num: "INV-2601",
    client: "FNB",
    amount: "R 48,500",
    period: "Feb 2026",
    due: "2026-03-15",
    status: "Paid",
  },
  {
    num: "INV-2602",
    client: "ABSA",
    amount: "R 36,200",
    period: "Feb 2026",
    due: "2026-03-15",
    status: "Paid",
  },
  {
    num: "INV-2603",
    client: "Standard Bank",
    amount: "R 29,800",
    period: "Feb 2026",
    due: "2026-03-15",
    status: "Overdue",
  },
  {
    num: "INV-2604",
    client: "Nedbank",
    amount: "R 22,400",
    period: "Feb 2026",
    due: "2026-03-20",
    status: "Paid",
  },
  {
    num: "INV-2605",
    client: "Capitec",
    amount: "R 18,600",
    period: "Feb 2026",
    due: "2026-03-20",
    status: "Unpaid",
  },
  {
    num: "INV-2606",
    client: "Investec",
    amount: "R 55,000",
    period: "Feb 2026",
    due: "2026-03-25",
    status: "Paid",
  },
  {
    num: "INV-2607",
    client: "FNB",
    amount: "R 51,200",
    period: "Mar 2026",
    due: "2026-04-15",
    status: "Unpaid",
  },
  {
    num: "INV-2608",
    client: "ABSA",
    amount: "R 38,900",
    period: "Mar 2026",
    due: "2026-04-15",
    status: "Unpaid",
  },
  {
    num: "INV-2609",
    client: "Standard Bank",
    amount: "R 31,600",
    period: "Mar 2026",
    due: "2026-04-15",
    status: "Unpaid",
  },
  {
    num: "INV-2610",
    client: "Nedbank",
    amount: "R 24,100",
    period: "Mar 2026",
    due: "2026-04-20",
    status: "Unpaid",
  },
];

export default function Billing() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Billing</h2>
          <p className="text-sm text-muted-foreground">
            Invoice management and payment tracking
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-card px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted"
          >
            <Download size={15} /> Export
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
          >
            <Plus size={15} /> New Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Billed", value: "R 580,000", color: "bg-card" },
          { label: "Collected", value: "R 412,000", color: "bg-green-50" },
          { label: "Outstanding", value: "R 168,000", color: "bg-red-50" },
        ].map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border border-border p-5 ${s.color}`}
          >
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-xl font-bold mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {[
                "Invoice #",
                "Client/Bank",
                "Amount",
                "Period",
                "Due Date",
                "Status",
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
            {invoices.map((inv) => (
              <tr
                key={inv.num}
                className="border-t border-border hover:bg-muted/30"
              >
                <td className="px-4 py-3 font-mono text-xs font-medium">
                  {inv.num}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{inv.client}</td>
                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  {inv.amount}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {inv.period}
                </td>
                <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                  {inv.due}
                </td>
                <td className="px-4 py-3">
                  <Badge status={inv.status} />
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
                      Pay
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
