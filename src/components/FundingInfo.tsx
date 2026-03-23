import { DashboardLayout } from './DashboardLayout';
import { HandCoins, CheckCircle, ExternalLink, FileText, Clock, IndianRupee } from 'lucide-react';

const fundingPrograms = [
  {
    id: 1,
    name: 'PM-KISAN Samman Nidhi',
    provider: 'Government of India',
    amount: '₹6,000/year',
    type: 'Direct Benefit Transfer',
    eligibility: 'All landholding farmers',
    description: 'Financial support of ₹6000 per year in three equal installments of ₹2000 directly into bank accounts of all landholding farmers.',
    benefits: [
      'Three installments of ₹2000 each',
      'Direct bank transfer',
      'No upper limit on farm size',
      'Self-registration available',
    ],
    documents: ['Aadhaar Card', 'Land Ownership Papers', 'Bank Account Details'],
    deadline: 'Open throughout the year',
    status: 'Active',
    link: 'https://pmkisan.gov.in',
  },
  {
    id: 2,
    name: 'Kisan Credit Card (KCC)',
    provider: 'Ministry of Agriculture',
    amount: 'Up to ₹3 lakh',
    type: 'Credit Facility',
    eligibility: 'Farmers with land ownership or tenancy',
    description: 'Short-term credit to farmers for crop cultivation and other farm expenses. Low interest rates with flexible repayment.',
    benefits: [
      'Low interest rate (4% per annum)',
      'Interest subvention benefit',
      'Flexible repayment terms',
      'Additional 3% incentive on timely repayment',
    ],
    documents: ['Identity Proof', 'Address Proof', 'Land Records', 'Bank Statements'],
    deadline: 'Continuous',
    status: 'Active',
    link: 'https://www.india.gov.in/kisan-credit-card',
  },
  {
    id: 3,
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    provider: 'Ministry of Agriculture',
    amount: 'Based on crop value',
    type: 'Crop Insurance',
    eligibility: 'All farmers',
    description: 'Comprehensive crop insurance scheme covering yield losses due to non-preventable natural risks from pre-sowing to post-harvest.',
    benefits: [
      'Low premium rates',
      'Coverage for all risks',
      'Quick claim settlement',
      'Technology-enabled assessment',
    ],
    documents: ['Aadhaar Card', 'Land Documents', 'Bank Account', 'Crop Details'],
    deadline: 'Before sowing season',
    status: 'Active',
    link: 'https://pmfby.gov.in',
  },
  {
    id: 4,
    name: 'National Mission for Sustainable Agriculture',
    provider: 'Government of India',
    amount: 'Up to ₹10 lakh',
    type: 'Subsidy',
    eligibility: 'Farmers adopting sustainable practices',
    description: 'Financial assistance for adopting climate-resilient practices, water conservation, soil health management, and organic farming.',
    benefits: [
      'Up to 50% subsidy on equipment',
      'Support for water conservation',
      'Soil health management assistance',
      'Organic farming support',
    ],
    documents: ['Farm Details', 'Project Proposal', 'Identity Proof', 'Bank Account'],
    deadline: 'March 31, 2026',
    status: 'Active',
    link: 'https://nmsa.dac.gov.in',
  },
  {
    id: 5,
    name: 'Sub-Mission on Agricultural Mechanization (SMAM)',
    provider: 'Ministry of Agriculture',
    amount: '40-80% subsidy',
    type: 'Equipment Subsidy',
    eligibility: 'All categories of farmers',
    description: 'Financial assistance for purchase of agricultural machinery and equipment to increase farm mechanization.',
    benefits: [
      '40-50% subsidy for general farmers',
      '50-80% subsidy for SC/ST/Women',
      'Wide range of machinery covered',
      'Custom Hiring Centers support',
    ],
    documents: ['Identity Proof', 'Caste Certificate (if applicable)', 'Land Records', 'Bank Account'],
    deadline: 'April 30, 2026',
    status: 'Active',
    link: 'https://agrimachinery.nic.in',
  },
  {
    id: 6,
    name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    provider: 'Ministry of Agriculture',
    amount: '₹50,000 per hectare',
    type: 'Grant',
    eligibility: 'Farmers practicing organic farming',
    description: 'Support for organic farming through cluster formation, capacity building, certification, and marketing assistance.',
    benefits: [
      '₹50,000/ha for 3 years',
      'Organic certification support',
      'Training and capacity building',
      'Market linkage assistance',
    ],
    documents: ['Land Documents', 'Cluster Formation Certificate', 'Identity Proof', 'Bank Account'],
    deadline: 'June 30, 2026',
    status: 'Active',
    link: 'https://pgsindia-ncof.gov.in',
  },
];

export function FundingInfo() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Funding Programs</h1>
          <p className="text-gray-600">Discover subsidies, loans, and financial support available for farmers</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <HandCoins className="w-10 h-10 mb-3 text-green-100" />
            <p className="text-green-100 mb-1 text-sm">Active Programs</p>
            <p className="text-3xl font-bold">{fundingPrograms.length}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <IndianRupee className="w-10 h-10 mb-3 text-blue-100" />
            <p className="text-blue-100 mb-1 text-sm">Potential Benefits</p>
            <p className="text-3xl font-bold">₹20L+</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <Clock className="w-10 h-10 mb-3 text-purple-100" />
            <p className="text-purple-100 mb-1 text-sm">Application Status</p>
            <p className="text-3xl font-bold">Available</p>
          </div>
        </div>

        {/* Funding Programs */}
        <div className="space-y-6">
          {fundingPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {program.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{program.provider}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {program.type}
                      </span>
                      <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        {program.amount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{program.description}</p>

                {/* Eligibility */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Eligibility:</p>
                  <p className="text-sm text-gray-600">{program.eligibility}</p>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {program.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents Required */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Documents Required:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.documents.map((doc, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Deadline: {program.deadline}</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                      Apply Now
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Need Help with Applications?</h3>
          <p className="mb-6 text-blue-50">
            Our team can assist you in understanding eligibility criteria, preparing documents, and submitting applications for these funding programs.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
