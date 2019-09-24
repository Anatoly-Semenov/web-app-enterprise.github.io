<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}:
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">{{position}}</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="system">
        <template slot="columns">
          <th>Аватар</th>
          <th>Имя</th>
          <th>Профессия</th>
          <th>Обязанности</th>
          <th>Возраст</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <slot name="icon">
          <span class="avatar avatar-sm rounded-circle">
            <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg">
          </span>
            </slot>
          </th>
          <td class="budget">
            {{row.name}}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.position}}</span>
            </badge>
          </td>
          <td>
            {{row.duties}}
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.age}} лет</span>
              <div>
                <base-progress :type="row.statusType"
                               :show-percentage="false"
                               class="pt-0"
                               :value="row.age"/>
              </div>
            </div>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String,
      position: String,
    },
    data() {
      return {
        people: [],
        system: [
          {
            img: 'img/theme/bootstrap.jpg',
            name: 'Наталья',
            position: 'Системный администратор',
            duties: 'Администрирование',
            statusType: 'danger',
            age: 26
          },
          {
            img: 'img/theme/bootstrap.jpg',
            name: 'Наталья',
            position: 'Системный администратор',
            duties: 'Администрирование',
            statusType: 'danger',
            age: 30
          },
          {
            img: 'img/theme/bootstrap.jpg',
            name: 'asd',
            position: 'Системный администратор',
            duties: 'Администрирование',
            statusType: 'danger',
            age: 48
          }
        ]
      }
    },
    methods: {
      getPeople() {
        this.axios.get('https://randomuser.me/api/?results=').then((response) =>
        this.people = response.data.results)
      }
      //this.person.name.first + '' + this.person.name.last
    },
    created() {
     this.getPeople
     console.log(this.people)
    }
  }
</script>
<style>
</style>
