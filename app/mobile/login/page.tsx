import Link from "next/link";

export default function MobileLoginPage() {
  return (
    <div className="w-96 mx-auto min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-linear-to-br from-orange-500 to-red-600 px-6 pt-12 pb-16 text-white text-center relative">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <span className="text-white font-black text-2xl">FE</span>
        </div>
        <h1 className="text-2xl font-black">Welcome back!</h1>
        <p className="text-white/80 text-sm mt-1">Sign in to order your favourite food</p>
      </div>

      {/* Form card */}
      <div className="flex-1 bg-gray-50 rounded-t-3xl -mt-6 px-6 pt-8 pb-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <Link href="/forgot-password" className="text-xs text-orange-500 font-medium">Forgot?</Link>
            </div>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <Link
            href="/mobile/home"
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl text-center text-base transition mt-2 block"
          >
            Sign In
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider) => (
              <button key={provider} className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl bg-white text-sm font-semibold text-gray-700">
                <span className="w-4 h-4 bg-gray-200 rounded-full inline-block" />
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            New here?{" "}
            <Link href="/register" className="text-orange-500 font-bold">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
