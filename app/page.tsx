import Image from "next/image";
import Swiper from "./components/Swiper";

/* Simple React Snippets
Tailwind CSS Intellisense
Auto Import
Path Intellisense

*/
export default function Home() {
  return (
    <div>
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
          <p className="caps font-bold relative text-black user-select-none select-none ">
            WAVE
          </p>
          <p className="relative text-black user-select-none select-none pb-32 text-left sm:text-center">
            Школа серфинга на канарских Островах
          </p>
          <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center"></footer>
        </main>
      </div>
      <div className="grid items-center content-between justify-items-center min-h-screen p-10 pb-10 gap-4 ">
        <div className="flex items-end">
          <p className=" text-black user-select-none select-none sm:text-justify text-3xl text-left">
            О ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>
        <Swiper />
      </div>
      <div className="md:grid md:content-between md:items-center md:justify-items-center md:min-h-screen md:p-10 md:pb-10 gap-10 md:gap-28 bg-bggray">
        <div className="flex items-end">
          <p className=" text-black user-select-none select-none sm:text-justify text-3xl text-left">
            В ШКОЛЕ ВЫ ПОЛУЧИТЕ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>
        {/* <ul className="list-none flex flex-col gap-24 md:flex md:flex-row md:items-center ">
          <li className="flex items-center flex-col md:flex-row-reverse gap-5">
            ПРОЖИВАНИЕ
            <img src="/img/icon_3s1.svg" alt="" />
            <p className="text-xs">
              Наша школа серфинга находится в 100 м от океанского побережья. К
              услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
              террасы открывается вид на океан. Расстояние до центра города 15
              мин.
            </p>
          </li>
          <li className="flex items-center flex-col md:flex-row-reverse gap-5">
            ПЕРЕЛЕТ И СТРАХОВКУ
            <img src="/img/icon_3s2.svg" alt="" />
            <p className="text-xs">
              Все участники программы застрахованы страховой компанией Allianz.
              Перелет из Тенерифе до острова Лансароте и обратно входит в
              стоимость программы
            </p>
          </li>
          <li className="flex items-center flex-col md:flex-row-reverse gap-5">
            ОБУЧЕНИЕ И ЭКИПИРОВКУ
            <img src="/img/icon_3s3.svg" alt="" />
            <p className="text-xs">
              Все оборудование и экипировка известных производителей и
              предоставляется на весь курс программы. Тренировочный процесс
              начинается с определения вашего уровня катания
            </p>
          </li>
        </ul> */}
        <div className="flex flex-col md:grid md:grid-cols-3">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p>ПРОЖИВАНИЕ</p>
            <img src="/img/icon_3s1.svg" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>ПЕРЕЛЕТ И СТРАХОВКУ</p>
            <img src="/img/icon_3s2.svg" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>ОБУЧЕНИЕ И ЭКИПИРОВКУ</p>
            <img src="/img/icon_3s3.svg" alt="" />
          </div>

          <p className="text-xs">
            Наша школа серфинга находится в 100 м от океанского побережья. К
            услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
            террасы открывается вид на океан. Расстояние до центра города 15
            мин.
          </p>
          <p className="text-xs">
            Все участники программы застрахованы страховой компанией Allianz.
            Перелет из Тенерифе до острова Лансароте и обратно входит в
            стоимость программы
          </p>
          <p className="text-xs">
            Все оборудование и экипировка известных производителей и
            предоставляется на весь курс программы. Тренировочный процесс
            начинается с определения вашего уровня катания
          </p>
        </div>
        <div className="flex flex-col md:flex md:flex-row md:justify-around md:items-center">
          <div className="flex flex-col gap-4">
            <div>
              <img src="/img/wave85.svg" alt="" />
              <p>85 раз</p>
            </div>
            <div>
              <p>приехали второй раз</p>
            </div>

            <div>
              <img src="/img/wave95.svg" alt="" />
              <p>95 раз</p>
            </div>
            <div>
              <p>научились кататься</p>
            </div>
            <div>
              <img src="/img/wave99.svg" alt="" />
              <p>99 раз</p>
            </div>
            <div>
              <p>довольных клиентов</p>
            </div>
          </div>
          <div className="md: flex flex-col md:w-1/3  md:p-2 gap-4">
            <p>
              Огромным преимуществом нашей школы является собственная методика
              обучения. Мы разработали собственный стиль обучения серфингу,
              который позволяет новичкам максимально быстро встать на доску.
            </p>
            <p>
              Именно наша методика и наши преподаватели позволили нам пройти
              аттестацию Федерации серфинга Канарских островов - FEDERACIÓN
              CANARIA DE SURF. Это означает, что наша школа соответствует всем
              мировым стандартам. Переаттестация производится ежегодно и это
              позволяет нам всегда стремиться к улучшению обучения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
