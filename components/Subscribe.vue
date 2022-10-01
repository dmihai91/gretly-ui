<template>
  <div class="newsletter-subscribe d-flex">
    <BaseCard class="col-12">
      <form id="newsletter-form" @submit.prevent="joinNewsletter">
        <h4 class="mb-3">Join our newsletter</h4>
        <p>You'll send you updates, special offers and planned changes..</p>
        <div class="row">
          <div class="col-8">
            <BaseInput type="email" placeholder="Enter your email" v-model="email" :required="true" />
          </div>
          <div class="col-4">
            <BaseButton nativeType="submit" type="primary" class="mx-3">Join</BaseButton>
          </div>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Subscribe',
  data() {
    return {
      email: null,
    };
  },
  methods: {
    joinNewsletter(evt) {
      console.log(evt);
    },
  },
});
</script>

<style lang="scss" scoped>
.newsletter-subscribe {
  padding: 5px 0;

  input {
    padding: 9px;
  }

  a.btn {
    padding: 12px 20px;
    color: #fff;
  }

  .card {
    box-shadow: 2px 4px 13px -4px #bfbfbf;
  }
}
</style>
