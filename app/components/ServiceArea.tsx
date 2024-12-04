import { MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceAreas = [
    "Valley Stream",
    "Garden City",
    "Hicksville",
    "Rockville Centre",
    "Hewlett",
    "Oceanside",
    "Great Neck",
    "Manhasset"
]

export function ServiceArea() {
    return (
        <Card className="bg-zinc-900 border-zinc-800 max-w-7xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    Service Areas
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {serviceAreas.map((area) => (
                        <div key={area} className="text-gray-400 hover:text-orange-500 transition-colors">
                            {area}, NY
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

