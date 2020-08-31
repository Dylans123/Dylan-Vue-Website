<template>
  <div style="height:90vh">
    <md-content class="md-elevation-24 md-scrollbar" style="height:90vh;overflow-y:auto;border-radius:5px" id="content-holder">
      <div style="height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center">
        <div class="mb-5" style="font-size:70px;font-weight:bold">
          <span>Hey, I'm Dylan Skelly!</span>
        </div>
        <div style="font-size:50px;font-weight:bold">
          Glad your here!
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-center"
        style="height:5vh"
        v-scroll-to="{
          el: '#about',
          container: '#content-holder',
          duration: 500,
          easing: 'linear',
          offset: -200,
          force: true,
          cancelable: true,
          onStart: onStart,
          onDone: onDone,
          onCancel: onCancel,
          x: false,
          y: true
        }">
        <md-icon class="md-size-3x text-center scroll-down-arrow">expand_more</md-icon>
      </div>
      <div id="about"></div>
      <div style="height:90vh"></div>
      <div id="work-experience">
        Work Experience
      </div>
      <div style="height:90vh"></div>
      <div id="leadership-experience">
        Leadership Experience
      </div>
      <div style="height:90vh"></div>
      <div id="projects">
        Projects
      </div>
      <div style="height:90vh"></div>
    </md-content>
  </div>
</template>
<script>
export default {
  name: 'ContentHolder'
}
</script>

<style>
  .scroll-down-arrow {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
</style>