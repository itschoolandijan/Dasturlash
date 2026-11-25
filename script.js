"use strict";
/* ===== EDITABLE CONFIG ===== */
const CONFIG = {
  // Registration is POSTed as JSON to your backend. Keep the Telegram bot token ONLY on the server
  // (backend calls https://api.telegram.org/bot<TOKEN>/sendMessage). Leave empty for demo mode.
  endpoint: "",
  phones: ["+998 00 000 00 00", "+998 00 000 00 01"], // placeholders — replace with real numbers
  address: "Andijon shahri, Lenskiy ko'chasi, 143-uy",
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", telegram: "https://t.me/", youtube: "https://youtube.com/" }
};

/* UI texts: "uz|ru|en" */
const I = {
  n1: "Bosh sahifa|Главная|Home", n2: "Biz haqimizda|О нас|About", n3: "Kurslar|Курсы|Courses", n5: "Loyihalar|Проекты|Projects", n7: "Aloqa|Контакты|Contact",
  reg: "Ro'yxatdan o'tish|Записаться|Sign up",
  h1: "KELAJAGINGIZNI TEXNOLOGIYALAR BILAN YARATING!|СОЗДАВАЙТЕ СВОЁ БУДУЩЕЕ С ТЕХНОЛОГИЯМИ!|BUILD YOUR FUTURE WITH TECHNOLOGY!",
  hs: "Meta IT School — kelajak kasblarini bugundan o‘rganing. Dasturlash, robototexnika va sun'iy intellekt orqali o‘z imkoniyatlaringizni kashf eting.|Meta IT School — осваивайте профессии будущего уже сегодня. Откройте свой потенциал через программирование, робототехнику и искусственный интеллект.|Meta IT School — learn the professions of the future today. Discover your potential through programming, robotics and artificial intelligence.",
  b1: "Kurslarni ko'rish|Смотреть курсы|View courses", b2: "Biz bilan bog'lanish|Связаться с нами|Contact us",
  ct: "Bizning kurslar|Наши курсы|Our courses", sp: "Kurs qidirish...|Поиск курса...|Search courses...",
  f0: "Barchasi|Все|All", fcod: "Dasturlash|Программирование|Coding", fai: "AI va robototexnika|ИИ и робототехника|AI & Robotics", fdes: "Dizayn|Дизайн|Design",
  none: "Kurs topilmadi|Курс не найден|No courses found", more: "Batafsil|Подробнее|Details", mo: "oy|мес.|months",
  m1: "Kurs haqida|О курсе|About the course", m2: "Texnologiyalar|Технологии|Technologies", m3: "Nimalar yaratasiz|Что вы создадите|What you will build", m4: "Davomiyligi|Длительность|Duration", cl: "Yopish|Закрыть|Close",
  pt: "Loyihalar va laboratoriya|Проекты и лаборатория|Projects & lab",
  at: "Biz kelajak avlodini tayyorlaymiz!|Мы готовим новое поколение!|We prepare the next generation!",
  ab: "META IT SCHOOL — yoshlarning zamonaviy texnologiyalar, dasturlash va innovatsiyalar sohasidagi bilimlarini rivojlantirishga yo‘naltirilgan IT ta'lim markazi.|META IT SCHOOL — IT-центр образования, направленный на развитие знаний молодёжи в области современных технологий, программирования и инноваций.|META IT SCHOOL is an IT education center focused on developing young people's knowledge of modern technology, programming and innovation.",
  a1: "O'quvchilar|Учеников|Students", a2: "Kurslar|Курсов|Courses", a3: "Ustozlar|Преподавателей|Teachers", a4: "Loyihalar|Проектов|Projects",
  rt: "Kursga yozilish|Запись на курс|Course registration",
  fn: "Ism va familiya|Имя и фамилия|Full name", fp: "Telefon raqami|Номер телефона|Phone number", fg: "Yosh|Возраст|Age", fk: "Kursni tanlang|Выберите курс|Choose a course", fm: "Izoh|Комментарий|Comment", sb: "Yuborish|Отправить|Submit",
  e1: "Ism va familiyani kiriting|Введите имя и фамилию|Enter your full name",
  e2: "Telefon raqami noto'g'ri (+998 XX XXX XX XX)|Неверный номер (+998 XX XXX XX XX)|Invalid phone (+998 XX XXX XX XX)",
  e3: "Yosh 5 dan 99 gacha bo'lsin|Возраст от 5 до 99|Age must be 5–99", e4: "Kursni tanlang|Выберите курс|Choose a course",
  ok: "Rahmat! Arizangiz qabul qilindi.|Спасибо! Заявка принята.|Thanks! Your application was received.",
  er: "Yuborib bo'lmadi, qayta urinib ko'ring|Не удалось отправить, попробуйте снова|Could not send, please try again",
  cn: "Aloqa|Контакты|Contact", ad: "Manzil|Адрес|Address", tel: "Telefon|Телефон|Phone",
  addr: "Andijon shahri, Lenskiy ko'chasi, 143-uy|г. Андижан, ул. Ленская, дом 143|Andijan city, Lenskiy street, 143",
  dir: "Yo'nalishni olish|Построить маршрут|Get directions", fs: "Bo'limlar|Разделы|Sections",
  rights: "Barcha huquqlar himoyalangan.|Все права защищены.|All rights reserved."
};

/* Courses: icon, category, names, descriptions, months, technologies, projects */
const COURSES = [
  ["📺", "a", "Robototexnika|Робототехника|Robotics", "Arduino, sensorlar va robotlar yaratish|Создание роботов на Arduino и датчиках|Build robots with Arduino and sensors", 8, "Arduino,Sensors,Motors,C++", "Line-follower robot,Robot assembly,Smart home devices,Robot arm"],
  ["💻", "c", "Dasturlash|Программирование|Programming", "Dasturlash mantig'i va algoritmlar asoslari|Основы логики и алгоритмов|Core logic and algorithms", 6, "Algorithms,Scratch,C++", "Calculator,Quiz game,Mini apps"],
  ["🧠", "c", "Informatika|Информатика|Computer Science", "Kompyuter savodxonligi va ofis dasturlari|Компьютерная грамотность и офисные программы|Digital literacy and office tools", 4, "Windows,Office,Internet", "Presentations,Spreadsheets,Documents"],
  ["✨", "a", "Sun'iy intellekt (AI)|Искусственный интеллект (ИИ)|Artificial Intelligence (AI)", "ChatGPT, Machine Learning va neyron tarmoqlar|ChatGPT, машинное обучение и нейросети|ChatGPT, machine learning and neural networks", 8, "ChatGPT,Machine Learning,Neural Networks,Python", "AI chatbot,AI image generation,Real AI projects"],
  ["🌐", "c", "Web dasturlash|Веб-программирование|Web Development", "Saytlarni noldan yaratish|Создание сайтов с нуля|Build websites from scratch", 6, "HTML,CSS,JavaScript", "Portfolio,Landing page,Online shop"],
  ["🐍", "c", "Python|Python|Python", "Python asoslari, funksiyalar, Telegram botlar|Основы Python, функции, Telegram-боты|Python basics, functions, Telegram bots", 6, "Variables,Functions,Algorithms,aiogram", "Telegram bots,AI projects,Games"],
  ["🎨", "c", "Frontend Development|Frontend-разработка|Frontend Development", "Zamonaviy interfeyslar yaratish|Современные адаптивные интерфейсы|Modern responsive interfaces", 6, "HTML,CSS,JavaScript,React", "Dashboard,Single-page app,Animations"],
  ["⚙️", "c", "Backend Development|Backend-разработка|Backend Development", "Server, API va ma'lumotlar bazasi|Сервер, API и базы данных|Servers, APIs and databases", 7, "Node.js,SQL,REST API", "REST API,Chat server,Bot backend"],
  ["🖌️", "d", "Grafik dizayn|Графический дизайн|Graphic Design", "Logotip, banner va brend dizayni|Логотипы, баннеры и брендинг|Logos, banners and branding", 5, "Photoshop,Illustrator,Canva", "Logo,Poster,Brand kit"],
  ["📱", "d", "UI/UX Design|UI/UX дизайн|UI/UX Design", "Qulay va chiroyli ilova dizayni|Удобный и красивый дизайн приложений|Usable, beautiful app design", 5, "Figma,Prototyping,User research", "App mockup,Website design,Design system"],
  ["🛡️", "c", "Cyber Security|Кибербезопасность|Cyber Security", "Ma'lumotlarni himoya qilish asoslari|Основы защиты данных|Fundamentals of protecting data", 6, "Networks,Linux,Cryptography", "Secure login,Password checker,Security audit"],
  ["3D", "d", "3D modellash|3D моделирование|3D Modeling", "3D model va animatsiya yaratish|Создание 3D моделей и анимации|Create 3D models and animation", 5, "Blender,Tinkercad,3D printing", "Character,Room scene,3D print"],
  ["🎮", "c", "Game Development|Разработка игр|Game Development", "O'yinlarni noldan yaratish|Создание игр с нуля|Make games from scratch", 7, "Unity,C#,Scratch", "2D platformer,Racing game,Quiz game"],
  ["📲", "c", "Mobile Development|Мобильная разработка|Mobile Development", "Android va iOS ilovalar|Приложения для Android и iOS|Android and iOS apps", 7, "Flutter,Dart,Firebase", "To-do app,Shop app,Chat app"]
];
/* Optional: add a photo URL as 8th item of a course row, e.g. COURSES[0][7] = "images/robotics.jpg" */

const SLIDES = [
  ["🤖", "Robototexnika|Робототехника|Robotics", "Robotlarni o'zingiz yig'ing|Соберите робота сами|Build your own robot"],
  ["💻", "Dasturlash|Программирование|Programming", "Kod yozishni boshlang|Начните писать код|Start writing code"],
  ["✨", "Sun'iy intellekt|Искусственный интеллект|Artificial Intelligence", "AI bilan kelajakni yarating|Создавайте будущее с ИИ|Create the future with AI"],
  ["🏆", "O'quvchilar loyihalari|Проекты учеников|Student projects", "Botlar, saytlar va robotlar|Боты, сайты и роботы|Bots, websites and robots"],
  ["🖥️", "Zamonaviy IT laboratoriya|Современная IT-лаборатория|Modern IT lab", "Eng yangi jihozlar|Новейшее оборудование|Latest equipment"]
];

/* ===== helpers ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { g: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, s: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
const LANGS = ["uz", "ru", "en"];
let lang = LANGS.includes(store.g("lang")) ? store.g("lang") : "uz";
const tr = s => s.split("|")[LANGS.indexOf(lang)] || s.split("|")[0];
const t = k => tr(I[k] || "");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const bg = i => `linear-gradient(135deg,hsl(${200 + i * 10} 90% 50%),hsl(${255 + i * 8} 75% 42%))`;
let filter = "all", openIdx = -1;

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); if (e.target.classList.contains("stat")) count(e.target.querySelector("b")); }
}), { threshold: .15 });
const watch = el => io.observe(el);

function count(el) {
  const n = +el.dataset.n, t0 = performance.now();
  (function step(now) { const p = Math.min((now - t0) / 1600, 1); el.textContent = Math.floor(n * (1 - Math.pow(1 - p, 3))).toLocaleString("en") + (p === 1 && n > 100 ? "+" : ""); if (p < 1) requestAnimationFrame(step); })(t0);
}
function toast(msg, err) {
  const d = document.createElement("div"); d.className = "toast" + (err ? " err" : ""); d.textContent = msg;
  $("#toasts").append(d); setTimeout(() => d.remove(), 3500);
}

/* ===== courses ===== */
function renderChips() {
  $("#chips").innerHTML = [["all", "f0"], ["c", "fcod"], ["a", "fai"], ["d", "fdes"]]
    .map(([k, l]) => `<button data-f="${k}" class="${filter === k ? "on" : ""}">${t(l)}</button>`).join("");
}
function renderGrid() {
  const q = $("#search").value.trim().toLowerCase();
  const html = COURSES.map((c, i) => ({ c, i })).filter(({ c }) => (filter === "all" || c[1] === filter) && (!q || c[2].toLowerCase().includes(q) || c[3].toLowerCase().includes(q) || c[5].toLowerCase().includes(q)))
    .map(({ c, i }) => `<article class="card reveal" tabindex="0" role="button" data-open="${i}" aria-label="${esc(tr(c[2]))}">
      <div class="ph" style="background:${bg(i)}">${c[7] ? `<img src="${esc(c[7])}" alt="${esc(tr(c[2]))}" loading="lazy">` : `<span>${c[0]}</span>`}</div>
      <div class="bd"><h3>${esc(tr(c[2]))}</h3><p>${esc(tr(c[3]))}</p><small>⏱ ${c[4]} ${t("mo")} · ${esc(c[5].split(",").slice(0, 3).join(", "))}</small>
      <span class="btn sm">${t("more")}</span></div></article>`).join("");
  $("#grid").innerHTML = html || `<p class="empty">${t("none")}</p>`;
  $$("#grid .reveal").forEach(watch);
}
function openModal(i) {
  openIdx = i; const c = COURSES[i];
  $("#mbox").innerHTML = `<button class="ib x" id="mx" aria-label="${t("cl")}">✕</button>
    <div style="font-size:3rem">${c[0]}</div><h3 id="mt" class="gt">${esc(tr(c[2]))}</h3>
    <h4>${t("m1")}</h4><p>${esc(tr(c[3]))}</p>
    <h4>${t("m4")}</h4><p>${c[4]} ${t("mo")}</p>
    <h4>${t("m2")}</h4><div class="tags">${c[5].split(",").map(x => `<span>${esc(x)}</span>`).join("")}</div>
    <h4>${t("m3")}</h4><ul>${c[6].split(",").map(x => `<li>${esc(x)}</li>`).join("")}</ul>
    <p style="margin-top:22px"><a class="btn" href="#register" id="mreg">${t("reg")}</a></p>`;
  $("#modal").classList.add("open"); document.body.style.overflow = "hidden"; $("#mx").focus();
  $("#mreg").onclick = () => { closeModal(); $("#csel").value = c[2].split("|")[0]; };
}
function closeModal() { openIdx = -1; $("#modal").classList.remove("open"); document.body.style.overflow = ""; }

/* ===== carousel ===== */
let cur = 0, timer, paused = false;
function renderSlides() {
  $("#slides").innerHTML = SLIDES.map((s, i) => `<div class="sl ${i === cur ? "on" : ""}" style="background:${bg(i * 2)}"><i>${s[0]}</i><h3>${tr(s[1])}</h3><p>${tr(s[2])}</p></div>`).join("");
  $("#dots").innerHTML = SLIDES.map((_, i) => `<button class="${i === cur ? "on" : ""}" data-s="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
}
function go(n) {
  cur = (n + SLIDES.length) % SLIDES.length;
  $$(".sl").forEach((e, i) => e.classList.toggle("on", i === cur));
  $$("#dots button").forEach((e, i) => e.classList.toggle("on", i === cur));
}
function play() { clearInterval(timer); timer = setInterval(() => { if (!paused) go(cur + 1); }, 3000); }

/* ===== language ===== */
function applyLang() {
  document.documentElement.lang = lang; $("#lang").value = lang;
  $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $$("[data-ph]").forEach(e => e.placeholder = t(e.dataset.ph));
  const sel = $("#csel"), prev = sel.value;
  sel.innerHTML = `<option value="">—</option>` + COURSES.map(c => `<option value="${esc(c[2].split("|")[0])}">${esc(tr(c[2]))}</option>`).join("");
  sel.value = prev;
  $("#addr").textContent = $("#faddr").textContent = t("addr");
  $("#fcourses").innerHTML = COURSES.map((c, i) => `<a href="#courses" data-open="${i}">${esc(tr(c[2]))}</a>`).join("");
  renderChips(); renderGrid(); renderSlides();
  if (openIdx > -1) openModal(openIdx);
  $$("#form small").forEach(s => s.textContent = "");
  $$("#form [aria-invalid]").forEach(e => e.removeAttribute("aria-invalid"));
}

/* ===== init & events ===== */
$("#lang").onchange = e => { lang = e.target.value; store.s("lang", lang); applyLang(); };
function setTheme(m) { document.documentElement.dataset.theme = m; $("#theme").textContent = m === "dark" ? "🌙" : "☀️"; store.s("theme", m); }
$("#theme").onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
setTheme(store.g("theme") === "light" ? "light" : "dark");

$("#burger").onclick = () => { const o = $("#menu").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); };
$("#menu").onclick = e => { if (e.target.tagName === "A") $("#menu").classList.remove("open"); };

$("#chips").onclick = e => { const f = e.target.dataset.f; if (f) { filter = f; renderChips(); renderGrid(); } };
$("#search").oninput = renderGrid;
document.addEventListener("click", e => { const o = e.target.closest("[data-open]"); if (o) { e.preventDefault(); openModal(+o.dataset.open); } });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) { e.preventDefault(); openModal(+e.target.dataset.open); }
});
$("#modal").onclick = e => { if (e.target.id === "modal" || e.target.id === "mx") closeModal(); };

$("#prev").onclick = () => { go(cur - 1); play(); };
$("#next").onclick = () => { go(cur + 1); play(); };
$("#dots").onclick = e => { if (e.target.dataset.s) { go(+e.target.dataset.s); play(); } };
const car = $("#car"); let sx = 0;
car.onmouseenter = () => paused = true; car.onmouseleave = () => paused = false;
car.addEventListener("touchstart", e => { sx = e.touches[0].clientX; paused = true; }, { passive: true });
car.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); paused = false; play(); });

$("#grid").addEventListener("mousemove", e => {
  if (matchMedia("(hover:none)").matches) return;
  const c = e.target.closest(".card"); if (!c) return; const r = c.getBoundingClientRect();
  c.style.transform = `perspective(700px) rotateY(${((e.clientX - r.left) / r.width - .5) * 10}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 10}deg) translateY(-6px)`;
});
$("#grid").addEventListener("mouseout", e => { const c = e.target.closest(".card"); if (c) c.style.transform = ""; });
addEventListener("mousemove", e => {
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  $$("[data-d]").forEach(el => el.style.transform = `translate(${x * el.dataset.d}px,${y * el.dataset.d}px)`);
});

addEventListener("scroll", () => {
  const h = document.documentElement, y = h.scrollTop;
  $("#bar").style.width = (y / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
  $("#nav").classList.toggle("sc", y > 30); $("#top").classList.toggle("show", y > 500);
}, { passive: true });
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* registration */
$("#form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f)), ph = (d.phone || "").replace(/[\s()-]/g, "");
  const errs = {
    name: d.name.trim().length < 3 ? "e1" : "",
    phone: /^(\+?998)?\d{9}$/.test(ph) ? "" : "e2",
    age: +d.age >= 5 && +d.age <= 99 ? "" : "e3",
    course: d.course ? "" : "e4"
  };
  let ok = true;
  Object.entries(errs).forEach(([k, v]) => { $(`[data-err=${k}]`).textContent = v ? t(v) : ""; f.elements[k].setAttribute("aria-invalid", !!v); if (v) ok = false; });
  if (!ok) return;
  const payload = { name: d.name.trim(), phone: ph, age: +d.age, course: d.course, comment: d.comment.trim(), lang };
  try {
    if (CONFIG.endpoint) {
      const r = await fetch(CONFIG.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error(r.status);
    } else console.info("Demo mode (set CONFIG.endpoint):", payload);
    toast(t("ok")); f.reset();
  } catch (err) { toast(t("er"), true); }
});

/* contact & map */
CONFIG.phones.forEach((p, i) => { const a = $("#tel" + (i + 1)); a.textContent = p; a.href = "tel:" + p.replace(/[^\d+]/g, ""); });
$("#ftel").textContent = CONFIG.phones[0]; $("#ftel").href = "tel:" + CONFIG.phones[0].replace(/[^\d+]/g, "");
$$("[data-soc]").forEach(a => a.href = CONFIG.social[a.dataset.soc]);
const mq = encodeURIComponent(CONFIG.address + ", Uzbekistan");
$("#map").src = "https://www.google.com/maps?q=" + mq + "&output=embed";
$("#dir").href = "https://www.google.com/maps/dir/?api=1&destination=" + mq;
$("#yr").textContent = new Date().getFullYear();
$("#nc").dataset.n = COURSES.length;

applyLang(); play();
$$(".rv").forEach(watch);
addEventListener("load", () => { $("#loader").classList.add("hide"); setTimeout(() => $("#loader").remove(), 700); });
