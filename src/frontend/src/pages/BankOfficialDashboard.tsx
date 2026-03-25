import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  Bell,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  FileText,
  IndianRupee,
  Landmark,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  TrendingUp,
  User,
  XCircle,
} from "lucide-react";
import { useState } from "react";

type Section =
  | "dashboard"
  | "cases"
  | "recovery"
  | "payments"
  | "fieldreports"
  | "documents"
  | "messages"
  | "profile";

const navItems: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "cases", label: "Assigned Cases", icon: Briefcase },
  { id: "recovery", label: "Recovery Status", icon: TrendingUp },
  { id: "payments", label: "Payment Tracking", icon: IndianRupee },
  { id: "fieldreports", label: "Field Reports", icon: MapPin },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare },
  { id: "profile", label: "My Profile", icon: User },
];

const assignedCases = [
  {
    id: "CASE-001",
    borrower: "Anil Sharma",
    loanType: "Home Loan",
    assigned: "01 Jan 2026",
    outstanding: "₹14.2L",
    status: "Active",
  },
  {
    id: "CASE-002",
    borrower: "Priya Mehta",
    loanType: "Car Loan",
    assigned: "10 Jan 2026",
    outstanding: "₹3.8L",
    status: "Pending",
  },
  {
    id: "CASE-003",
    borrower: "Ramesh Patel",
    loanType: "Business Loan",
    assigned: "15 Jan 2026",
    outstanding: "₹22.5L",
    status: "Escalated",
  },
  {
    id: "CASE-004",
    borrower: "Sunita Verma",
    loanType: "Personal Loan",
    assigned: "20 Jan 2026",
    outstanding: "₹1.9L",
    status: "Active",
  },
  {
    id: "CASE-005",
    borrower: "Manoj Kumar",
    loanType: "Gold Loan",
    assigned: "25 Jan 2026",
    outstanding: "₹0.7L",
    status: "Closed",
  },
  {
    id: "CASE-006",
    borrower: "Deepa Nair",
    loanType: "Home Loan",
    assigned: "02 Feb 2026",
    outstanding: "₹18.0L",
    status: "Active",
  },
  {
    id: "CASE-007",
    borrower: "Kartik Bose",
    loanType: "Car Loan",
    assigned: "08 Feb 2026",
    outstanding: "₹5.1L",
    status: "Pending",
  },
  {
    id: "CASE-008",
    borrower: "Lalita Singh",
    loanType: "Personal Loan",
    assigned: "14 Feb 2026",
    outstanding: "₹2.4L",
    status: "Active",
  },
];

const recoveryProgress = [
  {
    id: "CASE-001",
    borrower: "Anil Sharma",
    target: 1420000,
    recovered: 980000,
  },
  {
    id: "CASE-003",
    borrower: "Ramesh Patel",
    target: 2250000,
    recovered: 800000,
  },
  {
    id: "CASE-004",
    borrower: "Sunita Verma",
    target: 190000,
    recovered: 150000,
  },
  {
    id: "CASE-006",
    borrower: "Deepa Nair",
    target: 1800000,
    recovered: 500000,
  },
  {
    id: "CASE-008",
    borrower: "Lalita Singh",
    target: 240000,
    recovered: 200000,
  },
];

const payments = [
  {
    id: "PAY-001",
    caseId: "CASE-001",
    borrower: "Anil Sharma",
    amount: "₹1.2L",
    date: "05 Jan 2026",
    mode: "NEFT",
    status: "Received",
  },
  {
    id: "PAY-002",
    caseId: "CASE-004",
    borrower: "Sunita Verma",
    amount: "₹0.5L",
    date: "12 Jan 2026",
    mode: "RTGS",
    status: "Received",
  },
  {
    id: "PAY-003",
    caseId: "CASE-002",
    borrower: "Priya Mehta",
    amount: "₹0.8L",
    date: "18 Jan 2026",
    mode: "Cheque",
    status: "Pending",
  },
  {
    id: "PAY-004",
    caseId: "CASE-006",
    borrower: "Deepa Nair",
    amount: "₹2.0L",
    date: "22 Jan 2026",
    mode: "NEFT",
    status: "Received",
  },
  {
    id: "PAY-005",
    caseId: "CASE-003",
    borrower: "Ramesh Patel",
    amount: "₹3.0L",
    date: "28 Jan 2026",
    mode: "RTGS",
    status: "Failed",
  },
  {
    id: "PAY-006",
    caseId: "CASE-001",
    borrower: "Anil Sharma",
    amount: "₹1.5L",
    date: "03 Feb 2026",
    mode: "NEFT",
    status: "Received",
  },
  {
    id: "PAY-007",
    caseId: "CASE-008",
    borrower: "Lalita Singh",
    amount: "₹0.3L",
    date: "10 Feb 2026",
    mode: "Cash",
    status: "Received",
  },
  {
    id: "PAY-008",
    caseId: "CASE-007",
    borrower: "Kartik Bose",
    amount: "₹1.0L",
    date: "15 Feb 2026",
    mode: "Cheque",
    status: "Pending",
  },
];

const fieldReports = [
  {
    id: "FR-001",
    caseId: "CASE-001",
    agent: "Suresh Yadav",
    date: "06 Jan 2026",
    outcome: "Contact Made",
    notes: "Borrower agreed to partial payment schedule.",
  },
  {
    id: "FR-002",
    caseId: "CASE-002",
    agent: "Pankaj Tiwari",
    date: "11 Jan 2026",
    outcome: "Not Found",
    notes: "Address verified but borrower unavailable.",
  },
  {
    id: "FR-003",
    caseId: "CASE-003",
    agent: "Meena Dubey",
    date: "17 Jan 2026",
    outcome: "Document Collected",
    notes: "Income proof and employment letter obtained.",
  },
  {
    id: "FR-004",
    caseId: "CASE-004",
    agent: "Suresh Yadav",
    date: "23 Jan 2026",
    outcome: "Payment Promised",
    notes: "Borrower committed to pay by month end.",
  },
  {
    id: "FR-005",
    caseId: "CASE-006",
    agent: "Arjun Singh",
    date: "05 Feb 2026",
    outcome: "Contact Made",
    notes: "Property inspection completed, report attached.",
  },
  {
    id: "FR-006",
    caseId: "CASE-008",
    agent: "Pankaj Tiwari",
    date: "12 Feb 2026",
    outcome: "Document Collected",
    notes: "Bank statement and salary slip verified.",
  },
];

const documents = [
  {
    caseId: "CASE-001",
    borrower: "Anil Sharma",
    docs: ["Loan Agreement", "Recovery Notice", "Court Order"],
  },
  {
    caseId: "CASE-003",
    borrower: "Ramesh Patel",
    docs: ["Loan Agreement", "Settlement Letter"],
  },
  {
    caseId: "CASE-004",
    borrower: "Sunita Verma",
    docs: ["Loan Agreement", "Recovery Notice"],
  },
  {
    caseId: "CASE-006",
    borrower: "Deepa Nair",
    docs: ["Loan Agreement", "Court Order", "Settlement Letter"],
  },
];

const conversations = [
  {
    id: 1,
    name: "Recovery Manager",
    role: "RecoveryHub Admin",
    last: "Please review CASE-003 escalation.",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Suresh Yadav",
    role: "Field Agent",
    last: "Visit completed for CASE-001.",
    time: "9:15 AM",
    unread: 0,
  },
  {
    id: 3,
    name: "Legal Team",
    role: "Internal",
    last: "Court date set for 12 Mar.",
    time: "Yesterday",
    unread: 1,
  },
  {
    id: 4,
    name: "Priya Mehta",
    role: "Borrower",
    last: "Can we reschedule EMI payment?",
    time: "2 days ago",
    unread: 0,
  },
];

const messages = [
  {
    from: "Recovery Manager",
    text: "Rajesh, please review CASE-003 escalation at earliest.",
    time: "10:30 AM",
    self: false,
  },
  {
    from: "Me",
    text: "Noted. I'll check the field report and update by EOD.",
    time: "10:35 AM",
    self: true,
  },
  {
    from: "Recovery Manager",
    text: "Also confirm if the court order copy has been uploaded.",
    time: "10:36 AM",
    self: false,
  },
  {
    from: "Me",
    text: "Yes, it was uploaded yesterday under CASE-003 documents.",
    time: "10:40 AM",
    self: true,
  },
  {
    from: "Recovery Manager",
    text: "Perfect. Please follow up with legal for next hearing date.",
    time: "10:42 AM",
    self: false,
  },
];

function statusBadge(status: string) {
  const map: Record<string, string> = {
    Active: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Pending: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    Escalated: "bg-red-500/15 text-red-400 border-red-500/30",
    Closed: "bg-white/10 text-white/50 border-white/20",
    Received: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Failed: "bg-red-500/15 text-red-400 border-red-500/30",
    "Contact Made": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "Not Found": "bg-red-500/15 text-red-400 border-red-500/30",
    "Document Collected": "bg-blue-500/15 text-blue-400 border-blue-500/30",
    "Payment Promised": "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  };
  return (
    <Badge
      className={`text-xs border ${map[status] ?? "bg-white/10 text-white/60 border-white/20"}`}
    >
      {status}
    </Badge>
  );
}

function fmt(n: number) {
  return `₹${(n / 100000).toFixed(1)}L`;
}

export default function BankOfficialDashboard({
  onBackToWebsite,
}: { onBackToWebsite: () => void }) {
  const [active, setActive] = useState<Section>("dashboard");
  const [selectedConv, setSelectedConv] = useState(0);

  const sectionLabel =
    navItems.find((n) => n.id === active)?.label ?? "Dashboard";

  const renderSection = () => {
    switch (active) {
      case "dashboard":
        return <DashboardSection />;
      case "cases":
        return <CasesSection />;
      case "recovery":
        return <RecoverySection />;
      case "payments":
        return <PaymentsSection />;
      case "fieldreports":
        return <FieldReportsSection />;
      case "documents":
        return <DocumentsSection />;
      case "messages":
        return (
          <MessagesSection
            selectedConv={selectedConv}
            setSelectedConv={setSelectedConv}
          />
        );
      case "profile":
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex h-screen bg-[oklch(0.12_0.02_180)] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-emerald-500/20 bg-[oklch(0.10_0.025_180)]">
        <div className="p-5 border-b border-emerald-500/20">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Landmark size={18} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                Bank Official
              </p>
              <p className="text-white font-bold text-sm leading-tight">
                HDFC Bank
              </p>
            </div>
          </div>
        </div>
        <ScrollArea className="flex-1 py-3">
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  type="button"
                  key={item.id}
                  data-ocid={`bankofficial.${item.id}_tab`}
                  onClick={() => setActive(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active === item.id
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="p-3 border-t border-emerald-500/20">
          <Button
            data-ocid="bankofficial.back_button"
            onClick={onBackToWebsite}
            variant="outline"
            className="w-full border-white/20 text-white/60 bg-transparent hover:bg-white/5 hover:text-white text-sm"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to RecoveryHub
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TopBar */}
        <header className="h-14 border-b border-emerald-500/20 bg-[oklch(0.10_0.025_180)] flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-white font-semibold text-base">
              {sectionLabel}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Bell size={18} className="text-white/40" />
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                RK
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-white text-sm font-semibold leading-none">
                Rajesh Kumar
              </p>
              <p className="text-white/40 text-xs">Recovery Manager</p>
            </div>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="p-6">{renderSection()}</div>
        </ScrollArea>
      </div>
    </div>
  );
}

function DashboardSection() {
  const stats = [
    {
      label: "Total Cases Assigned",
      value: "42",
      icon: ClipboardList,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Cases In Progress",
      value: "18",
      icon: TrendingUp,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      label: "Recovered Amount",
      value: "₹28.4L",
      icon: IndianRupee,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Pending Payments",
      value: "₹6.2L",
      icon: IndianRupee,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      label: "Success Rate",
      value: "87%",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Overdue Cases",
      value: "5",
      icon: XCircle,
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/20",
    },
  ];

  const activity = [
    {
      time: "10:30 AM",
      event: "Payment received for CASE-001",
      amount: "₹1.5L",
      type: "success",
    },
    {
      time: "9:15 AM",
      event: "Field report submitted for CASE-006",
      amount: "",
      type: "info",
    },
    {
      time: "Yesterday",
      event: "CASE-003 escalated to legal",
      amount: "",
      type: "warning",
    },
    {
      time: "Yesterday",
      event: "Settlement letter issued for CASE-004",
      amount: "",
      type: "info",
    },
    {
      time: "2 days ago",
      event: "New case CASE-008 assigned",
      amount: "",
      type: "info",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.label}
              className={`border ${s.bg} bg-transparent`}
              data-ocid="bankofficial.dashboard.card"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/50 text-xs font-medium">{s.label}</p>
                  <Icon size={16} className={s.color} />
                </div>
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card className="bg-white/3 border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-sm font-semibold">
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activity.map((a, i) => (
              <div
                key={`act-${i}-${a.time}`}
                className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                    a.type === "success"
                      ? "bg-emerald-400"
                      : a.type === "warning"
                        ? "bg-yellow-400"
                        : "bg-blue-400"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-white/80 text-sm">{a.event}</p>
                  <p className="text-white/30 text-xs">{a.time}</p>
                </div>
                {a.amount && (
                  <span className="text-emerald-400 text-sm font-semibold">
                    {a.amount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CasesSection() {
  return (
    <Card className="bg-white/3 border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-sm font-semibold">
          Assigned Cases
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              {[
                "Case ID",
                "Borrower Name",
                "Loan Type",
                "Assigned Date",
                "Outstanding",
                "Status",
                "Action",
              ].map((h) => (
                <TableHead key={h} className="text-white/40 text-xs">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignedCases.map((c, i) => (
              <TableRow
                key={c.id}
                className="border-white/5 hover:bg-white/3"
                data-ocid={`bankofficial.cases.item.${i + 1}`}
              >
                <TableCell className="text-emerald-400 font-mono text-xs">
                  {c.id}
                </TableCell>
                <TableCell className="text-white text-sm">
                  {c.borrower}
                </TableCell>
                <TableCell className="text-white/60 text-xs">
                  {c.loanType}
                </TableCell>
                <TableCell className="text-white/50 text-xs">
                  {c.assigned}
                </TableCell>
                <TableCell className="text-white font-semibold text-sm">
                  {c.outstanding}
                </TableCell>
                <TableCell>{statusBadge(c.status)}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 text-xs h-7 px-2"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function RecoverySection() {
  const totalTarget = recoveryProgress.reduce((s, r) => s + r.target, 0);
  const totalRecovered = recoveryProgress.reduce((s, r) => s + r.recovered, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-emerald-500/10 border-emerald-500/20">
          <CardContent className="p-5">
            <p className="text-emerald-300/70 text-xs mb-1">Total Target</p>
            <p className="text-emerald-400 text-2xl font-bold">
              {fmt(totalTarget)}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-500/10 border-emerald-500/20">
          <CardContent className="p-5">
            <p className="text-emerald-300/70 text-xs mb-1">Total Recovered</p>
            <p className="text-emerald-400 text-2xl font-bold">
              {fmt(totalRecovered)}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        {recoveryProgress.map((r, i) => {
          const pct = Math.round((r.recovered / r.target) * 100);
          return (
            <Card
              key={r.id}
              className="bg-white/3 border-white/10"
              data-ocid={`bankofficial.recovery.item.${i + 1}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {r.borrower}
                    </p>
                    <p className="text-white/40 text-xs">{r.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold text-sm">
                      {fmt(r.recovered)}
                    </p>
                    <p className="text-white/40 text-xs">of {fmt(r.target)}</p>
                  </div>
                </div>
                <Progress value={pct} className="h-2 bg-white/10" />
                <p className="text-white/40 text-xs mt-1.5">{pct}% recovered</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function PaymentsSection() {
  return (
    <Card className="bg-white/3 border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-sm font-semibold">
          Payment Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              {[
                "Payment ID",
                "Case ID",
                "Borrower",
                "Amount",
                "Date",
                "Mode",
                "Status",
              ].map((h) => (
                <TableHead key={h} className="text-white/40 text-xs">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((p, i) => (
              <TableRow
                key={p.id}
                className="border-white/5 hover:bg-white/3"
                data-ocid={`bankofficial.payments.item.${i + 1}`}
              >
                <TableCell className="text-emerald-400 font-mono text-xs">
                  {p.id}
                </TableCell>
                <TableCell className="text-white/60 font-mono text-xs">
                  {p.caseId}
                </TableCell>
                <TableCell className="text-white text-sm">
                  {p.borrower}
                </TableCell>
                <TableCell className="text-white font-semibold">
                  {p.amount}
                </TableCell>
                <TableCell className="text-white/50 text-xs">
                  {p.date}
                </TableCell>
                <TableCell className="text-white/60 text-xs">
                  {p.mode}
                </TableCell>
                <TableCell>{statusBadge(p.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function FieldReportsSection() {
  return (
    <Card className="bg-white/3 border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-sm font-semibold">
          Field Reports
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              {[
                "Report ID",
                "Case ID",
                "Agent",
                "Visit Date",
                "Outcome",
                "Notes",
              ].map((h) => (
                <TableHead key={h} className="text-white/40 text-xs">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {fieldReports.map((r, i) => (
              <TableRow
                key={r.id}
                className="border-white/5 hover:bg-white/3"
                data-ocid={`bankofficial.fieldreports.item.${i + 1}`}
              >
                <TableCell className="text-emerald-400 font-mono text-xs">
                  {r.id}
                </TableCell>
                <TableCell className="text-white/60 font-mono text-xs">
                  {r.caseId}
                </TableCell>
                <TableCell className="text-white text-sm">{r.agent}</TableCell>
                <TableCell className="text-white/50 text-xs">
                  {r.date}
                </TableCell>
                <TableCell>{statusBadge(r.outcome)}</TableCell>
                <TableCell className="text-white/60 text-xs max-w-xs">
                  {r.notes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function DocumentsSection() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {documents.map((d, i) => (
        <Card
          key={d.caseId}
          className="bg-white/3 border-white/10"
          data-ocid={`bankofficial.documents.item.${i + 1}`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-sm">{d.borrower}</CardTitle>
              <span className="text-emerald-400 font-mono text-xs">
                {d.caseId}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {d.docs.map((doc) => (
              <div
                key={doc}
                className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <FileText size={14} className="text-emerald-400" />
                  <span className="text-white/80 text-sm">{doc}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-emerald-400 hover:text-emerald-300 text-xs h-6 px-2"
                >
                  Download
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function MessagesSection({
  selectedConv,
  setSelectedConv,
}: { selectedConv: number; setSelectedConv: (i: number) => void }) {
  return (
    <div className="flex gap-4 h-[600px]">
      <Card className="w-72 flex-shrink-0 bg-white/3 border-white/10 flex flex-col">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-white text-sm">Conversations</CardTitle>
        </CardHeader>
        <ScrollArea className="flex-1">
          {conversations.map((c, i) => (
            <button
              type="button"
              key={c.id}
              data-ocid={`bankofficial.messages.item.${i + 1}`}
              onClick={() => setSelectedConv(i)}
              className={`w-full text-left px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors ${
                selectedConv === i ? "bg-emerald-500/10" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-white text-sm font-semibold">
                  {c.name}
                </span>
                <span className="text-white/30 text-xs">{c.time}</span>
              </div>
              <p className="text-white/40 text-xs">{c.role}</p>
              <p className="text-white/60 text-xs mt-0.5 truncate">{c.last}</p>
              {c.unread > 0 && (
                <span className="inline-block mt-1 bg-emerald-500 text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </ScrollArea>
      </Card>
      <Card className="flex-1 bg-white/3 border-white/10 flex flex-col">
        <CardHeader className="pb-2 border-b border-white/10 flex-shrink-0">
          <CardTitle className="text-white text-sm">
            {conversations[selectedConv].name}
          </CardTitle>
          <p className="text-white/40 text-xs">
            {conversations[selectedConv].role}
          </p>
        </CardHeader>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {messages.map((m, i) => (
              <div
                key={`msg-${i}-${m.time}`}
                className={`flex ${m.self ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
                    m.self
                      ? "bg-emerald-500/20 text-emerald-100"
                      : "bg-white/10 text-white/80"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className="text-xs mt-0.5 opacity-50">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-white/3 border-white/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-emerald-500/20 text-emerald-400 text-xl font-bold">
                RK
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-white font-bold text-lg">Rajesh Kumar</h3>
              <p className="text-emerald-400 text-sm">Recovery Manager</p>
              <p className="text-white/40 text-xs">HDFC Bank</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Employee ID", value: "HB-4521" },
              { label: "Bank", value: "HDFC Bank" },
              { label: "Assigned Region", value: "Mumbai West" },
              { label: "Contact", value: "+91 98765 43210" },
              { label: "Email", value: "rajesh.kumar@hdfcbank.com" },
              { label: "Department", value: "Retail Recovery" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between py-2 border-b border-white/5"
              >
                <span className="text-white/50 text-sm">{f.label}</span>
                <span className="text-white text-sm font-medium">
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/3 border-white/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-sm font-semibold">
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "New Case Assignments", on: true },
            { label: "Payment Alerts", on: true },
            { label: "Field Report Updates", on: false },
            { label: "Legal Notifications", on: true },
            { label: "Weekly Summary Report", on: true },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-white/70 text-sm">{s.label}</span>
              <Switch
                defaultChecked={s.on}
                className="data-[state=checked]:bg-emerald-500"
              />
            </div>
          ))}
          <Separator className="bg-white/10" />
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
            data-ocid="bankofficial.profile.save_button"
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
