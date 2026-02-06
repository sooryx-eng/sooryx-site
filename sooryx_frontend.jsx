import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Building2, LineChart, ShieldCheck } from "lucide-react";

export default function Sooryx() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sun className="text-amber-400" />
          <span className="text-2xl font-semibold tracking-tight">Sooryx</span>
        </div>
        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#" className="hover:text-white transition">Platform</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Developers</a>
          <a href="#" className="hover:text-white transition">Company</a>
        </div>
        <Button className="bg-white text-black hover:bg-slate-200">
          Request Access
        </Button>
      </nav>

      {/* HERO */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Institutional Solar
            <span className="text-amber-400"> Infrastructure</span>
            <br />for Modern India
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl">
            Sooryx is the operating layer for community solar, virtual net metering,
            and distributed energy assets. We enable societies, funds, and
            enterprises to originate, finance, and manage solar infrastructure
            with institutional precision.
          </p>
          <div className="flex gap-4 mt-8">
            <Button className="bg-amber-400 text-black hover:bg-amber-300">
              Book Institutional Demo
            </Button>
            <Button variant="outline" className="border-slate-700">
              View Platform
            </Button>
          </div>
        </motion.div>

        {/* HERO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-900 border-slate-800 rounded-2xl shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Managed Capacity</span>
                  <span className="text-xl font-semibold">2.4 GW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Projected Savings</span>
                  <span className="text-xl font-semibold">₹1,280 Cr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Assets</span>
                  <span className="text-xl font-semibold">18,942</span>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-slate-400 text-sm">
                    Real-time asset orchestration, automated billing, subsidy
                    workflows, and financing rails — unified into a single
                    infrastructure stack.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900 border-slate-800 h-full rounded-2xl hover:border-amber-400 transition">
                <CardContent className="p-6 space-y-4">
                  <feature.icon className="text-amber-400" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-8 py-20 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            The Financial Layer for Distributed Energy
          </h2>
          <p className="text-slate-400 mt-4">
            Built for institutions. Accessible to communities. Designed to scale
            across India.
          </p>
          <Button className="mt-8 bg-white text-black hover:bg-slate-200 px-8 py-6 text-lg">
            Partner With Sooryx
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 px-8 text-slate-500 text-sm flex justify-between">
        <span>© {new Date().getFullYear()} Sooryx Energy Technologies</span>
        <span>Institutional Infrastructure for Solar</span>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Building2,
    title: "Community Solar OS",
    description:
      "Launch and manage virtual net-metered solar assets across housing societies and commercial clusters.",
  },
  {
    icon: LineChart,
    title: "Embedded Financing",
    description:
      "Connect lenders, structure PPAs, and automate receivables with institutional-grade controls.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Automation",
    description:
      "Subsidy workflows, DISCOM filings, compliance tracking — fully digitized.",
  },
  {
    icon: Sun,
    title: "Asset Intelligence",
    description:
      "Real-time monitoring, predictive maintenance, and performance analytics across every installation.",
  },
];
