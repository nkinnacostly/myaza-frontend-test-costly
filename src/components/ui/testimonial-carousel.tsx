"use client";

import { StarRating } from "./star-rating";
import { H2 } from "./typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  author: string;
  location: string;
  rating: number;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-start gap-8 text-white",
        className
      )}
    >
      <div className="relative w-full h-[200px] ">
        <AnimatePresence initial={false} custom={1} mode="wait">
          <motion.div
            key={currentIndex}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full"
          >
            <div className="flex flex-col items-start justify-start gap-4 w-full max-w-[600px] p-6 rounded-lg">
              <StarRating
                totalStars={5}
                defaultValue={testimonials[currentIndex].rating}
                // disabled
                size="sm"
              />
              <H2>&ldquo;{testimonials[currentIndex].text}&rdquo;</H2>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-lg text-tertiary">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-sm text-tertiary">
                  {testimonials[currentIndex].location}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Indicators */}
      <div className="flex gap-2 items-center justify-center w-full">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="p-0 focus:outline-none"
          >
            <motion.div
              className={cn(
                "rounded-full w-3 h-3",
                currentIndex === index
                  ? "bg-tertiary w-[28px] h-3"
                  : "bg-primary"
              )}
              initial={false}
              animate={{
                scale: currentIndex === index ? 1 : 0.8,
                opacity: currentIndex === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
