import Link from "next/link";

export default function MobileSplashPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-linear-to-br from-orange-500 via-orange-600 to-red-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background emojis */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[
          { top: "10%", left: "5%" },
          { top: "20%", right: "8%" },
          { top: "60%", left: "3%" },
          { top: "75%", right: "5%" },
          { top: "45%", right: "12%" },
          { top: "85%", left: "15%" },
        ].map((pos, i) => (
          <div key={i} className="absolute w-14 h-14 bg-white rounded-2xl" style={{ top: pos.top, left: (pos as any).left, right: (pos as any).right }} />
        ))}
      </div>

      {/* Logo */}
      <div className="relative text-center px-8">
        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
          <span className="text-white font-black text-4xl">FE</span>
        </div>
        <h1 className="text-4xl font-black text-white">FoodExpress</h1>
        <p className="text-white/80 mt-3 text-lg">
          Delicious food delivered to your door
        </p>

        {/* Loading indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full bg-white/60 ${i === 1 ? "w-8 bg-white" : "w-2"}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 w-full">
          <Link
            href="/mobile/login"
            className="block w-full py-4 bg-white text-orange-600 font-black rounded-2xl text-lg shadow-lg hover:bg-orange-50 transition"
          >
            Get Started
          </Link>
          <Link
            href="/mobile/home"
            className="block w-full py-4 text-white/80 font-semibold text-sm mt-3 hover:text-white transition"
          >
            Already have an account? Sign in
          </Link>
        </div>

        {/* Features */}
        <div className="mt-8 flex gap-6 justify-center text-white/80 text-sm">
          {[
            { text: "Fast" },
            { text: "Secure" },
            { text: "5-star" },
          ].map((f) => (
            <div key={f.text} className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xs">FE</span>
              </div>
              <span className="text-xs font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
