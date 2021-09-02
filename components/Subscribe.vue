<template>
  <div class="newsletter-subscribe my-md d-flex justify-content-center">
    <BaseCard class="col-sm-6">
      <form id="newsletter-form" @submit.prevent="joinNewsletter">
        <h5 class="mb-3">Join our newsletter</h5>
        <div class="row">
          <div class="col-sm-8">
            <BaseInput type="email" placeholder="Enter your email" v-model="email" :required="true" />
          </div>
          <div class="col-sm-4">
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
  position: relative;
  top: 4.5rem;
  padding: 30px 0;

  input {
    padding: 9px;
  }

  a.btn {
    padding: 12px 20px;
    color: #fff;
  }
}
</style>
