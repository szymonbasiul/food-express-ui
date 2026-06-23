import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FoodCard from "../../components/FoodCard";
import CartSummary from "../../components/CartSummary";
import Link from "next/link";

const sushi = [
  { name: "Salmon Nigiri (2 pcs)", description: "Fresh Atlantic salmon over seasoned rice", price: 8.99, calories: 180, imageColor: "from-orange-100 to-red-100", popular: true },
  { name: "Dragon Roll (8 pcs)", description: "Shrimp tempura, avocado, tobiko, unagi sauce", price: 18.99, calories: 480, imageColor: "from-indigo-100 to-purple-100", badge: "Chef's Pick" },
  { name: "Rainbow Roll (8 pcs)", description: "California roll topped with assorted sashimi", price: 22.99, calories: 520, imageColor: "from-blue-100 to-indigo-100" },
  { name: "Tuna Sashimi (5 pcs)", description: "Premium bluefin tuna, wasabi, pickled ginger", price: 24.99, calories: 200, imageColor: "from-red-100 to-pink-100" },
  { name: "Spicy Tuna Roll (8 pcs)", description: "Spicy tuna, cucumber, sriracha mayo", price: 16.99, calories: 390, imageColor: "from-red-100 to-orange-100" },
  { name: "Miso Soup", description: "Traditional Japanese miso with tofu and wakame", price: 3.99, calories: 80, imageColor: "from-amber-100 to-yellow-100" },
];

const menuTabs = [
  { key: "all", label: "All", href: "/restaurant/menu-all" },
  { key: "pizza", label: "Pizza", href: "/restaurant/menu-pizza" },
  { key: "burgers", label: "Burgers", href: "/restaurant/menu-burgers" },
  { key: "sushi", label: "Sushi", href: "/restaurant/menu-sushi", active: true },
  { key: "desserts", label: "Desserts", href: "/restaurant/menu-desserts" },
  { key: "drinks", label: "Drinks", href: "/restaurant/menu-drinks" },
];

export default function MenuSushiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activePage="restaurants" cartCount={3} />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/home">Home</Link><span>/</span>
          <Link href="/restaurants">Restaurants</Link><span>/</span>
          <Link href="/restaurant/overview">Tokyo Garden</Link><span>/</span>
          <span className="text-gray-900 font-medium">Sushi</span>
        </div>
        <div className="flex gap-6">
          <Sidebar activeCategory="sushi" />
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-2xl">FE</div>
                <div>
                  <p className="font-bold text-gray-900">Tokyo Garden</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>4.9</span><span>30-45 min</span><span>$1.99 delivery</span>
                  </div>
                </div>
              </div>
              <Link href="/restaurant/overview" className="text-sm text-orange-500 font-medium">View info</Link>
            </div>
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 mb-5 flex items-center gap-4 text-white">
              <span className="text-5xl">FE</span>
              <div>
                <p className="font-black text-lg">Premium Sushi & Sashimi</p>
                <p className="text-sm opacity-80">Fresh fish imported daily · Master sushi chef</p>
              </div>
            </div>
            <div className="flex gap-2 mb-6 flex-wrap">
              {menuTabs.map((tab) => (
                <Link key={tab.key} href={tab.href} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${tab.active ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`}>
                  {tab.label}
                </Link>
              ))}
            </div>
            <h2 className="font-bold text-gray-900 mb-4">FE Japanese ({sushi.length} items)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sushi.map((item) => <FoodCard key={item.name} {...item} />)}
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
