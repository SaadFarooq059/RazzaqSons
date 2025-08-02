import React from "react";
import { useId } from "react";

const pharmaceuticalServices = [
  {
    title: "Quality Medicines",
    description:
      "WHO-GMP certified pharmaceutical products ensuring highest quality standards for patient safety and therapeutic efficacy.",
  },
  {
    title: "Fast Distribution",
    description:
      "Efficient cold chain logistics and nationwide distribution network ensuring timely delivery across Pakistan.",
  },
  {
    title: "Healthcare Support",
    description:
      "Dedicated support for hospitals, clinics, and healthcare providers with 24/7 emergency assistance.",
  },
  {
    title: "Trusted Partner",
    description:
      "14+ years of excellence in pharmaceutical supply and distribution with proven track record of reliability.",
  },
  {
    title: "Emergency Delivery",
    description:
      "24/7 emergency delivery services for urgent healthcare needs with rapid response capabilities.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Full compliance with Pakistani pharmaceutical regulations and international quality standards.",
  },
  {
    title: "Cold Chain Management",
    description:
      "Advanced temperature-controlled storage and transportation ensuring medicine integrity throughout the supply chain.",
  },
  {
    title: "Inventory Management",
    description:
      "Real-time inventory tracking and automated reordering systems to prevent stockouts and ensure availability.",
  },
];

export function FeaturesSectionWithCardGradient() {
  return (
    <div className="py-20 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive pharmaceutical solutions tailored to meet your healthcare needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {pharmaceuticalServices.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-blue-50 to-white p-6 rounded-3xl overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Grid size={20} />
              <p className="text-base font-bold text-blue-900 relative z-20 mb-3">
                {feature.title}
              </p>
              <p className="text-gray-600 mt-4 text-base font-normal relative z-20 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-blue-100/30 to-blue-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-blue-200/20 fill-blue-200/20"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}