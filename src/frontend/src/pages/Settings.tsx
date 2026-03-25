import { Save } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("Agency Profile");

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage agency profile and preferences
        </p>
      </div>

      <div className="flex gap-2">
        {["Agency Profile", "Preferences"].map((t) => (
          <button
            type="button"
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Agency Profile" ? (
        <div className="bg-card rounded-xl border border-border p-6 max-w-2xl">
          <h3 className="font-semibold mb-5">Agency Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Agency Name", value: "RecoveryHub Agency (Pty) Ltd" },
              { label: "Registration Number", value: "2018/234567/07" },
              { label: "Contact Person", value: "Sarah Admin" },
              { label: "Phone Number", value: "011 555 0100" },
              { label: "Email Address", value: "info@recoveryhub.co.za" },
              { label: "Website", value: "www.recoveryhub.co.za" },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs text-muted-foreground font-medium block mb-1">
                  {f.label}
                </p>
                <input
                  defaultValue={f.value}
                  className="w-full bg-muted border-0 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <p className="text-xs text-muted-foreground font-medium block mb-1">
                Physical Address
              </p>
              <textarea
                defaultValue="12 Sandton Drive, Sandton, Johannesburg, 2196"
                rows={2}
                className="w-full bg-muted border-0 rounded-lg px-3 py-2.5 text-sm outline-none resize-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-5 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90"
          >
            <Save size={15} /> Save Changes
          </button>
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border p-6 max-w-2xl">
          <h3 className="font-semibold mb-5">Preferences</h3>
          <div className="space-y-5">
            {[
              {
                label: "Email Notifications",
                desc: "Receive updates via email",
                on: true,
              },
              {
                label: "Case Upload Alerts",
                desc: "Alert when new cases are uploaded",
                on: true,
              },
              {
                label: "Daily Summary Report",
                desc: "Send daily attendance & case summary",
                on: false,
              },
              {
                label: "Invoice Reminders",
                desc: "Notify before invoice due dates",
                on: true,
              },
            ].map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-between py-3 border-b border-border"
              >
                <div>
                  <p className="text-sm font-medium">{p.label}</p>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
                <div
                  className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${
                    p.on ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      p.on ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
