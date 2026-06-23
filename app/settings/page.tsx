import Header from "../components/Header";
import Link from "next/link";

export default function SettingsPage() {
  const settingsSections = [
    {
      title: "Account",
      items: [
        { label: "Personal Information", desc: "Name, email, phone", icon: "👤" },
        { label: "Password & Security", desc: "Change password, 2FA", icon: "🔒" },
        { label: "Linked Accounts", desc: "Google, Apple, Facebook", icon: "🔗" },
      ],
    },
    {
      title: "Delivery",
      items: [
        { label: "Saved Addresses", desc: "Home, work, other", icon: "📍" },
        { label: "Delivery Preferences", desc: "Instructions, contact-free", icon: "🚪" },
      ],
    },
    {
      title: "Payment",
      items: [
        { label: "Payment Methods", desc: "Cards, Apple Pay, wallets", icon: "💳" },
        { label: "Billing History", desc: "Invoices and receipts", icon: "🧾" },
      ],
    },
    {
      title: "Notifications",
      items: [
        { label: "Push Notifications", desc: "Order updates, promotions", icon: "🔔" },
        { label: "Email Preferences", desc: "Newsletter, receipts", icon: "📧" },
        { label: "SMS Settings", desc: "Delivery alerts", icon: "📱" },
      ],
    },
  ];

  const toggles = [
    { label: "Order notifications", desc: "Real-time updates on your order status", enabled: true },
    { label: "Promotional emails", desc: "Exclusive deals and discounts", enabled: true },
    { label: "SMS alerts", desc: "Delivery status via text message", enabled: false },
    { label: "Dark mode", desc: "Use dark theme", enabled: false },
    { label: "Location services", desc: "Allow access for better delivery", enabled: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="home" />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/profile">Profile</Link><span>/</span>
          <span className="text-gray-900 font-medium">Settings</span>
        </div>

        <h1 className="text-2xl font-black text-gray-900 mb-6">Settings</h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Settings nav */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
              {settingsSections.map((section) => (
                <div key={section.title} className="mb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 py-2">{section.title}</p>
                  {section.items.map((item, i) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition mb-0.5
                        ${i === 0 && section.title === "Account" ? "bg-orange-50 text-orange-700" : "hover:bg-gray-50 text-gray-700"}`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Settings content */}
          <div className="col-span-2 flex flex-col gap-5">
            {/* Personal info form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-5">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "First name", val: "John" },
                  { label: "Last name", val: "Doe" },
                  { label: "Email address", val: "john.doe@example.com" },
                  { label: "Phone number", val: "+48 600 123 456" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">{field.label}</label>
                    <input defaultValue={field.val} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100" />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Date of birth</label>
                  <input type="date" defaultValue="1990-05-15" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400" />
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <button className="px-5 py-2.5 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-orange-600 transition">Save Changes</button>
                <button className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">Cancel</button>
              </div>
            </div>

            {/* Notification toggles */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-5">Notification Preferences</h2>
              <div className="flex flex-col gap-4">
                {toggles.map((toggle) => (
                  <div key={toggle.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{toggle.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{toggle.desc}</p>
                    </div>
                    {/* Toggle switch */}
                    <div className={`relative w-11 h-6 rounded-full transition cursor-pointer ${toggle.enabled ? "bg-orange-500" : "bg-gray-200"}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${toggle.enabled ? "translate-x-5" : "translate-x-0.5"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger zone */}
            <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
              <h2 className="font-bold text-red-600 mb-4">Danger Zone</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">Delete Account</p>
                  <p className="text-xs text-gray-500 mt-0.5">Permanently delete your account and all data. This cannot be undone.</p>
                </div>
                <button className="px-4 py-2 border border-red-300 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-50 transition">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
