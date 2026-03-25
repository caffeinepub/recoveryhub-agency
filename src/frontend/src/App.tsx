import { Globe } from "lucide-react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ARMBWebsite from "./pages/ARMBWebsite";
import AgencyPortal from "./pages/AgencyPortal";
import AssetManagement from "./pages/AssetManagement";
import Attendance from "./pages/Attendance";
import BankClients from "./pages/BankClients";
import BankOfficialDashboard from "./pages/BankOfficialDashboard";
import Billing from "./pages/Billing";
import CaseUploads from "./pages/CaseUploads";
import GuardManagement from "./pages/GuardManagement";
import LandingPage from "./pages/LandingPage";
import Notifications from "./pages/Notifications";
import OtherUsersDashboard from "./pages/OtherUsersDashboard";
import Overview from "./pages/Overview";
import QueryManagement from "./pages/QueryManagement";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export type Section =
  | "overview"
  | "guards"
  | "uploads"
  | "attendance"
  | "billing"
  | "queries"
  | "assets"
  | "clients"
  | "reports"
  | "notifications"
  | "settings";

export default function App() {
  const [view, setView] = useState<
    "website" | "admin" | "agency" | "armb" | "otheruser" | "bankofficial"
  >("website");
  const [active, setActive] = useState<Section>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (view === "website") {
    return (
      <LandingPage
        onEnterAdmin={() => setView("admin")}
        onEnterAgency={() => setView("agency")}
        onEnterArmb={() => setView("armb")}
        onEnterOtherUser={() => setView("otheruser")}
        onEnterBankOfficial={() => setView("bankofficial")}
      />
    );
  }

  if (view === "agency") {
    return <AgencyPortal onBackToWebsite={() => setView("website")} />;
  }

  if (view === "armb") {
    return <ARMBWebsite onBackToMain={() => setView("website")} />;
  }

  if (view === "bankofficial") {
    return <BankOfficialDashboard onBackToWebsite={() => setView("website")} />;
  }

  if (view === "otheruser") {
    return <OtherUsersDashboard onBackToWebsite={() => setView("website")} />;
  }

  const renderPage = () => {
    switch (active) {
      case "overview":
        return <Overview />;
      case "guards":
        return <GuardManagement />;
      case "uploads":
        return <CaseUploads />;
      case "attendance":
        return <Attendance />;
      case "billing":
        return <Billing />;
      case "queries":
        return <QueryManagement />;
      case "assets":
        return <AssetManagement />;
      case "clients":
        return <BankClients />;
      case "reports":
        return <Reports />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        active={active}
        onNavigate={(s) => {
          setActive(s);
          setSidebarOpen(false);
        }}
        onBackToWebsite={() => setView("website")}
        open={sidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onBackToWebsite={() => setView("website")}
          section={active}
        />
        <main className="flex-1 overflow-auto p-4 md:p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
