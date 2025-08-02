import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

export const Feature73 = ({
  heading = "Best in the Market",
  description = "Discover what makes Razzaq Sons the leading pharmaceutical supply company in Pakistan. Our commitment to quality, reliability, and innovation sets us apart from the competition.",
  linkUrl = "/contact",
  linkText = "Partner with Us",
  features = [
    {
      id: "feature-1",
      title: "WHO-GMP Certified Quality",
      description:
        "All our pharmaceutical products meet WHO Good Manufacturing Practice standards, ensuring the highest quality and safety for patients across Pakistan.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "feature-2",
      title: "Advanced Cold Chain Logistics",
      description:
        "State-of-the-art temperature-controlled storage and transportation systems maintain medicine integrity from manufacturer to patient.",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "feature-3",
      title: "24/7 Emergency Support",
      description:
        "Round-the-clock emergency delivery services and dedicated support team ensuring healthcare providers never run out of critical medicines.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-32 bg-white">
      <div className="container flex flex-col gap-16 lg:px-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-gray-900">
            {heading}
          </h2>
          <p className="mb-8 text-gray-600 lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg text-blue-600 hover:text-blue-700 transition-colors"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-xl border border-blue-200 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem] relative">
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-gray-900">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};