import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

// スライドデータ
const slides = [
  { content: "1. 会話を楽しもう\n友達を音声通話に招待しよう", id: 1, image: "/image/talk.png" },
  { content: "2. 書き込もう\n出されたお題に関することを書こう", id: 2, image: "/image/pc_man.png" },
  { content: "3. 考えよう\nヒントからお題を予測しよう", id: 3, image: "/image/think_m.png" },
  {
    content: "4. 起こったことを確認\n愉快な伝言ゲームの結果を楽しもう",
    id: 4,
    image: "/image/impressions.png",
  },
  {
    content: "5. 友達を作ろう\nProgramming Phoneで友達を作ろう",
    id: 5,
    image: "/image/firends.png",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev: number) => {
        if (currentIndex < slides.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex w-full justify-between">
      <button onClick={goToPreviousSlide}>
        <BiSolidLeftArrow />
      </button>
      <div className="flex flex-col items-center whitespace-pre-line text-center">
        <Image
          alt="image"
          className="py-3"
          height={100}
          src={slides[currentIndex].image}
          width={100}
        />
        {slides[currentIndex].content}
      </div>
      <button onClick={goToNextSlide}>
        <BiSolidRightArrow />
      </button>
    </div>
  );
};

export default Slideshow;
