import { Link } from 'react-router';
import { Tractor, TrendingUp, Sprout, Wallet, Smartphone, ArrowRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sprout className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-semibold text-green-800">TechAgro(Innovaters)</span>
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <button className="px-6 py-2 text-green-700 hover:text-green-800 transition-colors">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empowering Farmers with Modern Agriculture Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete farm management platform with machine rentals, expense tracking, yield monitoring, and access to government funding.
            </p>
            <Link to="/signup">
              <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern farming"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Everything You Need to Succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Machine Rental */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Tractor className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Machine Rental</h3>
            <p className="text-gray-600 mb-4">
              Access modern farming equipment when you need it. From tractors to harvesters, rent at affordable rates.
            </p>
            <Link to="/machines" className="text-green-600 hover:text-green-700 flex items-center gap-1">
              Browse Machines <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Expense Tracking */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expense Tracking</h3>
            <p className="text-gray-600 mb-4">
              Keep track of all your agricultural expenses. Monitor costs, analyze spending, and optimize your budget.
            </p>
            <Link to="/expenses" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Track Expenses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Technology Info */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Latest Technology</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the newest farming technologies. Learn about innovations that can transform your farm.
            </p>
            <Link to="/technology" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
              Explore Tech <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Yield Tracking */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
            <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Yield Tracking</h3>
            <p className="text-gray-600 mb-4">
              Monitor your crop yields across seasons. Analyze trends and make data-driven decisions for better harvests.
            </p>
            <Link to="/yield" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
              View Analytics <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Government Funding */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Sprout className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Government Funding</h3>
            <p className="text-gray-600 mb-4">
              Discover funding opportunities and subsidies available for farmers. Get help with applications and eligibility.
            </p>
            <Link to="/funding" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
              Find Funding <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dashboard */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rose-500">
            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unified Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Get a complete overview of your farm operations. All your data and insights in one place.
            </p>
            <Link to="/dashboard" className="text-rose-600 hover:text-rose-700 flex items-center gap-1">
              View Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using TechAgro(Innovaters) to manage their farms more efficiently.
          </p>
          <Link to="/signup">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors shadow-lg">
              Create Free Account
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 TechAgro(Innovaters). Empowering farmers with technology.</p>
        </div>
      </footer>
    </div>
  );
}