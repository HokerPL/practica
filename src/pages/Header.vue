<script setup>
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { ref, computed, nextTick } from 'vue'


const cities = [
  'Санкт-Петербург',
  'Екатеринбург',
  'Новосибирск',
  'Москва',
  'Нижний Новгород',
  'Пермь',
  'Калининград',
  'Казань',
  'Краснодар',
  'Самара',
  'Ростов-на-Дону',
  'Уфа',
  'Томск',
  'Челябинск',
  'Воронеж',
]

const isOpen = ref(false)
const isCallOpen = ref(false)
const selectedCity = ref('Москва')
const tempCity = ref('Москва')
const query = ref('')
const searchInput = ref(null)

const callForm = ref({
  name: '',
  phone: '',
  email: ''
})

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

const filteredCities = computed(() => {
  if (!query.value) return cities
  return cities.filter(c => c.toLowerCase().includes(query.value.toLowerCase()))
})

async function openModal() {
  tempCity.value = selectedCity.value
  query.value = ''
  isOpen.value = true
  await nextTick()
  searchInput.value?.focus()
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function confirmCity() {
  selectedCity.value = tempCity.value
  closeModal()
}

function openCallModal() {
  isCallOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeCallModal() {
  isCallOpen.value = false
  document.body.style.overflow = ''
}

function submitCallForm() {
  console.log('Форма отправлена:', callForm.value)
  callForm.value = { name: '', phone: '', email: '' }
  closeCallModal()
}
</script>
<template>
  <div class="container">
    <div class="city-select">
      <button class="select-city" @click="openModal">
        <img src="/images/header/map-pin.svg" alt="">
        {{ selectedCity }}
        <img src="/images/header/chevron-down.svg" alt="">
      </button>
      <div class="group-call">
        <div class="number">8-800-777-5000</div>
        <div class="call" @click="openCallModal">Заказать звонок</div>
      </div>
    </div>
  </div>

  <section class="search-bar">
    <div class="container">
      <div class="search-blok">
        <div class="logo">
          <a href="/practica/">
            <img src="/images/header/logo.png" alt="">
          </a>
        </div>
        <button class="burger-btn" @click="toggleMobileMenu" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <router-link to="Catalog" class="btn-catalog">
          <img class="svgmenu" src="/images/header/menu.svg" alt="">
          Каталог
          <img class="strelka" src="/images/header/chevron-down.svg" alt="">
        </router-link>
        <input type="search" class="input-search" placeholder="Поиск">
        <button class="btn-serch">Поиск</button>
        <div class="btn-fbl">
          <a href="/">
            <div class="btn-favorites">
              <img src="/images/header/heart.svg" alt="">
              <p>Избранное</p>
            </div>
          </a>
          <a href="/">
            <div class="btn-basket">
              <img src="/images/header/shopping-basket.svg" alt="">
              <p>Корзина</p>
            </div>
          </a>
          <a href="/">
            <div class="btn-login">
              <img src="/images/header/user-round.svg" alt="">
              <p>Войти</p>
            </div>
          </a>
        </div>
      </div>
      <div class="navigition-bar" :class="{ 'navigition-bar--open': isMobileMenuOpen }">
        <router-link to="StatiPage" @click="closeMobileMenu">Статьи</router-link>
        <router-link to="BrendsPage" @click="closeMobileMenu">Бренды</router-link>
        <a href="/">
          Как купить
          <img src="/images/header/chevron-down.svg" alt="">
        </a>
        <a href="/">
          Компания
          <img src="/images/header/chevron-down.svg" alt="">
        </a>
        <router-link to="ContactPage" @click="closeMobileMenu">Контакты</router-link>
        <router-link to="PartherPage" @click="closeMobileMenu">Партнёрам</router-link>
        <router-link to="TenderZapros" @click="closeMobileMenu">Запросить для тендера</router-link>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <div class="modal-header">
            <h2 class="modal-title">Выберите город</h2>
            <button class="modal-close" @click="closeModal">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="modal-search">
            <div class="search-wrapper">
              <input
                  ref="searchInput"
                  v-model="query"
                  class="search-input"
                  placeholder="Ваш город..."
              />
              <button v-if="query" class="search-clear" @click="query = ''">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="#999" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
              <svg v-else class="search-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 5L7 10L12 5" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <div class="city-list">
            <label
                v-for="city in filteredCities"
                :key="city"
                class="city-item"
                :class="{ active: tempCity === city }"
            >
              <input type="radio" name="city" :value="city" :checked="tempCity === city" @change="tempCity = city" />
              <span class="radio-dot"></span>
              <span class="city-name">{{ city }}</span>
            </label>
            <p v-if="filteredCities.length === 0" class="no-results">Город не найден</p>
          </div>

          <div class="modal-footer">
            <button class="btn-confirm" @click="confirmCity">Выбрать город</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isCallOpen" class="modal-overlay" @click.self="closeCallModal">
        <div class="modal call-modal">
          <div class="modal-header">
            <h2 class="modal-title">Заказать звонок</h2>
            <button class="modal-close" @click="closeCallModal">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="call-form">
            <div class="form-group">
              <label class="form-label">ФИО*</label>
              <input
                  v-model="callForm.name"
                  class="form-input"
                  placeholder="Иван Иванов Иванович"
                  type="text"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Телефон*</label>
              <input
                  v-model="callForm.phone"
                  class="form-input"
                  placeholder="+7 (906) 412-75-45"
                  type="tel"
              />
            </div>

            <div class="form-group">
              <label class="form-label">E-mail*</label>
              <input
                  v-model="callForm.email"
                  class="form-input"
                  placeholder="ivanovivan@gmail.com"
                  type="email"
              />
            </div>

            <button class="btn-submit" @click="submitCallForm">Отправить</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>



<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  list-style: none;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}

.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  padding: 0;
  margin-left: auto;
}

.burger-btn span {
  display: block;
  width: 26px;
  height: 2px;
  background: #191919;
  border-radius: 2px;
}

.city-select {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0 0 0;
}

.city-select button {
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}

.city-select button img:nth-child(1) {
  padding: 0 4px 0 0;
}

.group-call {
  display: flex;
  flex-direction: row;
  gap: 32px;
}

.number {
  font-weight: bold;
  font-size: 16px;
}

.call {
  cursor: pointer;
  color: #191919;
  font-size: 16px;
  border-bottom: 1px solid #191919;
}

.search-bar {
  padding: 20px 0 0 0;
}

.logo {
  padding: 0 24px 0 0;
}

.search-blok {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.input-search {
  width: 634px;
  height: 61px;
  padding-left: 35px;
  background-image: url("/images/header/search.svg");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 16px 16px;
  border: 1px solid gray;
  border-radius: 5px;
}

.svgmenu {
  filter: brightness(0) saturate(100%) invert(100%);
  margin: 0 40px 0 20px;
}

.strelka {
  filter: brightness(0) saturate(100%) invert(100%);
  margin: 0 0 0 15px;
}

.btn-catalog {
  color: white;
  width: 199px;
  height: 64px;
  background: #424242;
  display: flex;
  align-items: center;
  margin: 0 24px 0 0;
  border-radius: 5px;
}

.btn-serch {
  width: 128px;
  height: 59px;
  background: #333333;
  color: white;
  font-size: 16px;
  border-radius: 5px;
}

.btn-favorites {
  margin: 0 0 0 31px;
}

.btn-favorites,
.btn-basket,
.btn-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 32px 0 0;
  color: black;
}

.btn-fbl {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navigition-bar {
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: row;
}

.navigition-bar a {
  color: #000;
  font-size: 16px;
  margin: 0 32px 0 0;
  display: flex;
  align-items: center;
}

.navigition-bar a:hover {
  border-bottom: 2px solid gray;
}

@media (max-width: 1024px) {
  .input-search {
    width: 100%;
    flex: 1;
  }
  .btn-catalog {
    width: auto;
    padding: 0 16px;
    height: 56px;
  }
  .svgmenu {
    margin: 0 12px 0 12px;
  }
  .strelka {
    display: none;
  }
  .btn-serch {
    width: 100px;
    height: 56px;
  }
  .btn-favorites,
  .btn-basket,
  .btn-login {
    padding: 5px 16px 0 0;
  }
  .btn-favorites {
    margin: 0 0 0 16px;
  }
  .navigition-bar {
    flex-wrap: wrap;
    gap: 8px 20px;
  }
  .navigition-bar a {
    margin: 0;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .city-select {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .group-call {
    gap: 16px;
    flex-wrap: wrap;
  }
  .number,
  .call {
    font-size: 14px;
  }
  .search-bar {
    padding: 12px 0 0 0;
  }
  .search-blok {
    flex-wrap: wrap;
    gap: 10px;
  }
  .logo {
    padding: 0;
  }
  .logo img {
    height: 38px;
    width: auto;
  }
  .burger-btn {
    display: flex;
  }
  .btn-catalog {
    order: 4;
    width: 100%;
    height: 48px;
    margin: 0;
    justify-content: center;
  }
  .svgmenu {
    margin: 0 8px 0 0;
  }
  .input-search {
    order: 5;
    width: 100%;
    height: 44px;
    font-size: 14px;
  }
  .btn-serch {
    order: 6;
    width: 100%;
    height: 44px;
  }
  .btn-fbl {
    display: none;
  }
  .navigition-bar {
    display: none;
    flex-direction: column;
    width: 100%;
    margin: 12px 0 0 0;
    padding: 12px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    gap: 0;
  }
  .navigition-bar.navigition-bar--open {
    display: flex;
  }
  .navigition-bar a {
    width: 100%;
    margin: 0;
    padding: 12px 0;
    font-size: 15px;
    border-bottom: 1px solid #f0f0f0;
  }
  .navigition-bar a:last-child {
    border-bottom: none;
  }
  .navigition-bar a:hover {
    border-bottom: 1px solid #f0f0f0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  .number {
    font-size: 13px;
  }
  .call {
    font-size: 13px;
  }
  .select-city {
    font-size: 14px;
  }
  .logo img {
    height: 32px;
  }
}
</style>

<style>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 340px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1.5px solid #e0d8f8;
}

.call-modal {
  max-width: 420px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 14px;
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a2233;
  letter-spacing: -0.2px;
}

.modal-close {
  width: 28px;
  height: 28px;
  border: none;
  background: #f0f4f8;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7a90;
  transition: background 0.15s, color 0.15s;
}

.modal-close:hover {
  background: #e0e8f0;
  color: #1a2233;
}

.modal-search {
  padding: 0 16px 10px;
}

.search-wrapper {
  position: relative;
  border: 1.5px solid #c8d8f0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.search-wrapper:focus-within {
  border-color: #7c5ce4;
}

.search-input {
  width: 100%;
  padding: 9px 36px 9px 14px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #1a2233;
  background: transparent;
}

.search-input::placeholder {
  color: #aab4c0;
}

.search-chevron,
.search-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.search-clear {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
}

.city-list {
  max-height: 260px;
  overflow-y: auto;
  padding: 4px 0;
  border-top: 1px solid #f0f4f8;
  border-bottom: 1px solid #f0f4f8;
}

.city-list::-webkit-scrollbar {
  width: 4px;
}

.city-list::-webkit-scrollbar-thumb {
  background: #dce4ed;
  border-radius: 4px;
}

.city-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 20px;
  cursor: pointer;
  transition: background 0.12s;
  user-select: none;
}

.city-item:hover {
  background: #f7f4ff;
}

.city-item.active {
  background: #f3f0ff;
}

.city-item input[type="radio"] {
  display: none;
}

.radio-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #c0cad8;
  flex-shrink: 0;
  transition: border-color 0.15s;
  position: relative;
}

.city-item.active .radio-dot {
  border-color: #7c5ce4;
}

.city-item.active .radio-dot::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: #7c5ce4;
}

.city-name {
  font-size: 14px;
  color: #1a2233;
}

.city-item.active .city-name {
  font-weight: 500;
}

.no-results {
  padding: 16px 20px;
  font-size: 13px;
  color: #8a9ab0;
}

.modal-footer {
  padding: 14px 16px 18px;
}

.btn-confirm {
  width: 100%;
  padding: 13px;
  background: #1a2233;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, transform 0.1s;
}

.btn-confirm:hover {
  background: #2d3a50;
}

.btn-confirm:active {
  transform: scale(0.98);
}

.call-form {
  padding: 0 20px 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #1a2233;
  margin-bottom: 4px;
}

.form-input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #c8d8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #1a2233;
  outline: none;
  transition: border-color 0.15s;
  background: #fafbfc;
}

.form-input:focus {
  border-color: #7c5ce4;
  background: #fff;
}

.form-input::placeholder {
  color: #aab4c0;
}

.btn-submit {
  width: 100%;
  padding: 13px;
  background: black;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, transform 0.1s;
  margin-top: 8px;
}

.btn-submit:hover {
  background: #333333;
}

.btn-submit:active {
  transform: scale(0.98);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal,
.fade-leave-active .modal {
  transition: transform 0.2s ease;
}

.fade-enter-from .modal,
.fade-leave-to .modal {
  transform: scale(0.95) translateY(8px);
}

@media (max-width: 480px) {
  .modal {
    max-width: 100%;
    border-radius: 12px;
  }
  .call-modal {
    max-width: 100%;
  }
  .modal-overlay {
    padding: 12px;
  }
  .modal-title {
    font-size: 16px;
  }
  .city-list {
    max-height: 220px;
  }
  .form-input {
    font-size: 16px;
  }
  .search-input {
    font-size: 16px;
  }
}
</style>