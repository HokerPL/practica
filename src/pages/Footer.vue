<script setup>

import router from "@/router/index.js";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="podval">
        <div class="a-btn-footer">
          <div class="block1">
            <router-link to="Catalog">Каталог</router-link>
            <router-link to="BrendsPage">Бренды</router-link>
            <a href="/">Статьи</a>
          </div>
          <div class="block2">
            <p>Компания</p>
            <a href="/">О компании</a>
            <a href="/">Лицензии</a>
            <a href="/">Вопросы и ответы</a>
            <a href="/">Контакты</a>
          </div>
          <div class="block3">
            <p>Информация</p>
            <a href="/">Реквизиты</a>
            <a href="/">Политика</a>
            <a href="/">Обзоры</a>
            <a href="/">Статьи и новости</a>
          </div>
          <div class="block4">
            <p>Каталог</p>
            <a href="/">Доставка</a>
            <a href="/">Вопрос-ответ</a>
            <router-link to="PartherPage">Партнёрам</router-link>
            <router-link to="TenderZapros">Пригласить в тендер</router-link>
          </div>
        </div>
        <div class="right-info">
          <div class="btn-tender">
            <router-link to="/TenderZapros" custom v-slot="{ navigate }">
              <button @click="navigate">Запросить для тендера</button>
            </router-link>
          </div>
          <div class="phonenumber">
            <p>8-800-777-5000</p>
          </div>
          <div class="time-rabota">
            <p>График работы:</p>
            <p>Пн-Пт с 8:00 до 18:00</p>
          </div>
          <div class="social-icon">
            <p>Социальные сети:</p>
            <div class="icons">
              <img src="/images/footer/icons8-instagram-48.png" alt="" width="32" height="32" />
              <img src="/images/footer/icons8-facebook-50.png" alt="" width="32" height="32">
              <img src="/images/footer/icons8-vk-50.png" alt="" width="32" height="32">
              <img src="/images/footer/icons8-youtube-50.png" alt="" width="32" height="32">
            </div>
          </div>
        </div>
      </div>
      <div class="prava-medical">
        <p>2022 © ООО "Название компании". Интернет-магазин медицинских товаров. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Montserrat, arial, sans-serif;
}
a {
  text-decoration: none;
  list-style: none;
}
button {
  cursor: pointer;
}
.container {
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  padding: 0 15px;
}
.footer {
  background: #333333;
  min-height: 350px;
}
.podval {
  display: flex;
  justify-content: center;
  min-height: 320px;
}
.a-btn-footer {
  display: flex;
  flex-wrap: wrap;
  a {
    list-style: none;
    text-decoration: none;
  }
}
.block1 , .block2, .block3, .block4 {
  display: flex;
  flex-direction: column;
  color: white;
  gap: 16px;
  padding: 32px 60px 40px 0;
}
.a-btn-footer a:visited {
  color: white;
}
.btn-tender button {
  width: 268px;
  height: 48px;
  background: white;
  color: black;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  line-height: 16px;
  margin: 32px 0 24px 0;
}
.phonenumber {
  color: white;
  line-height: 150%;
  font-weight: bold;
  padding: 0 0 24px 0;
}
.time-rabota {
  color: white;
  padding: 0 0 24px 0;
  p:nth-child(1) {
    padding: 0 0 4px 0;
  }
}
.social-icon {
  color: white;

}
.icons {
  display: flex;
  gap: 12px;
  padding: 10px 0 0 0;

}
.icons img {
  border: 2px solid white;
  border-radius: 50%;
  background: white;
}
.icons img:hover {
  border: 2px solid white;
  cursor: pointer;
  background: white;
  border-radius: 50px;
  padding: 4px;
}
.prava-medical {
  color: white;
  padding: 0 0 20px 0;
}

@media (max-width: 1024px) {
  .podval {
    flex-direction: column;
    align-items: flex-start;
  }
  .a-btn-footer {
    width: 100%;
    justify-content: space-between;
  }
  .block1, .block2, .block3, .block4 {
    padding: 32px 30px 20px 0;
  }
  .right-info {
    width: 100%;
    padding: 0 0 24px 0;
  }
  .btn-tender button {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 768px) {
  .footer {
    height: auto;
  }
  .a-btn-footer {
    flex-wrap: wrap;
    gap: 0;
  }
  .block1, .block2, .block3, .block4 {
    width: 50%;
    padding: 24px 16px 16px 0;
    gap: 12px;
  }
  .block1 a, .block2 a, .block3 a, .block4 a,
  .block2 p, .block3 p, .block4 p {
    font-size: 14px;
  }
  .btn-tender button {
    width: 100%;
    max-width: none;
    margin: 16px 0 20px 0;
  }
  .phonenumber p {
    font-size: 18px;
  }
  .prava-medical p {
    font-size: 13px;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .block1, .block2, .block3, .block4 {
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid #4a4a4a;
  }
  .block4 {
    border-bottom: none;
  }
  .icons img {
    width: 28px;
    height: 28px;
  }
}
</style>