<script setup>
import { reactive } from 'vue'

const stats = [
  { value: '25 лет', label: 'На рынке России' },
  { value: '10 000+', label: 'Довольных клиентов' },
  { value: '5 000+', label: 'Паллетомест склада' },
  { value: '5 000+', label: 'Паллетомест склада' },
]

const fields = [
  { name: 'name', placeholder: 'Имя*' },
  { name: 'phone', placeholder: 'Телефон*', type: 'tel' },
  { name: 'email', placeholder: 'E-mail*', type: 'email' },
  { name: 'companyInn', placeholder: 'ИНН компании*' },
  { name: 'customerInn', placeholder: 'ИНН заказчика*' },
]

const form = reactive({
  name: '',
  phone: '',
  email: '',
  companyInn: '',
  customerInn: '',
  consent: false,
})

function submit() {
  console.log('Form submitted:', form)
}

function cancel() {
  Object.keys(form).forEach(k => {
    form[k] = typeof form[k] === 'boolean' ? false : ''
  })
}
</script>
<template>
  <section>
    <div class="page">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-link">Главная</router-link>
          <span class="breadcrumb__sep">›</span>
          <span>Запросить для тендера</span>
        </nav>
        <div class="content">
          <div class="left">
            <h1 class="title">Запросить для тендера</h1>
            <p class="description">
              Дополнительно к главному офису мы предлагаем воспользоваться нашими
              представительствами в других регионах РФ, а так же воспользоваться
              возможностью вывоза напрямую с наших складов. Наши специалисты
              окажут Вам квалифицированную помощь в выборе товара, а также
              предложат самое оптимальное решение Ваших задач!
            </p>

            <div class="stats">
              <div class="stat-card" v-for="stat in stats" :key="stat.value">
                <div class="stat-icon"></div>
                <div class="stat-info">
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-block">
            <h2 class="form-title">Оформить запрос</h2>
            <div class="form">
              <input
                  v-for="field in fields"
                  :key="field.name"
                  v-model="form[field.name]"
                  :placeholder="field.placeholder"
                  class="input"
                  :type="field.type || 'text'"
              />

              <label class="checkbox-label">
                <input type="checkbox" v-model="form.consent" class="checkbox" />
                <span>Я согласен на обработку персональных данных</span>
              </label>

              <div class="form-actions">
                <button class="btn btn--primary" @click="submit">Отправить</button>
                <button class="btn btn--secondary" @click="cancel">Отменить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>



<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  list-style: none;
  color: black;
}
button {
  cursor: pointer;
}

.page {
  width: 100%;

  background: #fff;
  font-family: Arial, sans-serif;
  padding: 32px 0 60px;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
  font-family: Montserrat, Arial, sans-serif;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
  margin-bottom: 28px;
}

.breadcrumb__sep {
  color: #999;
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 80px;
}

.left {
  flex: 1;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  line-height: 1.15;
}

.description {
  font-size: 16px;
  color: #333;
  line-height: 1.7;
  width: 635px;
  margin-bottom: 36px;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 460px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px 20px;
}

.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e8e8e8;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  color: #111;
  line-height: 1.2;
}

.stat-label {
  font-size: 12px;
  color: #777;
  margin-top: 2px;
}

.form-block {
  width: 520px;
  flex-shrink: 0;
}

.form-title {
  font-size: 22px;
  font-weight: 700;
  color: #111;
  text-align: center;
  margin-bottom: 24px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input {
  width: 100%;
  height: 44px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 14px;
  font-size: 14px;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
}

.input::placeholder {
  color: #aaa;
}

.input:focus {
  border-color: #888;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  margin-top: 4px;
}

.checkbox {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: #111;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.btn {
  flex: 1;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.85;
}

.btn--primary {
  background: #111;
  color: #fff;
}

.btn--secondary {
  background: #fff;
  color: #111;
  border: 1px solid #ccc;
}

@media (max-width: 1024px) {
  .content {
    gap: 40px;
  }
  .title {
    font-size: 32px;
  }
  .description {
    width: 100%;
    max-width: 600px;
  }
  .form-block {
    width: 380px;
  }
}

@media (max-width: 768px) {
  .page {
    padding: 20px 0 40px;
  }
  .breadcrumb {
    font-size: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .content {
    flex-direction: column;
    gap: 32px;
  }
  .title {
    font-size: 26px;
    margin-bottom: 16px;
  }
  .description {
    font-size: 14px;
    width: 100%;
    margin-bottom: 24px;
  }
  .stats {
    max-width: none;
    grid-template-columns: 1fr 1fr;
  }
  .stat-value {
    font-size: 16px;
  }
  .form-block {
    width: 100%;
  }
  .form-title {
    font-size: 18px;
    margin-bottom: 18px;
  }
  .form-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 22px;
  }
  .stats {
    grid-template-columns: 1fr;
  }
  .input {
    font-size: 16px;
  }
  .checkbox-label {
    font-size: 12px;
  }
}
</style>