import { Check, X, Crown, Sparkles, ArrowRight } from "lucide-react";

interface Bundle {
  name: string;
  price: string;
  original: string;
  save: string;
  features: { label: string; included: boolean }[];
  featured?: boolean;
}

const BUNDLES: Bundle[] = [
  {
    name: "Explorer",
    price: "$599",
    original: "$799",
    save: "Save 25%",
    features: [
      { label: "3 nights cabin stay", included: true },
      { label: "1 guided activity", included: true },
      { label: "Local breakfast included", included: true },
      { label: "Airport transfer", included: false },
    ],
  },
  {
    name: "Adventurer",
    price: "$999",
    original: "$1,399",
    save: "Save 30%",
    featured: true,
    features: [
      { label: "5 nights premium cabin", included: true },
      { label: "3 guided activities", included: true },
      { label: "All meals included", included: true },
      { label: "Meet local families", included: true },
    ],
  },
  {
    name: "Pioneer",
    price: "$1,799",
    original: "$2,499",
    save: "Save 28%",
    features: [
      { label: "7 nights luxury cabin", included: true },
      { label: "Unlimited activities", included: true },
      { label: "Private chef experience", included: true },
      { label: "Airport VIP transfer", included: true },
    ],
  },
];

const FeatureRow = ({
  label,
  included,
  dark,
}: {
  label: string;
  included: boolean;
  dark?: boolean;
}) => (
  <li
    className={`flex items-center gap-3 text-sm ${
      included
        ? dark
          ? "text-[#f4efe2]"
          : "text-[#0f3d3e]"
        : dark
          ? "text-[#f4efe2]/30"
          : "text-[#0f3d3e]/30"
    }`}
  >
    <span
      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
        included
          ? "bg-gradient-to-br from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]"
          : dark
            ? "bg-[#f4efe2]/10 text-[#f4efe2]/30"
            : "bg-[#0f3d3e]/[0.06] text-[#0f3d3e]/30"
      }`}
    >
      {included ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
    </span>
    <span className={included ? "" : "line-through decoration-1"}>{label}</span>
  </li>
);

const BundlesSection = () => {
  return (
    <section
      id="bundles"
      className="relative overflow-hidden py-28 bg-[#fbfaf6]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[24rem]
        rounded-full bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-[11px] font-medium
            tracking-[0.4em] uppercase text-[#b8975a]">
            <span className="h-px w-10 bg-[#c9a96e]/60" />
            Save more
            <span className="h-px w-10 bg-[#c9a96e]/60" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 mb-6 text-[#0f3d3e]
            tracking-tight">
            Adventure Bundles
          </h2>
          <p className="text-[#0f3d3e]/55 max-w-2xl mx-auto font-light leading-relaxed">
            Combine destination, cabin, and activities for the best value and a
            seamless adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {BUNDLES.map((b) =>
            b.featured ? (
              /* Featured */
              <div
                key={b.name}
                className="group relative rounded-[2rem] overflow-hidden md:scale-105
                  bg-gradient-to-br from-[#0a2c2d] via-[#0f3d3e] to-[#17575a]
                  border border-[#c9a96e]/60
                  shadow-[0_40px_80px_-30px_rgba(15,61,62,0.8)]
                  transition-all duration-500 hover:-translate-y-2 md:hover:scale-[1.07]"
              >
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full
                  bg-[#c9a96e]/20 blur-3xl pointer-events-none" />
                <div className="relative flex items-center justify-center gap-2 py-3
                  bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0]
                  text-[#0a2c2d] text-[11px] font-semibold tracking-[0.3em] uppercase">
                  <Crown size={13} />
                  Most popular
                </div>
                <div className="relative p-10">
                  <div className="flex items-center gap-2 text-[#c9a96e] text-[11px]
                    font-medium tracking-[0.3em] uppercase mb-4">
                    <Sparkles size={13} />
                    {b.name}
                  </div>
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <span className="font-serif text-6xl text-[#f4efe2]">{b.price}</span>
                    <span className="text-[#f4efe2]/30 line-through text-sm">{b.original}</span>
                  </div>
                  <span className="inline-block text-[10px] font-medium tracking-[0.2em]
                    uppercase px-3 py-1 rounded-full bg-[#c9a96e]/20 text-[#ecdcb0]
                    border border-[#c9a96e]/40 mb-8">
                    {b.save}
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/50
                    to-transparent mb-8" />
                  <ul className="space-y-4 mb-10">
                    {b.features.map((f) => (
                      <FeatureRow key={f.label} {...f} dark />
                    ))}
                  </ul>
                  <button className="w-full py-4 rounded-full flex items-center
                    justify-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase
                    bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0] text-[#0a2c2d]
                    shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]
                    hover:shadow-[0_18px_36px_-10px_rgba(201,169,110,1)]
                    transition-all duration-300">
                    Choose {b.name}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ) : (
              /* Standard */
              <div
                key={b.name}
                className="group relative rounded-[2rem] bg-white overflow-hidden
                  border border-[#0f3d3e]/[0.08]
                  shadow-[0_1px_2px_rgba(15,61,62,0.04),0_24px_50px_-30px_rgba(15,61,62,0.3)]
                  transition-all duration-500 hover:-translate-y-2
                  hover:border-[#c9a96e]/60
                  hover:shadow-[0_40px_70px_-34px_rgba(15,61,62,0.45)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
                  from-transparent via-[#c9a96e] to-transparent opacity-0
                  group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-10">
                  <div className="text-[#b8975a] text-[11px] font-medium
                    tracking-[0.3em] uppercase mb-4">
                    {b.name}
                  </div>
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <span className="font-serif text-5xl text-[#0f3d3e]">{b.price}</span>
                    <span className="text-[#0f3d3e]/30 line-through text-sm">{b.original}</span>
                  </div>
                  <span className="inline-block text-[10px] font-medium tracking-[0.2em]
                    uppercase px-3 py-1 rounded-full bg-[#c9a96e]/15 text-[#8a6d35]
                    border border-[#c9a96e]/30 mb-8">
                    {b.save}
                  </span>
                  <div className="h-px bg-gradient-to-r from-[#c9a96e]/40 via-[#0f3d3e]/10
                    to-transparent mb-8" />
                  <ul className="space-y-4 mb-10">
                    {b.features.map((f) => (
                      <FeatureRow key={f.label} {...f} />
                    ))}
                  </ul>
                  <button className="w-full py-3.5 rounded-full flex items-center
                    justify-center gap-2 text-sm font-medium tracking-wide
                    border border-[#0f3d3e] text-[#0f3d3e]
                    hover:bg-[#0f3d3e] hover:text-[#f4efe2] hover:border-[#c9a96e]
                    transition-all duration-300">
                    Choose {b.name}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;