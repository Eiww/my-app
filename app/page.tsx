import Image from "next/image";

/* Simple React Snippets
Tailwind CSS Intellisense
Auto Import
Path Intellisense

*/
export default function Home() {
  return (
    <div>
      {/* Следующий блок веб-страницы */}
      <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-10 pb-10 gap-4 ">
        <Image
          src="/img/background.png"
          fill={true}
          alt={""}
          className="pointer-events-none user-select-none"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <header className="row-start-1 flex-col items-center gap-4 sm:flex-row sm:flex sm:items-start sm:gap-6 hidden relative">
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
        <main className="row-start-2 pointer-events-none user-select-none">
          <p className="caps sm:caps_mobile font-bold relative text-black user-select-none select-none ">
            WAVE
          </p>
          <p className="relative text-black user-select-none select-none pb-32 text-left sm:text-center">
            Школа серфинга на канарских Островах
          </p>
          <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center"></footer>
        </main>
      </div>
      <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-10 pb-10 gap-4 ">
        <p className="absolute text-darkblue user-select-none select-none text-5xl right-32 top-[1038px] sm:top-[1000px] sm:right-60">
          /
        </p>
        {/* right: 121px; top: 1038px; */}
        <p className="relative text-black user-select-none select-none sm:text-justify pt-44 text-3xl text-left">
          О ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ
        </p>
      </div>
    </div>
  );
}
