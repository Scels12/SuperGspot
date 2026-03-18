import { useState } from "react";
import { Link } from "react-router-dom";
import ae86 from "../assets/ae86.png";
import box from "../assets/box.png";
import ae86rear from "../assets/ae86rear.png";
import zenkiCluster from "../assets/zenkiCluster.png";

const features = [
  {
    title: '12.3" Display',
    description:
      "High-brightness 1920x720 panel with anti-glare coating. Visible in direct sunlight, stunning at night.",
    icon: "▣",
  },
  {
    title: "Real-Time Gauges",
    description:
      "RPM, speed, coolant temp, oil pressure, voltage, and more. All pulled directly from your ECU via CAN bus.",
    icon: "◔",
  },
  {
    title: "OEM AE86 Themes",
    description: "Multiple gauge layouts and retro themes.",
    icon: "◌",
  },
  {
    title: "Plug & Play Install",
    description:
      "Designed to fit the OEM cluster location. No cutting, no drilling. Reversible installation in under 30 minutes.",
    icon: "⌁",
  },
  {
    title: "Built to Last",
    description:
      "Automotive-grade components rated for extreme temps. IP54 dust and splash resistance.",
    icon: "⬡",
  },
  {
    title: "Product Support",
    description: "Timely customer support, regular firmware updates.",
    icon: "▣",
  },
];

const specs = [
  ['Display', '12.3" 1920x720'],
  ["Processor", "The fastest one around town."],
  ["Connectivity", "CAN Bus, Wi-Fi, USB-C for charging"],
  ["Compatibility", "AE86 (all years)"],
  ["Power", "5V via power converter (included)"],
  ["Dimensions", "OEM cluster replacement fitment"],
];

const included = [
  "Digital dash unit",
  "CAN bus OBD-II port wireless adapter module",
  "USB-C cable",
  "AE86-specific wiring harness",
  "Installation guide",
];

const faq = [
  {
    q: "Will this fit my specific AE86 model?",
    a: "Yes. It is designed for AE86 Levin and Trueno models. Update this answer with any trim-specific fitment notes if needed.",
  },
  {
    q: "Do I need to modify my wiring?",
    a: "No cutting or permanent wiring changes are required. The kit is designed as a plug-and-play installation using the included harness.",
  },
  {
    q: "What sensors does it read?",
    a: "It can display speed, RPM, coolant temp, oil pressure, voltage, and additional ECU-fed data depending on your setup and CAN integration.",
  },
  {
    q: "Can I customize the gauge layout?",
    a: "Yes. The dashboard supports multiple themes and layouts so drivers can switch between classic and modern display styles.",
  },
  {
    q: "What about warranty and returns?",
    a: "The layout currently shows a 3-year warranty and a 30-day money-back guarantee. Replace this with your real policy before launch.",
  },
  {
    q: "Do you ship internationally?",
    a: "Potentially, yes. We plan to offer international shipping but it may be limited at launch. Please contact us with your location and we can provide more details.",
  },
];

const cardClass =
  "rounded-[2rem] border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)]";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-400/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400 font-bold text-black">
              SGS
            </div>
            <span className="text-xl font-semibold tracking-tight">SuperG-Spot</span>
          </a>

          <div className="ml-auto flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#product" className="transition hover:text-white">
                Product
              </a>
              <a href="#gallery" className="transition hover:text-white">
                Gallery
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>

            <Link
              to="/checkout"
              className="hidden rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.2)] transition hover:scale-[1.02] md:inline-flex"
            >
              Buy Now
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-white/80">
              <a href="#features" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a href="#product" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Product
              </a>
              <a href="#gallery" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>
              <a href="#faq" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <Link
                to="/checkout"
                onClick={() => setMenuOpen(false)}
                  className="mt-3 w-fit rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:scale-[1.02]"
              >
                Buy Now
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_28%),linear-gradient(to_bottom,rgba(3,7,18,0.2),rgba(3,7,18,0.92))]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-8 inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                ⚡ AE86 DIGITAL DASH
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
                Your AE86.
                <span className="mt-2 block text-cyan-400">Reimagined.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
                A fully digital dashboard cluster built for the Toyota AE86. Real-time
                data, customizable layouts, and that unmistakable JDM soul.
              </p>

              {/* <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/checkout"
                  className="rounded-2xl bg-cyan-400 px-8 py-4 text-center text-lg font-semibold text-black transition hover:scale-[1.02]"
                >
                  Order Yours Now →
                </Link>

                <a
                  href="#product"
                  className="rounded-2xl border border-white/10 px-8 py-4 text-center text-lg font-semibold text-white/90 transition hover:border-cyan-400/40 hover:bg-white/5"
                >
                  Learn More
                </a>
              </div> */}

              <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  ['12.3"', "1920x720 Display"],
                  ["CAN", "Compatibility"],
                  ["PnP", "AE86 Plug & Play"],
                ].map(([top, bottom]) => (
                  <div
                    key={top}
                    className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0"
                  >
                    <div className="text-3xl font-bold">{top}</div>
                    <div className="mt-2 text-white/55">{bottom}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl overflow-hidden shadow-2xl shadow-cyan-950/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_35%)]" />
                <img
                  src={zenkiCluster}
                  alt="Digital dash zenki"
                  className="relative aspect-[16/10] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
                Features
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Everything you need.
                <br />
                Nothing you don&apos;t.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Engineered specifically for the AE86 platform. Every detail
                considered, every gauge perfected.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:scale-110">
                    <span className="text-lg">{feature.icon}</span>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
              Product
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Precision meets heritage
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-2xl font-bold tracking-tight">
              Technical Specifications
            </h3>

            <div className={`mt-8 divide-y divide-white/20 px-6 ${cardClass}`}>
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-3 py-6 sm:grid-cols-[170px_1fr] sm:gap-6"
                >
                  <div className="text-lg text-white/60">{label}</div>
                  <div className="font-mono text-lg font-semibold text-white">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-4xl font-bold tracking-tight">What&apos;s in the box</h3>
              <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-lg text-white/90">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] p-4">
              <img
                src={box}
                alt="Product box"
                className="relative aspect-[16/10] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              See it in action
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] p-3 md:col-span-2">
              <h2 className="mt-4 text-center text-sm tracking-tight sm:text-base">
                Installation images coming soon. In the meantime, check out this
                cyberpunk aesthetic.
              </h2>
              <img
                src={ae86}
                alt="AE86"
                className="relative aspect-[16/10] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] p-3 md:col-span-2">
              <img
                src={ae86rear}
                alt="AE86 rear view"
                className="relative aspect-[16/10] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              One price. Everything included.
            </h2>
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(34,211,238,0.04))] p-8 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)] sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-bold tracking-tight sm:text-5xl">$699</span>
                  <span className="mb-2 text-xl text-white/60">USD</span>
                </div>
                <p className="mt-4 text-xl text-white/65">
                  Complete digital dash kit for your AE86
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 text-lg text-white/90 sm:grid-cols-2">
              {[
                "Lifetime firmware updates",
                "Access to updated themes",
                "AE86-specific plug-and-play harness",
                "Priority support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/checkout"
                className="rounded-2xl bg-cyan-400 px-8 py-4 text-center text-lg font-semibold text-black transition hover:scale-[1.02]"
              >
                Pre-Order Now →
              </Link>
              <a
                href="#contact"
                className="rounded-2xl border border-white/10 px-8 py-4 text-center text-lg font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/5"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Questions? Answered.
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faq.map((item, index) => (
              <details key={item.q} className={`group p-6 ${cardClass}`} open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold">
                  <span>{item.q}</span>
                  <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-10 text-lg leading-8 text-white/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 pt-8 lg:px-8">
          <div className={`${cardClass} p-8 sm:p-12`}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">
                  Contact
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  Ready to launch your AE86 interior into the future?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/60">
                  This form is not yet functional for now.
                </p>
              </div>

              <form className="grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                  placeholder="Takumi Fujiwara"
                />
                <input
                  type="email"
                  className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                  placeholder="takumi@fujiwara.jp"
                />
                <textarea
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-[#020617] px-5 py-4 text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                  placeholder="Tell me about your AE86, shipping country, or any questions you have"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-cyan-400 px-6 py-4 text-lg font-semibold text-black transition hover:scale-[1.01]"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Super G Spot. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}