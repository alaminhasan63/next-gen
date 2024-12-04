import React from 'react'
import { Clock, Shield, Wrench, } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function ServiceSection() {
    const services = [
        {
            title: "Refrigerator Repair",
            description: "From temperature control issues to ice maker malfunctions, we've got you covered. Our expert technicians can diagnose and fix a wide range of refrigerator problems to keep your food fresh and your energy bills low.",
            icon: Wrench,
        },
        {
            title: "Washer & Dryer Repair",
            description: "Don't let laundry pile up due to a broken washer or dryer. We specialize in both front-loading and top-loading washing machines, as well as all types of dryers. From strange noises to failure to start, we can help.",
            icon: Shield,
        },
        {
            title: "Oven & Range Repair",
            description: "Whether your oven isn't heating properly or your range burners won't ignite, our team can help. We work on gas and electric models to ensure your cooking appliances are working safely and efficiently.",
            icon: Clock,
        },
        {
            title: "Dishwasher Repair",
            description: "A malfunctioning dishwasher can disrupt your entire kitchen routine. Our technicians can address issues like poor cleaning performance, leaks, or unusual noises to get your dishwasher back in top shape.",
            icon: Wrench,
        },
        {
            title: "Microwave Repair",
            description: "Don't replace your microwave prematurely. Many issues, from faulty door switches to magnetron problems, can be repaired. Our experts can diagnose and fix a variety of microwave oven issues quickly and affordably.",
            icon: Shield,
        },
        {
            title: "Ice Maker Repair",
            description: "Whether it's a standalone ice maker or part of your refrigerator, we can help when your ice production stops or slows. Our technicians are skilled in diagnosing and repairing various ice maker issues.",
            icon: Clock,
        },
    ]
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-white">
                <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Comprehensive Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                            <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <Button className="text-orange-500 p-0 hover:text-orange-400">
                                Learn More →
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
