<template>
  <PageContent :title="$t('courses')">
    <h4 class="my-4 my-md-5 lh-2 font-weight-bold">What do you want to learn today?</h4>
    <h5>Web essentials</h5>
    <hr />
    <div class="row mb-5">
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  </PageContent>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.card-project {
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateY(0);
  min-height: 355px;
  margin-bottom: 1rem;
}
</style>
