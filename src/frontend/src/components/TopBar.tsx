import { Bell, Globe, Mail, Menu, Search } from "lucide-react";
import type { Section } from "../App";

const labels: Record<Section, string> = {
  overview: "Dashboard",
  guards: "Guard Management",
  uploads: "Case Uploads",
  attendance: "Attendance",
  billing: "Billing",
  queries: "Query Management",
  assets: "Asset Management",
  clients: "Bank & Clients",
  reports: "Reports",
  notifications: "Notifications",
  settings: "Settings",
};

interface Props {
  onMenuClick: () => void;
  section: Section;
  onBackToWebsite: () => void;
}

export default function TopBar({
  onMenuClick,
  section,
  onBackToWebsite,
}: Props) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-4 md:px-6 gap-4 shrink-0">
      <button
        type="button"
        className="lg:hidden text-muted-foreground hover:text-foreground"
        onClick={onMenuClick}
      >
        <Menu size={20} />
      </button>
      <div className="flex-1">
        <p className="text-xs text-muted-foreground">Welcome back, Sarah!</p>
        <h1 className="text-base font-semibold text-foreground">
          {labels[section]}
        </h1>
      </div>
      <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
        <Search size={14} className="text-muted-foreground" />
        <input
          placeholder="Search..."
          className="bg-transparent text-sm outline-none w-40 placeholder:text-muted-foreground"
        />
      </div>
      <button
        type="button"
        data-ocid="topbar.link"
        onClick={onBackToWebsite}
        className="hidden md:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-muted border border-border"
      >
        <Globe size={13} />
        Website
      </button>
      <button
        type="button"
        className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
      >
        <Mail size={18} />
      </button>
      <button
        type="button"
        className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
      >
        <Bell size={18} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      </button>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
        SA
      </div>
    </header>
  );
}
