import Link from "next/link";

const desktopRoutes = [
  { path: "/login", label: "Login", desc: "Sign in screen" },
  { path: "/register", label: "Register", desc: "Create account" },
  { path: "/forgot-password", label: "Forgot Password", desc: "Password reset" },
  { path: "/home", label: "Home", desc: "Main homepage with hero & restaurants" },
  { path: "/home-search", label: "Home Search", desc: "Search results overlay" },
  { path: "/restaurants", label: "Restaurants", desc: "Full restaurant listing" },
  { path: "/restaurants/cuisine-filter", label: "Cuisine Filter", desc: "Filtered by Italian" },
  { path: "/restaurants/price-filter", label: "Price Filter", desc: "Filtered by price range" },
  { path: "/restaurants/rating-filter", label: "Rating Filter", desc: "Filtered by rating" },
  { path: "/restaurant/overview", label: "Restaurant Overview", desc: "Info, reviews, menu categories" },
  { path: "/restaurant/menu-all", label: "Menu – All", desc: "Full restaurant menu" },
  { path: "/restaurant/menu-pizza", label: "Menu – Pizza", desc: "Pizza category" },
  { path: "/restaurant/menu-burgers", label: "Menu – Burgers", desc: "Burgers category" },
  { path: "/restaurant/menu-sushi", label: "Menu – Sushi", desc: "Sushi & Japanese" },
  { path: "/restaurant/menu-desserts", label: "Menu – Desserts", desc: "Desserts category" },
  { path: "/restaurant/menu-drinks", label: "Menu – Drinks", desc: "Beverages" },
  { path: "/product/details", label: "Product Details", desc: "Single item detail page" },
  { path: "/product/addons", label: "Product Addons", desc: "Customization panel open" },
  { path: "/cart/empty", label: "Cart Empty", desc: "Empty cart state" },
  { path: "/cart/items", label: "Cart with Items", desc: "Cart filled with items" },
  { path: "/cart/discount", label: "Cart Discount", desc: "Discount code applied" },
  { path: "/checkout/address", label: "Checkout – Address", desc: "Step 1: Delivery address" },
  { path: "/checkout/payment", label: "Checkout – Payment", desc: "Step 2: Payment method" },
  { path: "/checkout/review", label: "Checkout – Review", desc: "Step 3: Order review" },
  { path: "/order/confirmation", label: "Order Confirmation", desc: "Success screen" },
  { path: "/order/tracking", label: "Order Tracking", desc: "Live map & timeline" },
  { path: "/order/history", label: "Order History", desc: "Past orders list" },
  { path: "/order/details", label: "Order Details", desc: "Single order receipt" },
  { path: "/profile", label: "Profile", desc: "User profile & stats" },
  { path: "/settings", label: "Settings", desc: "Account & notification settings" },
];

const mobileRoutes = [
  { path: "/mobile/splash", label: "Splash Screen", desc: "App loading / onboarding" },
  { path: "/mobile/login", label: "Mobile Login", desc: "Sign in form" },
  { path: "/mobile/home", label: "Mobile Home", desc: "Feed with categories & restaurants" },
  { path: "/mobile/search", label: "Mobile Search", desc: "Search with results" },
  { path: "/mobile/restaurant-list", label: "Restaurant List", desc: "Browse all restaurants" },
  { path: "/mobile/filters", label: "Filters Open", desc: "Filter panel / bottom sheet" },
  { path: "/mobile/restaurant-details", label: "Restaurant Details", desc: "Restaurant page with menu" },
  { path: "/mobile/menu-all", label: "Mobile Menu – All", desc: "Full menu list" },
  { path: "/mobile/menu-pizza", label: "Mobile Menu – Pizza", desc: "Pizza items" },
  { path: "/mobile/product-details", label: "Product Details", desc: "Item with size & extras" },
  { path: "/mobile/cart", label: "Mobile Cart", desc: "Cart with items & summary" },
  { path: "/mobile/checkout", label: "Mobile Checkout", desc: "Address & delivery" },
  { path: "/mobile/payment", label: "Mobile Payment", desc: "Payment method selection" },
  { path: "/mobile/order-tracking", label: "Order Tracking", desc: "Map & driver info" },
  { path: "/mobile/profile", label: "Mobile Profile", desc: "User account & menu" },
];

const components = [
  "Header", "Sidebar", "RestaurantCard", "FoodCard",
  "CartSummary", "FilterPanel", "Button", "Input", "MobileBottomNav",
];

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-orange-500 to-red-600 text-white px-8 py-16 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-5">
          <span className="text-white font-black text-3xl">FE</span>
        </div>
        <h1 className="text-4xl font-black">Food Express UI</h1>
        <p className="text-white/80 mt-3 text-lg max-w-xl mx-auto">
          Static UI mockup project â€” 30 desktop routes + 15 mobile routes ready for Figma import via html.to.design
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          {[["30", "Desktop routes"], ["15", "Mobile routes"], ["9", "Components"]].map(([val, label]) => (
            <div key={label} className="bg-white/10 rounded-xl px-5 py-3">
              <p className="font-black text-2xl">{val}</p>
              <p className="opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-10">
          <h2 className="text-xl font-black text-gray-900 mb-4">Reusable Components</h2>
          <div className="flex flex-wrap gap-2">
            {components.map((c) => (
              <span key={c} className="bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-2">Desktop Routes ({desktopRoutes.length})</h2>
          <p className="text-gray-500 text-sm mb-5">Each route is a separate screen designed at 1440px width</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {desktopRoutes.map((route, i) => (
              <Link key={route.path} href={route.path} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-orange-200 transition">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-xs font-black shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-orange-400 transition shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 text-sm mt-3 group-hover:text-orange-600 transition">{route.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{route.desc}</p>
                <p className="text-xs text-orange-400 font-mono mt-2">{route.path}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-black text-gray-900 mb-2">FERoutes ({mobileRoutes.length})</h2>
          <p className="text-gray-500 text-sm mb-5">Mobile screens constrained to 384px width with bottom navigation</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {mobileRoutes.map((route, i) => (
              <Link key={route.path} href={route.path} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-blue-200 transition">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xs font-black shrink-0">
                    M{String(i + 1).padStart(2, "0")}
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 text-sm mt-3 group-hover:text-blue-600 transition">{route.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{route.desc}</p>
                <p className="text-xs text-blue-400 font-mono mt-2">{route.path}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-linear-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-xl font-black mb-2">Exporting to Figma</h3>
          <p className="text-white/80 leading-relaxed max-w-2xl">
            Use <strong>html.to.design</strong> Chrome extension to import each route as a Figma frame.
            Open each route in the browser, run the plugin, and it converts rendered HTML into editable Figma layers.
            Desktop screens at 1440px browser width · Mobile screens at 390px width.
          </p>
        </div>
      </div>
    </div>
  );
}
