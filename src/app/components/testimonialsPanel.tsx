"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import clsx from "clsx";

const testimonials = [
  {
    text: `“We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”`,
    author: "Sarah Markivoc – Project Manager",
  },
  {
    text: `“Room.me transformed our workflow. The simplicity and powerful features make it our top choice for remote collaboration!”`,
    author: "Daniel Wicks – Team Lead",
  },
  {
    text: `“An amazing product with great support. Room.me’s interface is clean, fast, and intuitive.”`,
    author: "Jane Michaels – UX Strategist",
  },
  
  {
    text: `“Room.me has made our meetings more productive. The ability to share screens and collaborate in real-time is a game-changer!”`,
    
    author: "New Author",
  },
  
  
];

export default function TestimonialPanel() {
  const [index, setIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true,
  });

  return (
    <div className='w-full h-full relative flex flex-col justify-end'>
      {/* Background Image */}
      <Image src='/assets/images/hero.png' alt='People' fill className='object-cover rounded-lg' priority />

      {/* Quote Box */}
      <div
        {...swipeHandlers}
        className='relative z-10 mx-6 mb-4 bg-white/5 border border-gray-400 backdrop-blur-sm text-white p-5 rounded-xl transition-opacity duration-500'>
        <p className='text-sm  leading-relaxed'>{testimonials[index].text}</p>
        <p className='text-xs mt-3 font-medium'>{testimonials[index].author}</p>
      </div>

      {/* Pane Indicators */}
      <div className='relative w-full z-10  mb-6 flex justify-center gap-2'>
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={clsx("w-12 h-1.5 rounded-full cursor-pointer transition-all duration-300", i === index ? "bg-purple-500 w-16" : "bg-white/40")}
          />
        ))}
      </div>
    </div>
  );
}
