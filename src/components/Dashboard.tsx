import { DashboardLayout } from './DashboardLayout';
import { Tractor, Wallet, TrendingUp, HandCoins, Calendar, DollarSign, Package } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const expenseData = [
  { month: 'Jan', amount: 4500 },
  { month: 'Feb', amount: 5200 },
  { month: 'Mar', amount: 4800 },
  { month: 'Apr', amount: 6100 },
  { month: 'May', amount: 5500 },
  { month: 'Jun', amount: 6800 },
];

const yieldData = [
  { crop: 'Wheat', yield: 4500 },
  { crop: 'Rice', yield: 3800 },
  { crop: 'Corn', yield: 5200 },
  { crop: 'Soybean', yield: 2900 },
];

const distributionData = [
  { name: 'Seeds', value: 35 },
  { name: 'Fertilizers', value: 25 },
  { name: 'Equipment', value: 20 },
  { name: 'Labor', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#16a34a', '#84cc16', '#eab308', '#f59e0b', '#dc2626'];

export function Dashboard() {
  const user = JSON.parse(localStorage.getItem('techagroinnovaters_user') || '{}');

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name || 'Farmer'}! 👋
        </h1>
        <p className="text-gray-600">Here's what's happening with your farm today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Tractor className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">Active</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">3</p>
          <p className="text-gray-600 text-sm">Rented Machines</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-red-600 font-medium">This Month</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">₹68,500</p>
          <p className="text-gray-600 text-sm">Total Expenses</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <span className="text-sm text-green-600 font-medium">+12%</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">16.4 T</p>
          <p className="text-gray-600 text-sm">Total Yield (tons)</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <HandCoins className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-purple-600 font-medium">Available</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">8</p>
          <p className="text-gray-600 text-sm">Funding Programs</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Expense Trend */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Expense Trend</h3>
              <p className="text-sm text-gray-600">Last 6 months</p>
            </div>
            <Wallet className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={expenseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Area type="monotone" dataKey="amount" stroke="#16a34a" fill="#86efac" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Yield Comparison */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Crop Yield</h3>
              <p className="text-sm text-gray-600">Current season (kg)</p>
            </div>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="crop" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="yield" fill="#16a34a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expense Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Expense Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {distributionData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-900 font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Tractor className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Rented Combine Harvester</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Wallet className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Added expense: Fertilizer</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Yield recorded: Wheat harvest</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <HandCoins className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Applied for PM-KISAN subsidy</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 py-3 px-4 rounded-lg transition-colors text-left flex items-center gap-3">
              <Tractor className="w-5 h-5" />
              <span className="text-sm font-medium">Rent a Machine</span>
            </button>
            <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-lg transition-colors text-left flex items-center gap-3">
              <Wallet className="w-5 h-5" />
              <span className="text-sm font-medium">Add Expense</span>
            </button>
            <button className="w-full bg-amber-50 hover:bg-amber-100 text-amber-700 py-3 px-4 rounded-lg transition-colors text-left flex items-center gap-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Record Yield</span>
            </button>
            <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 px-4 rounded-lg transition-colors text-left flex items-center gap-3">
              <HandCoins className="w-5 h-5" />
              <span className="text-sm font-medium">Browse Funding</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}