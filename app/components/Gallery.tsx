"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Image {
  src: string;
  alt: string;
  category: "tourists" | "nature" | "professionals" | "all";
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleImages, setVisibleImages] = useState<number>(6); // Начальное количество отображаемых изображений

  const images: Image[] = [
    {
      src: "https://picsum.photos/200/200?random=1",
      alt: "tourist 1",
      category: "tourists",
    },
    {
      src: "https://picsum.photos/200/200?random=2",
      alt: "tourist 2",
      category: "tourists",
    },
    {
      src: "https://picsum.photos/200/200?random=3",
      alt: "nature 1",
      category: "nature",
    },
    {
      src: "https://picsum.photos/200/200?random=4",
      alt: "nature 2",
      category: "nature",
    },
    {
      src: "https://picsum.photos/200/200?random=5",
      alt: "professional 1",
      category: "professionals",
    },
    {
      src: "https://picsum.photos/200/200?random=6",
      alt: "professional 2",
      category: "professionals",
    },
    {
      src: "https://picsum.photos/200/200?random=7",
      alt: "tourist 3",
      category: "tourists",
    },
    {
      src: "https://picsum.photos/200/200?random=8",
      alt: "tourist 4",
      category: "tourists",
    },
    {
      src: "https://picsum.photos/200/200?random=9",
      alt: "nature 3",
      category: "nature",
    },
    {
      src: "https://picsum.photos/200/200?random=10",
      alt: "nature 4",
      category: "nature",
    },
    {
      src: "https://picsum.photos/200/200?random=11",
      alt: "professional 3",
      category: "professionals",
    },
    {
      src: "https://picsum.photos/200/200?random=12",
      alt: "professional 4",
      category: "professionals",
    },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleImages(6); // Сбрасываем количество изображений на начальное при смене категории
  };

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 3); // Загружаем 3 картинки
  };

  return (
    <div>
      {/* Кнопки фильтрации */}
      <div className="flex flex-col md:flex-row font-semibold md:gap-6 mb-6">
        {["all", "tourists", "nature", "professionals"].map((category) => (
          <button
            key={category}
            className={`category-btn px-4 py-2 text-lg font-medium transition-colors ${
              selectedCategory === category ? "text-[#00B2A0]" : "text-black"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "all"
              ? "ВСЕ"
              : category === "tourists"
              ? "ТУРИСТЫ"
              : category === "nature"
              ? "ПРИРОДА"
              : "ПРОФИ"}
          </button>
        ))}
      </div>

      {/* Галерея */}
      <div className="gallery block md:hidden">
        {/* Слайдер для мобильных устройств */}
        <Swiper
          spaceBetween={10} // расстояние между слайдами
          slidesPerView="auto" // автоопределение слайдов
          loop={false}
          className="block md:hidden" // Показать слайдер только на экранах меньше 768px
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {images
            .filter(
              (image) =>
                selectedCategory === "all" ||
                image.category === selectedCategory
            )
            .slice(0, visibleImages)
            .map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="gallery hidden md:block">
        {/* Сетка для десктопов */}
        <div className=" md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images
            .filter(
              (image) =>
                selectedCategory === "all" ||
                image.category === selectedCategory
            )
            .slice(0, visibleImages)
            .map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      {/* Кнопка для загрузки еще изображений */}
      <div className="text-center mt-6">
        <button
          className=" text-black px-6 py-2 border-2 hover:text-white hover:bg-darkblue transition-colors duration-500 hover:border-transparent"
          onClick={loadMoreImages}
        >
          ПОКАЗАТЬ ЕЩЕ
        </button>
      </div>
    </div>
  );
};

export default Gallery;
