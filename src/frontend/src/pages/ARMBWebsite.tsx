import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Building2,
  ChevronRight,
  FileText,
  Gavel,
  Globe2,
  Mail,
  MapPin,
  Network,
  Phone,
  Scale,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

export interface ARMBWebsiteProps {
  onBackToMain: () => void;
}

const armbStats = [
  { value: "1200+", label: "Assets Managed" },
  { value: "15+", label: "Years Authority" },
  { value: "200+", label: "Partner Agencies" },
  { value: "99.2%", label: "Compliance Rate" },
];

const armbServices = [
  {
    icon: Shield,
    title: "Asset Seizure & Custody",
    desc: "Government-authorized seizure of disputed and defaulted assets, with secure custody management and chain-of-title documentation.",
  },
  {
    icon: Gavel,
    title: "Auction Management",
    desc: "Transparent, court-approved auction processes for seized assets, ensuring maximum value realization and regulatory compliance.",
  },
  {
    icon: Scale,
    title: "Legal Coordination",
    desc: "Full coordination with courts, tribunals, and legal authorities to ensure all recovery proceedings adhere to statutory frameworks.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Oversight",
    desc: "Continuous monitoring and enforcement of compliance standards across all registered recovery agencies and operations.",
  },
  {
    icon: BookOpen,
    title: "Registry Management",
    desc: "Centralized national registry of all managed assets, ownership records, and recovery status updated in real time.",
  },
  {
    icon: FileText,
    title: "Dispute Resolution",
    desc: "Independent arbitration and resolution services for disputes arising from recovery proceedings, enforced by bureau authority.",
  },
];

const pillars = [
  {
    icon: Globe2,
    title: "Transparency",
    desc: "Every asset action is recorded, audited, and publicly accountable. ARMB operates under the highest standards of governmental transparency.",
  },
  {
    icon: Scale,
    title: "Legal Authority",
    desc: "ARMB derives its mandate directly from parliamentary statute, with full enforcement powers under national asset recovery law.",
  },
  {
    icon: Network,
    title: "Nationwide Network",
    desc: "Operating across 28 states and union territories through 200+ registered partner agencies, ensuring uniform standards nationwide.",
  },
];

const team = [
  {
    name: "Dr. Rajiv Sinha",
    title: "Director General",
    initial: "RS",
    note: "IAS (Retd.), Former Secretary, Ministry of Finance",
  },
  {
    name: "Ms. Kavitha Menon",
    title: "Deputy Director",
    initial: "KM",
    note: "IRS Officer, Asset Recovery Specialist",
  },
  {
    name: "Adv. Suresh Kapoor",
    title: "Legal Counsel",
    initial: "SK",
    note: "Senior Advocate, Supreme Court of India",
  },
  {
    name: "Mr. Anil Thadani",
    title: "Operations Head",
    initial: "AT",
    note: "25 Years Field Operations Experience",
  },
];

export default function ARMBWebsite({ onBackToMain }: ARMBWebsiteProps) {
  return (
    <div className="min-h-screen bg-landing-bg text-landing-fg font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-landing-bg/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-armb flex items-center justify-center shadow-armb">
              <Building2 size={18} className="text-navy" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              ARMB
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {["Services", "About", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-armb transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Button
            data-ocid="nav.back_button"
            onClick={onBackToMain}
            variant="outline"
            className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={14} className="mr-1.5" />
            Back to RecoveryHub
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-armb/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-armb bg-armb/10 border border-armb/20 rounded-full px-4 py-1.5 mb-6">
              <Award size={12} /> Government Authorized Bureau
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Asset Recovery
              <span className="block text-armb">Management Bureau</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              India's apex government-authorized authority for asset recovery
              oversight, compliance enforcement, and nationwide registry
              management. Ensuring legal, transparent, and accountable recovery
              operations across the nation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                data-ocid="hero.primary_button"
                onClick={onBackToMain}
                size="lg"
                className="bg-armb text-navy font-bold text-base px-8 py-4 h-auto hover:bg-armb/90 shadow-armb"
              >
                Visit RecoveryHub
                <ChevronRight size={18} className="ml-2" />
              </Button>
              <a href="#contact">
                <Button
                  data-ocid="hero.contact_button"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white text-base px-8 py-4 h-auto"
                >
                  <Phone size={18} className="mr-2" />
                  Contact Bureau
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-white/3">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {armbStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-armb">
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
              Bureau Services
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Comprehensive government-backed services for asset recovery,
              compliance, and legal oversight.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {armbServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-armb/30 hover:bg-white/8 transition-all group h-full">
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-armb/10 border border-armb/20 flex items-center justify-center mb-4 group-hover:bg-armb/20 transition-colors">
                      <svc.icon size={20} className="text-armb" />
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

      {/* About / Mission */}
      <section
        id="about"
        className="py-24 px-6 border-t border-white/10 bg-white/2"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Mission & Pillars
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              ARMB exists to uphold the rule of law in asset recovery, ensuring
              every operation is transparent, legally grounded, and nationally
              coordinated.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-armb/10 border border-armb/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={24} className="text-armb" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Bureau Leadership
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Senior officials with decades of public service, legal expertise,
              and field operations experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 text-center hover:border-armb/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-armb/20 border-2 border-armb/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-armb font-bold text-lg">
                        {member.initial}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {member.name}
                    </h4>
                    <p className="text-armb text-xs font-medium mb-2">
                      {member.title}
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {member.note}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-white/10 bg-white/2"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Contact the Bureau
            </h2>
            <p className="text-white/50">
              Reach out to ARMB for compliance queries, agency registration, or
              official correspondence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                label: "Official Helpline",
                value: "+91 11 2345 6789",
                sub: "Mon–Fri, 9 AM – 6 PM",
              },
              {
                icon: Mail,
                label: "Official Email",
                value: "bureau@armb.gov.in",
                sub: "Response within 2 working days",
              },
              {
                icon: MapPin,
                label: "Bureau Headquarters",
                value: "Bhikaji Cama Place, RK Puram",
                sub: "New Delhi – 110066",
              },
            ].map((item) => (
              <Card
                key={item.label}
                className="bg-white/5 border-white/10 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-armb/10 border border-armb/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-armb" />
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
            <Building2 size={14} className="text-armb" />
            <span className="font-semibold text-white/60">
              Asset Recovery Management Bureau
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} ARMB — Government of India. All rights
            reserved.
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-armb/70 hover:text-armb transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
