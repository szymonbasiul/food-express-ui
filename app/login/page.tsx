import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-orange-500 via-orange-600 to-red-600 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {["FE", "FE", "FE", "FE", "FE", "FE"].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-2xl bg-white/30"
              style={{ left: `${[10, 60, 80, 20, 70, 40][i]}%`, top: `${[15, 10, 50, 70, 75, 40][i]}%`, transform: "rotate(-15deg)" }}
            />
          ))}
        </div>
        <div className="relative text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-black text-3xl">FE</span>
          </div>
          <h1 className="text-4xl font-black leading-tight">
            Food delivered<br />to your door
          </h1>
          <p className="text-white/80 mt-4 text-lg max-w-xs mx-auto">
            Order from hundreds of restaurants and get it delivered in under 30 minutes.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            {[
              { text: "Lightning-fast delivery" },
              { text: "500+ restaurants" },
              { text: "Secure payments" },
            ].map((feat) => (
              <div key={feat.text} className="flex items-center gap-3 text-white/90">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">FE</span>
            </div>
            <span className="font-black text-xl text-gray-900">Food<span className="text-orange-500">Express</span></span>
          </div>

          <h2 className="text-3xl font-black text-gray-900">Welcome back</h2>
          <p className="text-gray-500 mt-2">Sign in to your account to continue</p>

          <form className="mt-8 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Link href="/forgot-password" className="text-xs text-orange-500 hover:text-orange-600 font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 pr-12"
                  placeholder="••••••••"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded accent-orange-500" defaultChecked />
              <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
            </div>

            <Link
              href="/home"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition block mt-2"
            >
              Sign In
            </Link>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider) => (
              <button key={provider} className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                <span className="w-4 h-4 bg-gray-300 rounded-full inline-block" />
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-orange-500 font-semibold hover:text-orange-600">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
