import { Building2, Mail, Phone, Plus } from "lucide-react";

const clients = [
  {
    name: "FNB",
    full: "First National Bank",
    contact: "Thandi Mokoena",
    phone: "011 123 4567",
    email: "thandi@fnb.co.za",
    contracts: 8,
    status: "Active",
  },
  {
    name: "ABSA",
    full: "Absa Bank Limited",
    contact: "Sipho Dlamini",
    phone: "011 234 5678",
    email: "sipho@absa.co.za",
    contracts: 6,
    status: "Active",
  },
  {
    name: "STD",
    full: "Standard Bank",
    contact: "Ravi Naidoo",
    phone: "011 345 6789",
    email: "ravi@standardbank.co.za",
    contracts: 5,
    status: "Active",
  },
  {
    name: "NED",
    full: "Nedbank",
    contact: "Amanda van Wyk",
    phone: "011 456 7890",
    email: "amanda@nedbank.co.za",
    contracts: 4,
    status: "Active",
  },
  {
    name: "CAP",
    full: "Capitec Bank",
    contact: "Lungelo Zulu",
    phone: "021 567 8901",
    email: "lungelo@capitec.co.za",
    contracts: 3,
    status: "Active",
  },
  {
    name: "INV",
    full: "Investec Bank",
    contact: "Sarah Botha",
    phone: "011 678 9012",
    email: "sarah@investec.co.za",
    contracts: 2,
    status: "Active",
  },
  {
    name: "AFR",
    full: "African Bank",
    contact: "Moses Khumalo",
    phone: "012 789 0123",
    email: "moses@africanbank.co.za",
    contracts: 2,
    status: "Active",
  },
  {
    name: "TYM",
    full: "TymeBank",
    contact: "Fatima Hassan",
    phone: "010 890 1234",
    email: "fatima@tyme.co.za",
    contracts: 1,
    status: "Active",
  },
];

const colors = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-600",
  "bg-purple-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-indigo-500",
];

export default function BankClients() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Bank & Clients</h2>
          <p className="text-sm text-muted-foreground">
            Manage client relationships and contracts
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          <Plus size={15} /> Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.map((c, i) => (
          <div
            key={c.name}
            className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 rounded-lg ${colors[i]} text-white font-bold text-sm flex items-center justify-center`}
              >
                {c.name}
              </div>
              <div>
                <p className="font-semibold text-sm">{c.full}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                  {c.status}
                </span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 size={12} />
                <span>{c.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} />
                <span>{c.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} />
                <span>{c.email}</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {c.contracts} active contracts
              </span>
              <button
                type="button"
                className="text-xs px-2.5 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
