<template>
  <div style="height:90vh">
    <md-content class="md-elevation-24" style="height:90vh;border-radius:5px">
      <div class="row h-100 no-gutters justify-content-center">
        <div class="col-12 justify-content-center align-items-center mb-5" style="height:50%">
          <div class="d-flex justify-content-center pt-5" style="height:100%">
            <img src="../assets/dylan-image.jpg" alt="Picture of Dylan" style="height:100%;border:8px solid black;border-radius:5px" class="dylan-image" />
          </div>
        </div>
        <div class="col-12">
          <md-list style="text-align:center">
            <md-list-item
              href="#"
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
                <md-icon>person_outline</md-icon>
                <span class="md-list-item-text">About</span>
            </md-list-item>
            <md-list-item 
              href="#"
              v-scroll-to="{
                el: '#work-experience',
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
                <md-icon>business_center</md-icon>
                <span class="md-list-item-text">Work Experience</span>
            </md-list-item>
            <md-list-item 
              href="#"
              v-scroll-to="{
                el: '#leadership-experience',
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
                <md-icon>campaign</md-icon>
                <span class="md-list-item-text">Leadership Experience</span>
            </md-list-item>
            <md-list-item
              href="#"
              v-scroll-to="{
                el: '#projects',
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
                <md-icon>architecture</md-icon>
                <span class="md-list-item-text">Projects</span>
            </md-list-item>
            <md-list-item href="https://www.linkedin.com/in/dylan-skelly/">
              <md-icon style="margin-top:-20px" :md-src="require('../assets/linkedin-logo.svg')"></md-icon>
              <span class="md-list-item-text">LinkedIn</span>
            </md-list-item>
            <md-list-item href="https://github.com/Dylans123">
              <md-icon style="margin-top:-20px" :md-src="require('../assets/github-logo.svg')"></md-icon>
              <span class="md-list-item-text">Github</span>
            </md-list-item>
            <md-list-item href="mailto:dylanskelly@knights.ucf.edu">
              <md-icon style="margin-top:-20px;color:black" :md-src="require('../assets/envelope.svg')"></md-icon>
              <span class="md-list-item-text">Email</span>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
  .dylan-image {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }

  .md-list-item-text {
    font-weight: bold;
  }

  .md-icon {
    color: black !important;
    fill: var(--md-theme-default-icon-on-background, rgba(0,0,0)) !important;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 45px 15px 0px rgba(0,0,0,0.2);
      transform: translatey(-10px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
  }
</style>