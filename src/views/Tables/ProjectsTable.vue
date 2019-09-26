<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col nav">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}:
          </h3>
          <p class="btn btn-primary btn-sm ml-100">{{ position }}</p>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="frontend"
      >
        <template slot="columns">
          <th>Аватар</th>
          <th>Имя</th>
          <th>Профессия</th>
          <th>Обязанности</th>
          <th>Возраст</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <slot name="icon">
              <span class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  src="img/theme/team-4-800x800.jpg"
                />
              </span>
            </slot>
          </th>
          <td class="budget">
            {{ row.name }}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{ row.position }}</span>
            </badge>
          </td>
          <td>
            {{ row.duties }}
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{ row.age }} лет</span>
              <div>
                <base-progress
                  :type="row.statusType"
                  :show-percentage="false"
                  class="pt-0"
                  :value="row.age"
                />
              </div>
            </div>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <a
                slot="title"
                class="btn btn-sm btn-icon-only text-light"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <button class="dropdown-item">Редактировать</button>
                <button class="dropdown-item">Удалить</button>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>

    "primary" size="sm" @click="modal = true">{{ position }}
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">
        Кто же такие UI UX дизайнеры ?
      </h6>

      <div class="py-3 text-center">
        <i class="ni ni-image 55 ni-3x"></i>
        <h4 class="heading mt-4">Дизайнеры</h4>
        <p>
          UX (англ. user experience) — дословно означает «опыт пользователя». В
          более широком смысле это понятие включает в себя весь опыт, который
          получает пользователь при взаимодействии с вашим сайтом или
          приложением.
          <br /><br />
          UI (англ. user interface) переводится как «пользовательский
          интерфейс». Он может быть не только графическим, но и тактильным,
          голосовым, аудио-. Мы рассмотрим только графический интерфейс, так как
          дизайнеры в основном работают с ним.
        </p>
      </div>

      <template slot="footer">
        <base-button type="white" @click="modal = false">ОКей</base-button>
        <base-button
          type="link"
          text-color="white"
          class="ml-auto"
          @click="modal = false"
        >
          Закрыть
        </base-button>
      </template>
    </modal>
  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String
    },
    title: String,
    position: String
  },
  data() {
    return {
      frontend: [
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Junior Frontend-developer",
          duties: "Разработка landing page на jquery",
          statusType: "danger",
          age: 17
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Junior Frontend-developer",
          duties: "Разработка landing page на jquery",
          statusType: "danger",
          age: 20
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Junior Frontend-developer",
          duties: "Разработка landing page на jquery",
          statusType: "danger",
          age: 28
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Middle Frontend-developer",
          duties: "Разработка интернет-магазинов Angular",
          statusType: "info",
          age: 35
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Senior Frontend-developer",
          duties: "Разработка CRM-сиситемы на Vue.js",
          statusType: "success",
          age: 40
        }
      ]
    };
  }
};
</script>
<style></style>
