<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="modal = true">{{
            position
          }}</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="backend"
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
                <img alt="Image placeholder" :src="row.img" />
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

    <modal
      size="big"
      :show.sync="modal"
      gradient="danger"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">
        Кто же такие Backend разработчики ?
      </h6>

      <div class="py-3 text-center">
        <i class="ni ni-world-2 55 ni-3x"></i>
        <h4 class="heading mt-4">Backend</h4>
        <p>
          Back-end разработчики несут ответственность за создание "серверной"
          части в веб-приложениях, иначе говоря, они имеют дело со всем, что
          относится к программно-административной части веб-приложения,
          внутреннему содержанию системы, серверным технологиям — базам данных,
          архитектуре, программной логике.
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
      modal: false,
      backend: [
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Junior Backend-developer",
          duties: "Разработка Backend для landing page",
          statusType: "danger",
          age: 57
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Middle Backend-developer",
          duties: "Разработка API интернет-магазинов",
          statusType: "info",
          age: 38
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Middle Backend-developer",
          duties: "Разработка API интернет-магазинов",
          statusType: "info",
          age: 40
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Senior Backend-developer",
          duties: "Разработка API для CRM-системы",
          statusType: "success",
          age: 29
        }
      ]
    };
  },
  methods: {
    getPeople() {
      this.axios.get("https://randomuser.me/api/?results=4").then(response => {
        this.backend[0].img = response.data.results[0].picture.thumbnail;
        this.backend[1].img = response.data.results[1].picture.thumbnail;
        this.backend[2].img = response.data.results[2].picture.thumbnail;
        this.backend[3].img = response.data.results[3].picture.thumbnail;
        this.backend[0].name =
          response.data.results[0].name.first +
          " " +
          response.data.results[0].name.last;

        this.backend[1].name =
          response.data.results[1].name.first +
          " " +
          response.data.results[1].name.last;

        this.backend[2].name =
          response.data.results[2].name.first +
          " " +
          response.data.results[2].name.last;

        this.backend[3].name =
          response.data.results[3].name.first +
          " " +
          response.data.results[3].name.last;
      });
    }
  },
  created() {
    this.getPeople();
  }
};
</script>
<style></style>
