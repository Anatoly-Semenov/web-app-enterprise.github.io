<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Привет Иван</h1>
            <p class="text-white mt-0 mb-5">
              Это старница для заполнения данных твоего профиля. Заполни все
              графы и можешь приступать к работе.
            </p>
            <a href="#" class="btn btn-info">Заполнить профиль</a>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="https://ae01.alicdn.com/kf/HTB1eoh9fTmWBKNjSZFBq6xxUFXaV.jpg_q50.jpg"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <base-button size="sm" type="info" class="mr-4"
                  >Опции</base-button
                >
                <base-button size="sm" type="default" class="float-right"
                  >Сообщения</base-button
                >
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  {{ model.firstName }} {{ model.lastName
                  }}<span class="font-weight-light">, {{ model.age }}</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Россия, Краснодар
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Teamlead
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>Управление командой
                  разработчиков
                </div>
                <hr class="my-4" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid exercitationem harum iure? At consequuntur, distinctio
                  dolorem et exercitationem harum illo labore maxime nostrum
                  omnis quam quas sed soluta suscipit, tempora.
                </p>
                <a href="#">Больше информации</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Мой аккаунт</h3>
                </div>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Настройки</a>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">
                  ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="имя пользователя"
                        placeholder="имя пользователя"
                        input-classes="form-control-alternative"
                        :model="model.username"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Адрес электронной почты"
                        placeholder="jesse@example.com"
                        input-classes="form-control-alternative"
                        :model="model.email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Имя"
                        placeholder="Иван"
                        input-classes="form-control-alternative"
                        :model="model.firstName"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Фамилия"
                        placeholder="Иванович"
                        input-classes="form-control-alternative"
                        :model="model.lastName"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">КОНТАКТЫ</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative=""
                        label="Адрес"
                        placeholder="Адрес"
                        input-classes="form-control-alternative"
                        :model="model.address"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="город"
                        placeholder="Москва"
                        input-classes="form-control-alternative"
                        :model="model.city"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Страна"
                        placeholder="Россия"
                        input-classes="form-control-alternative"
                        :model="model.country"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Почтовый индекс"
                        placeholder="000000"
                        input-classes="form-control-alternative"
                        :model="model.zipCode"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">ОБО МНЕ</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input alternative="" label="Текст обо мне">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                      >
Текст обо мне</textarea
                      >
                    </base-input>
                  </div>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-profile",
  data() {
    return {
      model: {
        username: "",
        email: "",
        age: "27",
        firstName: "Иван ",
        lastName: "Иванович",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid exercitationem harum iure? At consequuntur, distinctio dolorem et exercitationem harum illo labore maxime nostrum omnis quam quas sed soluta suscipit, tempora."
      }
    };
  }
};
</script>
<style></style>
