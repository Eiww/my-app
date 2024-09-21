import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-10 pb-10 gap-4 ">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('/img/background.png')` }}
      ></div>
      <header className="row-start-1 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 sm:text-left">
        <nav className="flex flex-wrap gap-4 sm:gap-6">
          <a href="#" className="relative group text-white">
            О нас
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group text-white">
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group text-white">
            Стоимость
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group text-white">
            Блог
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group text-white">
            Команда
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group text-white">
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-darkblue group-hover:w-full"></span>
          </a>
        </nav>
      </header>
      <main className="flex flex-col gap-4 row-start-2 items-center justify-center">
        <p className="caps font-bold">WAVE</p>
        <p className="text-lg sm:text-xl">
          Школа серфинга на канарских Островах
        </p>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
