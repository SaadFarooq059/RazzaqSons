"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  organization: string;
}

export function TestimonialCard({ 
  handleShuffle, 
  testimonial, 
  position, 
  id, 
  author, 
  organization 
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-blue-200 bg-white/95 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="mx-auto h-32 w-32 rounded-full border-4 border-blue-100 bg-blue-50 flex items-center justify-center">
        <div className="text-4xl font-bold text-blue-600">
          {author.split(' ').map(name => name[0]).join('').slice(0, 2)}
        </div>
      </div>
      <span className="text-center text-lg italic text-gray-700 leading-relaxed">&quot;{testimonial}&quot;</span>
      <div className="text-center">
        <div className="text-sm font-semibold text-blue-600">{author}</div>
        <div className="text-xs text-gray-500 mt-1">{organization}</div>
      </div>
    </motion.div>
  );
}

interface ShuffleCardsProps {
  testimonials?: Array<{
    id: number;
    testimonial: string;
    author: string;
    organization: string;
  }>;
}

const defaultTestimonials = [
  {
    id: 1,
    testimonial: "Razzaq Sons has been our reliable pharmaceutical supplier for over 8 years. Their quality and service are unmatched in the industry.",
    author: "Dr. Ahmed Hassan",
    organization: "Shifa International Hospital"
  },
  {
    id: 2,
    testimonial: "Excellent distribution network and always on-time delivery. They understand the urgency of healthcare needs and never disappoint.",
    author: "Fatima Khan",
    organization: "City Hospital Lahore"
  },
  {
    id: 3,
    testimonial: "Professional team, quality products, and competitive pricing. Razzaq Sons is our preferred pharmaceutical partner for all medical supplies.",
    author: "Dr. Muhammad Ali",
    organization: "Medicare Clinic Network"
  }
];

export function ShuffleCards({ testimonials = defaultTestimonials }: ShuffleCardsProps) {
  const [positions, setPositions] = React.useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const lastPosition = newPositions.pop();
    if (lastPosition) {
      newPositions.unshift(lastPosition);
    }
    setPositions(newPositions);
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-white px-8 py-32">
      <div className="text-center mb-20 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Partners Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Trusted by healthcare providers across Pakistan for quality pharmaceutical supply
        </p>
        <p className="text-sm text-blue-600 mt-4 font-medium">
          Drag the front card to see more testimonials
        </p>
      </div>
      
      <div className="relative h-[450px] w-[350px] flex-shrink-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}