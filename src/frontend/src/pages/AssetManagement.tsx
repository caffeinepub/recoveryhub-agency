import { Plus, Search } from "lucide-react";
import Badge from "../components/Badge";

const assets = [
  {
    id: "A001",
    vehicle: "Toyota Hilux 2022",
    reg: "GP 12 AB",
    case: "C2401",
    client: "FNB",
    location: "Warehouse A",
    date: "2026-03-18",
    status: "In Storage",
  },
  {
    id: "A002",
    vehicle: "BMW 320i 2021",
    reg: "WC 45 CD",
    case: "C2402",
    client: "ABSA",
    location: "Warehouse B",
    date: "2026-03-19",
    status: "Pending",
  },
  {
    id: "A003",
    vehicle: "VW Polo 2020",
    reg: "KZN 78 EF",
    case: "C2404",
    client: "Nedbank",
    location: "Lot C",
    date: "2026-03-20",
    status: "Released",
  },
  {
    id: "A004",
    vehicle: "Ford Ranger 2023",
    reg: "GP 11 GH",
    case: "C2406",
    client: "ABSA",
    location: "Warehouse A",
    date: "2026-03-21",
    status: "In Storage",
  },
  {
    id: "A005",
    vehicle: "Audi A4 2021",
    reg: "WC 22 IJ",
    case: "C2409",
    client: "Standard Bank",
    location: "Warehouse B",
    date: "2026-03-23",
    status: "In Storage",
  },
  {
    id: "A006",
    vehicle: "Hyundai i20 2022",
    reg: "GP 33 KL",
    case: "C2411",
    client: "Capitec",
    location: "Lot D",
    date: "2026-03-24",
    status: "Pending",
  },
  {
    id: "A007",
    vehicle: "Kia Sportage 2020",
    reg: "EC 55 MN",
    case: "C2390",
    client: "Nedbank",
    location: "Warehouse A",
    date: "2026-03-10",
    status: "Released",
  },
  {
    id: "A008",
    vehicle: "Mercedes C200 2022",
    reg: "GP 66 OP",
    case: "C2380",
    client: "Investec",
    location: "Secure Lot",
    date: "2026-03-05",
    status: "In Storage",
  },
  {
    id: "A009",
    vehicle: "Nissan NP200 2019",
    reg: "KZN 99 QR",
    case: "C2370",
    client: "FNB",
    location: "Warehouse A",
    date: "2026-02-28",
    status: "Released",
  },
  {
    id: "A010",
    vehicle: "Renault Kwid 2021",
    reg: "NW 44 ST",
    case: "C2360",
    client: "Capitec",
    location: "Lot C",
    date: "2026-02-20",
    status: "In Storage",
  },
];

export default function AssetManagement() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Asset Management</h2>
          <p className="text-sm text-muted-foreground">
            Track repossessed vehicles and assets
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          <Plus size={15} /> Add Asset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "In Storage", count: 5, color: "text-blue-600 bg-blue-50" },
          { label: "Pending", count: 2, color: "text-yellow-600 bg-yellow-50" },
          { label: "Released", count: 3, color: "text-green-600 bg-green-50" },
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
              placeholder="Search assets..."
              className="bg-transparent text-sm outline-none w-full"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {[
                  "Asset ID",
                  "Vehicle",
                  "Registration",
                  "Case #",
                  "Client",
                  "Location",
                  "Recovery Date",
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
              {assets.map((a) => (
                <tr
                  key={a.id}
                  className="border-t border-border hover:bg-muted/30"
                >
                  <td className="px-4 py-3 font-mono text-xs">{a.id}</td>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    {a.vehicle}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{a.reg}</td>
                  <td className="px-4 py-3 font-mono text-xs">{a.case}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {a.client}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {a.location}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                    {a.date}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={a.status} />
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
                        Release
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
