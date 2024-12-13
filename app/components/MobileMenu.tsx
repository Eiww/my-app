"use client";
import React, { useState } from "react";

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative sm:hidden">
      {/* Кнопка меню */}
      <button
        className="fixed top-4 right-4 text-white [text-shadow:_2px_3px_10px_rgb(0_0_0_/_50%)] p-3 z-50 text-3xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Выпадающее меню */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transform transition-transform duration-500 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-darkblue w-full h-full py-28 px-20">
          <ul className="space-y-6">
            <li className="text-lg font-light text-white">О нас</li>
            <li className="text-lg font-light text-white">Услуги</li>
            <li className="text-lg font-light text-white">Стоимость</li>
            <li className="text-lg font-light text-white">Блог</li>
            <li className="text-lg font-light text-white">Команда</li>
            <li className="text-lg font-light text-white">Контакты</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
