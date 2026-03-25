import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowLeft,
  Award,
  Bell,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  TrendingUp,
  Upload,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface AgencyPortalProps {
  onBackToWebsite: () => void;
}

type Section =
  | "dashboard"
  | "cases"
  | "visits"
  | "payments"
  | "reports"
  | "documents"
  | "messages"
  | "profile";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const allCases = [
  {
    id: "CAS-2401",
    debtor: "Rajesh Kumar",
    bank: "HDFC Bank",
    loan: "Personal Loan",
    amount: "₹1,24,500",
    dpd: 95,
    priority: "High",
    status: "Active",
  },
  {
    id: "CAS-2402",
    debtor: "Sunita Mehta",
    bank: "ICICI Bank",
    loan: "Home Loan",
    amount: "₹87,200",
    dpd: 62,
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "CAS-2403",
    debtor: "Anil Sharma",
    bank: "Axis Bank",
    loan: "Car Loan",
    amount: "₹2,35,000",
    dpd: 0,
    priority: "Low",
    status: "Recovered",
  },
  {
    id: "CAS-2404",
    debtor: "Priya Patel",
    bank: "SBI",
    loan: "Personal Loan",
    amount: "₹56,750",
    dpd: 45,
    priority: "Medium",
    status: "Active",
  },
  {
    id: "CAS-2405",
    debtor: "Mohammed Farooq",
    bank: "Kotak Mahindra",
    loan: "Business Loan",
    amount: "₹3,10,000",
    dpd: 180,
    priority: "High",
    status: "Legal",
  },
  {
    id: "CAS-2406",
    debtor: "Deepa Nair",
    bank: "HDFC Bank",
    loan: "Personal Loan",
    amount: "₹98,400",
    dpd: 55,
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "CAS-2407",
    debtor: "Vikram Singh",
    bank: "ICICI Bank",
    loan: "Two-Wheeler Loan",
    amount: "₹1,67,800",
    dpd: 78,
    priority: "High",
    status: "Active",
  },
  {
    id: "CAS-2408",
    debtor: "Kavitha Reddy",
    bank: "Axis Bank",
    loan: "Credit Card",
    amount: "₹44,300",
    dpd: 0,
    priority: "Low",
    status: "Recovered",
  },
  {
    id: "CAS-2409",
    debtor: "Suresh Yadav",
    bank: "SBI",
    loan: "Personal Loan",
    amount: "₹72,500",
    dpd: 90,
    priority: "High",
    status: "Active",
  },
  {
    id: "CAS-2410",
    debtor: "Meera Iyer",
    bank: "Kotak Mahindra",
    loan: "Home Loan",
    amount: "₹4,50,000",
    dpd: 120,
    priority: "High",
    status: "Legal",
  },
  {
    id: "CAS-2411",
    debtor: "Rohit Gupta",
    bank: "HDFC Bank",
    loan: "Car Loan",
    amount: "₹1,15,200",
    dpd: 30,
    priority: "Low",
    status: "Pending",
  },
  {
    id: "CAS-2412",
    debtor: "Ananya Das",
    bank: "ICICI Bank",
    loan: "Personal Loan",
    amount: "₹63,000",
    dpd: 0,
    priority: "Medium",
    status: "Recovered",
  },
];

const scheduledVisits = [
  {
    id: "VIS-2201",
    caseId: "CAS-2401",
    debtor: "Rajesh Kumar",
    address: "14-B Goregaon East, Mumbai",
    dateTime: "25 Mar 2026, 10:00 AM",
    agent: "Ramesh D.",
    status: "Scheduled",
  },
  {
    id: "VIS-2202",
    caseId: "CAS-2404",
    debtor: "Priya Patel",
    address: "Flat 5, Andheri West, Mumbai",
    dateTime: "25 Mar 2026, 2:30 PM",
    agent: "Seema T.",
    status: "Scheduled",
  },
  {
    id: "VIS-2203",
    caseId: "CAS-2407",
    debtor: "Vikram Singh",
    address: "22 MG Road, Pune",
    dateTime: "26 Mar 2026, 11:00 AM",
    agent: "Ajay K.",
    status: "Scheduled",
  },
  {
    id: "VIS-2204",
    caseId: "CAS-2409",
    debtor: "Suresh Yadav",
    address: "Plot 9, Thane West",
    dateTime: "26 Mar 2026, 3:00 PM",
    agent: "Ramesh D.",
    status: "Scheduled",
  },
  {
    id: "VIS-2205",
    caseId: "CAS-2406",
    debtor: "Deepa Nair",
    address: "Sector 4, Navi Mumbai",
    dateTime: "27 Mar 2026, 9:30 AM",
    agent: "Neha P.",
    status: "Scheduled",
  },
];

const completedVisits = [
  {
    id: "VIS-2193",
    caseId: "CAS-2403",
    debtor: "Anil Sharma",
    address: "Bandra East, Mumbai",
    dateTime: "20 Mar 2026, 10:00 AM",
    agent: "Ajay K.",
    outcome: "Payment Received",
    notes: "Full payment collected",
  },
  {
    id: "VIS-2194",
    caseId: "CAS-2402",
    debtor: "Sunita Mehta",
    address: "Powai, Mumbai",
    dateTime: "20 Mar 2026, 2:00 PM",
    agent: "Seema T.",
    outcome: "Promise to Pay",
    notes: "PTP for 28 March",
  },
  {
    id: "VIS-2195",
    caseId: "CAS-2401",
    debtor: "Rajesh Kumar",
    address: "Goregaon East, Mumbai",
    dateTime: "19 Mar 2026, 11:00 AM",
    agent: "Ramesh D.",
    outcome: "No Contact",
    notes: "Door locked, neighbour informed",
  },
  {
    id: "VIS-2196",
    caseId: "CAS-2408",
    debtor: "Kavitha Reddy",
    address: "Matunga, Mumbai",
    dateTime: "18 Mar 2026, 4:00 PM",
    agent: "Neha P.",
    outcome: "Payment Received",
    notes: "Partial payment ₹20,000",
  },
  {
    id: "VIS-2197",
    caseId: "CAS-2405",
    debtor: "Mohammed Farooq",
    address: "Kurla West, Mumbai",
    dateTime: "17 Mar 2026, 10:30 AM",
    agent: "Ajay K.",
    outcome: "Disputed",
    notes: "Referred to legal team",
  },
  {
    id: "VIS-2198",
    caseId: "CAS-2412",
    debtor: "Ananya Das",
    address: "Vile Parle, Mumbai",
    dateTime: "16 Mar 2026, 3:00 PM",
    agent: "Ramesh D.",
    outcome: "Contacted",
    notes: "Arranged bank settlement",
  },
  {
    id: "VIS-2199",
    caseId: "CAS-2409",
    debtor: "Suresh Yadav",
    address: "Thane West",
    dateTime: "15 Mar 2026, 11:00 AM",
    agent: "Seema T.",
    outcome: "Contacted",
    notes: "Agreed to EMI schedule",
  },
  {
    id: "VIS-2200",
    caseId: "CAS-2411",
    debtor: "Rohit Gupta",
    address: "Mulund West, Mumbai",
    dateTime: "14 Mar 2026, 2:30 PM",
    agent: "Neha P.",
    outcome: "No Contact",
    notes: "Away on vacation, call back in a week",
  },
];

const payments = [
  {
    receipt: "REC-3401",
    caseId: "CAS-2403",
    debtor: "Anil Sharma",
    amount: "₹2,35,000",
    date: "20 Mar 2026",
    mode: "NEFT",
    status: "Cleared",
  },
  {
    receipt: "REC-3402",
    caseId: "CAS-2408",
    debtor: "Kavitha Reddy",
    amount: "₹20,000",
    date: "18 Mar 2026",
    mode: "Cash",
    status: "Cleared",
  },
  {
    receipt: "REC-3403",
    caseId: "CAS-2412",
    debtor: "Ananya Das",
    amount: "₹63,000",
    date: "16 Mar 2026",
    mode: "UPI",
    status: "Cleared",
  },
  {
    receipt: "REC-3404",
    caseId: "CAS-2404",
    debtor: "Priya Patel",
    amount: "₹15,000",
    date: "14 Mar 2026",
    mode: "UPI",
    status: "Cleared",
  },
  {
    receipt: "REC-3405",
    caseId: "CAS-2401",
    debtor: "Rajesh Kumar",
    amount: "₹30,000",
    date: "10 Mar 2026",
    mode: "NEFT",
    status: "Cleared",
  },
  {
    receipt: "REC-3406",
    caseId: "CAS-2407",
    debtor: "Vikram Singh",
    amount: "₹50,000",
    date: "08 Mar 2026",
    mode: "RTGS",
    status: "Pending",
  },
  {
    receipt: "REC-3407",
    caseId: "CAS-2409",
    debtor: "Suresh Yadav",
    amount: "₹12,500",
    date: "05 Mar 2026",
    mode: "Cash",
    status: "Cleared",
  },
  {
    receipt: "REC-3408",
    caseId: "CAS-2406",
    debtor: "Deepa Nair",
    amount: "₹25,000",
    date: "03 Mar 2026",
    mode: "UPI",
    status: "Cleared",
  },
  {
    receipt: "REC-3409",
    caseId: "CAS-2402",
    debtor: "Sunita Mehta",
    amount: "₹10,000",
    date: "01 Mar 2026",
    mode: "Cash",
    status: "Cleared",
  },
  {
    receipt: "REC-3410",
    caseId: "CAS-2411",
    debtor: "Rohit Gupta",
    amount: "₹19,700",
    date: "28 Feb 2026",
    mode: "NEFT",
    status: "Pending",
  },
];

const documents = [
  {
    name: "Case Assignment Letter - March 2026",
    category: "Case Documents",
    type: "PDF",
    uploaded: "01 Mar 2026",
    status: "Verified",
  },
  {
    name: "Recovery Authorization - Axis Bank",
    category: "Authorization Letters",
    type: "PDF",
    uploaded: "05 Mar 2026",
    status: "Verified",
  },
  {
    name: "Field Visit Report - Week 11",
    category: "Visit Reports",
    type: "DOCX",
    uploaded: "18 Mar 2026",
    status: "Pending Review",
  },
  {
    name: "Payment Receipt - CAS-2403",
    category: "Receipts",
    type: "PDF",
    uploaded: "20 Mar 2026",
    status: "Verified",
  },
  {
    name: "Debtor Contact Log - Q1",
    category: "Case Documents",
    type: "XLSX",
    uploaded: "22 Mar 2026",
    status: "Pending Review",
  },
  {
    name: "Guard Deployment Schedule",
    category: "Case Documents",
    type: "PDF",
    uploaded: "15 Mar 2026",
    status: "Verified",
  },
  {
    name: "Recovery Authorization - HDFC Bank",
    category: "Authorization Letters",
    type: "PDF",
    uploaded: "02 Mar 2026",
    status: "Verified",
  },
  {
    name: "Field Visit Report - Week 10",
    category: "Visit Reports",
    type: "DOCX",
    uploaded: "11 Mar 2026",
    status: "Verified",
  },
  {
    name: "Settlement Agreement - CAS-2403",
    category: "Case Documents",
    type: "PDF",
    uploaded: "20 Mar 2026",
    status: "Verified",
  },
  {
    name: "Escalation Notice - CAS-2405",
    category: "Case Documents",
    type: "PDF",
    uploaded: "17 Mar 2026",
    status: "Rejected",
  },
];

const messages = [
  {
    id: 1,
    from: "Admin",
    subject: "New cases assigned for April",
    preview:
      "Please review the 4 new cases assigned to your agency for the upcoming month. Ensure all field agents are briefed.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    from: "Compliance Team",
    subject: "Updated RBI guidelines — mandatory training",
    preview:
      "As per the latest RBI circular, all recovery agents must complete the refresher training module by 31st March 2026.",
    time: "Yesterday",
    read: false,
  },
  {
    id: 3,
    from: "Billing Dept.",
    subject: "March invoice approved — ₹2,14,000",
    preview:
      "Your invoice for March 2026 has been approved. Payment will be processed within 7 working days.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 4,
    from: "Admin",
    subject: "Field visit protocol update",
    preview:
      "Please note the updated field visit protocol effective 1st April. Agents must carry body cameras during all visits.",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    from: "Legal Team",
    subject: "CAS-2405 escalated to legal proceedings",
    preview:
      "Case CAS-2405 (Mohammed Farooq) has been escalated to the legal team. Please share all documentation with us.",
    time: "1 week ago",
    read: true,
  },
  {
    id: 6,
    from: "Billing Dept.",
    subject: "February invoice reconciliation done",
    preview:
      "The reconciliation for February 2026 is complete. Please review the breakdown attached.",
    time: "2 weeks ago",
    read: true,
  },
];

const weeklyTrend = [
  { week: "Wk 1", amount: 1.8, label: "₹1.8L" },
  { week: "Wk 2", amount: 2.4, label: "₹2.4L" },
  { week: "Wk 3", amount: 1.6, label: "₹1.6L" },
  { week: "Wk 4", amount: 2.6, label: "₹2.6L" },
];

const recentCases = allCases.slice(0, 5);
const recentVisits = completedVisits.slice(0, 4);

// ─── Color Maps ───────────────────────────────────────────────────────────────

const statusColor: Record<string, string> = {
  Active: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  Pending: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  Recovered: "bg-green-500/15 text-green-400 border-green-500/25",
  Legal: "bg-red-500/15 text-red-400 border-red-500/25",
  Closed: "bg-gray-500/15 text-gray-400 border-gray-500/25",
  Scheduled: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  Cleared: "bg-green-500/15 text-green-400 border-green-500/25",
  Pending_pay: "bg-orange-500/15 text-orange-400 border-orange-500/25",
};

const priorityColor: Record<string, string> = {
  High: "bg-red-500/15 text-red-400 border-red-500/25",
  Medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  Low: "bg-green-500/15 text-green-400 border-green-500/25",
};

const outcomeColor: Record<string, string> = {
  "Payment Received": "bg-green-500/15 text-green-400 border-green-500/25",
  "Promise to Pay": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  Contacted: "bg-sky-500/15 text-sky-400 border-sky-500/25",
  "No Contact": "bg-gray-500/15 text-gray-400 border-gray-500/25",
  Disputed: "bg-red-500/15 text-red-400 border-red-500/25",
};

const docStatusColor: Record<string, string> = {
  Verified: "bg-green-500/15 text-green-400 border-green-500/25",
  "Pending Review": "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  Rejected: "bg-red-500/15 text-red-400 border-red-500/25",
};

// ─── Nav Items ────────────────────────────────────────────────────────────────

const navItems: {
  id: Section;
  label: string;
  icon: React.ElementType;
  badge?: number;
}[] = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "cases", label: "My Cases", icon: ClipboardList },
  { id: "visits", label: "Field Visits", icon: MapPin },
  { id: "payments", label: "Payments", icon: TrendingUp },
  { id: "reports", label: "Recovery Reports", icon: Award },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "messages", label: "Messages", icon: MessageSquare, badge: 2 },
  { id: "profile", label: "My Profile", icon: User },
];

// ─── Section Components ───────────────────────────────────────────────────────

function SectionFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      key={Math.random()}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function KpiCard({
  icon: Icon,
  label,
  value,
  color,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  sub?: string;
}) {
  return (
    <Card
      className="border-white/10"
      style={{ background: "hsl(222 47% 14%)" }}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${color.replace("text-", "bg-").replace("400", "400/15")}`}
          >
            <Icon size={17} className={color} />
          </div>
        </div>
        <p className={`text-2xl font-bold mb-1 ${color}`}>{value}</p>
        <p className="text-xs text-white/50">{label}</p>
        {sub && <p className="text-xs text-white/30 mt-0.5">{sub}</p>}
      </CardContent>
    </Card>
  );
}

function DashboardSection() {
  return (
    <SectionFade>
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            icon={ClipboardList}
            label="Total Cases"
            value="24"
            color="text-blue-400"
            sub="Assigned this quarter"
          />
          <KpiCard
            icon={TrendingUp}
            label="Recovered This Month"
            value="₹8.4L"
            color="text-green-400"
            sub="+12% vs last month"
          />
          <KpiCard
            icon={Award}
            label="Success Rate"
            value="87%"
            color="text-gold"
            sub="Industry avg: 72%"
          />
          <KpiCard
            icon={AlertCircle}
            label="Pending Cases"
            value="11"
            color="text-yellow-400"
            sub="Requires attention"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Cases */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Recent Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/8 hover:bg-transparent">
                    <TableHead className="text-white/40 text-xs">
                      Case ID
                    </TableHead>
                    <TableHead className="text-white/40 text-xs">
                      Debtor
                    </TableHead>
                    <TableHead className="text-white/40 text-xs">
                      Amount
                    </TableHead>
                    <TableHead className="text-white/40 text-xs">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCases.map((c, i) => (
                    <TableRow
                      key={c.id}
                      className="border-white/8"
                      data-ocid={`dashboard.cases.item.${i + 1}`}
                    >
                      <TableCell className="font-mono text-xs text-white/40">
                        {c.id}
                      </TableCell>
                      <TableCell className="text-white/80 text-sm">
                        {c.debtor}
                      </TableCell>
                      <TableCell className="text-white/60 text-sm">
                        {c.amount}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-xs ${statusColor[c.status]}`}
                        >
                          {c.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Recent Visits */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Recent Field Visits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentVisits.map((v, i) => (
                <div
                  key={v.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/3 border border-white/8"
                  data-ocid={`dashboard.visits.item.${i + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${outcomeColor[v.outcome]?.includes("green") ? "bg-green-400" : outcomeColor[v.outcome]?.includes("red") ? "bg-red-400" : outcomeColor[v.outcome]?.includes("blue") ? "bg-blue-400" : "bg-gray-400"}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-white/80 font-medium">
                        {v.debtor}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-xs shrink-0 ${outcomeColor[v.outcome]}`}
                      >
                        {v.outcome}
                      </Badge>
                    </div>
                    <p className="text-xs text-white/40 mt-0.5">{v.address}</p>
                    <p className="text-xs text-white/30">
                      {v.dateTime} · {v.agent}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Performance */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { month: "January 2026", recovered: 62, target: 100 },
                { month: "February 2026", recovered: 75, target: 100 },
                { month: "March 2026", recovered: 87, target: 100 },
              ].map((m) => (
                <div key={m.month}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/50">{m.month}</span>
                    <span className="text-gold font-semibold">
                      {m.recovered}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${m.recovered}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                {
                  task: "Field Visit — Rajesh Kumar",
                  due: "25 Mar, 10:00 AM",
                  type: "visit",
                },
                {
                  task: "Field Visit — Priya Patel",
                  due: "25 Mar, 2:30 PM",
                  type: "visit",
                },
                {
                  task: "Field Visit — Vikram Singh",
                  due: "26 Mar, 11:00 AM",
                  type: "visit",
                },
                {
                  task: "Submit Visit Report - Week 12",
                  due: "28 Mar 2026",
                  type: "doc",
                },
                {
                  task: "Invoice Submission - March",
                  due: "31 Mar 2026",
                  type: "doc",
                },
              ].map((t) => (
                <div
                  key={t.task}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${t.type === "visit" ? "bg-blue-400/15" : "bg-gold/15"}`}
                  >
                    {t.type === "visit" ? (
                      <MapPin size={13} className="text-blue-400" />
                    ) : (
                      <FileText size={13} className="text-gold" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80 truncate">{t.task}</p>
                    <p className="text-xs text-white/40">{t.due}</p>
                  </div>
                  <ChevronRight size={14} className="text-white/20 shrink-0" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionFade>
  );
}

function CasesSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Active", "Pending", "Recovered", "Legal"];
  const filtered =
    filter === "All" ? allCases : allCases.filter((c) => c.status === filter);

  return (
    <SectionFade>
      <Card
        className="border-white/10"
        style={{ background: "hsl(222 47% 14%)" }}
      >
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-sm font-semibold text-white/80">
              Assigned Cases ({allCases.length})
            </CardTitle>
            <div
              className="flex flex-wrap gap-1.5"
              data-ocid="cases.filter.tab"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    filter === f
                      ? "bg-gold text-black"
                      : "bg-white/8 text-white/50 hover:text-white/80 hover:bg-white/12"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table data-ocid="cases.table">
              <TableHeader>
                <TableRow className="border-white/8 hover:bg-transparent">
                  {[
                    "Case ID",
                    "Debtor Name",
                    "Bank/Lender",
                    "Loan Type",
                    "Outstanding",
                    "DPD",
                    "Priority",
                    "Status",
                    "Action",
                  ].map((h) => (
                    <TableHead
                      key={h}
                      className="text-white/40 text-xs whitespace-nowrap"
                    >
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((c, i) => (
                  <TableRow
                    key={c.id}
                    className="border-white/8 hover:bg-white/3"
                    data-ocid={`cases.item.${i + 1}`}
                  >
                    <TableCell className="font-mono text-xs text-white/40">
                      {c.id}
                    </TableCell>
                    <TableCell className="text-white/90 font-medium text-sm">
                      {c.debtor}
                    </TableCell>
                    <TableCell className="text-white/60 text-sm">
                      {c.bank}
                    </TableCell>
                    <TableCell className="text-white/50 text-sm whitespace-nowrap">
                      {c.loan}
                    </TableCell>
                    <TableCell className="text-white/80 font-semibold text-sm">
                      {c.amount}
                    </TableCell>
                    <TableCell
                      className={`text-sm font-mono ${c.dpd > 90 ? "text-red-400" : c.dpd > 30 ? "text-yellow-400" : "text-green-400"}`}
                    >
                      {c.dpd > 0 ? `${c.dpd}d` : "—"}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${priorityColor[c.priority]}`}
                      >
                        {c.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${statusColor[c.status]}`}
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs text-white/50 hover:text-white"
                        data-ocid={`cases.edit_button.${i + 1}`}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </SectionFade>
  );
}

function VisitsSection() {
  return (
    <SectionFade>
      <div className="space-y-6">
        <Card
          className="border-white/10"
          style={{ background: "hsl(222 47% 14%)" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 flex items-center gap-2">
              <CalendarDays size={15} className="text-yellow-400" />
              Scheduled Visits ({scheduledVisits.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table data-ocid="visits.scheduled.table">
                <TableHeader>
                  <TableRow className="border-white/8 hover:bg-transparent">
                    {[
                      "Visit ID",
                      "Case ID",
                      "Debtor",
                      "Address",
                      "Date & Time",
                      "Agent",
                      "Status",
                    ].map((h) => (
                      <TableHead
                        key={h}
                        className="text-white/40 text-xs whitespace-nowrap"
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduledVisits.map((v, i) => (
                    <TableRow
                      key={v.id}
                      className="border-white/8 hover:bg-white/3"
                      data-ocid={`visits.item.${i + 1}`}
                    >
                      <TableCell className="font-mono text-xs text-white/40">
                        {v.id}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-blue-400">
                        {v.caseId}
                      </TableCell>
                      <TableCell className="text-white/80 text-sm font-medium">
                        {v.debtor}
                      </TableCell>
                      <TableCell className="text-white/50 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin
                            size={11}
                            className="text-white/30 shrink-0"
                          />
                          {v.address}
                        </span>
                      </TableCell>
                      <TableCell className="text-white/60 text-sm whitespace-nowrap">
                        {v.dateTime}
                      </TableCell>
                      <TableCell className="text-white/60 text-sm">
                        {v.agent}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-xs ${statusColor.Scheduled}`}
                        >
                          {v.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card
          className="border-white/10"
          style={{ background: "hsl(222 47% 14%)" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-white/80 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-green-400" />
              Completed Visits ({completedVisits.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/8 hover:bg-transparent">
                    {[
                      "Visit ID",
                      "Case ID",
                      "Debtor",
                      "Address",
                      "Date & Time",
                      "Agent",
                      "Outcome",
                      "Notes",
                    ].map((h) => (
                      <TableHead
                        key={h}
                        className="text-white/40 text-xs whitespace-nowrap"
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedVisits.map((v, i) => (
                    <TableRow
                      key={v.id}
                      className="border-white/8 hover:bg-white/3"
                      data-ocid={`visits.completed.item.${i + 1}`}
                    >
                      <TableCell className="font-mono text-xs text-white/40">
                        {v.id}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-blue-400">
                        {v.caseId}
                      </TableCell>
                      <TableCell className="text-white/80 text-sm font-medium">
                        {v.debtor}
                      </TableCell>
                      <TableCell className="text-white/50 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin
                            size={11}
                            className="text-white/30 shrink-0"
                          />
                          {v.address}
                        </span>
                      </TableCell>
                      <TableCell className="text-white/60 text-sm whitespace-nowrap">
                        {v.dateTime}
                      </TableCell>
                      <TableCell className="text-white/60 text-sm">
                        {v.agent}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-xs ${outcomeColor[v.outcome] ?? "bg-gray-500/15 text-gray-400"}`}
                        >
                          {v.outcome}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white/40 text-xs max-w-[180px] truncate">
                        {v.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionFade>
  );
}

function PaymentsSection() {
  return (
    <SectionFade>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard
            icon={TrendingUp}
            label="Total Collected"
            value="₹4.80L"
            color="text-green-400"
            sub="March 2026"
          />
          <KpiCard
            icon={CalendarDays}
            label="This Week"
            value="₹1.20L"
            color="text-blue-400"
            sub="21–25 Mar"
          />
          <KpiCard
            icon={AlertCircle}
            label="Pending Commitments"
            value="₹3.20L"
            color="text-yellow-400"
            sub="PTP outstanding"
          />
        </div>

        <Card
          className="border-white/10"
          style={{ background: "hsl(222 47% 14%)" }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-white/80">
              Payment Records
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table data-ocid="payments.table">
                <TableHeader>
                  <TableRow className="border-white/8 hover:bg-transparent">
                    {[
                      "Receipt No.",
                      "Case ID",
                      "Debtor",
                      "Amount",
                      "Date",
                      "Mode",
                      "Status",
                    ].map((h) => (
                      <TableHead
                        key={h}
                        className="text-white/40 text-xs whitespace-nowrap"
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p, i) => (
                    <TableRow
                      key={p.receipt}
                      className="border-white/8 hover:bg-white/3"
                      data-ocid={`payments.item.${i + 1}`}
                    >
                      <TableCell className="font-mono text-xs text-white/50">
                        {p.receipt}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-blue-400">
                        {p.caseId}
                      </TableCell>
                      <TableCell className="text-white/80 text-sm font-medium">
                        {p.debtor}
                      </TableCell>
                      <TableCell className="text-green-400 font-bold text-sm">
                        {p.amount}
                      </TableCell>
                      <TableCell className="text-white/50 text-sm whitespace-nowrap">
                        {p.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20"
                        >
                          {p.mode}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-xs ${p.status === "Cleared" ? statusColor.Recovered : statusColor.Pending}`}
                        >
                          {p.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionFade>
  );
}

function ReportsSection() {
  const maxWeek = Math.max(...weeklyTrend.map((w) => w.amount));

  return (
    <SectionFade>
      <div className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recovery Summary */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Monthly Recovery Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  label: "Cases Assigned",
                  value: 24,
                  total: 24,
                  color: "from-blue-500 to-blue-400",
                },
                {
                  label: "Cases Recovered",
                  value: 11,
                  total: 24,
                  color: "from-green-500 to-green-400",
                },
                {
                  label: "Partially Recovered",
                  value: 5,
                  total: 24,
                  color: "from-yellow-500 to-amber-400",
                },
                {
                  label: "Pending / Active",
                  value: 8,
                  total: 24,
                  color: "from-orange-500 to-orange-400",
                },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/50">{r.label}</span>
                    <span className="text-white/80 font-semibold">
                      {r.value} / {r.total}
                    </span>
                  </div>
                  <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${r.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(r.value / r.total) * 100}%` }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Financial Breakdown */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Financial Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0">
              {[
                {
                  label: "Total Portfolio Value",
                  value: "₹21,23,950",
                  color: "text-white/80",
                },
                {
                  label: "Amount Recovered (MTD)",
                  value: "₹8,41,200",
                  color: "text-green-400",
                },
                {
                  label: "Amount Pending",
                  value: "₹9,32,750",
                  color: "text-yellow-400",
                },
                {
                  label: "Under Legal Dispute",
                  value: "₹3,50,000",
                  color: "text-red-400",
                },
                {
                  label: "Commission Earned",
                  value: "₹84,120",
                  color: "text-gold",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-3 border-b border-white/8 last:border-0"
                >
                  <span className="text-sm text-white/50">{item.label}</span>
                  <span className={`font-bold text-sm ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Performance Metrics */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg. Resolution Time", value: "14 days" },
                  { label: "Field Visits / Case", value: "2.3" },
                  { label: "Contact Rate", value: "91%" },
                  { label: "Promise to Pay Rate", value: "64%" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-4 rounded-xl bg-white/4 border border-white/8"
                  >
                    <p className="text-2xl font-bold text-gold">{m.value}</p>
                    <p className="text-xs text-white/40 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Trend Chart */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Weekly Recovery Trend (Mar 2026)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-around gap-4 h-32">
                {weeklyTrend.map((w) => (
                  <div
                    key={w.week}
                    className="flex flex-col items-center gap-2 flex-1"
                  >
                    <span className="text-xs text-gold font-semibold">
                      {w.label}
                    </span>
                    <motion.div
                      className="w-full rounded-t-md bg-gradient-to-t from-yellow-600 to-amber-400"
                      style={{ maxWidth: 48 }}
                      initial={{ height: 0 }}
                      animate={{ height: `${(w.amount / maxWeek) * 96}px` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <span className="text-xs text-white/40">{w.week}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionFade>
  );
}

function DocumentsSection() {
  const [docFilter, setDocFilter] = useState("All");
  const docFilters = [
    "All",
    "Case Documents",
    "Authorization Letters",
    "Visit Reports",
    "Receipts",
  ];
  const filtered =
    docFilter === "All"
      ? documents
      : documents.filter((d) => d.category === docFilter);

  return (
    <SectionFade>
      <Card
        className="border-white/10"
        style={{ background: "hsl(222 47% 14%)" }}
      >
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-sm font-semibold text-white/80">
              Documents ({documents.length})
            </CardTitle>
            <Button
              size="sm"
              className="bg-gold text-black hover:bg-amber-400 gap-1.5 shrink-0"
              data-ocid="documents.upload_button"
            >
              <Upload size={13} />
              Upload Document
            </Button>
          </div>
          <div
            className="flex flex-wrap gap-1.5 mt-2"
            data-ocid="documents.filter.tab"
          >
            {docFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setDocFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  docFilter === f
                    ? "bg-gold text-black"
                    : "bg-white/8 text-white/50 hover:text-white/80 hover:bg-white/12"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table data-ocid="documents.table">
              <TableHeader>
                <TableRow className="border-white/8 hover:bg-transparent">
                  {[
                    "Document Name",
                    "Category",
                    "Type",
                    "Uploaded",
                    "Status",
                  ].map((h) => (
                    <TableHead
                      key={h}
                      className="text-white/40 text-xs whitespace-nowrap"
                    >
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((doc, i) => (
                  <TableRow
                    key={doc.name}
                    className="border-white/8 hover:bg-white/3"
                    data-ocid={`documents.item.${i + 1}`}
                  >
                    <TableCell className="text-white/80 text-sm">
                      <span className="flex items-center gap-2">
                        <FileText
                          size={13}
                          className="text-white/30 shrink-0"
                        />
                        {doc.name}
                      </span>
                    </TableCell>
                    <TableCell className="text-white/40 text-xs">
                      {doc.category}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="text-xs bg-white/8 text-white/50 border-white/15"
                      >
                        {doc.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white/40 text-sm">
                      {doc.uploaded}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${docStatusColor[doc.status]}`}
                      >
                        {doc.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </SectionFade>
  );
}

function MessagesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedMsg = messages.find((m) => m.id === selected);

  return (
    <SectionFade>
      <div className="flex gap-4 h-[600px]">
        {/* Message List */}
        <div
          className={`flex-shrink-0 w-full md:w-80 flex flex-col ${selected ? "hidden md:flex" : "flex"}`}
        >
          <Card
            className="border-white/10 flex-1 flex flex-col overflow-hidden"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-2 shrink-0">
              <CardTitle className="text-sm font-semibold text-white/80">
                Inbox
              </CardTitle>
            </CardHeader>
            <ScrollArea className="flex-1">
              <div
                className="divide-y divide-white/8"
                data-ocid="messages.list"
              >
                {messages.map((msg, i) => (
                  <button
                    key={msg.id}
                    type="button"
                    onClick={() => setSelected(msg.id)}
                    className={`w-full text-left p-4 hover:bg-white/5 transition-colors ${
                      selected === msg.id ? "bg-white/8" : ""
                    }`}
                    data-ocid={`messages.item.${i + 1}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0 text-xs font-bold text-gold">
                        {msg.from[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span
                            className={`text-xs font-semibold truncate ${msg.read ? "text-white/60" : "text-white"}`}
                          >
                            {msg.from}
                          </span>
                          <span className="text-xs text-white/30 shrink-0">
                            {msg.time}
                          </span>
                        </div>
                        <p
                          className={`text-xs truncate ${msg.read ? "text-white/40" : "text-white/70"}`}
                        >
                          {msg.subject}
                        </p>
                      </div>
                      {!msg.read && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Message Detail */}
        {selectedMsg ? (
          <Card
            className="flex-1 flex flex-col overflow-hidden border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3 shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white/90 mb-1">
                    {selectedMsg.subject}
                  </p>
                  <p className="text-xs text-white/40">
                    From: {selectedMsg.from} · {selectedMsg.time}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="md:hidden text-white/40 hover:text-white"
                  data-ocid="messages.close_button"
                >
                  <X size={16} />
                </button>
              </div>
            </CardHeader>
            <Separator className="bg-white/8" />
            <CardContent className="flex-1 py-6 overflow-y-auto">
              <p className="text-sm text-white/70 leading-relaxed">
                {selectedMsg.preview}
              </p>
            </CardContent>
            <Separator className="bg-white/8" />
            <div className="p-4 flex gap-2 shrink-0">
              <Textarea
                placeholder="Type your reply..."
                className="flex-1 h-16 bg-white/5 border-white/15 text-white/80 resize-none text-sm focus:border-gold/50"
                data-ocid="messages.textarea"
              />
              <Button
                size="sm"
                className="bg-gold text-black hover:bg-amber-400 self-end"
                data-ocid="messages.submit_button"
              >
                <Send size={14} />
              </Button>
            </div>
          </Card>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="text-center" data-ocid="messages.empty_state">
              <MessageSquare size={40} className="text-white/15 mx-auto mb-3" />
              <p className="text-white/30 text-sm">Select a message to read</p>
            </div>
          </div>
        )}
      </div>
    </SectionFade>
  );
}

function ProfileSection() {
  return (
    <SectionFade>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Agency Card */}
        <Card
          className="border-white/10 lg:col-span-2"
          style={{ background: "hsl(222 47% 14%)" }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <Building2 size={24} className="text-gold" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold text-white">
                    FastTrack Recovery Services
                  </CardTitle>
                  <p className="text-xs text-white/40 mt-0.5">
                    Recovery Agency · Mumbai, Maharashtra
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white/60 hover:text-white hover:border-white/40"
                data-ocid="profile.edit_button"
              >
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  label: "License No.",
                  value: "ARG-MH-2019-0472",
                },
                {
                  icon: Globe,
                  label: "City / State",
                  value: "Mumbai, Maharashtra",
                },
                { icon: Phone, label: "Contact", value: "+91 98765 43210" },
                {
                  icon: Mail,
                  label: "Email",
                  value: "ops@fasttrackrecovery.in",
                },
                {
                  icon: CalendarDays,
                  label: "Licensed Since",
                  value: "15 June 2019",
                },
                {
                  icon: User,
                  label: "Agency Head",
                  value: "Mr. Santosh Pawar",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/3 border border-white/8"
                >
                  <info.icon size={14} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-white/35">{info.label}</p>
                    <p className="text-sm text-white/80 font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Assigned Banks */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Assigned Banks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["HDFC Bank", "ICICI Bank", "Axis Bank"].map((bank) => (
                <div
                  key={bank}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/4 border border-white/8"
                >
                  <div className="flex items-center gap-2">
                    <Building2 size={13} className="text-blue-400" />
                    <span className="text-sm text-white/70">{bank}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    Active
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Summary */}
          <Card
            className="border-white/10"
            style={{ background: "hsl(222 47% 14%)" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-white/80">
                Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Cases Recovered", value: "87%", pct: 87 },
                { label: "Agent Compliance", value: "94%", pct: 94 },
                { label: "Client Satisfaction", value: "91%", pct: 91 },
              ].map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/45">{p.label}</span>
                    <span className="text-gold font-semibold">{p.value}</span>
                  </div>
                  <Progress value={p.pct} className="h-1.5 bg-white/8" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionFade>
  );
}

const sectionComponents: Record<Section, React.ComponentType> = {
  dashboard: DashboardSection,
  cases: CasesSection,
  visits: VisitsSection,
  payments: PaymentsSection,
  reports: ReportsSection,
  documents: DocumentsSection,
  messages: MessagesSection,
  profile: ProfileSection,
};

const sectionTitles: Record<Section, string> = {
  dashboard: "Dashboard",
  cases: "My Cases",
  visits: "Field Visits",
  payments: "Payments",
  reports: "Recovery Reports",
  documents: "Documents",
  messages: "Messages",
  profile: "My Profile",
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AgencyPortal({ onBackToWebsite }: AgencyPortalProps) {
  const [activeSection, setActiveSection] = useState<Section>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActiveComponent = sectionComponents[activeSection];

  function navigate(section: Section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "hsl(222 47% 8%)" }}
    >
      {/* Sidebar Overlay (mobile) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40 h-full flex flex-col w-64 shrink-0 border-r border-white/8 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ background: "hsl(222 47% 11%)" }}
        data-ocid="agency.panel"
      >
        {/* Logo */}
        <div className="p-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center">
              <Briefcase size={16} className="text-gold" />
            </div>
            <div>
              <p className="font-bold text-sm text-white leading-none">
                FastTrack Recovery
              </p>
              <p className="text-xs text-white/40 mt-0.5">Agency Portal</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <ScrollArea className="flex-1 py-3">
          <nav className="px-3 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-gold/15 text-gold border border-gold/25"
                    : "text-white/50 hover:text-white/80 hover:bg-white/6"
                }`}
                data-ocid={`agency.${item.id}.link`}
              >
                <item.icon
                  size={16}
                  className={
                    activeSection === item.id ? "text-gold" : "text-white/35"
                  }
                />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="w-4 h-4 rounded-full bg-gold text-black text-xs font-bold flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-white/8">
          <button
            type="button"
            onClick={onBackToWebsite}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/6 transition-colors"
            data-ocid="agency.back_button"
          >
            <ArrowLeft size={15} />
            Back to Website
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header
          className="shrink-0 h-14 flex items-center justify-between px-4 border-b border-white/8"
          style={{ background: "hsl(222 47% 11%)" }}
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-white/50 hover:text-white"
              data-ocid="agency.toggle"
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="text-sm font-semibold text-white">
                {sectionTitles[activeSection]}
              </h1>
              <p className="text-xs text-white/35 hidden sm:block">
                FastTrack Recovery Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-colors relative"
              data-ocid="agency.bell.button"
            >
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gold" />
            </button>
            <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center">
              <User size={14} className="text-gold" />
            </div>
          </div>
        </header>

        {/* Content */}
        <ScrollArea className="flex-1">
          <main className="p-5">
            <AnimatePresence mode="wait">
              <ActiveComponent key={activeSection} />
            </AnimatePresence>
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}
