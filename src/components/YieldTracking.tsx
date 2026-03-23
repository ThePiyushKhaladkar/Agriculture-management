import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Plus, TrendingUp, Calendar, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface YieldRecord {
  id: number;
  crop: string;
  quantity: number;
  unit: string;
  date: string;
  quality: string;
  season: string;
}

const historicalData = [
  { season: 'Kharif 2024', wheat: 4200, rice: 3800, corn: 4800 },
  { season: 'Rabi 2024-25', wheat: 4500, rice: 4100, corn: 5200 },
  { season: 'Kharif 2025', wheat: 4800, rice: 4400, corn: 5500 },
  { season: 'Rabi 2025-26', wheat: 5100, rice: 4600, corn: 5800 },
];

const comparisonData = [
  { month: 'Aug', actual: 4500, target: 4200, previous: 4000 },
  { month: 'Sep', actual: 4800, target: 4500, previous: 4300 },
  { month: 'Oct', actual: 5200, target: 4800, previous: 4600 },
  { month: 'Nov', actual: 5500, target: 5100, previous: 4900 },
  { month: 'Dec', actual: 5800, target: 5400, previous: 5200 },
  { month: 'Jan', actual: 6100, target: 5700, previous: 5500 },
];

export function YieldTracking() {
  const [yields, setYields] = useState<YieldRecord[]>([
    { id: 1, crop: 'Wheat', quantity: 4500, unit: 'kg', date: '2026-02-10', quality: 'Grade A', season: 'Rabi 2025-26' },
    { id: 2, crop: 'Rice', quantity: 3800, unit: 'kg', date: '2025-11-15', quality: 'Grade A', season: 'Kharif 2025' },
    { id: 3, crop: 'Corn', quantity: 5200, unit: 'kg', date: '2025-10-20', quality: 'Grade B', season: 'Kharif 2025' },
    { id: 4, crop: 'Soybean', quantity: 2900, unit: 'kg', date: '2025-09-28', quality: 'Grade A', season: 'Kharif 2025' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newYield, setNewYield] = useState({
    crop: '',
    quantity: '',
    unit: 'kg',
    date: new Date().toISOString().split('T')[0],
    quality: 'Grade A',
    season: 'Rabi 2025-26',
  });

  const handleAddYield = (e: React.FormEvent) => {
    e.preventDefault();
    const yieldRecord: YieldRecord = {
      id: Date.now(),
      crop: newYield.crop,
      quantity: parseFloat(newYield.quantity),
      unit: newYield.unit,
      date: newYield.date,
      quality: newYield.quality,
      season: newYield.season,
    };
    setYields([yieldRecord, ...yields]);
    setNewYield({
      crop: '',
      quantity: '',
      unit: 'kg',
      date: new Date().toISOString().split('T')[0],
      quality: 'Grade A',
      season: 'Rabi 2025-26',
    });
    setShowAddModal(false);
  };

  const totalYield = yields.reduce((sum, y) => sum + y.quantity, 0);

  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yield Tracking</h1>
            <p className="text-gray-600">Monitor and analyze your crop production</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
          >
            <Plus className="w-5 h-5" />
            Record Yield
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-green-100" />
              <TrendingUp className="w-5 h-5 text-green-100" />
            </div>
            <p className="text-green-100 mb-1 text-sm">Total Yield</p>
            <p className="text-3xl font-bold">{(totalYield / 1000).toFixed(1)} T</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500">
            <p className="text-gray-600 mb-2 text-sm">Current Season</p>
            <p className="text-2xl font-bold text-gray-900">Rabi 2025-26</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% vs last year</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 mb-2 text-sm">Avg Quality</p>
            <p className="text-2xl font-bold text-gray-900">Grade A</p>
            <p className="text-sm text-gray-500 mt-1">85% premium grade</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <p className="text-gray-600 mb-2 text-sm">Crops Tracked</p>
            <p className="text-2xl font-bold text-gray-900">{new Set(yields.map(y => y.crop)).size}</p>
            <p className="text-sm text-gray-500 mt-1">Multiple varieties</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Historical Trend */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Historical Yield Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="season" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="wheat" stroke="#16a34a" strokeWidth={2} />
                <Line type="monotone" dataKey="rice" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="corn" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Target vs Actual */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Target vs Actual Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Legend />
                <Bar dataKey="target" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actual" fill="#16a34a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="previous" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Yield Records Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Yield Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Season
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quality
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {yields.map((yieldRecord) => (
                  <tr key={yieldRecord.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(yieldRecord.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">{yieldRecord.crop}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {yieldRecord.season}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {yieldRecord.quantity.toLocaleString()} {yieldRecord.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        yieldRecord.quality === 'Grade A' 
                          ? 'bg-green-100 text-green-800'
                          : yieldRecord.quality === 'Grade B'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {yieldRecord.quality}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Yield Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Record New Yield</h2>
              <form onSubmit={handleAddYield} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crop Name
                  </label>
                  <input
                    type="text"
                    value={newYield.crop}
                    onChange={(e) => setNewYield({ ...newYield, crop: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Wheat, Rice, Corn"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={newYield.quantity}
                      onChange={(e) => setNewYield({ ...newYield, quantity: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unit
                    </label>
                    <select
                      value={newYield.unit}
                      onChange={(e) => setNewYield({ ...newYield, unit: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="kg">kg</option>
                      <option value="tons">tons</option>
                      <option value="quintals">quintals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quality Grade
                  </label>
                  <select
                    value={newYield.quality}
                    onChange={(e) => setNewYield({ ...newYield, quality: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="Grade A">Grade A</option>
                    <option value="Grade B">Grade B</option>
                    <option value="Grade C">Grade C</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Season
                  </label>
                  <select
                    value={newYield.season}
                    onChange={(e) => setNewYield({ ...newYield, season: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="Kharif 2025">Kharif 2025</option>
                    <option value="Rabi 2025-26">Rabi 2025-26</option>
                    <option value="Kharif 2026">Kharif 2026</option>
                    <option value="Rabi 2026-27">Rabi 2026-27</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Harvest Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      value={newYield.date}
                      onChange={(e) => setNewYield({ ...newYield, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Record Yield
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
