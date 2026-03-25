import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSearch,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";

export interface LandingPageProps {
  onEnterAdmin: () => void;
  onEnterAgency: () => void;
  onEnterArmb: () => void;
  onEnterOtherUser: () => void;
  onEnterBankOfficial: () => void;
}

const services = [
  {
    icon: TrendingUp,
    title: "Debt Recovery",
    desc: "Systematic and legal recovery of outstanding debts from individuals and corporates with a 98% success rate.",
  },
  {
    icon: Car,
    title: "Vehicle Repossession",
    desc: "Swift and compliant vehicle repossession services for banks and financial institutions across the region.",
  },
  {
    icon: FileSearch,
    title: "Field Investigation",
    desc: "Ground-level investigations, address verification, and borrower tracing by trained field agents.",
  },
  {
    icon: Shield,
    title: "Guard Deployment",
    desc: "Licensed security personnel deployed to protect assets, premises, and recovery operations.",
  },
  {
    icon: BadgeCheck,
    title: "Document Verification",
    desc: "Rigorous verification of financial documents, agreements, and identity proofs to support legal action.",
  },
  {
    icon: ClipboardList,
    title: "Case Management",
    desc: "End-to-end digital case lifecycle management from assignment to closure with real-time reporting.",
  },
];

const stats = [
  { value: "500+", label: "Cases Resolved" },
  { value: "98%", label: "Recovery Rate" },
  { value: "50+", label: "Bank Clients" },
  { value: "10+", label: "Years Experience" },
];

const whyUs = [
  {
    icon: CheckCircle2,
    title: "Legally Compliant",
    desc: "All operations strictly adhere to RBI guidelines, state regulations, and court orders — zero legal exposure for clients.",
  },
  {
    icon: Users,
    title: "Expert Field Team",
    desc: "350+ trained recovery agents, investigators, and licensed guards operating across 12 cities.",
  },
  {
    icon: Star,
    title: "Transparent Reporting",
    desc: "Real-time dashboard access with detailed case updates, attendance logs, and financial reconciliation.",
  },
];

const clients = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra",
  "IndusInd Bank",
  "Yes Bank",
];

export default function LandingPage({
  onEnterAdmin,
  onEnterAgency,
  onEnterArmb,
  onEnterOtherUser,
  onEnterBankOfficial,
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-landing-bg text-landing-fg font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-landing-bg/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center shadow-gold">
              <Shield size={18} className="text-navy" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              RecoveryHub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {["Services", "About", "Stats", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              data-ocid="nav.armb_button"
              onClick={onEnterArmb}
              variant="outline"
              className="border-armb/40 text-armb bg-transparent hover:bg-armb/10 hover:text-armb hidden lg:flex"
            >
              <Building2 size={14} className="mr-1.5" />
              ARMB
            </Button>
            <Button
              data-ocid="nav.otheruser_button"
              onClick={onEnterOtherUser}
              variant="outline"
              className="border-cyan-500/40 text-cyan-400 bg-transparent hover:bg-cyan-500/10 hover:text-cyan-400 hidden lg:flex"
            >
              <Users2 size={14} className="mr-1.5" />
              User Portal
            </Button>
            <Button
              data-ocid="nav.bankofficial_button"
              onClick={onEnterBankOfficial}
              variant="outline"
              className="border-emerald-500/40 text-emerald-400 bg-transparent hover:bg-emerald-500/10 hover:text-emerald-400 hidden lg:flex"
            >
              <Landmark size={14} className="mr-1.5" />
              Bank Official
            </Button>
            <Button
              data-ocid="nav.agency_button"
              onClick={onEnterAgency}
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white hidden sm:flex"
            >
              <Briefcase size={14} className="mr-1.5" />
              Agency Portal
            </Button>
            <Button
              data-ocid="nav.primary_button"
              onClick={onEnterAdmin}
              className="bg-gold text-navy font-semibold hover:bg-gold/90 shadow-gold"
            >
              Admin Portal
              <ChevronRight size={15} className="ml-1" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              <Shield size={12} /> Trusted Recovery Partner Since 2014
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Professional
              <span className="block text-gold">Recovery Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              India's most trusted agency for debt recovery, vehicle
              repossession, and asset management. Serving banks and financial
              institutions with speed, compliance, and precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <Button
                data-ocid="hero.primary_button"
                onClick={onEnterAdmin}
                size="lg"
                className="bg-gold text-navy font-bold text-base px-8 py-4 h-auto hover:bg-gold/90 shadow-gold"
              >
                Access Admin Dashboard
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                data-ocid="hero.agency_button"
                onClick={onEnterAgency}
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white text-base px-8 py-4 h-auto"
              >
                <Briefcase size={18} className="mr-2" />
                Agency Portal
              </Button>
              <Button
                data-ocid="hero.armb_button"
                onClick={onEnterArmb}
                size="lg"
                variant="outline"
                className="border-armb/40 text-armb bg-transparent hover:bg-armb/10 hover:text-armb text-base px-8 py-4 h-auto"
              >
                <Building2 size={18} className="mr-2" />
                ARMB Website
              </Button>
              <Button
                data-ocid="hero.otheruser_button"
                onClick={onEnterOtherUser}
                size="lg"
                variant="outline"
                className="border-cyan-500/40 text-cyan-400 bg-transparent hover:bg-cyan-500/10 hover:text-cyan-400 text-base px-8 py-4 h-auto"
              >
                <Users2 size={18} className="mr-2" />
                User Portal
              </Button>
              <Button
                data-ocid="hero.bankofficial_button"
                onClick={onEnterBankOfficial}
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-400 bg-transparent hover:bg-emerald-500/10 hover:text-emerald-400 text-base px-8 py-4 h-auto"
              >
                <Landmark size={18} className="mr-2" />
                Bank Official
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10 bg-white/3">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-gold">
                  {s.value}
                </p>
                <p className="text-sm text-white/50 mt-1 font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Services
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              End-to-end recovery and compliance services backed by technology
              and a skilled field network.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-gold/30 hover:bg-white/8 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <svc.icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {svc.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section
        id="about"
        className="py-24 px-6 border-t border-white/10 bg-white/2"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Why Choose RecoveryHub?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              A decade of field expertise combined with modern technology
              platforms — that's the RecoveryHub advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-white/30 mb-8 font-semibold">
            Trusted by leading financial institutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <span
                key={c}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portals CTA */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Access Portals
            </h2>
            <p className="text-white/50 text-sm">
              Choose your portal to get started
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gold/10 border-gold/30 group hover:bg-gold/15 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  <Shield size={24} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Admin Portal
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Full dashboard for management: guards, billing, reports, and
                  system settings.
                </p>
                <Button
                  data-ocid="cta.admin_button"
                  onClick={onEnterAdmin}
                  className="bg-gold text-navy font-bold hover:bg-gold/90 w-full"
                >
                  Enter Admin Portal
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/15 group hover:bg-white/8 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                  <Briefcase size={24} className="text-white/70" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Agency Portal
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  For field agents and recovery managers: cases, visits,
                  reports, and documents.
                </p>
                <Button
                  data-ocid="cta.agency_button"
                  onClick={onEnterAgency}
                  variant="outline"
                  className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white w-full"
                >
                  Enter Agency Portal
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-armb/10 border-armb/30 group hover:bg-armb/15 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-armb/20 border border-armb/30 flex items-center justify-center mx-auto mb-5">
                  <Building2 size={24} className="text-armb" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">ARMB</h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Government-authorized bureau for asset recovery oversight,
                  compliance, and registry.
                </p>
                <Button
                  data-ocid="cta.armb_button"
                  onClick={onEnterArmb}
                  variant="outline"
                  className="border-armb/40 text-armb bg-transparent hover:bg-armb/10 hover:text-armb w-full"
                >
                  Visit ARMB Website
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-cyan-500/10 border-cyan-500/30 group hover:bg-cyan-500/15 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5">
                  <Users2 size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  User Portal
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  For field agents and other users: tasks, cases, reports, and
                  communications.
                </p>
                <Button
                  data-ocid="cta.otheruser_button"
                  onClick={onEnterOtherUser}
                  variant="outline"
                  className="border-cyan-500/40 text-cyan-400 bg-transparent hover:bg-cyan-500/10 hover:text-cyan-400 w-full"
                >
                  Enter User Portal
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-emerald-500/10 border-emerald-500/30 group hover:bg-emerald-500/15 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                  <Landmark size={24} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Bank Official Portal
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  For bank representatives: monitor assigned cases, recovery
                  status, payments, and field reports.
                </p>
                <Button
                  data-ocid="cta.bankofficial_button"
                  onClick={onEnterBankOfficial}
                  variant="outline"
                  className="border-emerald-500/40 text-emerald-400 bg-transparent hover:bg-emerald-500/10 hover:text-emerald-400 w-full"
                >
                  Enter Bank Portal
                  <ArrowRight size={15} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Get in Touch
            </h2>
            <p className="text-white/50">
              Ready to partner with us? Reach out to our business team today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 98765 43210",
                sub: "Mon–Sat, 9 AM – 7 PM",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@recoveryhub.in",
                sub: "We respond within 24 hours",
              },
              {
                icon: MapPin,
                label: "Head Office",
                value: "Plot 42, Andheri East",
                sub: "Mumbai, Maharashtra 400069",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className="bg-white/5 border-white/10 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-sm">
                    {item.value}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{item.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-gold" />
            <span className="font-semibold text-white/60">
              RecoveryHub Agency
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} RecoveryHub Agency. All rights
            reserved.
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
