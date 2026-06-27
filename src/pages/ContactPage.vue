<script setup>
import { ref, reactive, computed } from 'vue'

const navItems = reactive([
  { label: 'О компании',        active: false },
  { label: 'Лицензии',          active: false },
  { label: 'Доставка и оплата', active: false },
  { label: 'Вопросы и ответы',  active: false },
  { label: 'Контакты',          active: true  },
])

function setActive(selected) {
  navItems.forEach(i => i.active = false)
  selected.active = true
}

const branches = [
  {
    type: 'Офис продаж',
    address: '117335, г. Москва, вн. тёр. г. муниципальный округ Ломоносовский, ул. Вавилова, д. 69/75, эт. 5',
    phone: '+7 985 688-88-88',
    email: 'absomed@bk.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Склад',
    address: 'г. Сочи, ул. Донская, дом 9А, помещение Б.',
    phone: '+7 985 688-88-88',
    email: 'absomed@bk.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Представительство в Екатеринбурге',
    address: '620135, Екатеринбург, ул. Старых Большевиков, 91, 1 этаж.',
    phone: '+7 985 688-88-88',
    email: 'absomed@bk.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Представительство в Новосибирске',
    address: '630099, Новосибирск, ул. Ленина, д. 12, офис 304.',
    phone: '+7 985 688-88-88',
    email: 'nsk@absomed.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Представительство в Казани',
    address: '420111, Казань, ул. Баумана, д. 44, эт. 2.',
    phone: '+7 985 688-88-88',
    email: 'kzn@absomed.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Представительство в Краснодаре',
    address: '350000, Краснодар, ул. Красная, д. 78, офис 12.',
    phone: '+7 985 688-88-88',
    email: 'krd@absomed.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Представительство в Санкт-Петербурге',
    address: '190000, Санкт-Петербург, Невский пр., д. 30, эт. 3.',
    phone: '+7 985 688-88-88',
    email: 'spb@absomed.ru',
    hours: 'ПН-ПТ 10:00-18:00\nСБ-ВС Выходной',
  },
  {
    type: 'Склад в Ростове-на-Дону',
    address: '344000, Ростов-на-Дону, ул. Большая Садовая, д. 55, склад А.',
    phone: '+7 985 688-88-88',
    email: 'rnd@absomed.ru',
    hours: 'ПН-ПТ 09:00-18:00\nСБ-ВС Выходной',
  },
]

const showAllBranches = ref(false)
const visibleBranches = computed(() =>
    showAllBranches.value ? branches : branches.slice(0, 2)
)

const ask = reactive({
  fio: '', email: '', phone: '', comment: '', consent: false,
})

function submitAsk() {
  console.log('ask:', ask)
}
</script>

<template>
  <div class="page">
    <div class="page-layout">

      <aside class="sidebar">
        <nav class="sidebar-nav">
          <a
              v-for="item in navItems"
              :key="item.label"
              href="#"
              class="sidebar-link"
              :class="{ 'sidebar-link--active': item.active }"
              @click.prevent="setActive(item)"
          >{{ item.label }}</a>
        </nav>
      </aside>

      <main class="main">

        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Главная</router-link>
          <span class="bc-sep">›</span>
          <span>Компания</span>
          <span class="bc-sep">›</span>
          <span>Контакты</span>
        </nav>

        <h1 class="page-title">Контакты</h1>

        <section class="office-section">
          <div class="office-header">
            <h2 class="office-title">Головной офис</h2>
            <div class="social-icons">
              <a href="#" class="social-btn">f</a>
              <a href="#" class="social-btn">vk</a>
            </div>
          </div>

          <div class="office-info-grid">
            <div class="info-block">
              <div class="info-label">Адрес</div>
              <div class="info-value">
                117335, г. Москва, вн. тёр. г. муниципальный округ<br>
                Ломоносовский, ул. Вавилова, д. 69/75, эт. 5
              </div>
            </div>
            <div class="info-block">
              <div class="info-label">Реквизиты</div>
              <div class="info-value">
                ООО «АБСОЛЮТ МЕДИКАЛ»<br>
                ИНН 7718947471<br>
                КПП 771801001
              </div>
            </div>
            <div class="info-block">
              <div class="info-label">Телефон</div>
              <div class="info-value">+7 985 688-88-88</div>
            </div>
            <div class="info-block">
              <div class="info-label">Электронная почта</div>
              <div class="info-value">absomed@bk.ru</div>
            </div>
          </div>

          <button class="btn-dark btn-ask">Задать вопрос</button>

          <div class="map-wrap">
            <div class="map-placeholder">
              <span class="map-placeholder__text"><div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/house/ulitsa_vavilova_69_75/Z04YcwJhTUEAQFtvfXp5c3VhZA==/?ll=37.552539%2C55.681773&utm_medium=mapframe&utm_source=maps&z=15.71" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Вавилова, 69/75 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.552539%2C55.681773&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY2OTkzNxI-0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JLQsNCy0LjQu9C-0LLQsCwgNjkvNzUiCg2wNBZCFU-7XkI%2C&z=15.71" width="1100" height="340" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div></span>
            </div>

          </div>

          <p class="office-desc">
            Дополнительно к главному офису мы предлагаем воспользоваться нашими представительствами
            в других регионах РФ, а также воспользоваться возможностью вывоза напрямую с наших складов.
            Наши специалисты окажут вам квалифицированную помощь в выборе товара, а также предложат
            самое оптимальное решение ваших задач!
          </p>
        </section>

        <section class="branches-section">
          <div class="branches-header">
            <h2 class="branches-title">Филиалы</h2>
            <span class="branches-count">23</span>
          </div>

          <div
              v-for="(branch, idx) in visibleBranches"
              :key="idx"
              class="branch-block"
          >
            <div class="branch-header">
              <span class="branch-type">{{ branch.type }}</span>
              <a href="#" class="branch-map-link">Смотреть на карте</a>
            </div>
            <div class="branch-info-grid">
              <div class="info-block">
                <div class="info-label">Адрес</div>
                <div class="info-value">{{ branch.address }}</div>
              </div>
              <div class="info-block">
                <div class="info-label">Телефон</div>
                <div class="info-value">{{ branch.phone }}</div>
              </div>
              <div class="info-block">
                <div class="info-label">Электронная почта</div>
                <div class="info-value">{{ branch.email }}</div>
              </div>
              <div class="info-block">
                <div class="info-label">График работы</div>
                <div class="info-value">{{ branch.hours }}</div>
              </div>
            </div>
          </div>

          <button
              v-if="!showAllBranches"
              class="btn-show-more"
              @click="showAllBranches = true"
          >
            Показать больше филиалов
          </button>
        </section>

        <section class="ask-section">
          <h2 class="ask-title">Задать вопрос</h2>
          <div class="ask-form">
            <div class="field-group">
              <label class="field-label">ФИО*</label>
              <input v-model="ask.fio" class="f-input" placeholder="Иванов Иван Иванович" />
            </div>
            <div class="field-group">
              <label class="field-label">E-mail*</label>
              <input v-model="ask.email" class="f-input" placeholder="example@gmail.com" type="email" />
            </div>
            <div class="field-group">
              <label class="field-label">Телефон*</label>
              <input v-model="ask.phone" class="f-input" placeholder="+7(909)-777-77-77" type="tel" />
            </div>
            <div class="field-group">
              <textarea v-model="ask.comment" class="f-input f-textarea" placeholder="Комментарий"></textarea>
            </div>
            <div class="ask-footer">
              <button class="btn-dark" @click="submitAsk">Задать вопрос</button>
              <label class="consent-label">
                <input type="checkbox" v-model="ask.consent" class="consent-check" />
                <span>Я даю согласие на обработку моих персональных данных</span>
              </label>
            </div>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>


<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.page {
  width: 100%;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #111;
  padding: 28px 0 80px;
}
a {
  color: black;
  text-decoration: none;
  list-style: none;
}
.page-layout {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: flex-start;
}

.sidebar {
  width: 248px;
  flex-shrink: 0;
  border: 1px solid #e4e4e4;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 56px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
}
.sidebar-link {
  display: block;
  padding: 14px 18px;
  font-size: 16px;
  color: #222;
  text-decoration: none;
  border-bottom: 1px solid #e4e4e4;
  transition: background 0.15s;
}
.sidebar-link:last-child { border-bottom: none; }
.sidebar-link:hover { background: #f5f5f5; }
.sidebar-link--active {
  background: #f0f0f0;
  font-weight: 600;
}

.main {
  flex: 1;
  min-width: 0;
  padding-left: 48px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #777;
  margin-bottom: 18px;
}
.bc-sep { color: #bbb; }

.page-title {
  font-size: 38px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 32px;
}

.office-section {
  margin-bottom: 40px;
}

.office-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.office-title {
  font-size: 22px;
  font-weight: 700;
}

.social-icons {
  display: flex;
  gap: 8px;
}
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  transition: border-color 0.15s, color 0.15s;
}
.social-btn:hover { border-color: #888; color: #111; }

.office-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 48px;
  margin-bottom: 24px;
}
.branch-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 24px;
  margin-top: 16px;
}

.info-label {
  font-size: 16px;
  font-weight: 700;
  color: #111;
  margin-bottom: 6px;
}
.info-value {
  font-size: 16px;
  color: #333;
  line-height: 1.65;
  white-space: pre-line;
}

.btn-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 28px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.btn-dark:hover { opacity: 0.82; }
.btn-ask { margin-bottom: 20px; }

.map-wrap {
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}
.map-placeholder {
  width: 100%;
  height: 100%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.map-placeholder__text {
  font-size: 16px;
  color: #888;
}

.map-card {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 210px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 14px 16px;
  font-size: 13px;
  line-height: 1.55;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  pointer-events: none;
}
.map-card__label {
  font-weight: 700;
  color: #111;
  margin-bottom: 4px;
}
.map-card__value { color: #333; }
.mt10 { margin-top: 10px; }

.office-desc {
  font-size: 16px;
  color: #333;
  line-height: 1.75;
}

.branches-section {
  border-top: 1px solid #e4e4e4;
  padding-top: 32px;
  margin-bottom: 48px;
}
.branches-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 24px;
}
.branches-title {
  font-size: 22px;
  font-weight: 700;
}
.branches-count {
  font-size: 18px;
  color: #888;
  font-weight: 400;
}

.branch-block {
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
}

.branch-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 4px;
}
.branch-type {
  font-size: 16px;
  font-weight: 600;
  color: #111;
}
.branch-map-link {
  font-size: 15px;
  color: #888;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.branch-map-link:hover { color: #333; }

.btn-show-more {
  display: block;
  width: 100%;
  height: 50px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: opacity 0.2s;
}
.btn-show-more:hover { opacity: 0.82; }

.ask-section {
  border-top: 1px solid #e4e4e4;
  padding-top: 32px;
}
.ask-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.ask-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 440px;
}
.field-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.field-label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.f-input {
  width: 100%;
  height: 44px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 0 12px;
  font-size: 16px;
  color: #333;
  outline: none;
  background: #fff;
  font-family: inherit;
}
.f-input::placeholder { color: #aaa; }
.f-input:focus { border-color: #999; }
.f-textarea {
  height: 84px;
  padding: 10px 12px;
  resize: vertical;
}

.ask-footer {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.consent-label {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  max-width: 280px;
  line-height: 1.5;
}
.consent-check {
  flex-shrink: 0;
  margin-top: 2px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: #111;
}

@media (max-width: 1024px) {
  .page {
    padding: 20px 0 60px;
  }
  .sidebar {
    width: 200px;
  }
  .main {
    padding-left: 32px;
  }
  .page-title {
    font-size: 30px;
    margin-bottom: 24px;
  }
  .branch-info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page {
    padding: 16px 0 40px;
  }
  .page-layout {
    flex-direction: column;
    gap: 20px;
  }
  .sidebar {
    width: 100%;
    margin-top: 0;
  }
  .sidebar-nav {
    flex-direction: row;
    overflow-x: auto;
  }
  .sidebar-link {
    flex-shrink: 0;
    padding: 12px 16px;
    border-bottom: none;
    border-right: 1px solid #e4e4e4;
    font-size: 14px;
    white-space: nowrap;
  }
  .sidebar-link:last-child {
    border-right: none;
  }
  .main {
    padding-left: 0;
    width: 100%;
  }
  .page-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .office-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .office-title {
    font-size: 18px;
  }
  .office-info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .branch-info-grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .info-label,
  .info-value {
    font-size: 14px;
  }
  .map-wrap {
    height: 260px;
  }
  .map-card {
    width: 160px;
    padding: 10px 12px;
    font-size: 12px;
  }
  .office-desc {
    font-size: 14px;
  }
  .branches-title {
    font-size: 18px;
  }
  .branch-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .ask-title {
    font-size: 18px;
  }
  .ask-form {
    max-width: none;
  }
  .ask-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .consent-label {
    max-width: none;
  }
  .btn-dark {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 22px;
  }
  .branch-info-grid {
    grid-template-columns: 1fr;
  }
  .map-card {
    display: none;
  }
  .f-input {
    font-size: 16px;
  }
  .breadcrumb {
    font-size: 12px;
    flex-wrap: wrap;
  }
}
</style>