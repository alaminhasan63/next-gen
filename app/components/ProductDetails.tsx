import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';



const products = [
    {
        title: "Refrigerator Repair",
        features: [
            "Temperature control issues",
            "Ice maker repairs",
            "Water dispenser problems",
            "Door seal replacement",
            "Compressor diagnostics"
        ],
        image: "https://cdn.prod.website-files.com/642459614fc351e33df0ab06/646be3adce622fc3c2d0b54a_62a3614cf23bdd729af9ff43_Tekmetric-Auto-Repair-Shop%25201-min.jpeg"
    },
    {
        title: "Refrigerator Repair",
        features: [
            "Temperature control issues",
            "Ice maker repairs",
            "Water dispenser problems",
            "Door seal replacement",
            "Compressor diagnostics"
        ],
        image: "https://cdn.prod.website-files.com/642459614fc351e33df0ab06/646be3adce622fc3c2d0b54a_62a3614cf23bdd729af9ff43_Tekmetric-Auto-Repair-Shop%25201-min.jpeg"
    }


]

export function ProductDetails() {
    return (
        <div className="flex flex-col items-center py-24 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product) => (
                    <Card key={product.title} className="bg-zinc-900 border-zinc-800 flex flex-col">
                        <CardHeader>
                            <CardTitle className='text-white text-center'>{product.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 items-center">
                                <ul className="space-y-2">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-orange-500" />
                                            <span className="text-gray-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative  ">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-lg"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

