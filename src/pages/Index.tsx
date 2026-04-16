import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE = "+7 978 223 98 89";
const PHONE_HREF = "tel:+79782239889";
const ADDRESS = "Симферополь, ул. Героев Сталинграда, 14А";
const WORKTIME = "ПН–СБ, 9:00–18:00";

function LeadForm({ id }: { id: string }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length > 6) {
      setSent(true);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {sent ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" size={28} className="text-white" />
          </div>
          <p className="text-xl font-oswald text-white">Заявка принята!</p>
          <p className="text-gray-400 mt-2 font-roboto">Мы перезвоним вам в течение 15 минут</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш номер телефона"
            className="flex-1 px-5 py-4 bg-[#1e1e1e] border border-[#333] text-white placeholder-gray-500 rounded focus:outline-none focus:border-[#e31e24] font-roboto text-base transition-colors"
            required
          />
          <button
            type="submit"
            className="btn-red px-8 py-4 rounded text-base whitespace-nowrap pulse-red"
          >
            Оставить заявку
          </button>
        </form>
      )}
      <p className="text-gray-500 text-sm mt-3 text-center font-roboto">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </div>
  );
}

function SectionTitle({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="text-center mb-12">
      <div className="divider-red mx-auto" />
      <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-wide">
        {title} <span className="text-[#e31e24]">{accent}</span>
      </h2>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-roboto">

      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#222]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e31e24] rounded flex items-center justify-center">
                <Icon name="Wrench" size={20} className="text-white" />
              </div>
              <div>
                <div className="font-oswald text-lg text-white leading-tight">КАТАЛИЗАТОР 23</div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase">Симферополь</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: "Услуги", id: "services" },
                { label: "О нас", id: "why-free" },
                { label: "Фото", id: "photos" },
                { label: "Отзывы", id: "reviews" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-400 hover:text-white font-roboto text-sm uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href={PHONE_HREF}
              className="hidden md:flex items-center gap-2 font-oswald text-lg text-white hover:text-[#e31e24] transition-colors"
            >
              <Icon name="Phone" size={18} className="text-[#e31e24]" />
              {PHONE}
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#0d0d0d] border-t border-[#222] px-4 py-6 flex flex-col gap-4">
            {[
              { label: "Услуги", id: "services" },
              { label: "О нас", id: "why-free" },
              { label: "Фото", id: "photos" },
              { label: "Отзывы", id: "reviews" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white text-left font-roboto uppercase tracking-wider py-2 border-b border-[#222]"
              >
                {item.label}
              </button>
            ))}
            <a href={PHONE_HREF} className="btn-red text-center py-3 rounded mt-2 font-oswald tracking-wider">
              {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="home"
        className="relative pt-16 md:pt-20 min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#e31e24 1px, transparent 1px), linear-gradient(90deg, #e31e24 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e31e24]/10 border border-[#e31e24]/30 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#e31e24] animate-pulse" />
              <span className="text-[#e31e24] text-sm font-roboto tracking-wider uppercase">Симферополь — работаем сейчас</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-tight mb-6">
              Удаление<br />
              <span className="text-[#e31e24]">катализатора</span><br />
              <span className="text-gray-400 text-3xl md:text-5xl">бесплатно</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 font-roboto max-w-xl leading-relaxed">
              Профессиональное удаление катализатора с установкой обманки и чип-тюнингом под Евро2.
              Всё за <strong className="text-white">2 часа</strong> с бессрочной гарантией.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "2 часа", label: "Срок выполнения" },
                { value: "0 ₽", label: "Стоимость услуги" },
                { value: "∞", label: "Гарантия" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-[#e31e24]" />
                  <div>
                    <div className="font-oswald text-2xl text-white">{s.value}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("lead-1")} className="btn-red px-10 py-4 rounded text-lg">
                Записаться бесплатно
              </button>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 px-10 py-4 border border-[#333] rounded text-white hover:border-[#e31e24] transition-colors font-oswald uppercase tracking-wide text-lg"
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-10 hidden xl:block">
          <div className="w-full h-full" style={{ background: "radial-gradient(circle, #e31e24 0%, transparent 70%)" }} />
        </div>
      </section>

      {/* ═══════════════ LEAD FORM 1 ═══════════════ */}
      <section id="lead-1" className="bg-[#e31e24] py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase tracking-wide">
              Запишитесь на бесплатное удаление
            </h2>
            <p className="text-white/80 mt-2 font-roboto">Оставьте номер — перезвоним в течение 15 минут</p>
          </div>
          <LeadForm id="lead-1" />
        </div>
      </section>

      {/* ═══════════════ УСЛУГИ ═══════════════ */}
      <section id="services" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="услуги" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "Wrench",
                title: "Удаление катализатора",
                desc: "Профессиональный демонтаж катализатора без повреждения выхлопной системы. Работаем с любыми марками и моделями.",
                badge: "Бесплатно",
              },
              {
                icon: "Cpu",
                title: "Установка обманки / Чип-тюнинг",
                desc: "Установка лямбда-обманки или перепрошивка ЭБУ под Евро2. Ошибки в бортовом компьютере не появятся.",
                badge: "Бесплатно",
              },
              {
                icon: "Flame",
                title: "Установка пламегасителя",
                desc: "Монтаж пламегасителя вместо катализатора. Двигатель дышит свободнее, мощность возрастает.",
                badge: "Бесплатно",
              },
              {
                icon: "Shield",
                title: "Бессрочная гарантия",
                desc: "На все выполненные работы — бессрочная гарантия. Обратитесь к нам в любое время, поможем.",
                badge: "∞ Гарантия",
              },
              {
                icon: "Clock",
                title: "Быстрое выполнение",
                desc: "Все работы занимают не более 2 часов. Ждите в комфортной зоне ожидания.",
                badge: "2 часа",
              },
              {
                icon: "Star",
                title: "Опытные мастера",
                desc: "Многолетний опыт работы с катализаторами всех типов и производителей.",
                badge: "Профи",
              },
            ].map((service) => (
              <div key={service.title} className="section-card rounded-lg p-6 hover-scale">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#e31e24]/10 rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-[#e31e24]" />
                  </div>
                  <span className="text-xs bg-[#e31e24] text-white px-2 py-1 rounded font-oswald tracking-wider">
                    {service.badge}
                  </span>
                </div>
                <h3 className="font-oswald text-xl text-white mb-3 uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-roboto">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ЗАЧЕМ УДАЛЯТЬ ═══════════════ */}
      <section id="why-remove" className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Зачем удалять" accent="катализатор?" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Забит и неремонтопригоден",
                  desc: "Со временем соты катализатора забиваются продуктами сгорания. Восстановить невозможно — только замена. Но оригинал стоит дорого.",
                },
                {
                  num: "02",
                  title: "Падение мощности двигателя",
                  desc: "Забитый катализатор создаёт противодавление. Двигатель задыхается — мощность падает, расход растёт.",
                },
                {
                  num: "03",
                  title: "Перегрев и риск возгорания",
                  desc: "Разрушающийся катализатор может осыпаться в двигатель или раскалиться до критических температур.",
                },
                {
                  num: "04",
                  title: "Дорогостоящая замена",
                  desc: "Оригинальный катализатор для иномарки — от 30 000 до 200 000 ₽. Удаление с пламегасителем — реальная альтернатива.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 items-start">
                  <div className="font-oswald text-4xl text-[#e31e24]/30 font-bold leading-none min-w-[48px]">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-oswald text-lg text-white uppercase mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-roboto text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg overflow-hidden flex flex-col items-center justify-center gap-6 p-10"
              style={{ background: "linear-gradient(135deg, #1a0000, #2a0505)", border: "1px solid #333" }}
            >
              <Icon name="AlertTriangle" size={64} className="text-[#e31e24]" />
              <p className="font-oswald text-2xl text-white text-center uppercase">Забитый катализатор</p>
              <p className="text-gray-400 text-center text-sm font-roboto max-w-xs">
                Угроза двигателю, лишние расходы, падение мощности
              </p>
              <div className="grid grid-cols-3 gap-6 w-full">
                {[
                  { icon: "TrendingDown", label: "−30% мощности" },
                  { icon: "Fuel", label: "+15% расхода" },
                  { icon: "Flame", label: "Перегрев" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <Icon name={s.icon} size={24} className="text-[#e31e24] mx-auto mb-2" />
                    <div className="text-xs text-gray-400 font-roboto">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LEAD FORM 2 ═══════════════ */}
      <section id="lead-2" className="py-14 bg-[#1a1a1a] border-y border-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="divider-red mx-auto" />
            <h2 className="font-oswald text-2xl md:text-3xl text-white uppercase">
              Получите бесплатную консультацию
            </h2>
            <p className="text-gray-400 mt-2 font-roboto">Расскажите о вашем автомобиле — подберём решение</p>
          </div>
          <LeadForm id="lead-2" />
        </div>
      </section>

      {/* ═══════════════ ПОЧЕМУ БЕСПЛАТНО ═══════════════ */}
      <section id="why-free" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Почему это" accent="бесплатно?" />
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-xl p-8 md:p-12 mb-10"
              style={{ background: "linear-gradient(135deg, #1a1a1a, #1a0505)", border: "1px solid rgba(227,30,36,0.2)" }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-[#e31e24] rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="DollarSign" size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="font-oswald text-2xl text-white uppercase mb-4">
                    Мы зарабатываем на вашем старом катализаторе
                  </h3>
                  <p className="text-gray-300 font-roboto leading-relaxed mb-4">
                    Ваш катализатор содержит драгоценные металлы — платину, палладий и родий. Их стоимость покрывает все расходы на работу. Именно поэтому мы предлагаем удаление, установку обманки и пламегасителя абсолютно бесплатно.
                  </p>
                  <p className="text-gray-400 font-roboto text-sm leading-relaxed">
                    Честная сделка: вы получаете восстановленный двигатель и сэкономленные деньги. Мы получаем катализатор для переработки. Все довольны.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "Gem", title: "Платина", desc: "Один из самых ценных металлов в составе катализатора" },
                { icon: "Award", title: "Палладий", desc: "Активно используется в промышленности и электронике" },
                { icon: "Sparkles", title: "Родий", desc: "Самый дорогой металл в катализаторе — до 500 000 ₽/кг" },
              ].map((m) => (
                <div key={m.title} className="section-card rounded-lg p-5 text-center">
                  <Icon name={m.icon} size={32} className="text-[#e31e24] mx-auto mb-3" />
                  <h4 className="font-oswald text-lg text-white uppercase mb-2">{m.title}</h4>
                  <p className="text-gray-400 text-sm font-roboto">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ПРЕИМУЩЕСТВА ═══════════════ */}
      <section id="advantages" className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Преимущества" accent="удаления катализатора" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "Zap", value: "+20–30%", label: "Прирост мощности", desc: "Двигатель дышит без противодавления" },
              { icon: "Fuel", value: "−10–15%", label: "Снижение расхода", desc: "Топливо сгорает эффективнее" },
              { icon: "Volume2", value: "Звук", label: "Характерный звук", desc: "Насыщенный и живой звук выхлопа" },
              { icon: "ThumbsUp", value: "0 ₽", label: "Никаких затрат", desc: "Процедура абсолютно бесплатна" },
              { icon: "Clock", value: "2 ч", label: "Время работы", desc: "Уедете в тот же день" },
              { icon: "Shield", value: "∞", label: "Бессрочная гарантия", desc: "Гарантируем навсегда" },
            ].map((adv) => (
              <div key={adv.label} className="section-card rounded-lg p-6 hover-scale">
                <Icon name={adv.icon} size={28} className="text-[#e31e24] mb-4" />
                <div className="font-oswald text-3xl text-white mb-1">{adv.value}</div>
                <div className="font-oswald text-sm text-[#e31e24] uppercase tracking-wider mb-2">{adv.label}</div>
                <div className="text-gray-500 text-xs font-roboto leading-relaxed">{adv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ФОТОГРАФИИ ═══════════════ */}
      <section id="photos" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="работы" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Toyota Camry — удаление катализатора",
              "BMW 3 Series — чип-тюнинг + пламегаситель",
              "Hyundai Tucson — лямбда-обманка",
              "Kia Rio — удаление + обманка",
              "Ford Focus — пламегаситель",
              "Volkswagen Passat — полный комплекс",
            ].map((label, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer hover-scale"
                style={{
                  background: i % 2 === 0 ? "linear-gradient(135deg, #1a1a1a, #0d0d0d)" : "linear-gradient(135deg, #1a0505, #0d0d0d)",
                  border: "1px solid #2a2a2a",
                }}
              >
                <Icon name="Image" size={40} className="text-[#e31e24]/40" fallback="Image" />
                <div className="text-gray-600 text-xs font-roboto text-center px-3">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-6 font-roboto">
            Напишите нам — и мы добавим фотографии ваших работ на сайт
          </p>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Вопросы и" accent="ответы" />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Правда ли, что удаление катализатора бесплатно?",
                  a: "Да, абсолютно бесплатно. Мы компенсируем расходы за счёт переработки вашего катализатора — он содержит платину, палладий и родий. Вы не платите ничего.",
                },
                {
                  q: "Законно ли удалять катализатор?",
                  a: "Удаление катализатора — обычная практика для личного использования автомобиля. Мы выполняем работы профессионально и берём полную ответственность за качество.",
                },
                {
                  q: "Появятся ли ошибки на панели приборов?",
                  a: "Нет. Мы устанавливаем лямбда-обманку или делаем чип-тюнинг ЭБУ — после этого все ошибки, связанные с катализатором, исчезают навсегда.",
                },
                {
                  q: "Сколько времени занимает работа?",
                  a: "Стандартная процедура — около 2 часов. В это время можно подождать в нашей зоне ожидания или прогуляться по городу.",
                },
                {
                  q: "На какие автомобили вы работаете?",
                  a: "Работаем с любыми марками: Toyota, BMW, Mercedes, Kia, Hyundai, VW, Audi, Ford, Nissan и другими. Опишите вашу машину — проконсультируем.",
                },
                {
                  q: "Есть ли гарантия на работы?",
                  a: "Да, бессрочная гарантия на все работы. Возникли вопросы — обращайтесь, решим бесплатно.",
                },
                {
                  q: "Нужно ли записываться заранее?",
                  a: "Рекомендуем записаться, чтобы мы подготовили запчасти. Позвоните или оставьте заявку — свяжемся и назначим удобное время.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="section-card rounded-lg border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 font-oswald text-white uppercase text-left text-base hover:text-[#e31e24] hover:no-underline transition-colors [&[data-state=open]]:text-[#e31e24]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-400 font-roboto text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════════════ LEAD FORM 3 ═══════════════ */}
      <section id="lead-3" className="py-16 bg-[#e31e24]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase">Готовы приехать?</h2>
            <p className="text-white/80 mt-2 font-roboto text-lg">
              Оставьте заявку — запишем на ближайшее время
            </p>
          </div>
          <LeadForm id="lead-3" />
        </div>
      </section>

      {/* ═══════════════ ОТЗЫВЫ ═══════════════ */}
      <section id="reviews" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Отзывы наших" accent="клиентов" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Алексей М.",
                car: "Toyota Camry 2018",
                text: "Приехал по рекомендации. Действительно бесплатно! За 2 часа всё сделали, ошибок нет, машина едет бодрее. Рекомендую всем.",
                rating: 5,
              },
              {
                name: "Сергей К.",
                car: "BMW X5 2016",
                text: "Сначала не верил, что бесплатно. Оказалось — правда. Забрали старый катализатор, поставили пламегаситель и обманку. Полный порядок.",
                rating: 5,
              },
              {
                name: "Андрей В.",
                car: "Hyundai Sonata 2019",
                text: "Долго тянул с удалением, боялся. Зря. Сделали быстро, чисто, профессионально. Никаких ошибок, никаких проблем. Спасибо!",
                rating: 5,
              },
              {
                name: "Наталья Р.",
                car: "Kia Sportage 2017",
                text: "Муж уже третий раз обращается. Всегда доволен результатом. Мастера знают своё дело.",
                rating: 5,
              },
              {
                name: "Дмитрий П.",
                car: "Volkswagen Tiguan 2020",
                text: "Сделали даже быстрее двух часов. Всё объяснили, показали. Честный и понятный сервис.",
                rating: 5,
              },
              {
                name: "Иван Л.",
                car: "Ford Kuga 2015",
                text: "Катализатор сыпался, машина дымила. За 1.5 часа всё решили. Машина как новая. Спасибо мастерам!",
                rating: 5,
              },
            ].map((review, i) => (
              <div key={i} className="section-card rounded-lg p-6 hover-scale">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={16} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 font-roboto text-sm leading-relaxed mb-5 italic">
                  «{review.text}»
                </p>
                <div className="border-t border-[#2a2a2a] pt-4">
                  <div className="font-oswald text-white">{review.name}</div>
                  <div className="text-gray-600 text-xs font-roboto mt-0.5">{review.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ КОНТАКТЫ ═══════════════ */}
      <section id="contacts" className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="контакты" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "Phone", title: "Телефон", value: PHONE, href: PHONE_HREF },
                { icon: "MapPin", title: "Адрес", value: ADDRESS, href: undefined },
                { icon: "Clock", title: "Режим работы", value: WORKTIME, href: undefined },
              ].map((c) => (
                <div key={c.title} className="section-card rounded-lg p-6 flex items-center gap-5">
                  <div className="w-14 h-14 bg-[#e31e24]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={24} className="text-[#e31e24]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider font-roboto mb-1">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="font-oswald text-xl text-white hover:text-[#e31e24] transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <div className="font-oswald text-xl text-white">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <a href={PHONE_HREF} className="btn-red w-full py-4 rounded text-center block font-oswald text-lg uppercase tracking-wider">
                Позвонить сейчас
              </a>
            </div>

            <div
              className="rounded-lg flex flex-col items-center justify-center gap-4 p-10"
              style={{ background: "linear-gradient(135deg, #1a1a1a, #0d0d0d)", border: "1px solid #2a2a2a", minHeight: "300px" }}
            >
              <Icon name="Map" size={48} className="text-[#e31e24]/40" />
              <div className="text-center">
                <p className="font-oswald text-white text-lg uppercase">Симферополь</p>
                <p className="text-gray-500 font-roboto text-sm mt-1">{ADDRESS}</p>
                <a
                  href="https://yandex.ru/maps/?text=Симферополь+ул.+Героев+Сталинграда+14А"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#e31e24] hover:text-white transition-colors text-sm font-roboto"
                >
                  <Icon name="ExternalLink" size={14} />
                  Открыть на Яндекс.Картах
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-[#080808] border-t border-[#1a1a1a] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e31e24] rounded flex items-center justify-center">
                <Icon name="Wrench" size={16} className="text-white" />
              </div>
              <div>
                <div className="font-oswald text-white">КАТАЛИЗАТОР 23</div>
                <div className="text-gray-600 text-xs font-roboto">Симферополь</div>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Услуги", id: "services" },
                { label: "Почему бесплатно", id: "why-free" },
                { label: "FAQ", id: "faq" },
                { label: "Отзывы", id: "reviews" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-500 hover:text-white text-sm font-roboto transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a href={PHONE_HREF} className="font-oswald text-white hover:text-[#e31e24] transition-colors">
              {PHONE}
            </a>
          </div>

          <div className="border-t border-[#1a1a1a] mt-8 pt-6 text-center">
            <p className="text-gray-600 text-sm font-roboto">
              © 2024 Катализатор 23 · Симферополь, {ADDRESS} · {WORKTIME}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}