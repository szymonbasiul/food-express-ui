import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">FE</span>
            </div>
            <span className="font-black text-lg text-gray-900">Food<span className="text-orange-500">Express</span></span>
          </Link>

          {/* Icon */}
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>

          <h1 className="text-2xl font-black text-gray-900">Forgot your password?</h1>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            No worries! Enter your email address and we&apos;ll send you a link to reset your password.
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                placeholder="you@example.com"
              />
            </div>

            <Link
              href="/login"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-center transition block"
            >
              Send Reset Link
            </Link>
          </form>

          {/* Info box */}
          <div className="mt-6 bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-blue-700">
              Check your spam folder if you don&apos;t see the email in your inbox within a few minutes.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to sign in
            </Link>
          </div>
        </div>

        {/* Email sent state preview */}
        <div className="mt-4 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Email sent!</p>
              <p className="text-xs text-gray-500">Check john.doe@example.com</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Didn&apos;t receive it? <span className="text-orange-500 font-medium cursor-pointer">Resend email</span></p>
        </div>
      </div>
    </div>
  );
}
