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
        <div class="col text-right">
          <base-button type="primary" size="sm">{{ position }}</base-button>
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
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>

    <!--    <div class="card-footer d-flex justify-content-end"-->
    <!--         :class="type === 'dark' ? 'bg-transparent': ''">-->
    <!--      <base-pagination total="30"></base-pagination>-->
    <!--    </div>-->
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
  },
  methods: {
    getPeople() {
      this.axios.get("https://randomuser.me/api/?results=5").then(response => {
        this.frontend[0].img = response.data.results[0].picture.thumbnail;
        this.frontend[1].img = response.data.results[1].picture.thumbnail;
        this.frontend[2].img = response.data.results[2].picture.thumbnail;
        this.frontend[3].img = response.data.results[3].picture.thumbnail;
        this.frontend[4].img = response.data.results[4].picture.thumbnail;
        this.frontend[0].name =
          response.data.results[0].name.first +
          " " +
          response.data.results[0].name.last;

        this.frontend[1].name =
          response.data.results[1].name.first +
          " " +
          response.data.results[1].name.last;

        this.frontend[2].name =
          response.data.results[2].name.first +
          " " +
          response.data.results[2].name.last;

        this.frontend[3].name =
          response.data.results[3].name.first +
          " " +
          response.data.results[3].name.last;

        this.frontend[4].name =
          response.data.results[4].name.first +
          " " +
          response.data.results[4].name.last;
      });
    }
  },
  created() {
    this.getPeople();
  }
};
</script>
<style></style>
