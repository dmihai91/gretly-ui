<template>
  <div>
    <div class="container page-container">
      <h2 class="title">Courses</h2>
      <hr />
      <h3 class="my-5">What do you want to learn today?</h3>
      <h4>Web essentials</h4>
      <hr />
      <div class="row mb-5">
        <div class="col-md-4">
          <BaseCard :shadow="true" class="card-project">
            <div class="text-center p-4">
              <img class="img-fluid rounded-circle shadow" src="img/demo-course-category.png" style="width: 100px" />
              <h4 class="card-title my-3">HTML</h4>
              <p class="card-description">
                The HyperText Markup Language, or HTML is the standard markup language for documents designed to be
                displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and
                scripting languages such as JavaScript.
              </p>
            </div>
            <h5 class="text-center">50000 students</h5>
          </BaseCard>
        </div>
        <div class="col-md-4">
          <BaseCard :shadow="true" class="card-project">
            <div class="text-center p-4">
              <img class="img-fluid rounded-circle shadow" src="img/demo-course-category.png" style="width: 100px" />
              <h4 class="card-title my-3">CSS</h4>
              <p class="card-description">
                The HyperText Markup Language, or HTML is the standard markup language for documents designed to be
                displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and
                scripting languages such as JavaScript.
              </p>
            </div>
            <h5 class="text-center">50000 students</h5>
          </BaseCard>
        </div>
        <div class="col-md-4">
          <BaseCard :shadow="true" class="card-project">
            <div class="text-center p-4">
              <img class="img-fluid rounded-circle shadow" src="img/demo-course-category.png" style="width: 100px" />
              <h4 class="card-title my-3">Javascript</h4>
              <p class="card-description">
                The HyperText Markup Language, or HTML is the standard markup language for documents designed to be
                displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and
                scripting languages such as JavaScript.
              </p>
            </div>
            <h5 class="text-center">50000 students</h5>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
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
}
</style>
