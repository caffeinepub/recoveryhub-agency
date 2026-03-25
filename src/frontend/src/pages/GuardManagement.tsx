import { Plus, Search } from "lucide-react";
import Badge from "../components/Badge";

const guards = [
  {
    id: "G001",
    name: "James Mokoena",
    bank: "FNB",
    status: "On Duty",
    contact: "071 234 5678",
    rating: 5,
    joined: "2022-01-15",
  },
  {
    id: "G002",
    name: "Lerato Dlamini",
    bank: "ABSA",
    status: "On Duty",
    contact: "082 345 6789",
    rating: 4,
    joined: "2021-06-10",
  },
  {
    id: "G003",
    name: "Thabo Nkosi",
    bank: "Standard Bank",
    status: "Off Duty",
    contact: "063 456 7890",
    rating: 4,
    joined: "2023-03-20",
  },
  {
    id: "G004",
    name: "Priya Pillay",
    bank: "Nedbank",
    status: "Active",
    contact: "076 567 8901",
    rating: 5,
    joined: "2020-11-05",
  },
  {
    id: "G005",
    name: "Ahmed Hassan",
    bank: "Capitec",
    status: "On Duty",
    contact: "083 678 9012",
    rating: 3,
    joined: "2023-08-12",
  },
  {
    id: "G006",
    name: "Sipho Zulu",
    bank: "FNB",
    status: "Inactive",
    contact: "071 789 0123",
    rating: 2,
    joined: "2021-02-28",
  },
  {
    id: "G007",
    name: "Nomvula Khumalo",
    bank: "ABSA",
    status: "On Duty",
    contact: "082 890 1234",
    rating: 5,
    joined: "2022-09-14",
  },
  {
    id: "G008",
    name: "David Botha",
    bank: "Investec",
    status: "Active",
    contact: "063 901 2345",
    rating: 4,
    joined: "2023-01-07",
  },
  {
    id: "G009",
    name: "Fatima Osman",
    bank: "Standard Bank",
    status: "Off Duty",
    contact: "076 012 3456",
    rating: 4,
    joined: "2021-12-19",
  },
  {
    id: "G010",
    name: "Rory van der Merwe",
    bank: "Nedbank",
    status: "On Duty",
    contact: "083 123 4567",
    rating: 3,
    joined: "2022-05-30",
  },
  {
    id: "G011",
    name: "Zanele Moyo",
    bank: "Capitec",
    status: "Active",
    contact: "071 234 5670",
    rating: 5,
    joined: "2020-07-22",
  },
  {
    id: "G012",
    name: "Bongani Shabalala",
    bank: "FNB",
    status: "On Duty",
    contact: "082 345 6780",
    rating: 4,
    joined: "2023-04-17",
  },
];

export default function GuardManagement() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Guard Management</h2>
          <p className="text-sm text-muted-foreground">
            Manage all agency guards and their assignments
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          <Plus size={15} /> Add Guard
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 flex-1">
            <Search size={14} className="text-muted-foreground" />
            <input
              placeholder="Search guards..."
              className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-2 text-xs">
            {["All", "On Duty", "Off Duty", "Active", "Inactive"].map((f) => (
              <button
                type="button"
                key={f}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  f === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {[
                  "Guard ID",
                  "Name",
                  "Assigned Bank",
                  "Status",
                  "Contact",
                  "Performance",
                  "Join Date",
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
              {guards.map((g) => (
                <tr
                  key={g.id}
                  className="border-t border-border hover:bg-muted/30"
                >
                  <td className="px-4 py-3 font-mono text-xs">{g.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                        {g.name[0]}
                      </div>
                      <span className="font-medium whitespace-nowrap">
                        {g.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {g.bank}
                  </td>
                  <td className="px-4 py-3">
                    <Badge status={g.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {g.contact}
                  </td>
                  <td className="px-4 py-3 text-yellow-500 whitespace-nowrap">
                    {"★".repeat(g.rating)}
                    {"☆".repeat(5 - g.rating)}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                    {g.joined}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-xs px-2.5 py-1 rounded bg-muted text-muted-foreground hover:bg-muted/80"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-muted-foreground">
          <span>Showing 12 of 47 guards</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((p) => (
              <button
                type="button"
                key={p}
                className={`w-7 h-7 rounded flex items-center justify-center ${
                  p === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
