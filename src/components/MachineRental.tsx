import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Search, Filter, MapPin, Calendar, DollarSign, Star } from 'lucide-react';

const machines = [
  {
    id: 1,
    name: 'John Deere 5075E Tractor',
    type: 'Tractor',
    price: 1200,
    location: 'Punjab',
    rating: 4.8,
    available: true,
    owner: 'Rental Hub',
    image: 'https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: '75 HP, 4WD',
  },
  {
    id: 2,
    name: 'Combine Harvester',
    type: 'Harvester',
    price: 2500,
    location: 'Haryana',
    rating: 4.9,
    available: true,
    owner: 'AgriEquip',
    image: 'https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGhhcnZlc3QlMjBmaWVsZHxlbnwxfHx8fDE3NzA3OTkwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: 'Self-propelled, 200 HP',
  },
  {
    id: 3,
    name: 'Rotavator',
    type: 'Tillage',
    price: 800,
    location: 'Uttar Pradesh',
    rating: 4.6,
    available: true,
    owner: 'FarmTools',
    image: 'https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: '6 feet width',
  },
  {
    id: 4,
    name: 'Seed Drill',
    type: 'Planting',
    price: 600,
    location: 'Punjab',
    rating: 4.7,
    available: false,
    owner: 'AgriRent',
    image: 'https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: '9 row, hydraulic',
  },
  {
    id: 5,
    name: 'Sprayer',
    type: 'Spraying',
    price: 500,
    location: 'Maharashtra',
    rating: 4.5,
    available: true,
    owner: 'FarmTech',
    image: 'https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: '400L capacity, boom type',
  },
  {
    id: 6,
    name: 'Loader',
    type: 'Material Handling',
    price: 1500,
    location: 'Haryana',
    rating: 4.8,
    available: true,
    owner: 'Heavy Machines',
    image: 'https://images.unsplash.com/photo-1759967448986-29274948919a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFjdG9yJTIwZmFybWluZyUyMGZpZWxkfGVufDF8fHx8MTc3MDg3MjY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: '1.5 ton capacity',
  },
];

export function MachineRental() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const types = ['All', 'Tractor', 'Harvester', 'Tillage', 'Planting', 'Spraying', 'Material Handling'];

  const filteredMachines = machines.filter((machine) => {
    const matchesSearch = machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.specs.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || machine.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Machine Rental</h1>
          <p className="text-gray-600">Rent modern farming equipment at affordable rates</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search machines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Machine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMachines.map((machine) => (
            <div key={machine.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
                {!machine.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Not Available
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{machine.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{machine.name}</h3>
                    <p className="text-sm text-gray-600">{machine.specs}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{machine.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Per Day</p>
                    <p className="text-xl font-bold text-green-600">₹{machine.price}</p>
                  </div>
                  <button
                    disabled={!machine.available}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      machine.available
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {machine.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMachines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No machines found matching your criteria</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
