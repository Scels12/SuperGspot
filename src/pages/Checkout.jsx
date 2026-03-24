import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SGSlogo.png";

const addons = [
  {
    id: "bezel",
    name: "3D Printed Bezel",
    price: 180,
    description:
      "Custom-fit OEM-style bezel for a seamless factory look. Printed in ASA with a textured matte finish.",
  },
  {
    id: "indicator-harness",
    name: "Chassis Indicator Integration Harness",
    price: 79,
    description:
      "Plug-and-play harness connecting your AE86's indicator lights directly to the digital dash.",
  },
  {
    id: "fuel-harness",
    name: "Fuel Level Plug & Play Harness",
    price: 79,
    description:
      "Direct replacement harness for your OEM fuel sender. No splicing, no soldering required.",
  },
];

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function ProductOption({
  selected,
  disabled,
  onToggle,
  name,
  description,
  price,
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 ${
        disabled
          ? "cursor-not-allowed border-white/10 bg-white/[0.02] opacity-50"
          : selected
          ? "border-cyan-400/50 bg-cyan-400/5"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
              disabled
                ? "border-white/10 text-white/30"
                : selected
                ? "border-cyan-400 bg-cyan-400 text-black"
                : "border-white/20"
            }`}
          >
            <span className="text-[10px]">{selected ? "✓" : ""}</span>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-white">
              {name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-white/55">
              {description}
            </p>

            {disabled && addonRequiresFuel(name) && (
              <p className="mt-2 text-xs text-white/40">
                Requires Fuel Level Plug &amp; Play Harness
              </p>
            )}
          </div>
        </div>

        <div className="shrink-0 font-mono text-sm font-semibold text-cyan-400">
          +{currency(price)}
        </div>
      </div>
    </button>
  );
}

function addonRequiresFuel(name) {
  return name === "Chassis Indicator Integration Harness";
}

export default function Checkout() {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const basePrice = 799;

  const selectedAddonData = addons.filter((addon) =>
    selectedAddons.includes(addon.id)
  );

  const addonsTotal = useMemo(
    () => selectedAddonData.reduce((sum, addon) => sum + addon.price, 0),
    [selectedAddonData]
  );

  const total = (basePrice + addonsTotal) * quantity;

  const toggleAddon = (addonId) => {
    const isFuelHarnessSelected = selectedAddons.includes("fuel-harness");

    if (addonId === "indicator-harness" && !isFuelHarnessSelected) {
      return;
    }

    setSelectedAddons((current) => {
      const isCurrentlySelected = current.includes(addonId);

      let next = isCurrentlySelected
        ? current.filter((id) => id !== addonId)
        : [...current, addonId];

      // If fuel harness is removed, also remove indicator harness
      if (addonId === "fuel-harness" && isCurrentlySelected) {
        next = next.filter((id) => id !== "indicator-harness");
      }

      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030712]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img
                src={logo}
                alt="SGS logo"
                className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
              />
            <span className="text-xl font-semibold tracking-tight">
              SuperG-Spot
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
          >
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-cyan-400">
            Pre-Order
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Build your kit
          </h1>
          <p className="mt-3 text-white/60">
            Start with the digital dash and add what you need.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <section className="space-y-4 lg:col-span-3">
            <div
              id="details"
              className="rounded-2xl border border-cyan-400/30 bg-white/[0.02] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-300">
                  ◫
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight">
                        Super G Spot Digital Dash
                      </h2>
                      <p className="mt-1 text-sm text-white/55">
                        12.3&quot; IPS cluster for AE86 — plug &amp; play
                      </p>
                    </div>

                    <div className="font-mono text-lg font-bold tracking-tight">
                      {currency(basePrice)}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                    <span className="rounded-full border border-white/10 px-3 py-1.5">
                      AE86 Fitment
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5">
                      CAN Ready
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1.5">
                      Plug &amp; Play
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <section id="addons">
              <p className="mb-4 text-xs font-mono uppercase tracking-widest text-white/50">
                Optional Add-ons
              </p>

              <div className="space-y-4">
                {addons.map((addon) => {
                  const isFuelHarnessSelected =
                    selectedAddons.includes("fuel-harness");

                  const isDisabled =
                    addon.id === "indicator-harness" && !isFuelHarnessSelected;

                  return (
                    <ProductOption
                      key={addon.id}
                      selected={selectedAddons.includes(addon.id)}
                      disabled={isDisabled}
                      onToggle={() => toggleAddon(addon.id)}
                      name={addon.name}
                      description={addon.description}
                      price={addon.price}
                    />
                  );
                })}
              </div>
            </section>
          </section>

          <aside id="summary" className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="text-xl font-semibold tracking-tight">
                Order Summary
              </h2>

              <div className="mt-5 space-y-3 border-b border-white/8 pb-5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/70">Digital Dash</span>
                  <span className="font-mono">{currency(basePrice)}</span>
                </div>

                {selectedAddonData.map((addon) => (
                  <div
                    key={addon.id}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="truncate pr-2 text-white/70">
                      {addon.name}
                    </span>
                    <span className="font-mono">{currency(addon.price)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/45">
                  Quantity
                </label>

                <div className="inline-flex items-center rounded-xl border border-white/10 bg-[#020617]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2.5 text-lg text-white/70 transition hover:text-white"
                  >
                    −
                  </button>
                  <div className="min-w-12 text-center text-sm font-semibold">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2.5 text-lg text-white/70 transition hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-lg font-semibold">Total</span>
                <span className="font-mono text-2xl font-bold tracking-tight">
                  {currency(total)}
                </span>
              </div>

              <form className="mt-6 space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/45">
                    Name
                  </label>
                  <input
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                    placeholder="Takumi Fujiwara"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/45">
                    Email
                  </label>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) =>
                      setCustomer((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                    placeholder="takumi@fujiwara.jp"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/45">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    value={customer.notes}
                    onChange={(e) =>
                      setCustomer((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#020617] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400/40"
                    placeholder="Special requests"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Pre-Order available soon
                </button>
              </form>

              {/* <p className="mt-3 text-center text-xs text-white/45">
                No charge today. You&apos;ll invoice when ready to ship.
              </p> */}
            </div>
          </aside>
        </div>

        <p className="mt-3 pl-4 -indent-4 text-white/60">
          * The plug-and-play fuel level harness is required to enable
          integration with the chassis indicator harness on the dash. While the
          digital dash will operate without these harnesses, the associated
          indicator functions will not be available.
        </p>
      </main>
    </div>
  );
}