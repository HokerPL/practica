<script setup>
import { ref, reactive, defineComponent, h } from 'vue'
const ImgPlaceholder = defineComponent({
  name: 'ImgPlaceholder',
  setup() {
    return () => h('div', { class: 'placeholder' }, [
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '100%',
        height: '100%',
        style: 'position:absolute;top:0;left:0',
      }, [
        h('line', { x1: '0', y1: '0', x2: '100%', y2: '100%', stroke: '#c8c8c8', 'stroke-width': '1' }),
        h('line', { x1: '100%', y1: '0', x2: '0', y2: '100%', stroke: '#c8c8c8', 'stroke-width': '1' }),
      ]),
      h('div', { class: 'placeholder__icon' }, [
        h('svg', { width: '32', height: '28', viewBox: '0 0 32 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
          h('rect', { x: '1', y: '1', width: '30', height: '26', rx: '1', stroke: '#bbb', 'stroke-width': '1.5' }),
          h('circle', { cx: '10', cy: '10', r: '3', stroke: '#bbb', 'stroke-width': '1.5' }),
          h('path', { d: 'M1 20l8-8 6 6 5-5 11 9', stroke: '#bbb', 'stroke-width': '1.5', 'stroke-linejoin': 'round' }),
        ])
      ])
    ])
  }
})

const stats = [
  { value: '25 лет',   label: 'На рынке России' },
  { value: '10 000+',  label: 'Довольных клиентов' },
  { value: '5 000+',   label: 'Паллетомест склада' },
]

const kpis = [
  { value: '3 млн', unit: 'Литров', desc: 'Выпуск дезинфицирующих средств в год' },
  { value: '70%',   unit: 'Спирта', desc: 'Антисептики соответствуют рекомендациям ВОЗ и Роспотребнадзора' },
]

const benefits = [
  'Уникальные предложения на рынке, которые легко продавать',
  'Любые объёмы поставок, с отлаженной логистикой по РФ',
  'Фиксация цены и бронирование товара под закупку',
  'Обучаем и развиваем. Онлайн курсы и семинары',
]

const docTabs = ['Дезинфекция', 'Антисептики', 'Средства для применения']
const activeTab = ref('Дезинфекция')

const steps = [
  'Заполняете заявку',
  'Выполняете условия перехода',
  'Заключаем договор поставки с фиксацией цены',
  'Обучаем и даем необходимые материалы для продаж',
  'Постоянно развиваем Вас и помогаем продавать больше',
]

const form = reactive({
  fio: '', phone: '', email: '', position: '',
  sphere: '', company: '', inn: '',
})

function submitForm() {
  console.log('form:', form)
}
</script>
<template>
  <div class="page">

    <section class="hero-section">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Главная</router-link>
          <span class="sep">›</span>
          <span>Партнёрам</span>
        </nav>

        <div class="hero-layout">
          <div class="hero-left">
            <h1 class="hero-title">Стань партнёром</h1>
            <p class="hero-sub">Присоединяйся к Лидеру рынка России по производству дезсредств</p>

            <div class="stats-row">
              <div class="stat-card" v-for="s in stats" :key="s.value">
                <div class="stat-icon-circle"></div>
                <div>
                  <div class="stat-val">{{ s.value }}</div>
                  <div class="stat-lbl">{{ s.label }}</div>
                </div>
              </div>
            </div>
            <div class="hero-img-wrap">
              <ImgPlaceholder />
            </div>
          </div>

          <div class="hero-form-card">
            <h2 class="form-heading">Оформить заявку</h2>
            <div class="form-fields">
              <input v-model="form.fio"      class="f-input" placeholder="ФИО*" />
              <input v-model="form.phone"    class="f-input" placeholder="Телефон*" type="tel" />
              <input v-model="form.email"    class="f-input" placeholder="E-mail*" type="email" />
              <input v-model="form.position" class="f-input" placeholder="Должность*" />
              <div class="select-wrap">
                <select v-model="form.sphere" class="f-select">
                  <option value="" disabled selected>Сфера деятельности*</option>
                  <option>Медицина</option>
                  <option>Фармацевтика</option>
                  <option>Образование</option>
                  <option>Другое</option>
                </select>
                <span class="select-chevron">&#8250;</span>
              </div>
              <input v-model="form.company"  class="f-input" placeholder="Название компании*" />
              <input v-model="form.inn"      class="f-input" placeholder="ИНН компании*" />
              <button class="btn-dark" @click="submitForm">
                Отправить заявку на сотрудничество
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-layout">
          <div class="mosaic">
            <div class="mosaic-col mosaic-col-a">
              <div class="mosaic-img mosaic-img--tall-a"><ImgPlaceholder /></div>
              <div class="mosaic-img mosaic-img--short-a"><ImgPlaceholder /></div>
            </div>
            <div class="mosaic-col mosaic-col-b">
              <div class="mosaic-img mosaic-img--tall-b"><ImgPlaceholder /></div>
              <div class="mosaic-img mosaic-img--short-b"><ImgPlaceholder /></div>
            </div>
          </div>
          <div class="about-text">
            <h2 class="sec-title">О компании</h2>
            <p class="about-p">
              На сегодняшний день MED AND MORE – динамично развивающееся предприятие,
              ежедневно увеличивающее объёмы продаж и их географию, количество постоянных
              партнёров и ассортимент продукции. Мы осуществляем комплексные поставки
              товаров медицинского и иного назначения на предприятия различных сфер
              деятельности, а также оптовые продажи по минимальным ценам, за счёт прямых
              договоров с заводами-производителями, на многих из которых, мы также являемся
              официальными представителями и дистрибьюторами.
            </p>
            <p class="about-p">
              В связи с высокой динамикой развития химического рынка, ассортимент
              предлагаемой нами продукции постоянно увеличивается. Мы расширяем ассортимент
              в соответствии с потребностями клиник, ЛПУ, детских учреждений, общественных
              объектов, предприятий пищевой сферы, индустрии красоты и т.д. Мы поставляем
              надёжные средства дезинфекции, технологичное оборудование, расходные
              медицинские материалы и иные товары лучшего качества.
            </p>
            <div class="kpi-list">
              <div class="kpi-row" v-for="k in kpis" :key="k.value">
                <div class="kpi-left">
                  <span class="kpi-val">{{ k.value }}</span>
                  <span class="kpi-unit">{{ k.unit }}</span>
                </div>
                <div class="kpi-divider"></div>
                <span class="kpi-desc">{{ k.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery-section">
      <div class="container">
        <div class="gallery-grid">
          <div class="gallery-cell" v-for="i in 6" :key="i">
            <ImgPlaceholder />
          </div>
        </div>
      </div>
    </section>

    <section class="benefits-section">
      <div class="container">
        <div class="benefits-box">
          <h2 class="benefits-title">Преимущества работы с нами</h2>
          <div class="benefits-grid">
            <div class="benefit" v-for="b in benefits" :key="b">
              <div class="benefit-circle"></div>
              <p class="benefit-text">{{ b }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="docs-section">
      <div class="container">
        <div class="docs-layout">
          <div class="docs-tabs">
            <div
                v-for="tab in docTabs"
                :key="tab"
                class="docs-tab"
                :class="{ active: activeTab === tab }"
                @click="activeTab = tab"
            >{{ tab }}</div>
          </div>

          <div class="docs-img-wrap">
            <ImgPlaceholder />
          </div>

          <div class="docs-text">
            <h2 class="sec-title">Документы</h2>
            <p class="docs-p">
              Все поставляемые нами дезинфицирующие средства прошли полный цикл исследований
              в профильных научных лабораториях, и зарегистрированы Роспотребнадзором
              в установленном порядке.
            </p>
            <p class="docs-p">
              Нашим дилерам легко подтвердить происхождение и качество продукции, потому что
              в комплекте с дезинфицирующими средствами мы предоставляем:
            </p>
            <ul class="docs-ul">
              <li>Свидетельство о госрегистрации</li>
              <li>Декларацию о соответствии</li>
              <li>Инструкцию по применению</li>
            </ul>
            <p class="docs-p">
              Производство дезинфицирующих средств Септолит сертифицировано по стандартам
              GMP и ISO, это гарантирует стабильно высокое качество выпускаемой продукции.
            </p>
            <button class="btn-dark btn-dark--sm">Получить дилерские условия</button>
          </div>
        </div>
      </div>
    </section>
    <section class="steps-section">
      <div class="container">
        <h2 class="sec-title steps-title">Дальнейшие шаги</h2>
        <div class="steps-row">
          <div class="step" v-for="(s, i) in steps" :key="i">
            <div class="step-circle"></div>
            <p class="step-text">{{ s }}</p>
          </div>
        </div>
        <div class="steps-cta">
          <button class="btn-dark">Оформить заявку на сотрудничество</button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
  outline: none;
  list-style: none;
}
.page {
  width: 100%;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  color: #111;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

:deep(.placeholder) {
  position: relative;
  width: 100%;
  height: 100%;
  background: #e4e4e4;
  overflow: hidden;
}
:deep(.placeholder__icon) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.7;
}

.hero-section {
  padding: 32px 0 56px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #777;
  margin-bottom: 28px;
}
.sep { color: #bbb; }

.hero-layout {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.hero-left {
  flex: 1;
  min-width: 0;
}
.hero-title {
  font-size: 44px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 10px;
}
.hero-sub {
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
}

.stats-row {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}
.stat-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 14px 16px;
}
.stat-icon-circle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #d8d8d8;
  flex-shrink: 0;
}
.stat-val {
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
}
.stat-lbl {
  font-size: 11px;
  color: #888;
  margin-top: 2px;
}

.hero-img-wrap {
  width: 100%;
  height: 240px;
  border-radius: 4px;
  overflow: hidden;
}

.hero-form-card {
  width: 420px;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 32px 28px 36px;
  background: #fff;
}
.form-heading {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 22px;
}
.form-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.f-input {
  width: 100%;
  height: 44px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 0 14px;
  font-size: 13px;
  color: #333;
  outline: none;
  background: #fff;
}
.f-input::placeholder { color: #aaa; }
.f-input:focus { border-color: #999; }

.select-wrap {
  position: relative;
}
.f-select {
  width: 100%;
  height: 44px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 0 40px 0 14px;
  font-size: 13px;
  color: #333;
  background: #fff;
  appearance: none;
  outline: none;
  cursor: pointer;
}
.select-chevron {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  font-size: 18px;
  color: #888;
  pointer-events: none;
}

.btn-dark {
  width: 100%;
  height: 48px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.btn-dark:hover { opacity: 0.82; }
.btn-dark--sm {
  width: auto;
  padding: 0 28px;
  height: 44px;
  font-size: 13px;
  margin-top: 4px;
}

.about-section {
  padding: 60px 0 64px;
}
.about-layout {
  display: flex;
  gap: 64px;
  align-items: flex-start;
}


.mosaic {
  flex: 0 0 480px;
  display: flex;
  gap: 14px;

  align-items: flex-end;
}
.mosaic-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mosaic-col-a { }

.mosaic-col-b { margin-top: -40px; }

.mosaic-img {
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

.mosaic-img--tall-a  { height: 240px; }
.mosaic-img--short-a { height: 160px; }

.mosaic-img--tall-b  { height: 200px; }
.mosaic-img--short-b { height: 200px; }

.about-text {
  flex: 1;
  min-width: 0;
}
.sec-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.15;
}
.about-p {
  font-size: 13px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 14px;
}

.kpi-list {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.kpi-row {
  display: flex;
  align-items: center;
  gap: 20px;
}
.kpi-left {
  display: flex;
  flex-direction: column;
  min-width: 72px;
}
.kpi-val {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
}
.kpi-unit {
  font-size: 11px;
  color: #888;
  margin-top: 2px;
}
.kpi-divider {
  width: 1px;
  height: 32px;
  background: #ccc;
  flex-shrink: 0;
}
.kpi-desc {
  font-size: 13px;
  color: #333;
  line-height: 1.55;
}

.gallery-section {
  padding: 0 0 48px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}
.gallery-cell {
  height: 96px;
  border-radius: 4px;
  overflow: hidden;
}

.benefits-section {
  padding: 0 0 48px;
}
.benefits-box {
  background: #f4f4f4;
  border-radius: 6px;
  padding: 40px 44px 44px;
}
.benefits-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 28px;
}
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.benefit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.benefit-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #c8c8c8;
  flex-shrink: 0;
  margin-top: 1px;
}
.benefit-text {
  font-size: 13px;
  color: #333;
  line-height: 1.6;
}

.docs-section {
  padding: 52px 0 60px;
}
.docs-layout {
  display: flex;
  align-items: stretch;
  gap: 0;
}

.docs-tabs {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 40px;
}
.docs-tab {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 18px 10px;
  font-size: 12px;
  color: #888;
  cursor: pointer;
  border-left: 3px solid #e0e0e0;
  white-space: nowrap;
  transition: color 0.15s, border-color 0.15s;
  user-select: none;
}
.docs-tab.active {
  color: #111;
  border-left-color: #111;
  font-weight: 600;
}
.docs-tab:hover:not(.active) {
  color: #444;
  border-left-color: #bbb;
}

.docs-img-wrap {
  flex: 0 0 400px;
  min-height: 340px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 16px;
}

.docs-text {
  flex: 1;
  min-width: 0;
  padding-left: 52px;
}
.docs-p {
  font-size: 13px;
  color: #333;
  line-height: 1.8;
  margin-bottom: 12px;
}
.docs-ul {
  list-style: none;
  margin-bottom: 14px;
}
.docs-ul li {
  font-size: 13px;
  color: #333;
  line-height: 1.8;
  padding-left: 18px;
  position: relative;
}
.docs-ul li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: #999;
}

.steps-section {
  padding: 60px 0 72px;
}
.steps-title {
  margin-bottom: 48px;
}
.steps-row {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 52px;
  position: relative;
}

.steps-row::before {
  content: '';
  position: absolute;
  top: 38px;
  left: calc(10% + 38px);
  right: calc(10% + 38px);
  height: 1px;
  background: #d8d8d8;
  z-index: 0;
}
.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 12px;
}
.step-circle {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: #d8d8d8;
  margin-bottom: 18px;
  flex-shrink: 0;
}
.step-text {
  font-size: 13px;
  color: #333;
  line-height: 1.55;
  max-width: 160px;
}
.steps-cta {
  display: flex;
  justify-content: center;
}
.steps-cta .btn-dark {
  width: auto;
  padding: 0 48px;
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 24px 0 40px;
  }
  .hero-title {
    font-size: 34px;
  }
  .hero-form-card {
    width: 360px;
    padding: 24px 20px 28px;
  }
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .benefits-box {
    padding: 32px 28px;
  }
  .docs-img-wrap {
    flex: 0 0 300px;
    min-height: 260px;
  }
  .docs-text {
    padding-left: 32px;
  }
  .sec-title,
  .benefits-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 16px 0 32px;
  }
  .breadcrumb {
    font-size: 12px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .hero-layout {
    flex-direction: column;
    gap: 28px;
  }
  .hero-title {
    font-size: 26px;
  }
  .hero-sub {
    font-size: 13px;
  }
  .stats-row {
    flex-direction: column;
    gap: 10px;
  }
  .hero-img-wrap {
    height: 200px;
  }
  .hero-form-card {
    width: 100%;
    padding: 24px 20px;
  }
  .form-heading {
    font-size: 18px;
  }
  .about-section {
    padding: 40px 0;
  }
  .about-layout {
    flex-direction: column;
    gap: 28px;
  }
  .mosaic {
    flex: 1 1 auto;
    width: 100%;
  }
  .mosaic-img--tall-a { height: 180px; }
  .mosaic-img--short-a { height: 120px; }
  .mosaic-img--tall-b { height: 150px; }
  .mosaic-img--short-b { height: 150px; }
  .sec-title {
    font-size: 24px;
  }
  .kpi-row {
    gap: 14px;
  }
  .kpi-val {
    font-size: 18px;
  }
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .gallery-cell {
    height: 80px;
  }
  .benefits-section {
    padding: 0 0 32px;
  }
  .benefits-box {
    padding: 24px 20px;
  }
  .benefits-title {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .docs-section {
    padding: 32px 0 40px;
  }
  .docs-layout {
    flex-direction: column;
    gap: 20px;
  }
  .docs-tabs {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }
  .docs-tab {
    writing-mode: horizontal-tb;
    transform: none;
    padding: 10px 14px;
    border-left: none;
    border-bottom: 3px solid #e0e0e0;
    flex-shrink: 0;
  }
  .docs-tab.active {
    border-left-color: transparent;
    border-bottom-color: #111;
  }
  .docs-tab:hover:not(.active) {
    border-left-color: transparent;
    border-bottom-color: #bbb;
  }
  .docs-img-wrap {
    flex: 1 1 auto;
    width: 100%;
    min-height: 220px;
    margin-left: 0;
  }
  .docs-text {
    padding-left: 0;
  }
  .steps-section {
    padding: 40px 0 52px;
  }
  .steps-row {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 32px;
  }
  .steps-row::before {
    display: none;
  }
  .step {
    flex-direction: row;
    text-align: left;
    gap: 16px;
    padding: 0;
  }
  .step-circle {
    width: 56px;
    height: 56px;
    margin-bottom: 0;
  }
  .step-text {
    max-width: none;
    text-align: left;
  }
  .steps-cta .btn-dark {
    width: 100%;
    padding: 0 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 22px;
  }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-cell {
    height: 90px;
  }
  .f-input {
    font-size: 16px;
  }
}
</style>