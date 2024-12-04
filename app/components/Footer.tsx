 import { Clock, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 py-5 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need Appliance Repair?</h2>
            <p className="text-gray-400">Contact us for quick and reliable service</p>
            <div className="flex items-center gap-4 mt-4">
              <Clock className="w-5 h-5 text-orange-500" />
              <p className="text-gray-400">Available 24/7 for emergency repairs</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <PhoneCall className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-sm text-gray-400">Call us now</p>
              <p className="text-xl font-semibold">1-800-APPLIANCE</p>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">Schedule Service</Button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-mono text-xl font-bold text-yellow-400 mb-4">Need Appliance</h3>
            <p className="text-gray-400">Professional repair services for all your home appliances</p>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Refrigerator Repair</li>
              <li>Washer Repair</li>
              <li>Dryer Repair</li>
              <li>Dishwasher Repair</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Valley Stream</li>
              <li>Garden City</li>
              <li>Hicksville</li>
              <li>Rockville Centre</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@nextgen.com</li>
              <li>24/7 Emergency Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

