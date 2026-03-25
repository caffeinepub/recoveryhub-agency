import { BarChart2, Download } from "lucide-react";

const reports = [
  { bank: "FNB", cases: 84, rate: 92, revenue: "R 99,700", barW: 92 },
  { bank: "ABSA", cases: 65, rate: 88, revenue: "R 75,100", barW: 88 },
  { bank: "Standard Bank", cases: 51, rate: 85, revenue: "R 61,400", barW: 85 },
  { bank: "Nedbank", cases: 38, rate: 79, revenue: "R 46,500", barW: 79 },
  { bank: "Capitec", cases: 29, rate: 75, revenue: "R 34,800", barW: 75 },
  { bank: "Investec", cases: 17, rate: 94, revenue: "R 57,000", barW: 94 },
];

export default function Reports() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Reports</h2>
          <p className="text-sm text-muted-foreground">
            Performance reports per bank/client
          </p>
        </div>
        <div className="flex gap-2">
          <select className="bg-muted border-0 rounded-lg px-3 py-2 text-sm outline-none">
            <option>Q1 2026</option>
            <option>Q4 2025</option>
            <option>Q3 2025</option>
          </select>
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-card px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted"
          >
            <Download size={15} /> Export PDF
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Cases Handled", value: "284" },
          { label: "Avg Recovery Rate", value: "85.5%" },
          { label: "Total Revenue", value: "R 374,500" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-card rounded-xl border border-border p-5 text-center"
          >
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Per bank */}
      <div className="bg-card rounded-xl border border-border">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-border">
          <BarChart2 size={15} className="text-primary" />
          <h3 className="font-semibold text-sm">Performance by Bank/Client</h3>
        </div>
        <div className="p-5 space-y-5">
          {reports.map((r) => (
            <div key={r.bank}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="font-medium text-sm">{r.bank}</span>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{r.cases} cases</span>
                  <span className="text-green-600 font-medium">
                    {r.rate}% recovery
                  </span>
                  <span className="font-semibold text-foreground">
                    {r.revenue}
                  </span>
                </div>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${r.barW}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
