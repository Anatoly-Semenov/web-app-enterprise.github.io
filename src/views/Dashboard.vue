<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Работник года"
                                type="gradient-red"
                                sub-title="Иван Иванович"
                                icon="img/theme/team-4-800x800.jpg"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 98.48%</span>
                            <span class="text-nowrap">Принес компании</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Работник месяца"
                                type="gradient-orange"
                                sub-title="Наталья Натальевна"
                                icon="img/theme/team-4-800x800.jpg"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Принес компании</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Худший работник года"
                                type="gradient-green"
                                sub-title="Генадий Генадиевич"
                                icon="img/theme/team-4-800x800.jpg"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 50.72%</span>
                            <span class="text-nowrap">Забрал у компании</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Худший работник месяца"
                                type="gradient-info"
                                sub-title="Сергей Сергеевич"
                                icon="img/theme/team-4-800x800.jpg"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 10.18%</span>
                            <span class="text-nowrap">Забрал у компании</span>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <card type="default" header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-light text-uppercase ls-1 mb-1">График</h6>
                                <h5 class="h3 text-white mb-0">Возраста сотрудников</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 0}"
                                           @click.prevent="initBigChart(0)">
                                            <span class="d-none d-md-block">Взрослые</span>
                                            <span class="d-md-none">M</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: bigLineChart.activeIndex === 1}"
                                           @click.prevent="initBigChart(1)">
                                            <span class="d-none d-md-block">Молодые</span>
                                            <span class="d-md-none">W</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                :height="350"
                                ref="bigChart"
                                :chart-data="bigLineChart.chartData"
                                :extra-options="bigLineChart.extraOptions"
                        >
                        </line-chart>

                    </card>
                </div>

                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">Продажи</h6>
                                <h5 class="h3 mb-0">За последние пол года</h5>
                            </div>
                        </div>

                        <bar-chart
                                :height="350"
                                ref="barChart"
                                :chart-data="redBarChart.chartData"
                        >
                        </bar-chart>
                    </card>
                </div>
            </div>
            <!-- End charts-->

            <!--Tables-->
            <div class="row mt--40">
                <tabs class="col">
                    <tab-pane title="Дизайнеры">
                        <projects-table-ui-ux title="Таблица учета" position="Дизайнеры" />
                    </tab-pane>
                    <tab-pane title="Frontend">
                        <projects-table-frontend title="Таблица учета" position="Frontend" />
                    </tab-pane>
                    <tab-pane title="Backend">
                        <projects-table-backend title="Таблица учета" position="Backend" />
                    </tab-pane>
                    <tab-pane title="Тестеровщики">
                        <projects-table-testers title="Таблица учета" position="Тестеровщики" />
                    </tab-pane>
                    <tab-pane title="Системные администраторы">
                        <projects-table-system title="Таблица учета" position="Системные администраторы" />
                    </tab-pane>
                </tabs>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import ProjectsTableUiUx from './Tables/ProjectsTableUiUX';
  import ProjectsTableFrontend from './Tables/ProjectsTableFrontend';
  import ProjectsTableBackend from './Tables/ProjectsTableBackend';
  import ProjectsTableTesters from './Tables/ProjectsTableTesters';
  import ProjectsTableSystem from './Tables/ProjectsTableSystem'


  export default {
    components: {
      LineChart,
      BarChart,
      ProjectsTableUiUx,
      ProjectsTableFrontend,
      ProjectsTableBackend,
      ProjectsTableTesters,
      ProjectsTableSystem,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Июль', 'Аугст', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [{
              label: 'Продаж',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Возраст',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['Май', 'Июнь', 'Июль', 'Аугст', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
