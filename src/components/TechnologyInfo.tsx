import { DashboardLayout } from './DashboardLayout';
import { Smartphone, Droplet, Satellite, Cpu, LineChart, Zap } from 'lucide-react';

const technologies = [
  {
    id: 1,
    title: 'Precision Agriculture Drones',
    category: 'Aerial Technology',
    icon: Satellite,
    image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA4NzI2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Use drones for crop monitoring, spraying, and field mapping. Get real-time insights about crop health and optimize resource usage.',
    benefits: ['Reduces labor costs by 40%', 'Precise spraying reduces chemical use', 'Early disease detection', 'Complete field coverage'],
    cost: '₹50,000 - ₹3,00,000',
  },
  {
    id: 2,
    title: 'Smart Irrigation Systems',
    category: 'Water Management',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgzNzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Automated irrigation systems with soil moisture sensors and weather data integration. Save water and increase yield.',
    benefits: ['Save up to 50% water', 'Automated scheduling', 'Remote control via smartphone', 'Weather-based adjustments'],
    cost: '₹25,000 - ₹1,50,000',
  },
  {
    id: 3,
    title: 'IoT Soil Sensors',
    category: 'Monitoring',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgzNzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Monitor soil moisture, pH, nutrients, and temperature in real-time. Make data-driven decisions for better crop management.',
    benefits: ['Real-time soil data', 'Optimize fertilizer use', 'Prevent over-watering', 'Cloud-based analytics'],
    cost: '₹5,000 - ₹30,000 per sensor',
  },
  {
    id: 4,
    title: 'Farm Management Software',
    category: 'Digital Tools',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgzNzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete farm management on your mobile. Track expenses, plan crops, monitor weather, and manage labor all in one place.',
    benefits: ['All data in one place', 'Weather forecasts', 'Market price updates', 'Expense tracking'],
    cost: 'Free - ₹10,000/year',
  },
  {
    id: 5,
    title: 'Satellite Imaging & Analytics',
    category: 'Remote Sensing',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgzNzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Access satellite imagery to monitor crop health, predict yields, and identify problem areas across large farms.',
    benefits: ['Monitor large areas', 'Historical data analysis', 'Yield prediction', 'NDVI mapping'],
    cost: '₹15,000 - ₹50,000/year',
  },
  {
    id: 6,
    title: 'Solar-Powered Equipment',
    category: 'Energy',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1768602182173-154eeedeed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDgzNzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Solar panels and batteries to power irrigation pumps, sensors, and other farm equipment. Reduce electricity costs significantly.',
    benefits: ['Zero electricity bills', 'Government subsidies available', 'Eco-friendly', 'Low maintenance'],
    cost: '₹1,00,000 - ₹5,00,000',
  },
];

export function TechnologyInfo() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest Farming Technology</h1>
          <p className="text-gray-600">Discover modern innovations to transform your farm</p>
        </div>

        {/* Technology Cards */}
        <div className="space-y-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                          <p className="text-sm text-green-600 font-medium">{tech.category}</p>
                        </div>
                      </div>
                      <span className="bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                        {tech.cost}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{tech.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tech.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Learn More
                      </button>
                      <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                        Contact Vendor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Need Help Choosing the Right Technology?</h3>
          <p className="mb-6 text-green-50">
            Our agricultural technology experts can help you select the best solutions for your farm size and crops.
            Get personalized recommendations and installation support.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
