"use client";
import React, { useState } from "react";
import MasterCard from "@/components/icons/mastercard_logo.svg";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  totalBalance: number;
  currentBalance: number;
  cardNumber: string;
  expiryDate: string;
}

function Card({
  totalBalance = 15595.015,
  currentBalance = 5750.2,
  cardNumber = "5282 3456 7890 1289",
  expiryDate = "09/25",
}: CardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      gradient: "from-purple-500 to-blue-500",
      balance: currentBalance,
      number: cardNumber,
      expiry: expiryDate,
    },
    {
      gradient: "from-pink-500 to-purple-500",
      balance: 3250.75,
      number: "4485 xxxx xxxx 1234",
      expiry: "12/25",
    },
    {
      gradient: "from-blue-500 to-cyan-500",
      balance: 1890.5,
      number: "3752 xxxx xxxx 5678",
      expiry: "03/26",
    },
  ];

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
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + cards.length) % cards.length
    );
  };

  return (
    <div className="bg-primary p-6 rounded-3xl w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-gray-400 text-sm mb-2">Card Balance</h2>
        <p className="text-white text-3xl font-semibold">
          ${totalBalance.toLocaleString()}
        </p>
      </div>

      <div className="relative overflow-hidden h-[200px]">
        <AnimatePresence initial={false} custom={currentIndex} mode="popLayout">
          <motion.div
            key={currentIndex}
            className={`bg-gradient-to-b ${cards[currentIndex].gradient} p-6 rounded-2xl absolute w-full`}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
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
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-gray-200 text-sm mb-2">Current Balance</p>
                <p className="text-white text-2xl font-semibold">
                  ${cards[currentIndex].balance.toLocaleString()}
                </p>
              </div>
              <div className="flex">
                <MasterCard />
              </div>
            </div>

            <div className="flex justify-between items-end">
              <p className="text-gray-200 tracking-wider">
                {cards[currentIndex].number}
              </p>
              <p className="text-gray-200">{cards[currentIndex].expiry}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 my-4">
        {cards.map((_, index) => (
          <motion.span
            key={index}
            className={`h-2 cursor-pointer ${
              index === currentIndex ? "w-6 bg-gray-100" : "w-2 bg-gray-400"
            } rounded-full`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentIndex ? [1, 1.1, 1] : 1,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            transition={{
              duration: 0.5,
              repeat: index === currentIndex ? Infinity : 0,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-tertiary text-primary py-3 rounded-xl hover:bg-opacity-40 transition-all">
          Manage Cards
        </Button>
        <Button
          variant="outline"
          className="flex-1 bg-primary text-white py-3 rounded-xl hover:bg-opacity-90 transition-all"
        >
          Transfer
        </Button>
      </div>
    </div>
  );
}

export default Card;
