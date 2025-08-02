import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureItem[];
  imageUrl?: string;
}

function Feature({
  badge = "Excellence",
  title = "Why Choose Razzaq Sons",
  description = "Experience the benefits of partnering with Pakistan's trusted pharmaceutical supplier since 2010.",
  features = [
    {
      title: "14+ Years Experience",
      description: "Over a decade of excellence in pharmaceutical supply and distribution across Pakistan"
    },
    {
      title: "WHO-GMP Certified",
      description: "All products meet international quality standards ensuring patient safety and efficacy"
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency delivery and dedicated customer support services"
    }
  ],
  imageUrl = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}: FeatureProps) {
  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  {badge}
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular text-gray-900">
                  {title}
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-blue-600" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-md aspect-video overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Pharmaceutical Supply Chain" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };