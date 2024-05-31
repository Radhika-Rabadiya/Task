"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = useCallback(() => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  }, [activeImage]);
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, clickNext]);
  return (
    <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0.2, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1.2, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                transition: { duration: 1.2, ease: "easeInOut" },
              }}
              className="w-full h-[80vh] object-cover transition-all duration-500 ease-in-out md:rounded-tl-3xl md:rounded-bl-3xl"
            >
              <Image
                src={images[activeImage].src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full  md:rounded-tl-3xl md:rounded-bl-3xl object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </main>
  );
};

export default Slider;
