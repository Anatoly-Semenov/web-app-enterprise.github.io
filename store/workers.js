export const state = () => ({
  workers: {
    best: [
      {
        id: 1,
        status: "РАБОТНИК ГОДА",
        name: "name",
        img: "",
        percent: "98"
      },
      {
        id: 2,
        status: "РАБОТНИК МЕСЯЦА",
        name: "name",
        img: "",
        percent: "98"
      },
      {
        id: 3,
        status: "ХУДШИЙ РАБОТНИК ГОДА",
        name: "name",
        img: "",
        percent: "98"
      },
      {
        id: 4,
        status: "ХУДШИЙ РАБОТНИК МЕСЯЦА",
        name: "name",
        img: "",
        percent: "98"
      }
    ]
  }
});

export const mutations = () => ({});

export const actions = () => ({});

export const getters = () => ({
  getBestWorkers(state) {
    return state.workers.best;
  }
});
