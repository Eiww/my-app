import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
      <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-10 pb-10 gap-4 ">
        <p className="absolute text-darkblue user-select-none select-none text-5xl right-32 top-[1038px] sm:top-[1000px] sm:right-60">
          /
        </p>
        <p className=" text-black user-select-none select-none sm:text-justify pt-44 text-3xl text-left">
          О ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ
        </p>

        {/* <div className="grid grid-cols-6 gap-12 md:grid-cols-2 p-80">
          <p className=" text-black">
            Канарские острова не случайно называют европейскими Гавайями – это
            идеальное место для поклонников серфинга: стабильный теплый ветер
            круглый год, песчаные пляжи, километры нетронутых просторов и
            прозрачное море. А настоящей Меккой для серфингистов становится
            Фуэртевентура – второй по величине остров архипелага.
          </p>
          <p className=" text-black">
            Пока что вы только хотите понять, что такое серфинг, или уже
            испытали всю прелесть катания на волнах, но желаете поднять свой
            уровень? Наша школа серфинга сможет предложить обучение для любого
            уровня подготовки.
          </p>
          <p className=" text-black">
            Именно здесь лучшее в Испании место, в котором можно пройти обучение
            серфингу. Кроме того, что зимой и осенью сюда приходят огромные
            атлантические волны, Фуэртевентура может похвастать и множеством
            мелководных спокойных лагун, отлично подходящих для обучения
            начинающих серфингистов.
          </p>
          <p className=" text-black">
            Четыре часа увлекательных занятий в день помогут вам уверенно
            покорять волны, почувствовать себя настоящим серфингистом.
          </p>
          <p className=" text-black">
            Серфинг на Канарских островах доступен круглый год – и волны, и
            подходящая погода здесь есть всегда. Причем волну, подходящую по
            уровню, сможет найти и настоящий профи, и новичок. Не случайно
            считается, что именно это место лучше всего подойдет для обучения
            здесь возможно без сложностей переходить на новый уровень.
          </p>
          <p className=" text-black">
            Основные достоинства нашей русской школы – высокое качество
            преподавания и организации занятий, безопасность (все наши клиенты
            застрахованы в компании Allianz), отличный инвентарь и экипировка
            (предоставляется на весь курс обучения), в том числе мягкие
            безопасные доски для начинающих.
          </p>
          <p className=" text-black">
            Перечисляя достоинства, нельзя обойти и то, что пляжи Фуэртевентуры
            самые протяженные на Канарах. В итоге невозможно представить их
            переполненных туристами. Вы столкнетесь только с теми, кого,как и
            вас, будет интересовать одна цель – обучение серфингу.
          </p>
          <p className=" text-black">
            Сначала мы определяем уровень катания и физической подготовки и
            только потом составляем программу подготовки. И можем заверить, что
            после того, как закончится обучение, вы не только получите массу
            великолепных ощущений, но и это уровень поднимется на новую ступень.
          </p>
        </div> */}
      </div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
      <div className="grid grid-rows-[40px_1fr_40px] items-center justify-items-center min-h-screen p-10 pb-10 gap-28 bg-bggray">
        <p className=" text-black user-select-none select-none sm:text-justify md:pt-44 text-3xl text-left">
          В ШКОЛЕ ВЫ ПОЛУЧИТЕ
        </p>

        <ul className="list-none flex flex-col gap-24 md:flex md:flex-row md:items-center">
          <div></div>
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
        </ul>
        <div className="gap-8">
          <div>
            <div>
              <p>приехали</p>
              <img src="/img/wave85.svg" alt="" />
              <p>85 раз</p>
            </div>
            <div>
              <p>приехали</p>
              <img src="/img/wave95.svg" alt="" />
              <p>95 раз</p>
            </div>
            <div>
              <p>приехали</p>
              <img src="/img/wave99.svg" alt="" />
              <p>99 раз</p>
            </div>
          </div>
          <div>
            {" "}
            <p>приехали</p>
            <p>приехали</p>
          </div>
        </div>
      </div>
    </div>
  );
}
