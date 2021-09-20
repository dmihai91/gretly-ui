<template>
  <div class="col-md-6 col-lg-4">
    <BaseCard :shadow="true" class="card-project">
      <div class="text-center p-4">
        <img class="img-fluid rounded-circle shadow" src="img/demo-course-category.png" style="width: 100px" />
        <h4 class="card-title my-3">HTML</h4>
        <p class="card-description">
          The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed
          in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting
          languages such as JavaScript.
        </p>
        <div class="d-flex justify-content-evenly mb-2">
          <span class="mr-2"><i class="fa fa-video-camera text-primary"></i></span>Introduction
          <span class="ml-auto">15:00</span>
        </div>
        <div class="d-flex justify-content-evenly mb-2">
          <span class="mr-2"><i class="fa fa-video-camera text-primary"></i></span>HTML tags
          <span class="ml-auto">30:00</span>
        </div>
        <hr />
        <h4 class="text-center">6 hours of videos</h4>
      </div>
      <h5 class="text-center">50000 students enrolled</h5>
      <div class="btn-wrapper text-center my-3">
        <BaseButton type="success">Join</BaseButton>
      </div>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
