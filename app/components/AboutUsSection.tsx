import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, PenToolIcon as Tool } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Our team consists of fully licensed and certified technicians with years of experience."
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description: "We prioritize your satisfaction and strive to build long-lasting relationships with our clients."
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description: "We value your time and aim to provide quick, efficient service with minimal disruption to your day."
  },
  {
    icon: Tool,
    title: "Quality Parts",
    description: "We use only high-quality, manufacturer-approved parts for all our repairs to ensure longevity."
  }
]

export function AboutUsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto my-5 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Next Gen Appliance Repair NY</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <feature.icon className="h-6 w-6 text-orange-500" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
