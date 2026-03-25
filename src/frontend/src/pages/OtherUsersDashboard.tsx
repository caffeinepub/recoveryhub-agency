import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Calendar,
  CheckSquare,
  ClipboardList,
  FileText,
  Globe,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageSquare,
  TrendingUp,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface OtherUsersDashboardProps {
  onBackToWebsite: () => void;
}

type Section =
  | "home"
  | "tasks"
  | "cases"
  | "visits"
  | "reports"
  | "communications"
  | "documents"
  | "profile";

const navItems = [
  { id: "home" as Section, label: "Dashboard Home", icon: LayoutDashboard },
  { id: "tasks" as Section, label: "My Tasks", icon: CheckSquare },
  { id: "cases" as Section, label: "Case Status", icon: ClipboardList },
  { id: "visits" as Section, label: "Field Visits", icon: MapPin },
  { id: "reports" as Section, label: "Recovery Reports", icon: TrendingUp },
  {
    id: "communications" as Section,
    label: "Communications",
    icon: MessageSquare,
  },
  { id: "documents" as Section, label: "Document Requests", icon: FileText },
  { id: "profile" as Section, label: "My Profile", icon: User },
];

const tasks = [
  {
    id: "TSK-101",
    desc: "Verify address of Rajesh Kumar",
    priority: "High",
    due: "2026-03-25",
    status: "In Progress",
  },
  {
    id: "TSK-102",
    desc: "Submit vehicle recovery report",
    priority: "High",
    due: "2026-03-24",
    status: "Pending",
  },
  {
    id: "TSK-103",
    desc: "Client document collection – Mehta",
    priority: "Medium",
    due: "2026-03-28",
    status: "Pending",
  },
  {
    id: "TSK-104",
    desc: "Field visit to Andheri branch",
    priority: "Low",
    due: "2026-03-30",
    status: "Done",
  },
  {
    id: "TSK-105",
    desc: "Follow up on overdue account #4421",
    priority: "High",
    due: "2026-03-26",
    status: "In Progress",
  },
  {
    id: "TSK-106",
    desc: "Prepare monthly field activity report",
    priority: "Medium",
    due: "2026-04-01",
    status: "Pending",
  },
  {
    id: "TSK-107",
    desc: "Asset inspection at Goregaon site",
    priority: "Low",
    due: "2026-04-03",
    status: "Done",
  },
  {
    id: "TSK-108",
    desc: "Legal notice delivery – Sharma case",
    priority: "High",
    due: "2026-03-27",
    status: "In Progress",
  },
];

const cases = [
  {
    no: "CAS-2401",
    client: "Rajesh Kumar",
    asset: "Vehicle",
    assigned: "2026-01-10",
    status: "Active",
    updated: "2026-03-20",
  },
  {
    no: "CAS-2402",
    client: "Sunita Mehta",
    asset: "Property",
    assigned: "2026-01-15",
    status: "Pending",
    updated: "2026-03-18",
  },
  {
    no: "CAS-2403",
    client: "Anil Sharma",
    asset: "Machinery",
    assigned: "2026-02-01",
    status: "Closed",
    updated: "2026-03-10",
  },
  {
    no: "CAS-2404",
    client: "Priya Patel",
    asset: "Vehicle",
    assigned: "2026-02-10",
    status: "Active",
    updated: "2026-03-21",
  },
  {
    no: "CAS-2405",
    client: "Mohammed Farooq",
    asset: "Commercial",
    assigned: "2026-02-20",
    status: "Legal",
    updated: "2026-03-19",
  },
  {
    no: "CAS-2406",
    client: "Deepa Nair",
    asset: "Gold Ornaments",
    assigned: "2026-03-01",
    status: "Pending",
    updated: "2026-03-22",
  },
  {
    no: "CAS-2407",
    client: "Vikram Singh",
    asset: "Vehicle",
    assigned: "2026-03-05",
    status: "Active",
    updated: "2026-03-23",
  },
  {
    no: "CAS-2408",
    client: "Kavitha Reddy",
    asset: "Property",
    assigned: "2026-03-08",
    status: "Closed",
    updated: "2026-03-15",
  },
];

const visits = [
  {
    id: "VIS-301",
    address: "14-B Goregaon East, Mumbai",
    agent: "Rajesh Kumar",
    datetime: "2026-03-24 10:00",
    purpose: "Verification",
    status: "Scheduled",
  },
  {
    id: "VIS-302",
    address: "Flat 5, Andheri West, Mumbai",
    agent: "Arjun Das",
    datetime: "2026-03-24 14:00",
    purpose: "Recovery",
    status: "Completed",
  },
  {
    id: "VIS-303",
    address: "Plot 22, Thane West",
    agent: "Rajesh Kumar",
    datetime: "2026-03-25 09:30",
    purpose: "Survey",
    status: "Scheduled",
  },
  {
    id: "VIS-304",
    address: "Shop 8, Dadar, Mumbai",
    agent: "Meena Shah",
    datetime: "2026-03-23 11:00",
    purpose: "Verification",
    status: "Completed",
  },
  {
    id: "VIS-305",
    address: "Flat 12, Kurla East",
    agent: "Rajesh Kumar",
    datetime: "2026-03-26 16:00",
    purpose: "Recovery",
    status: "Pending",
  },
  {
    id: "VIS-306",
    address: "Office 3B, BKC, Mumbai",
    agent: "Suresh Rao",
    datetime: "2026-03-27 10:30",
    purpose: "Survey",
    status: "Scheduled",
  },
];

const reports = [
  {
    id: "RPT-501",
    caseRef: "CAS-2401",
    date: "2026-03-20",
    amount: "₹1,24,500",
    status: "Approved",
  },
  {
    id: "RPT-502",
    caseRef: "CAS-2403",
    date: "2026-03-18",
    amount: "₹2,35,000",
    status: "Submitted",
  },
  {
    id: "RPT-503",
    caseRef: "CAS-2407",
    date: "2026-03-22",
    amount: "₹67,800",
    status: "Pending Review",
  },
  {
    id: "RPT-504",
    caseRef: "CAS-2404",
    date: "2026-03-15",
    amount: "₹56,750",
    status: "Approved",
  },
  {
    id: "RPT-505",
    caseRef: "CAS-2402",
    date: "2026-03-21",
    amount: "₹87,200",
    status: "Pending Review",
  },
  {
    id: "RPT-506",
    caseRef: "CAS-2408",
    date: "2026-03-10",
    amount: "₹44,300",
    status: "Submitted",
  },
];

const messages = [
  {
    id: 1,
    sender: "Admin Office",
    subject: "Monthly Target Update",
    preview: "Your targets for March have been updated. Please review...",
    date: "Mar 23",
    unread: true,
  },
  {
    id: 2,
    sender: "Priya (Supervisor)",
    subject: "Case CAS-2401 Update Required",
    preview:
      "Please submit the updated field notes for Rajesh Kumar case by...",
    date: "Mar 22",
    unread: true,
  },
  {
    id: 3,
    sender: "HR Department",
    subject: "Leave Application Approved",
    preview: "Your leave application for 28 March has been approved.",
    date: "Mar 21",
    unread: false,
  },
  {
    id: 4,
    sender: "Legal Team",
    subject: "Notice Served – CAS-2405",
    preview: "Legal notice for Mohammed Farooq has been served. File attached.",
    date: "Mar 20",
    unread: true,
  },
  {
    id: 5,
    sender: "IT Support",
    subject: "Password Reset Reminder",
    preview: "Your portal password is due for reset. Kindly update before...",
    date: "Mar 19",
    unread: false,
  },
  {
    id: 6,
    sender: "Finance Dept",
    subject: "Expense Claim Processed",
    preview: "Your field expense claim of ₹4,200 has been processed.",
    date: "Mar 18",
    unread: false,
  },
];

const docRequests = [
  {
    id: "DOC-801",
    name: "KYC Documents – Rajesh Kumar",
    by: "Legal Team",
    date: "2026-03-20",
    status: "Uploaded",
  },
  {
    id: "DOC-802",
    name: "Vehicle RC Copy – CAS-2407",
    by: "Admin",
    date: "2026-03-21",
    status: "Pending",
  },
  {
    id: "DOC-803",
    name: "Bank Statement – Priya Patel",
    by: "Finance",
    date: "2026-03-18",
    status: "Rejected",
  },
  {
    id: "DOC-804",
    name: "Field Visit Photo Evidence – VIS-303",
    by: "Supervisor",
    date: "2026-03-22",
    status: "Pending",
  },
  {
    id: "DOC-805",
    name: "Court Order Copy – CAS-2405",
    by: "Legal Team",
    date: "2026-03-17",
    status: "Uploaded",
  },
  {
    id: "DOC-806",
    name: "Insurance Certificate – CAS-2401",
    by: "Admin",
    date: "2026-03-23",
    status: "Pending",
  },
];

const activity = [
  { time: "09:15 AM", text: "Completed field visit VIS-302 at Andheri West" },
  { time: "11:30 AM", text: "Submitted Recovery Report RPT-502" },
  { time: "01:45 PM", text: "Updated case status for CAS-2407" },
  { time: "03:00 PM", text: "Received message from Supervisor re: CAS-2401" },
  { time: "04:20 PM", text: "Document DOC-801 uploaded successfully" },
];

function priorityBadge(p: string) {
  if (p === "High")
    return (
      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
        {p}
      </Badge>
    );
  if (p === "Medium")
    return (
      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
        {p}
      </Badge>
    );
  return (
    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
      {p}
    </Badge>
  );
}

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Active: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Closed: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    Legal: "bg-red-500/20 text-red-400 border-red-500/30",
    Done: "bg-green-500/20 text-green-400 border-green-500/30",
    "In Progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Completed: "bg-green-500/20 text-green-400 border-green-500/30",
    Scheduled: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Approved: "bg-green-500/20 text-green-400 border-green-500/30",
    Submitted: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Pending Review": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Uploaded: "bg-green-500/20 text-green-400 border-green-500/30",
    Rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return (
    <Badge
      className={map[s] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"}
    >
      {s}
    </Badge>
  );
}

export default function OtherUsersDashboard({
  onBackToWebsite,
}: OtherUsersDashboardProps) {
  const [active, setActive] = useState<Section>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const current = navItems.find((n) => n.id === active)!;

  return (
    <div className="flex h-screen bg-[oklch(0.13_0.025_240)] text-white overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[oklch(0.17_0.03_240)] border-r border-white/10 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <Globe size={15} className="text-cyan-400" />
            </div>
            <span className="font-bold text-sm text-white">RecoveryHub</span>
          </div>
          <p className="text-xs text-white/40 ml-10">User Portal</p>
        </div>
        <ScrollArea className="flex-1 py-3">
          <nav className="px-3 space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  data-ocid={`sidebar.${item.id}_tab`}
                  onClick={() => {
                    setActive(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    active === item.id
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="p-3 border-t border-white/10">
          <Button
            data-ocid="sidebar.back_button"
            onClick={onBackToWebsite}
            variant="outline"
            className="w-full border-white/20 text-white/60 bg-transparent hover:bg-white/5 hover:text-white text-sm"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to Website
          </Button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 border-b border-white/10 bg-[oklch(0.17_0.03_240)] flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden text-white/60 hover:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Briefcase size={18} />
            </button>
            <h1 className="font-semibold text-sm text-white">
              {current.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative text-white/50 hover:text-white"
            >
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-[9px] text-white flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <User size={13} className="text-cyan-400" />
            </div>
            <span className="text-xs text-white/60 hidden sm:block">
              Rajesh Kumar
            </span>
            <Button
              data-ocid="topbar.back_button"
              onClick={onBackToWebsite}
              variant="outline"
              size="sm"
              className="border-white/20 text-white/60 bg-transparent hover:bg-white/5 hover:text-white text-xs hidden sm:flex"
            >
              <ArrowLeft size={12} className="mr-1" />
              Website
            </Button>
          </div>
        </header>

        {/* Content */}
        <ScrollArea className="flex-1">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-6"
          >
            {/* Dashboard Home */}
            {active === "home" && (
              <div className="space-y-6">
                <Card className="bg-cyan-500/10 border-cyan-500/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-white mb-1">
                      Welcome back, Rajesh Kumar 👋
                    </h2>
                    <p className="text-white/50 text-sm">
                      Field Agent · West Zone · Employee ID: RH-2041
                    </p>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Active Tasks",
                      value: "12",
                      icon: CheckSquare,
                      color: "cyan",
                    },
                    {
                      label: "Pending Cases",
                      value: "7",
                      icon: ClipboardList,
                      color: "yellow",
                    },
                    {
                      label: "Visits Today",
                      value: "3",
                      icon: MapPin,
                      color: "green",
                    },
                    {
                      label: "Messages",
                      value: "5",
                      icon: Mail,
                      color: "blue",
                    },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <Card
                        key={stat.label}
                        className="bg-white/5 border-white/10"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-white/50">
                              {stat.label}
                            </span>
                            <Icon size={14} className="text-white/30" />
                          </div>
                          <div
                            className="text-2xl font-bold text-white"
                            data-ocid={`home.stat.${i + 1}`}
                          >
                            {stat.value}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <Card className="bg-white/5 border-white/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold text-white/70">
                      Today's Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {activity.map((a, idx) => (
                      <div
                        key={a.time}
                        className="flex items-start gap-3"
                        data-ocid={`activity.item.${idx + 1}`}
                      >
                        <span className="text-xs text-cyan-400 font-mono w-20 shrink-0">
                          {a.time}
                        </span>
                        <span className="text-sm text-white/70">{a.text}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* My Tasks */}
            {active === "tasks" && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    My Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-white/50 text-xs">
                          Task ID
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Description
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Priority
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Due Date
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tasks.map((t, i) => (
                        <TableRow
                          key={t.id}
                          className="border-white/10 hover:bg-white/3"
                          data-ocid={`tasks.item.${i + 1}`}
                        >
                          <TableCell className="text-cyan-400 text-xs font-mono">
                            {t.id}
                          </TableCell>
                          <TableCell className="text-white/80 text-sm">
                            {t.desc}
                          </TableCell>
                          <TableCell>{priorityBadge(t.priority)}</TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {t.due}
                          </TableCell>
                          <TableCell>{statusBadge(t.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* Case Status */}
            {active === "cases" && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    Case Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-white/50 text-xs">
                          Case No
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Client Name
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Asset Type
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Assigned Date
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Status
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Last Updated
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cases.map((c, i) => (
                        <TableRow
                          key={c.no}
                          className="border-white/10 hover:bg-white/3"
                          data-ocid={`cases.item.${i + 1}`}
                        >
                          <TableCell className="text-cyan-400 text-xs font-mono">
                            {c.no}
                          </TableCell>
                          <TableCell className="text-white/80 text-sm">
                            {c.client}
                          </TableCell>
                          <TableCell className="text-white/60 text-xs">
                            {c.asset}
                          </TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {c.assigned}
                          </TableCell>
                          <TableCell>{statusBadge(c.status)}</TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {c.updated}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* Field Visits */}
            {active === "visits" && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    Field Visits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-white/50 text-xs">
                          Visit ID
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Location
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Agent
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Date / Time
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Purpose
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {visits.map((v, i) => (
                        <TableRow
                          key={v.id}
                          className="border-white/10 hover:bg-white/3"
                          data-ocid={`visits.item.${i + 1}`}
                        >
                          <TableCell className="text-cyan-400 text-xs font-mono">
                            {v.id}
                          </TableCell>
                          <TableCell className="text-white/80 text-sm">
                            {v.address}
                          </TableCell>
                          <TableCell className="text-white/60 text-sm">
                            {v.agent}
                          </TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {v.datetime}
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-white/10 text-white/70 border-white/20">
                              {v.purpose}
                            </Badge>
                          </TableCell>
                          <TableCell>{statusBadge(v.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* Recovery Reports */}
            {active === "reports" && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    Recovery Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-white/50 text-xs">
                          Report ID
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Case Ref
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Date
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Recovery Amount
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Status
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reports.map((r, i) => (
                        <TableRow
                          key={r.id}
                          className="border-white/10 hover:bg-white/3"
                          data-ocid={`reports.item.${i + 1}`}
                        >
                          <TableCell className="text-cyan-400 text-xs font-mono">
                            {r.id}
                          </TableCell>
                          <TableCell className="text-white/60 text-xs font-mono">
                            {r.caseRef}
                          </TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {r.date}
                          </TableCell>
                          <TableCell className="text-white font-semibold text-sm">
                            {r.amount}
                          </TableCell>
                          <TableCell>{statusBadge(r.status)}</TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="outline"
                              data-ocid={`reports.view_button.${i + 1}`}
                              className="border-cyan-500/30 text-cyan-400 bg-transparent hover:bg-cyan-500/10 text-xs h-7"
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
            )}

            {/* Communications */}
            {active === "communications" && (
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-white">Inbox</h2>
                {messages.map((m, i) => (
                  <Card
                    key={m.id}
                    className={`border transition-all cursor-pointer hover:bg-white/8 ${
                      m.unread
                        ? "bg-cyan-500/8 border-cyan-500/20"
                        : "bg-white/5 border-white/10"
                    }`}
                    data-ocid={`communications.item.${i + 1}`}
                  >
                    <CardContent className="p-4 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          {m.unread && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                          )}
                          <span className="font-semibold text-sm text-white truncate">
                            {m.sender}
                          </span>
                        </div>
                        <p className="text-sm text-white/70 truncate">
                          {m.subject}
                        </p>
                        <p className="text-xs text-white/40 truncate mt-0.5">
                          {m.preview}
                        </p>
                      </div>
                      <span className="text-xs text-white/40 shrink-0">
                        {m.date}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Document Requests */}
            {active === "documents" && (
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-base">
                    Document Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-white/50 text-xs">
                          Doc ID
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Document Name
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Requested By
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Date
                        </TableHead>
                        <TableHead className="text-white/50 text-xs">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {docRequests.map((d, i) => (
                        <TableRow
                          key={d.id}
                          className="border-white/10 hover:bg-white/3"
                          data-ocid={`documents.item.${i + 1}`}
                        >
                          <TableCell className="text-cyan-400 text-xs font-mono">
                            {d.id}
                          </TableCell>
                          <TableCell className="text-white/80 text-sm">
                            {d.name}
                          </TableCell>
                          <TableCell className="text-white/60 text-sm">
                            {d.by}
                          </TableCell>
                          <TableCell className="text-white/50 text-xs">
                            {d.date}
                          </TableCell>
                          <TableCell>{statusBadge(d.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* My Profile */}
            {active === "profile" && (
              <div className="space-y-6 max-w-2xl">
                <Card className="bg-cyan-500/10 border-cyan-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/40 flex items-center justify-center">
                        <User size={28} className="text-cyan-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          Rajesh Kumar
                        </h2>
                        <p className="text-cyan-400 text-sm">Field Agent</p>
                        <p className="text-white/40 text-xs">
                          Employee ID: RH-2041
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Phone", value: "+91 98765 43210" },
                        {
                          label: "Email",
                          value: "rajesh.kumar@recoveryhub.in",
                        },
                        { label: "Zone", value: "West Zone" },
                        { label: "Joined", value: "January 2022" },
                        { label: "Supervisor", value: "Priya Sharma" },
                        { label: "Branch", value: "Mumbai HQ" },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-xs text-white/40 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm text-white/80 font-medium">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">
                      Performance Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Cases Closed", value: "47" },
                        { label: "Visits Done", value: "132" },
                        { label: "Reports Filed", value: "38" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="text-center p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="text-2xl font-bold text-cyan-400">
                            {s.value}
                          </div>
                          <div className="text-xs text-white/50 mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </ScrollArea>
      </div>
    </div>
  );
}
