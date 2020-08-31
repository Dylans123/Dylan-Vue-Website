<template>
  <div style="height:90vh">
    <md-content class="md-elevation-24 md-scrollbar p-3" style="height:90vh;overflow-y:auto;border-radius:5px" id="content-holder">
      <div style="height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center">
        <div class="mb-5" style="font-size:70px;font-weight:bold">
          <span>Hey, I'm Dylan Skelly!</span>
        </div>
        <div style="font-size:50px;font-weight:bold">
          Glad your here!
        </div>
      </div>
      <div
        class="w-100 d-flex justify-content-center mb-5"
        style="height:10vh"
        v-scroll-to="{
          el: '#about',
          container: '#content-holder',
          duration: 500,
          easing: 'linear',
          offset: -30,
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
      <div>
        <div class="mb-5" style="font-size:50px;font-weight:bold;text-decoration:underline">
          About me
        </div>
        <div class="d-flex justify-content-between" style="flex-direction:column;height:75vh">
          <div style="font-size:20px;font-weight:bold">
            I'm an undergraduate at the University of Central Florida and am currently
            a Software Engineering Intern at Constant Contact. I'm also the Treasurer / Web Team
            lead for Knight Hacks, my school's yearly hackathon and year round software development club.
            I'm passionate about learning new things and finding creative solutions to problems.
            Computer science serves as an excellent medium to do that. 
          </div>
          <div style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">School</span><br/>
            University of Central Florida
          </div>
          <div style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Major</span><br/>
            Computer Science with a minor in Philosophy
          </div>
          <div style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Expected Graduation</span><br/>
            May 2022
          </div>
          <div style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Awards / Honors</span><br/>
            <div class="d-flex" style="flex-wrap:wrap">
              <h4 class="m-1"><span class="badge badge-secondary">President's Honor Roll Certificate (Three Semesters)</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Dean's List (Six Semesters)</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Florida Academic Scholar</span></h4>
            </div>
          </div>
          <div class="mb-3" style="font-size:20px;font-weight:bold;text-decoration:underline">
            Programming Languages
            <div class="d-flex" style="flex-wrap:wrap">
              <h4 class="m-1"><span class="badge badge-secondary">Java</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">C#</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">JavaScript</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">SQL</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">PHP</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Dart</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Python</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">C</span></h4>
            </div>
          </div>
          <div class="mb-5" style="font-size:20px;font-weight:bold;text-decoration:underline">
            Technologies / Frameworks
            <div class="d-flex" style="flex-wrap:wrap">
              <h4 class="m-1"><span class="badge badge-secondary">Node</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">React</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Vue</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">JQuery</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Redux</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Flutter</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">React Native</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Express</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Android</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">MongoDB</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">MySQL</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">PostgresSQL</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Docker</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">.Net</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Visual Studio</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">GCP</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Azure</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">HTML</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">CSS</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">SCSS</span></h4>
              <h4 class="m-1"><span class="badge badge-secondary">Git</span></h4>
            </div>
          </div>
        </div>
      </div>
      <div id="work-experience"></div>
      <div style="height:90vh">
        <div style="font-size:50px;font-weight:bold;text-decoration:underline">
          Work Experience
        </div>
      </div>
      <div id="leadership-experience"></div>
      <div style="height:90vh">
        <div style="font-size:50px;font-weight:bold;text-decoration:underline">
          Leadership Experience
        </div>
      </div>
      <div id="projects"></div>
      <div style="height:90vh">
        <div style="font-size:50px;font-weight:bold;text-decoration:underline">
          Projects
        </div>
      </div>
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
    cursor: pointer;
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