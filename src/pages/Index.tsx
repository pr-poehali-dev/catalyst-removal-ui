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

/* ─── Lead Form ─── */
function LeadForm({ dark = false }: { dark?: boolean }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length > 6) setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-[#FFB800] flex items-center justify-center mx-auto mb-3">
          <Icon name="Check" size={26} className="text-black" />
        </div>
        <p className={`font-oswald text-xl uppercase ${dark ? "text-white" : "text-[#111]"}`}>
          Заявка принята!
        </p>
        <p className={`text-sm mt-1 font-roboto ${dark ? "text-gray-400" : "text-gray-500"}`}>
          Перезвоним в течение 15 минут
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Ваш номер телефона"
        required
        className={`flex-1 px-5 py-4 border-b-2 bg-transparent outline-none font-roboto text-base transition-colors
          ${dark
            ? "border-gray-600 text-white placeholder-gray-500 focus:border-[#FFB800]"
            : "border-gray-300 text-[#111] placeholder-gray-400 focus:border-[#FFB800]"
          }`}
      />
      <button
        type="submit"
        className="btn-yellow px-8 py-4 text-base pulse-yellow"
      >
        Оставить заявку
      </button>
    </form>
  );
}

/* ─── Section Title ─── */
function SectionTitle({ title, accent, light = false }: { title: string; accent: string; light?: boolean }) {
  return (
    <div className="text-center mb-12">
      <div className="divider-yellow mx-auto" />
      <h2 className={`font-oswald text-3xl md:text-4xl uppercase tracking-wide ${light ? "text-white" : "text-[#111]"}`}>
        {title} <span className="text-[#FFB800]">{accent}</span>
      </h2>
    </div>
  );
}

/* ─── Yellow angle badge ─── */
function YellowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-[#FFB800] text-[#111] font-oswald font-bold text-xs px-3 py-1 uppercase tracking-wider">
      {children}
    </span>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#111] font-roboto">

      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b-2 border-[#FFB800]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">

            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-[#FFB800] flex items-center justify-center font-oswald font-bold text-[#111] text-lg">
                K
              </div>
              <div>
                <div className="font-oswald text-base leading-tight text-[#111] uppercase tracking-wide">
                  Катализатор<span className="text-[#FFB800]">-23</span>
                </div>
                <div className="text-[10px] text-gray-400 tracking-widest uppercase">Симферополь</div>
              </div>
            </div>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {[
                { label: "Услуги", id: "services" },
                { label: "О нас", id: "why-free" },
                { label: "Фото", id: "photos" },
                { label: "FAQ", id: "faq" },
                { label: "Отзывы", id: "reviews" },
                { label: "Контакты", id: "contacts" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-roboto text-sm font-medium text-gray-600 hover:text-[#FFB800] uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Phone + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href={PHONE_HREF} className="font-oswald text-base text-[#111] hover:text-[#FFB800] transition-colors font-bold">
                {PHONE}
              </a>
              <button onClick={() => scrollTo("lead-1")} className="btn-yellow px-5 py-2.5 text-sm">
                Записаться
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[#111]">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-3">
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
                className="text-left py-2 font-roboto text-sm uppercase tracking-wider text-gray-600 hover:text-[#FFB800] border-b border-gray-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a href={PHONE_HREF} className="btn-yellow text-center py-3 mt-2 font-oswald text-sm">
              {PHONE}
            </a>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section
        id="home"
        className="relative pt-16 md:pt-20 min-h-screen flex items-stretch overflow-hidden"
      >
        {/* Left: light bg */}
        <div className="flex-1 bg-[#efefef] flex items-center">
          <div className="container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-xl">

              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
                <span className="text-xs font-roboto uppercase tracking-widest text-gray-500">
                  Симферополь — работаем сейчас
                </span>
              </div>

              <h1 className="font-oswald text-4xl md:text-6xl text-[#111] uppercase leading-none mb-2">
                Удаление<br />
                <span className="text-[#FFB800]">катализатора</span>
              </h1>
              <div className="inline-block bg-[#111] px-4 py-1 mb-6 mt-2">
                <span className="font-oswald text-2xl md:text-3xl text-[#FFB800] uppercase">
                  бесплатно
                </span>
              </div>

              <p className="text-gray-600 font-roboto text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Профессиональное удаление с установкой обманки и чип-тюнингом.
                Всё за <strong className="text-[#111]">2 часа</strong> с бессрочной гарантией.
              </p>

              {/* Checks */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Удаление катализатора — бесплатно",
                  "Установка обманки / чип-тюнинг — бесплатно",
                  "Установка пламегасителя — бесплатно",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#FFB800] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={12} className="text-[#111]" />
                    </div>
                    <span className="font-roboto text-sm text-gray-700">{t}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-0 mb-10">
                {[
                  { value: "2 ч", label: "Срок выполнения" },
                  { value: "0 ₽", label: "Стоимость" },
                  { value: "∞", label: "Гарантия" },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-6 py-4 ${i % 2 === 0 ? "bg-[#FFB800]" : "bg-[#111]"}`}
                  >
                    <div className={`font-oswald text-2xl font-bold ${i % 2 === 0 ? "text-[#111]" : "text-[#FFB800]"}`}>
                      {s.value}
                    </div>
                    <div className={`text-xs uppercase tracking-wider font-roboto ${i % 2 === 0 ? "text-[#111]/70" : "text-gray-400"}`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => scrollTo("lead-1")} className="btn-yellow px-10 py-4 text-base">
                  Записаться бесплатно
                </button>
                <a
                  href={PHONE_HREF}
                  className="btn-black px-10 py-4 text-base flex items-center justify-center gap-2"
                >
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: yellow panel with decorative diagonal */}
        <div
          className="hidden lg:flex w-[360px] xl:w-[420px] items-center justify-center relative"
          style={{
            background: "linear-gradient(160deg, #FFB800 60%, #111 60%)",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-8">
            <div className="bg-[#111]/90 rounded-none p-6 w-full max-w-xs mt-12">
              <p className="font-oswald text-[#FFB800] text-lg uppercase mb-1 text-center">Запись онлайн</p>
              <p className="text-gray-400 text-xs text-center mb-5 font-roboto">
                Оставьте номер — перезвоним за 15 минут
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Марка автомобиля"
                  className="bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 text-sm font-roboto outline-none focus:border-[#FFB800] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  className="bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 text-sm font-roboto outline-none focus:border-[#FFB800] transition-colors"
                />
                <button className="btn-yellow py-3 mt-2 text-sm">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEAD FORM 1 (full-width yellow) ═══ */}
      <section id="lead-1" className="bg-[#FFB800] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-oswald text-2xl md:text-3xl text-[#111] uppercase">
                Запишитесь на бесплатное удаление
              </h2>
              <p className="text-[#111]/70 font-roboto text-sm mt-1">
                Перезвоним в течение 15 минут
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[480px]">
              <LeadForm dark={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ УСЛУГИ ═══ */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="услуги" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Wrench",  title: "Удаление катализатора", desc: "Профессиональный демонтаж без повреждения выхлопной системы. Работаем с любыми марками.", badge: "Бесплатно" },
              { icon: "Cpu",     title: "Обманка / Чип-тюнинг",  desc: "Установка лямбда-обманки или перепрошивка ЭБУ под Евро2. Ошибки не появятся.", badge: "Бесплатно" },
              { icon: "Flame",   title: "Пламегаситель",          desc: "Монтаж пламегасителя вместо катализатора. Двигатель дышит свободнее.", badge: "Бесплатно" },
              { icon: "Shield",  title: "Бессрочная гарантия",    desc: "На все выполненные работы — бессрочная гарантия. Обратитесь в любое время.", badge: "∞ Гарантия" },
              { icon: "Clock",   title: "Быстрое выполнение",     desc: "Все работы занимают не более 2 часов. Можно подождать в зоне ожидания.", badge: "2 часа" },
              { icon: "Star",    title: "Опытные мастера",        desc: "Многолетний опыт работы с катализаторами всех типов и производителей.", badge: "Профи" },
            ].map((s) => (
              <div key={s.title} className="card-white hover-scale relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#FFB800]" />
                <div className="p-6 pl-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-[#FFB800]/15 flex items-center justify-center">
                      <Icon name={s.icon} size={22} className="text-[#FFB800]" />
                    </div>
                    <YellowBadge>{s.badge}</YellowBadge>
                  </div>
                  <h3 className="font-oswald text-lg text-[#111] uppercase mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-roboto">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ЗАЧЕМ УДАЛЯТЬ ═══ */}
      <section id="why-remove" className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Зачем удалять" accent="катализатор?" light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {[
                { num: "01", title: "Забит и неремонтопригоден",   desc: "Со временем соты забиваются продуктами сгорания. Восстановить невозможно. Оригинальная замена стоит дорого." },
                { num: "02", title: "Падение мощности двигателя",  desc: "Забитый катализатор создаёт противодавление. Двигатель задыхается — мощность падает, расход растёт." },
                { num: "03", title: "Перегрев и риск возгорания",  desc: "Разрушающийся катализатор может осыпаться в двигатель или раскалиться до критических температур." },
                { num: "04", title: "Дорогостоящая замена",        desc: "Оригинальный катализатор — от 30 000 до 200 000 ₽. Удаление с пламегасителем — реальная альтернатива." },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <div className="font-oswald text-4xl text-[#FFB800]/30 font-bold leading-none min-w-[48px]">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-oswald text-base text-white uppercase mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-roboto leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "TrendingDown", label: "−30% мощности",   sub: "без катализатора двигатель получает полную свободу" },
                { icon: "Fuel",         label: "+15% расхода",     sub: "забитый катализатор увеличивает расход топлива" },
                { icon: "Flame",        label: "Перегрев",         sub: "критический нагрев создаёт угрозу возгорания" },
                { icon: "Zap",          label: "+20–30% мощности", sub: "после удаления мощность заметно возрастает" },
                { icon: "ThumbsUp",     label: "0 ₽ затрат",       sub: "мы не берём деньги за свои услуги" },
                { icon: "Shield",       label: "∞ Гарантия",       sub: "бессрочная гарантия на все виды работ" },
              ].map((c) => (
                <div key={c.label} className="card-dark p-4 text-center">
                  <Icon name={c.icon} size={24} className="text-[#FFB800] mx-auto mb-2" />
                  <div className="font-oswald text-sm text-white mb-1">{c.label}</div>
                  <div className="text-gray-600 text-xs font-roboto leading-tight">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEAD FORM 2 ═══ */}
      <section id="lead-2" className="py-14 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="divider-yellow mx-auto" />
            <h2 className="font-oswald text-2xl md:text-3xl text-white uppercase mb-2">
              Получите бесплатную консультацию
            </h2>
            <p className="text-gray-400 font-roboto text-sm mb-8">
              Расскажите о вашем автомобиле — подберём решение
            </p>
            <LeadForm dark />
          </div>
        </div>
      </section>

      {/* ═══ ПОЧЕМУ БЕСПЛАТНО ═══ */}
      <section id="why-free" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Почему это" accent="бесплатно?" />
          <div className="max-w-4xl mx-auto">

            <div className="flex flex-col md:flex-row gap-0 mb-10 overflow-hidden shadow-lg">
              <div className="bg-[#FFB800] p-8 md:w-72 flex flex-col justify-center items-center text-center shrink-0">
                <Icon name="DollarSign" size={48} className="text-[#111] mb-3" />
                <p className="font-oswald text-xl text-[#111] uppercase leading-tight">
                  Мы зарабатываем на металлах
                </p>
              </div>
              <div className="bg-white border border-gray-100 p-8 flex-1">
                <h3 className="font-oswald text-xl text-[#111] uppercase mb-3">
                  Ваш катализатор содержит драгоценные металлы
                </h3>
                <p className="text-gray-600 font-roboto leading-relaxed mb-3">
                  Платина, палладий и родий — их стоимость покрывает все наши расходы на работу.
                  Именно поэтому удаление, установка обманки и пламегасителя — абсолютно бесплатно.
                </p>
                <p className="text-gray-400 font-roboto text-sm leading-relaxed">
                  Честная сделка: вы получаете исправный автомобиль и сэкономленные деньги.
                  Мы получаем катализатор для переработки. Все довольны.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "Gem",      title: "Платина",  desc: "Один из самых ценных металлов в составе катализатора" },
                { icon: "Award",    title: "Палладий", desc: "Активно используется в промышленности и электронике" },
                { icon: "Sparkles", title: "Родий",    desc: "Самый дорогой металл в катализаторе — до 500 000 ₽/кг" },
              ].map((m) => (
                <div key={m.title} className="card-white p-6 text-center hover-scale">
                  <div className="w-12 h-12 bg-[#FFB800] flex items-center justify-center mx-auto mb-3">
                    <Icon name={m.icon} size={24} className="text-[#111]" />
                  </div>
                  <h4 className="font-oswald text-base text-[#111] uppercase mb-2">{m.title}</h4>
                  <p className="text-gray-500 text-sm font-roboto">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ПРЕИМУЩЕСТВА ═══ */}
      <section id="advantages" className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Преимущества" accent="удаления" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "Zap",       value: "+20–30%", label: "Прирост мощности",  desc: "Двигатель дышит без противодавления" },
              { icon: "Fuel",      value: "−10–15%", label: "Снижение расхода",  desc: "Топливо сгорает эффективнее" },
              { icon: "Volume2",   value: "Звук",    label: "Характерный звук",  desc: "Насыщенный и живой звук выхлопа" },
              { icon: "ThumbsUp",  value: "0 ₽",     label: "Никаких затрат",    desc: "Процедура абсолютно бесплатна" },
              { icon: "Clock",     value: "2 ч",     label: "Время работы",      desc: "Уедете в тот же день" },
              { icon: "Shield",    value: "∞",       label: "Бессрочная гарантия",desc: "Гарантируем навсегда" },
            ].map((adv, i) => (
              <div
                key={adv.label}
                className={`p-6 hover-scale ${i % 3 === 1 ? "bg-[#111] text-white" : "bg-white border border-gray-100"}`}
              >
                <Icon name={adv.icon} size={26} className="text-[#FFB800] mb-4" />
                <div className={`font-oswald text-3xl mb-1 ${i % 3 === 1 ? "text-[#FFB800]" : "text-[#111]"}`}>
                  {adv.value}
                </div>
                <div className="font-oswald text-xs text-[#FFB800] uppercase tracking-wider mb-1">{adv.label}</div>
                <div className={`text-xs font-roboto leading-relaxed ${i % 3 === 1 ? "text-gray-400" : "text-gray-500"}`}>
                  {adv.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ФОТОГРАФИИ ═══ */}
      <section id="photos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="работы" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Toyota Camry — удаление",
              "BMW 3 Series — чип-тюнинг",
              "Hyundai Tucson — обманка",
              "Kia Rio — полный комплекс",
              "Ford Focus — пламегаситель",
              "Volkswagen Passat — удаление",
            ].map((label, i) => (
              <div
                key={i}
                className="aspect-[4/3] flex flex-col items-center justify-center gap-2 cursor-pointer hover-scale border border-gray-100"
                style={{ background: i % 2 === 0 ? "#f8f8f8" : "#f0f0f0" }}
              >
                <div className="w-12 h-12 bg-[#FFB800]/20 flex items-center justify-center">
                  <Icon name="Image" size={24} className="text-[#FFB800]" />
                </div>
                <div className="text-gray-400 text-xs font-roboto text-center px-3">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 font-roboto">
            Напишите нам — добавим фотографии ваших работ на сайт
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Вопросы и" accent="ответы" light />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Правда ли, что удаление катализатора бесплатно?",
                  a: "Да, абсолютно бесплатно. Мы компенсируем расходы за счёт переработки катализатора — он содержит платину, палладий и родий. Вы не платите ничего." },
                { q: "Законно ли удалять катализатор?",
                  a: "Удаление катализатора — обычная практика для личного использования автомобиля. Мы берём полную ответственность за качество работ." },
                { q: "Появятся ли ошибки на панели приборов?",
                  a: "Нет. Мы устанавливаем лямбда-обманку или делаем чип-тюнинг ЭБУ — после этого все ошибки, связанные с катализатором, исчезают навсегда." },
                { q: "Сколько времени занимает работа?",
                  a: "Стандартная процедура — около 2 часов. Вы можете подождать в нашей зоне ожидания или прогуляться." },
                { q: "На какие автомобили вы работаете?",
                  a: "Работаем с любыми марками: Toyota, BMW, Mercedes, Kia, Hyundai, VW, Audi, Ford, Nissan и другими. Опишите вашу машину — проконсультируем." },
                { q: "Есть ли гарантия на работы?",
                  a: "Да, бессрочная гарантия на все работы. Возникли вопросы — обращайтесь, решим бесплатно." },
                { q: "Нужно ли записываться заранее?",
                  a: "Рекомендуем записаться, чтобы подготовить запчасти. Позвоните или оставьте заявку — свяжемся и назначим удобное время." },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="bg-[#1a1a1a] border-l-2 border-[#FFB800] border-t-0 border-r-0 border-b-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-4 font-oswald text-white uppercase text-left text-sm hover:text-[#FFB800] hover:no-underline transition-colors [&[data-state=open]]:text-[#FFB800]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-gray-400 font-roboto text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══ LEAD FORM 3 ═══ */}
      <section id="lead-3" className="py-14 bg-[#FFB800]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-oswald text-2xl md:text-3xl text-[#111] uppercase">
                Готовы приехать?
              </h2>
              <p className="text-[#111]/70 font-roboto text-sm mt-1">
                Запишем на ближайшее удобное время
              </p>
            </div>
            <div className="w-full md:w-auto md:min-w-[480px]">
              <LeadForm dark={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ОТЗЫВЫ ═══ */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Отзывы наших" accent="клиентов" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Алексей М.", car: "Toyota Camry 2018",    text: "Приехал по рекомендации. Действительно бесплатно! За 2 часа всё сделали, ошибок нет. Рекомендую всем." },
              { name: "Сергей К.",  car: "BMW X5 2016",          text: "Сначала не верил, что бесплатно. Оказалось — правда. Забрали катализатор, поставили пламегаситель. Всё отлично." },
              { name: "Андрей В.",  car: "Hyundai Sonata 2019",  text: "Долго откладывал. Сделали быстро и профессионально. Никаких ошибок, никаких проблем. Спасибо!" },
              { name: "Наталья Р.", car: "Kia Sportage 2017",    text: "Муж уже третий раз обращается. Всегда доволен. Мастера знают своё дело." },
              { name: "Дмитрий П.", car: "Volkswagen Tiguan 2020",text: "Сделали быстрее двух часов. Всё объяснили и показали. Честный сервис." },
              { name: "Иван Л.",    car: "Ford Kuga 2015",       text: "Катализатор сыпался, машина дымила. За 1.5 часа решили проблему. Машина как новая!" },
            ].map((r, i) => (
              <div key={i} className="card-white hover-scale p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFB800]" />
                <div className="flex items-center gap-1 mb-3 mt-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-[#FFB800]" />
                  ))}
                </div>
                <p className="text-gray-600 font-roboto text-sm leading-relaxed mb-4 italic">
                  «{r.text}»
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <div className="font-oswald text-[#111] font-bold">{r.name}</div>
                  <div className="text-gray-400 text-xs font-roboto mt-0.5">{r.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ КОНТАКТЫ ═══ */}
      <section id="contacts" className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Наши" accent="контакты" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="space-y-4">
              {[
                { icon: "Phone",  title: "Телефон",       value: PHONE,    href: PHONE_HREF },
                { icon: "MapPin", title: "Адрес",          value: ADDRESS,  href: undefined },
                { icon: "Clock",  title: "Режим работы",   value: WORKTIME, href: undefined },
              ].map((c) => (
                <div key={c.title} className="card-white p-5 flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#FFB800] flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={22} className="text-[#111]" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider font-roboto mb-0.5">{c.title}</div>
                    {c.href
                      ? <a href={c.href} className="font-oswald text-xl text-[#111] hover:text-[#FFB800] transition-colors">{c.value}</a>
                      : <div className="font-oswald text-xl text-[#111]">{c.value}</div>
                    }
                  </div>
                </div>
              ))}
              <a href={PHONE_HREF} className="btn-yellow w-full py-4 text-center block text-base mt-2">
                Позвонить сейчас
              </a>
            </div>

            <div
              className="flex flex-col items-center justify-center gap-4 p-10 min-h-[280px]"
              style={{ background: "#111", border: "2px solid #FFB800" }}
            >
              <Icon name="Map" size={44} className="text-[#FFB800]/50" />
              <div className="text-center">
                <p className="font-oswald text-white text-xl uppercase">Симферополь</p>
                <p className="text-gray-500 font-roboto text-sm mt-1">{ADDRESS}</p>
                <a
                  href="https://yandex.ru/maps/?text=Симферополь+ул.+Героев+Сталинграда+14А"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-[#FFB800] text-[#111] font-oswald text-sm uppercase px-5 py-2.5 hover:bg-[#E5A500] transition-colors"
                >
                  <Icon name="ExternalLink" size={14} />
                  Открыть на карте
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#111] border-t-2 border-[#FFB800] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FFB800] flex items-center justify-center font-oswald font-bold text-[#111] text-lg">
                K
              </div>
              <div>
                <div className="font-oswald text-white uppercase">
                  Катализатор<span className="text-[#FFB800]">-23</span>
                </div>
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
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-gray-500 hover:text-[#FFB800] text-sm font-roboto transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>

            <a href={PHONE_HREF} className="font-oswald text-white hover:text-[#FFB800] transition-colors">
              {PHONE}
            </a>
          </div>

          <div className="border-t border-[#222] mt-8 pt-6 text-center">
            <p className="text-gray-600 text-sm font-roboto">
              © 2024 Катализатор-23 · {ADDRESS} · {WORKTIME}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
