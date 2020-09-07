<template>
  <carousel :perPage="1">
    <template v-for="project in projects">
      <slide :key="project.key">
        <span class="label">
          {{ project.image }}
        </span>
        <span class="label">
          {{ project.name }}
        </span>
        <span class="label">
          {{ project.description }}
        </span>
        <span class="label">
          {{ project.github }}
        </span>
        <span class="label">
          {{ project.demo }}
        </span>
        <span class="label">
          {{ project.tags }}
        </span>
      </slide>
    </template>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'CarouselProjects',
  components: {
    Carousel,
    Slide
  },
  props: {
    projects: Array
  }
};
</script>

<style>

</style>