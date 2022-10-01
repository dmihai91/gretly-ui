<template>
  <nav
    class="navbar transition"
    :class="[
      { 'navbar-transparent': transparent },
      { 'navbar-expand-lg': expand },
      { [`navbar-${effect}`]: effect },
      { 'navbar-semi-transparent': semiTransparent },
      { [`bg-${type}`]: type },
      { rounded: round },
    ]"
  >
    <div class="container">
      <slot name="container-pre"></slot>
      <slot name="brand">
        <Logo class="d-lg-none" path="img/brand/blue.png" />
      </slot>
      <navbar-toggle-button :toggled="toggled" :target="contentId" @click.native.stop="toggled = !toggled" />

      <slot name="container-after"></slot>

      <div class="collapse navbar-collapse" :class="{ show: toggled }" :id="contentId" v-click-outside="closeMenu">
        <div class="navbar-collapse-header">
          <slot name="content-header" :close-menu="closeMenu"></slot>
        </div>
        <slot :close-menu="closeMenu"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Events } from '@/const/events';
import { eventBus } from '@/utils/eventBus';
import NavbarToggleButton from './NavbarToggleButton.vue';

export default Vue.extend({
  name: 'BaseNav',
  components: {
    NavbarToggleButton,
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      description: 'Navbar type (e.g default, primary etc)',
    },
    title: {
      type: String,
      default: '',
      description: 'Title of navbar',
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description: "Explicit id for the menu. By default it's a generated random number",
    },
    effect: {
      type: String,
      default: 'dark',
      description: 'Effect of the navbar (light|dark)',
    },
    round: {
      type: Boolean,
      default: false,
      description: 'Whether nav has rounded corners',
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is semi transparent',
    },
    expand: {
      type: Boolean,
      default: false,
      description: 'Whether navbar should contain `navbar-expand-lg` class',
    },
  },
  data() {
    return {
      toggled: false,
      semiTransparent: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.$nextTick(() => (this.semiTransparent = true));
      } else {
        this.$nextTick(() => (this.semiTransparent = false));
      }
    });
    eventBus.$on(Events.GLOBAL_CLOSE_MENU, () => this.closeMenu());
  },
  methods: {
    onTitleClick(evt: Event) {
      this.$emit('title-clicked', evt);
    },
    closeMenu() {
      this.toggled = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar-collapse {
  max-height: 90vh;
}

.nav-link {
  color: $white;
}
</style>
