<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}:
          </h3>
        </div>
        <div class="col text-right d-flex justify-content-end">
          <div class="form-group mb-0">
            <base-input
              placeholder="Найти сотрудника"
              class="input-group-alternative mb-0"
              alternative=""
              addon-right-icon="fas fa-search"
              :model="search"
            >
            </base-input>
          </div>
          <base-button
            class="ml-100"
            type="primary"
            size="sm"
            @click="modal = true"
            >{{ position }}</base-button
          >
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="design"
        :exist="user"
      >
        <template slot="columns">
          <th>Аватар</th>
          <th>Имя</th>
          <th>Профессия</th>
          <th>Обязанности</th>
          <th>Возраст</th>
          <th></th>
        </template>

        <template slot-scope="{ row }" v-if="user">
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
                <button class="dropdown-item" @click="user = !user">
                  Удалить
                </button>
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
      modal: false,
      user: true,
      search: "",
      design: [
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Дизайнер интерфейсов",
          duties: "Разработка дизайна ios приложений",
          statusType: "info",
          age: 19
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Дизайнер интерфейсов",
          duties: "Разработка дизайна web-проектов",
          statusType: "info",
          age: 25
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Дизайннер по упаковке",
          duties: "Упаковка цифровых продкутов",
          statusType: "info",
          age: 20
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Ведущий дизайнер",
          duties: "Контроль отдела дизайна",
          statusType: "success",
          age: 19
        }
      ]
    };
  },
  computed: {
    // Функция фильтрации и вывода массива с объектами сотрудников
    // userList: function() {
    //   return this.design.filter(function(item) {
    //     return item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
    //   });
    // }
  },
  methods: {
    getPeople() {
      this.axios.get("https://randomuser.me/api/?results=4").then(response => {
        this.design[0].img = response.data.results[0].picture.thumbnail;
        this.design[1].img = response.data.results[1].picture.thumbnail;
        this.design[2].img = response.data.results[2].picture.thumbnail;
        this.design[3].img = response.data.results[3].picture.thumbnail;
        this.design[0].name =
          response.data.results[0].name.first +
          " " +
          response.data.results[0].name.last;

        this.design[1].name =
          response.data.results[1].name.first +
          " " +
          response.data.results[1].name.last;

        this.design[2].name =
          response.data.results[2].name.first +
          " " +
          response.data.results[2].name.last;

        this.design[3].name =
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
