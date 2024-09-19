import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-4 sm:p-8 sm:pb-20 sm:gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <nav className="flex flex-wrap gap-4 sm:gap-6">
          <a href="#" className="text-white hover:text-blue-300">
            О нас 0
          </a>
          <a href="#" className="text-white">
            Услуги
          </a>
          <a href="#" className="text-white">
            Стоимость
          </a>
          <a href="#" className="text-white">
            Блог
          </a>
          <a href="#" className="text-white">
            Команда
          </a>
          <a href="#" className="text-white">
            Контакты
          </a>
        </nav>
      </header>
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <p className="text-5xl sm:text-6xl font-bold">WAVE</p>
        <p className="text-lg sm:text-xl font-medium">школа для серфинга</p>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
