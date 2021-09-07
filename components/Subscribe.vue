<template>
  <div class="newsletter-subscribe my-4 d-flex justify-content-center">
    <BaseCard class="col-md-8 col-lg-5">
      <form id="newsletter-form" @submit.prevent="joinNewsletter">
        <h4 class="mb-3">Join our newsletter</h4>
        <p>Get news about the latest courses we upload</p>
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
}
</style>
