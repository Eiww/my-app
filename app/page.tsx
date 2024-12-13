import Image from "next/image";
import MobileMenu from "./components/MobileMenu";
import Swiper from "./components/Swiper";
import Gallery from "./components/Gallery";
import FullWidthSlider from "./components/FullWidthSlider";

export default function Home() {
  return (
    <div>
      <MobileMenu />
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

      <div className="grid items-center justify-items-center md:p-28 p-2 pb-10 gap-9 md:gap-14 ">
        <div className="flex items-end p-4">
          <p className="h-caps text-black user-select-none select-none sm:text-justify text-3xl text-left font-bold">
            О ШКОЛЕ, О СЕРФИНГЕ, О КАНАРАХ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>
        <Swiper />
      </div>
      <div className="md:grid md:content-between md:items-center md:justify-items-center md:min-h-screen md:p-10 md:pb-10 gap-10 md:gap-28 bg-bggray">
        <div className="flex items-end p-4">
          <p className="h-caps text-black user-select-none select-none sm:text-justify text-3xl text-left font-bold">
            В ШКОЛЕ ВЫ ПОЛУЧИТЕ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-12 md:p-24 p-3 gap-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <img src="/img/icon_3s1.svg" alt="" />
              <p>ПРОЖИВАНИЕ</p>
            </div>
            <p className="text-xs text-center md:text-left ">
              Наша школа серфинга находится в 100 м от океанского побережья. К
              услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
              террасы открывается вид на океан. Расстояние до центра города 15
              мин.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <img src="/img/icon_3s2.svg" alt="" />
              <p>ПЕРЕЛЕТ И СТРАХОВКУ</p>
            </div>
            <p className="text-xs text-center md:text-left">
              Все участники программы застрахованы страховой компанией Allianz.
              Перелет из Тенерифе до острова Лансароте и обратно входит в
              стоимость программы
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <img src="/img/icon_3s3.svg" alt="" />
              <p>ОБУЧЕНИЕ И ЭКИПИРОВКУ</p>
            </div>

            <p className="text-xs text-center md:text-left">
              Все оборудование и экипировка известных производителей и
              предоставляется на весь курс программы. Тренировочный процесс
              начинается с определения вашего уровня катания
            </p>
          </div>
        </div>

        <div className="flex flex-col p-4 md:gap-20 gap-3 md:flex md:flex-row md:justify-around md:items-center">
          <div className="flex flex-col gap-4">
            <div className="md:flex md:gap-2">
              <img src="/img/wave85.svg" alt="" />
              <p className="text-2xl font-bold">85%</p>
            </div>
            <div>
              <p>приехали второй раз</p>
            </div>
            <div className="md:flex md:gap-2">
              <img src="/img/wave95.svg" alt="" />
              <p className="text-2xl font-bold">95%</p>
            </div>
            <div>
              <p>научились кататься</p>
            </div>
            <div className="md:flex md:gap-2">
              <img src="/img/wave99.svg" alt="" />
              <p className="text-2xl font-bold">99%</p>
            </div>
            <div>
              <p>довольных клиентов</p>
            </div>
          </div>
          <div className="md: flex flex-col md:w-1/3  md:p-2 gap-4">
            <p className="text-xs">
              Огромным преимуществом нашей школы является собственная методика
              обучения. Мы разработали собственный стиль обучения серфингу,
              который позволяет новичкам максимально быстро встать на доску.
            </p>
            <p className="text-xs">
              Именно наша методика и наши преподаватели позволили нам пройти
              аттестацию Федерации серфинга Канарских островов - FEDERACIÓN
              CANARIA DE SURF. Это означает, что наша школа соответствует всем
              мировым стандартам. Переаттестация производится ежегодно и это
              позволяет нам всегда стремиться к улучшению обучения.
            </p>
          </div>
        </div>
      </div>

      <div className="grid items-center justify-items-center p-6 md:p-28 pb-12 gap-12 md:gap-16">
        <div className="flex items-end p-4 text-center md:text-left">
          <p className="h-caps text-black select-none sm:text-justify text-3xl sm:text-4xl font-bold">
            ПОКОРЯЙ ВЕРШИНЫ
          </p>
          <p className="text-darkblue select-none text-4xl sm:text-5xl">/</p>
        </div>

        {/* Текст и изображение */}
        <div className="flex flex-col md:flex-row p-4 gap-6 md:gap-12 md:items-center xl:gap-16">
          <div className="flex flex-col gap-6 md:gap-8 md:text-left">
            <p className="text-sm md:text-base leading-relaxed">
              Преподаватели нашей школы серфинга в числе лучших серферов на
              Канарских островах. Среди них - чемпион Европы по лонгборду,
              который с радостью поделится опытом как с новичками, так и более
              опытными серферами. Все члены преподавательского состава являются
              сертифицированными членами Федерации серфинга Канарских островов.
              Некоторые из них знают русский язык, что определенно позиционирует
              нас как русскую школу серфинга за границей!
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Весь тренерский состав регулярно участвует в семинарах и курсах
              повышения квалификации, которые проводятся по всему миру
              различными известными серф-клубами и федерациями. Поэтому в нашей
              школе серфинга вы можете быть спокойны: вас обучают лучшие
              тренеры!
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Методика обучения серфингу рассчитана как на новичков, на серферов
              среднего уровня, так и на серферов уровня ТОП. Тренеры находят
              подход к каждому, несмотря на то, что обучение серфингу в нашей
              школе производится в группах. Однако, мы предлагаем персональные
              уроки серфинга - только вы и тренер!
            </p>
          </div>

          <div className="w-full md:w-full lg:w-full xl:w-full">
            <img
              src="/img/slide4.png"
              alt="Surfing Instructor"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-center p-4">
          <p className="h-caps text-black user-select-none select-none sm:text-justify text-4xl text-left font-bold">
            ГАЛЕРЕЯ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>

        <Gallery />
      </div>

      <div className="flex flex-col items-center justify-center text-center my-12 bg-bggray">
        <p className="italic text-2xl md:text-4xl font-bold">
          Если сомневаешься – иди катайся.
        </p>

        <p className="italic text-sm md:text-base font-light mt-4 self-end pr-6">
          Нэт Янг, первый Чемпион Мира по сёрфингу
        </p>
      </div>

      <div className="w-full md:w-full lg:w-full xl:w-full flex justify-center">
        <img
          src="/img/seaa.png"
          alt="Surfing Instructor"
          className="w-2/4 h-auto"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-12">
        <div className="flex flex-col items-center">
          <p className="text-4xl md:text-5xl font-bold">450</p>
          <p className="text-base md:text-lg">туристов</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl md:text-5xl font-bold">2500</p>
          <p className="text-base md:text-lg">часов катания</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl md:text-5xl font-bold">10</p>
          <p className="text-base md:text-lg">проф. тренеров</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl md:text-5xl font-bold">365</p>
          <p className="text-base md:text-lg">дней в году</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-center p-4">
          <p className="h-caps text-black user-select-none select-none sm:text-justify text-3xl text-left font-bold">
            БЛОГ
          </p>
          <p className="text-darkblue user-select-none select-none text-5xl">
            /
          </p>
        </div>
      </div>
      <FullWidthSlider />
      <div className="flex justify-center items-end p-4 text-center md:text-left">
        <p className="h-caps text-black select-none sm:text-justify text-4xl sm:text-4xl font-bold">
          НАША КОМАНДА
        </p>
        <p className="text-darkblue select-none text-4xl sm:text-5xl">/</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center gap-14 mt-8">
        {/* Первый блок с изображением */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <img
            src="/img/mike.png" // Замените на свой путь к картинке
            alt="Mike"
            className="w-40 h-60 object-cover md:rounded-none mb-4 md:w-64 md:h-96 md:mb-4"
          />
          <div className="font-bold text-lg">Mike</div>
          <div className="text-sm">Главный инструктор</div>
        </div>

        {/* Второй блок с изображением */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <img
            src="/img/mary.png" // Замените на свой путь к картинке
            alt="Mary"
            className="w-40 h-60 object-cover md:rounded-none mb-4 md:w-64 md:h-96 md:mb-4"
          />
          <div className="font-bold text-lg">Mary</div>
          <div className="text-sm">Инструктор</div>
        </div>

        {/* Третий блок с изображением */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <img
            src="/img/olga.png" // Замените на свой путь к картинке
            alt="Olga"
            className="w-40 h-60 object-cover md:rounded-none mb-4 md:w-64 md:h-96 md:mb-4"
          />
          <div className="font-bold text-lg">Ольга</div>
          <div className="text-sm">Инструктор</div>
        </div>
      </div>
      <div className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="flex justify-center items-end p-4 text-center md:text-left">
          <p className="h-caps text-black select-none sm:text-justify text-4xl sm:text-4xl font-bold">
            ПАКЕТЫ УСЛУГ
          </p>
          <p className="text-darkblue select-none text-4xl sm:text-5xl">/</p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          {/* Пакет "Стандарт" */}
          <div className="bg-white shadow-md p-8 rounded-lg text-center flex flex-col justify-between md:h-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Стандарт
              </h2>
              <ul className="text-gray-600 space-y-2 mb-8 text-left">
                <li>Проживание на вилле 6 ночей</li>
                <li>Номер категории стандарт</li>
                <li>Экипировка для обучения</li>
                <li>Обучение серфингу 5 тренировок по 2 часа</li>
                <li>Страховка</li>
                <li>Вечеринка с угощениями и дискотекой</li>
              </ul>
            </div>
            <div className="text-2xl font-bold text-black mt-auto">450$</div>
          </div>

          {/* Пакет "Все включено" */}
          <div className="bg-white shadow-md p-8 rounded-lg text-center flex flex-col justify-between md:h-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Все включено
              </h2>
              <ul className="text-gray-600 space-y-2 mb-8 text-left">
                <li>Проживание на вилле 6 ночей</li>
                <li>Номер категории люкс</li>
                <li>Экипировка для обучения</li>
                <li>Обучение серфингу 8 тренировок по 2 часа</li>
                <li>Страховка</li>
                <li>Вечеринка с угощениями и дискотекой</li>
                <li>Авиа перелет Тенерифе - Лансароте - Тенерифе</li>
                <li>Завтраки на вилле</li>
              </ul>
            </div>
            <div className="text-2xl font-bold text-black mt-auto">950$</div>
          </div>

          {/* Пакет "Профи" */}
          <div className="bg-white shadow-md p-8 rounded-lg text-center flex flex-col justify-between md:h-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-10">Профи</h2>
              <ul className="text-gray-600 space-y-2 mb-8 text-left">
                <li>Проживание на вилле 8 ночей</li>
                <li>Номер категории люкс</li>
                <li>Экипировка для обучения</li>
                <li>Обучение серфингу 16 тренировок по 2 часа</li>
                <li>Страховка</li>
                <li>Вечеринка с угощениями и дискотекой</li>
                <li>Авиа перелет Тенерифе - Лансароте - Тенерифе</li>
                <li>Завтраки и ужины на вилле</li>
              </ul>
            </div>
            <div className="text-2xl font-bold text-black mt-auto">1450$</div>
          </div>
        </div>
      </div>
    </div>
  );
}
