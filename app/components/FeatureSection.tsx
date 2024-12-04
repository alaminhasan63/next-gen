import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeatureSection() {
  const featuredAppliances = [
    {
      title: "Refrigerator Repair",
      description:
        "Expert refrigerator repair services for all major brands. We diagnose and fix issues quickly to keep your food fresh and your energy bills low.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq8DUsZGORokGK3Ke0D5pA_PpN67x7Nhkiw&s",
    },
    {
      title: "Dryer Repair",
      description:
        "Professional dryer repair services to keep your clothes fresh and dry. We handle all makes and models.",
      image:
        "https://media.istockphoto.com/id/518423060/photo/man-repairing-dishwasher.jpg?s=612x612&w=0&k=20&c=ap9dtgegywoOiG-3VyRwckIHmytNzpVYKnYyx5JEGmI=",
    },
    {
      title: "Washing Machine Repair",
      description:
        "Specialized washing machine repair services for both front-loading and top-loading machines.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwYKnHxSSuTWrhXQBChJwzeRL7upnitu3F1StIXKDB58tMONV40-se40T6aQjbnJYJbQ&usqp=CAU",
    },
    {
      title: "Dishwasher Repair",
      description:
        "Complete dishwasher repair and maintenance services to keep your dishes sparkling clean.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEt4jOdpqAMZlaH5A-152yh0L6BMxlJ96UQ&s",
    },
    {
      title: "Range & Oven Repair",
      description:
        "Professional range and oven repair services to keep your cooking appliances working perfectly.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKy5cYKoPPfXkYMkqiFWJguEwtU4y4WbEVA&s",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Featured Appliance Repairs
      </h2>
      <div className="space-y-20">
        {featuredAppliances.map((appliance, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
          >
            {/* Image Section */}
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="relative w-full h-64 lg:h-72 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={appliance.image}
                  alt={appliance.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                {appliance.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {appliance.description}
              </p>
              <Button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-medium rounded">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
