import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { Sprout, LayoutDashboard, Tractor, Wallet, Smartphone, TrendingUp, HandCoins, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('techagroinnovaters_user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('techagroinnovaters_user');
    window.location.href = '/';
  };

  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Machine Rental', path: '/machines', icon: Tractor },
    { name: 'Expense Tracking', path: '/expenses', icon: Wallet },
    { name: 'Technology Info', path: '/technology', icon: Smartphone },
    { name: 'Yield Tracking', path: '/yield', icon: TrendingUp },
    { name: 'Government Funding', path: '/funding', icon: HandCoins },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-200">
          <Sprout className="w-8 h-8 text-green-600" />
          <span className="text-xl font-semibold text-green-800">TechAgro(Innovaters)</span>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-700 font-medium">
                {user.name?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name || 'User'}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}