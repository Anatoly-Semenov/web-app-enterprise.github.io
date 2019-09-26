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
        :data="system"
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
      :show.sync="modal"
      gradient="danger"
      modal-classes="modal-danger modal-dialog-centered"
      size="big"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">
        Как они администрирую наши проекты ?
      </h6>

      <div class="py-3 text-center">
        <i class="ni ni-settings 55 ni-3x"></i>
        <h4 class="heading mt-4">Системные Админстраторы</h4>
        <p>
          Настоящий Сис. Админ должен знать:
          <br /><br />
          Основы локальных сетей (протоколы, сетевое оборудование, принципы
          построения сетей)
          <br /><br />
          Основы администрирования локальных сетей под управлением различных
          операционных систем (Windows, Linux, Unix) - в зависимости от
          потребностей компании
          <br /><br />
          Основы технического обслуживания и ремонта персонального компьютера.
          Системный администратор должен уметь находить причину неисправности
          персонального компьютера, сервера, должен знать технические
          характеристики различных процессоров, материнских плат, винчестеров,
          операционной памяти, мониторов. Должен иметь представление о
          совместимости оборудования различных типов и производителей между
          собой. Знать основы электроники - уметь определить неисправность
          принтера, ксерокса, монитора и осуществлять несложный ремонт. Должен
          уметь определить, в каком случае причина неисправности в оборудовании,
          а в каком - в программном обеспечении
          <br /><br />
          Основы информационной безопасности. Это понятие включает в себя защиту
          информации, находящейся на персональных компьютерах и серверах
          локальной сети предприятия от несанкционированного доступа,
          умышленного искажения и повреждения. В это же понятие включается
          осуществление антивирусной защиты локальной сети и отдельных
          компьютеров от вирусных атак, всякого рода троянских программ,
          вредоносных макросов и программных закладок
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
      people: null,
      peopleOne: null,
      peopleTwo: null,
      peopleThree: null,
      system: [
        {
          img:
            "https://ae01.alicdn.com/kf/HTB1eoh9fTmWBKNjSZFBq6xxUFXaV.jpg_q50.jpg",
          name: "aaaaaa",
          position: "Системный администратор",
          duties: "Администрирование",
          statusType: "danger",
          age: 26
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "Наталья",
          position: "Системный администратор",
          duties: "Администрирование",
          statusType: "danger",
          age: 30
        },
        {
          img: "img/theme/bootstrap.jpg",
          name: "asd",
          position: "Системный администратор",
          duties: "Администрирование",
          statusType: "danger",
          age: 48
        }
      ]
    };
  },
  methods: {
    getPeople() {
      this.axios.get("https://randomuser.me/api/?results=3").then(response => {
        this.system[0].img = response.data.results[0].picture.thumbnail;
        this.system[1].img = response.data.results[1].picture.thumbnail;
        this.system[2].img = response.data.results[2].picture.thumbnail;
        this.system[0].name =
          response.data.results[0].name.first +
          " " +
          response.data.results[0].name.last;
        this.system[1].name =
          response.data.results[1].name.first +
          " " +
          response.data.results[1].name.last;
        this.system[2].name =
          response.data.results[2].name.first +
          " " +
          response.data.results[2].name.last;
      });
    }
  },
  created() {
    this.getPeople();
  }
};
</script>
<style></style>
