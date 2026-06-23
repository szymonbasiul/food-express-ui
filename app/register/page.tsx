import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-2/5 bg-linear-to-br from-orange-500 to-red-600 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-9xl flex flex-wrap gap-4 p-8 overflow-hidden">
          {["FE", "FE", "FE", "FE"].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
        <div className="relative text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-black text-2xl">FE</span>
          </div>
          <h2 className="text-3xl font-black">Join Food Express</h2>
          <p className="text-white/80 mt-3 text-base max-w-xs">
            Create your free account and start ordering from the best restaurants in your city.
          </p>
          <div className="mt-8 bg-white/10 rounded-2xl p-5 text-left">
            <p className="font-bold text-sm mb-3">What you get:</p>
            {["Free delivery on first 3 orders", "Exclusive member discounts", "Real-time order tracking", "Priority customer support"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 py-1.5 text-sm text-white/90">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">âś“</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">FE</span>
            </div>
            <span className="font-black text-xl">Food<span className="text-orange-500">Express</span></span>
          </div>

          <h2 className="text-3xl font-black text-gray-900">Create account</h2>
          <p className="text-gray-500 mt-1">It&apos;s free and takes less than 2 minutes</p>

          <form className="mt-7 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                <input defaultValue="John" type="text" placeholder="John" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                <input defaultValue="Doe" type="text" placeholder="Doe" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <input defaultValue="john.doe@example.com" type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone number</label>
              <div className="flex gap-2">
                <select className="px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-orange-400">
                  <option>+48 PL</option>
                  <option>+1 US</option>
                  <option>+44 UK</option>
                </select>
                <input defaultValue="600 123 456" type="tel" placeholder="600 123 456" className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <input type="password" defaultValue="••••••••••" placeholder="At least 8 characters" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i <= 3 ? "bg-orange-400" : "bg-gray-200"}`} />
                ))}
              </div>
              <p className="text-xs text-orange-600 mt-1">Strong password</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm password</label>
              <input type="password" defaultValue="••••••••••" placeholder="Repeat password" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
            </div>

            <div className="flex items-start gap-2 mt-1">
              <input type="checkbox" id="terms" className="w-4 h-4 mt-0.5 rounded accent-orange-500" defaultChecked />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-orange-500 font-medium">Terms of Service</span> and{" "}
                <span className="text-orange-500 font-medium">Privacy Policy</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="marketing" className="w-4 h-4 rounded accent-orange-500" defaultChecked />
              <label htmlFor="marketing" className="text-sm text-gray-600">Send me exclusive offers and promotions</label>
            </div>

            <Link
              href="/home"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition block mt-2"
            >
              Create Account
            </Link>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 font-semibold hover:text-orange-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
