import {
  BarChart2,
  Bell,
  Building2,
  CalendarDays,
  CreditCard,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Package,
  Settings,
  Shield,
  Upload,
  X,
} from "lucide-react";
import type { Section } from "../App";

const nav: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "guards", label: "Guard Management", icon: Shield },
  { id: "uploads", label: "Case Uploads", icon: Upload },
  { id: "attendance", label: "Attendance", icon: CalendarDays },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "queries", label: "Query Management", icon: MessageCircle },
  { id: "assets", label: "Asset Management", icon: Package },
  { id: "clients", label: "Bank & Clients", icon: Building2 },
  { id: "reports", label: "Reports", icon: BarChart2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

interface Props {
  active: Section;
  onNavigate: (s: Section) => void;
  open: boolean;
  onBackToWebsite: () => void;
}

export default function Sidebar({
  active,
  onNavigate,
  open,
  onBackToWebsite,
}: Props) {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-30 w-60 flex flex-col bg-sidebar text-sidebar-foreground transition-transform duration-200 ${
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield size={16} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight">
            RecoveryHub
          </span>
        </div>
        <button
          type="button"
          className="lg:hidden text-sidebar-foreground/60 hover:text-sidebar-foreground"
          onClick={() => onNavigate(active)}
        >
          <X size={18} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {nav.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            key={id}
            onClick={() => onNavigate(id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active === id
                ? "bg-primary text-primary-foreground"
                : "text-sidebar-foreground/70 hover:bg-white/10 hover:text-sidebar-foreground"
            }`}
          >
            <Icon size={17} />
            {label}
            {id === "notifications" && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* User + back to website */}
      <div className="px-4 py-4 border-t border-white/10 space-y-3">
        <button
          type="button"
          data-ocid="sidebar.link"
          onClick={onBackToWebsite}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-sidebar-foreground/60 hover:bg-white/10 hover:text-sidebar-foreground transition-colors"
        >
          <Globe size={14} />
          Back to Website
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold">
            SA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate">Sarah Admin</p>
            <p className="text-xs text-sidebar-foreground/50">Agency Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
