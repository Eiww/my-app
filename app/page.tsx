import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex justify-center gap-6">
        <nav className="flex">
          <a href="#" className="text-white font-bold">
            О нас
          </a>
          <a href="#" className="text-white font-bold">
            Услуги
          </a>
          <a href="#" className="text-white font-bold">
            Стоимость
          </a>
          <a href="#" className="text-white font-bold">
            Блог
          </a>
          <a href="#" className="text-white font-bold">
            Команда
          </a>
          <a href="#" className="text-white font-bold">
            Контакты
          </a>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>WAVE</p>
        <p>школа для серфинга</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
