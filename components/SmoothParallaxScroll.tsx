"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SmoothParralaxScroll.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

// Images list from your folder
const images = [
  "/anton-savinov-3rpjs5qwD_U-unsplash.jpg",
  "/anton-savinov-F9f3dE-Lkfo-unsplash.jpg",
  "/anton-savinov-S6jnHcI2Y-M-unsplash.jpg",
  "/anton-savinov-_dfPGoAvyfw-unsplash.jpg",
  "/christian-chen-8vVy1TGaRII-unsplash.jpg",
  "/dan-lefebvre-APUvZYCjPJ0-unsplash.jpg",
  "/devi-kartika-yUzHUMEK0Rw-unsplash.jpg",
  "/dylan-leagh-U0tAYrcGsO0-unsplash.jpg",
  "/eric-vo-CJeNJMAUmpU-unsplash.jpg",
  "/fabien-bazanegue-h7ktHeEIawI-unsplash.jpg",
  "/filip-mroz-gma1zfS3_6E-unsplash.jpg",
  "/junko-nakase-Q-72wa9-7Dg-unsplash.jpg",
  "/letizia-bordoni-vF9AtbfvFoM-unsplash.jpg",
  "/marius-ott-lHX10-lCga4-unsplash.jpg",
  "/maude-frederique-lavoie-EDSTj4kCUcw-unsplash.jpg",
  "/micaela-parente-g0vUgv-w5g4-unsplash.jpg",
  "/no-revisions-TyBnT0wowmw-unsplash.jpg",
  "/oli-woodman-WXInFUqx_ng-unsplash.jpg",
  "/peter-aschoff-j7BDBE0QjUE-unsplash.jpg",
  "/ryan-braxton-hTU_01uoAu0-unsplash.jpg",
  "/sarah-dorweiler-fr0J5-GIVyg-unsplash.jpg",
  "/tommaso-pecchioli-wQg7K-Aod50-unsplash.jpg",
  "/tony-litvyak-mUYmAF9mHow-unsplash.jpg",
  "/waldemar-Db4d6MRIXJc-unsplash.jpg",
  "/waldemar-oRVB7tcR1YI-unsplash.jpg",
];

export default function SmoothParallaxScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={`${styles.main} pb-20`}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={images.slice(0, 7)} y={y} />
        <Column images={images.slice(7, 14)} y={y2} />
        <Column images={images.slice(14, 21)} y={y3} />
        <Column images={images.slice(21)} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image
            src={src}
            alt="DoorWash"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </motion.div>
  );
};
