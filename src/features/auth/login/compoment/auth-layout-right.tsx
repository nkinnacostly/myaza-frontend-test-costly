"use client";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const testimonials = [
  {
    id: 1,
    author: "Ali Riaz",
    location: "Singapore",
    rating: 5,
    text: "I've been using Uifry for over a year, and it's helped simplify all my payments.",
  },
  {
    id: 2,
    author: "Sarah Chen",
    location: "Hong Kong",
    rating: 5,
    text: "The best payment platform I've ever used. It's intuitive and reliable.",
  },
  {
    id: 3,
    author: "James Wilson",
    location: "Australia",
    rating: 5,
    text: "Transformed how I handle international payments. Highly recommended!",
  },
];

function AuthLayoutRight() {
  return (
    <div className="flex items-start justify-start w-full flex-col gap-8 ">
      <TestimonialCarousel testimonials={testimonials} />
      <div className="w-full relative">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: -20, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className="absolute -right-5 top-0"
        >
          <Image
            src="/login-img.png"
            alt="login"
            width={720}
            height={200}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AuthLayoutRight;
