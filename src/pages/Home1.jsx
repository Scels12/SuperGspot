export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400 font-bold text-black">
            SGS
            </div>
            <span className="text-xl font-semibold tracking-tight">SuperG-Spot</span>
        </a> 
        <div className="ml-auto flex items-center gap-6">
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#product" className="transition hover:text-white">Product</a>
            <a href="#gallery" className="transition hover:text-white">Gallery</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>

            <Link
            to="/checkout"
            className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.2)] transition hover:scale-[1.02]"
            >
            Buy Now
            </Link>
        </div>
        </div>
  );
}