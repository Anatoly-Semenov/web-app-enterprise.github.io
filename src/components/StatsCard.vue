<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">
      <div class="col">
        <slot>
          <h5 class="card-title text-uppercase text-muted mb-0" v-if="title">
            {{ title }}
          </h5>
          <span class="h2 font-weight-bold mb-0" v-if="subTitle">{{
            subTitle
          }}</span>
        </slot>
      </div>

      <div class="col-auto">
        <slot name="icon">
          <span class="avatar avatar-sm rounded-circle">
            <img alt="Image placeholder" :src="icon" />
          </span>
        </slot>
      </div>
    </div>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer"> </slot>
    </p>
  </card>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "stats-card",
  components: {
    Card
  },
  props: {
    type: {
      type: String,
      default: "primary"
    },
    icon: String,
    title: String,
    subTitle: String,
    iconClasses: [String, Array]
  }
};
</script>
<style></style>
