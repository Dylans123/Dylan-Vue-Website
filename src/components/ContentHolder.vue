<template>
  <div class="outer-content-container">
    <md-content class="md-elevation-24 md-scrollbar p-3 inner-content-container" id="content-holder">
      <div style="height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
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
        <div class="mb-3" style="font-size:50px;font-weight:bold;text-decoration:underline">
          About me
        </div>
        <div class="d-flex justify-content-between" style="flex-direction:column;">
          <div class="my-1" style="font-size:20px;font-weight:bold">
            I'm an undergraduate at the University of Central Florida and am currently
            a Software Engineering Intern at Microsoft. I'm also the former Treasurer and President 
            for Knight Hacks, my school's yearly hackathon and year round software development club.
            I'm passionate about learning new things and finding creative solutions to problems.
            Computer science serves as an excellent medium to do that. 
          </div>
          <div class="my-1" style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">School</span><br/>
            University of Central Florida
          </div>
          <div class="my-1" style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Major</span><br/>
            Computer Science with a minor in Philosophy
          </div>
          <div class="my-1" style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Expected Graduation</span><br/>
            May 2022
          </div>
          <div class="my-1" style="font-size:20px;font-weight:bold">
            <span style="text-decoration:underline">Awards / Honors</span><br/>
            <div class="d-flex" style="flex-wrap:wrap;white-space:normal">
              <h4 class="m-1"><span class="badge badge-black">President's Honor Roll Certificate (Three Semesters)</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Dean's List (Six Semesters)</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Florida Academic Scholar</span></h4>
            </div>
          </div>
          <div class="mb-3" style="font-size:20px;font-weight:bold;text-decoration:underline">
            Programming Languages
            <div class="d-flex" style="flex-wrap:wrap">
              <h4 class="m-1"><span class="badge badge-black">Java</span></h4>
              <h4 class="m-1"><span class="badge badge-black">C#</span></h4>
              <h4 class="m-1"><span class="badge badge-black">JavaScript</span></h4>
              <h4 class="m-1"><span class="badge badge-black">SQL</span></h4>
              <h4 class="m-1"><span class="badge badge-black">PHP</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Dart</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Python</span></h4>
              <h4 class="m-1"><span class="badge badge-black">C</span></h4>
              <h4 class="m-1"><span class="badge badge-black">C++</span></h4>
            </div>
          </div>
          <div class="mb-5" style="font-size:20px;font-weight:bold;text-decoration:underline">
            Technologies / Frameworks
            <div class="d-flex" style="flex-wrap:wrap">
              <h4 class="m-1"><span class="badge badge-black">Node</span></h4>
              <h4 class="m-1"><span class="badge badge-black">React</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Vue</span></h4>
              <h4 class="m-1"><span class="badge badge-black">JQuery</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Redux</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Flutter</span></h4>
              <h4 class="m-1"><span class="badge badge-black">React Native</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Express</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Android</span></h4>
              <h4 class="m-1"><span class="badge badge-black">MongoDB</span></h4>
              <h4 class="m-1"><span class="badge badge-black">MySQL</span></h4>
              <h4 class="m-1"><span class="badge badge-black">PostgresSQL</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Docker</span></h4>
              <h4 class="m-1"><span class="badge badge-black">.Net</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Visual Studio</span></h4>
              <h4 class="m-1"><span class="badge badge-black">GCP</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Azure</span></h4>
              <h4 class="m-1"><span class="badge badge-black">HTML</span></h4>
              <h4 class="m-1"><span class="badge badge-black">CSS</span></h4>
              <h4 class="m-1"><span class="badge badge-black">SCSS</span></h4>
              <h4 class="m-1"><span class="badge badge-black">Git</span></h4>
            </div>
          </div>
        </div>
      </div>
      <div id="work-experience"></div>
      <div>
        <div class="mb-5" style="font-size:50px;font-weight:bold;text-decoration:underline">
          Work Experience
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/microsoft-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Microsoft<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Currently interning on the Commercial Orders team working primarily with Azure, Azure Logic Apps, C# and Azure Resource Management (ARM) Templates.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/hubspot-logo.svg" style="height:auto;width:100%" alt="HubSpot Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, HubSpot<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              -	Assisted Structured Content Editing team on developing product used by 95,000+ customers across over 12 different apps.<br/>
              -	Developed caching solution with React, JavaScript and Jest that reduce data loaded on page by up to 50% and improved load time.<br/>
              -	Wrote over 5,000 lines of production code that expanded the functionality and greatly improved the usability of my team’s product.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/constant-contact-logo.jpg" style="height:auto;width:100%" alt="Constant Contact Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Constant Contact<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Collaborated with another intern on chatbot POC then demoed to heads of engineering / product resulting in project being greenlit for pilot and further development by 8-person team. Contributed using Spring Boot, React, Java, JavaScript, Jenkins, and Kubernetes.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/microsoft-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Microsoft<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Worked on Microsoft Store team to create tool for diagnosing errors when getting products from API with 10+ billion daily requests.<br/>
              − Built project as integration into two existing web apps using ASP.NET, C#, JavaScript, Azure and Visual Studio. Currently in use by 
              50+ on-call engineers and DRIs to automate error diagnosis in air-gapped and other cloud environments that was previously manual.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/mitre-logo.jpg" style="height:auto;width:100%" alt="Mitre Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, MITRE<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Built React front-end and iterated on REST API to a Mongo database for a profile dashboard that displayed user information.<br/>
              − Created system for dynamically creating concept of operations documents using React, Mongo, MinIO and HTML Canvas.<br/>
              − Built test applications in Angular, React, and Vanilla JS to test potential of deploying applications to Open Dash 360 platform.<br/>
              − Built proof of concept for a React app to record a learner result for tasks then send them to a Watershed LRS via XAPI messages.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/go-port-logo.jpg" style="height:auto;width:100%" alt="Go Port Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Go Port<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Implemented over 15 new pages for a website that sees over 500,000 customers a year by recreating the HTML, SCSS, and JQuery
              for each page to match a new design system. Changed routing on several pages using PHP to match a new model we employed.<br/>
              − Created a REST API in PHP and front end using JQuery, HTML, and SCSS for a profile settings page for admin dashboard.<br/>
              − Built 9 dynamic charts for visualizing over three years of orders by date, type, etc. to assist marketing using Chart.js, SQL and JQuery.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/gratsee-logo.png" style="height:auto;width:100%" alt="Gratsee Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Gratsee<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Developed new filter system in JavaScript and generated 4 new screens for app. Also developed admin app prototype in React.<br/>
              − Efforts allowed for successful launch of the React Native application to both the Google Play Store and the App Store.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/ocps-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Software Engineering Intern, Orange County Public Schools<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Developed programming notebook for making a Punnett square using Python, MatPlotLib, Numpy, and Jupyter Notebooks.<br/>
              − Notebook is implemented in every seventh-grade science class in district of 212,000 students as part of UCF’s Coding K12 initiative.
            </span>
          </div>
        </div>
      </div>
      <div id="leadership-experience"></div>
      <div>
        <div style="font-size:50px;font-weight:bold;text-decoration:underline">
          Leadership Experience
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/knighthacks-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Treasurer, Knight Hacks<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Preside over budget of 50,000+ dollars of corporate sponsorship to support all of the efforts of the club and hackathon.<br/>
              − Responsibilities include working with team of 4 executive board members and 7 directors to decide how funds should be spent and
              to approve purchases made throughout the organization.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/knighthacks-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              President, Knight Hacks<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Worked with 4 other executive board members to see club membership grow to all time high 75 active student members.<br/>
              − Supported planning efforts for the Knight Hacks hackathon that is planned to host over 800 students and sponsors at UCF.<br/>
              − Added an additional workshop on Mondays to give workshops on 2 technologies a week. Also added 2 supplementary meetings for
              pair programming and study groups on Saturday and Sunday so people can prepare for both their classes and technical interviews.
            </span>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-sm-4 mb-4 mb-sm-0">
            <img src="../assets/first-step-logo.png" style="height:auto;width:100%" alt="Microsoft Logo"/>
          </div>
          <div class="col-12 col-sm-8">
            <span style="font-size:20px;font-weight:bold;text-decoration:underline">
              Mentor, First Step UCF<br/>
            </span>
            <span style="font-size:16px;font-weight:bold;">
              − Organized weekly meetings on technical / professional skills like resumes, Python, Github, etc. to a group of five freshman at UCF.<br/>
              − Purpose was to increase their potential of becoming involved with an internship, undergraduate research, or other enriching experience in order to get ahead their freshman year.
            </span>
          </div>
        </div>
      </div>
      <!-- <div id="projects"></div>
      <div>
        <div class="mb-1" style="font-size:50px;font-weight:bold;text-decoration:underline">
          Projects
        </div>
        <div class="row mb-2">
          <div class="col-12 mb-4">
            <md-field>
              <label style="color:black" for="tags">Tags</label>
              <md-select v-model="selectedTags" name="tags" id="tags" multiple>
                <md-option value="node">Node</md-option>
                <md-option value="react">React</md-option>
                <md-option value="vue">Vue</md-option>
                <md-option value="javascript">JavaScript</md-option>
                <md-option value="java">Java</md-option>
                <md-option value="dart">Dart</md-option>
                <md-option value="flutter">Flutter</md-option>
                <md-option value="android">Android</md-option>
              </md-select>
            </md-field>
            <small>Add tags in order to see the projects I've done with different technologies and languages</small>
          </div>
          <div v-if="selectedTags.length > 0" class="col-12 mb-4">
            <div class="d-flex" style="flex-wrap:wrap;white-space:normal">
              <h4 v-for="selectedTag in selectedTags" :key="selectedTag" class="m-1"><span class="badge badge-black">{{ selectedTag }}</span></h4>
            </div>
          </div>
          <div v-if="selectedTags.length > 0" class="col-12">
            <CarouselProjects :projects="projects" />
          </div>
        </div>
      </div> -->
    </md-content>
  </div>
</template>
<script>
// import CarouselProjects from './CarouselProjects';
export default {
  name: 'ContentHolder',
  // components: {
  //   CarouselProjects
  // },
  data: function() {
    return {
      projects: [
        {
          key: 1,
          name: 'hello world'
        },
        {
          key: 2,
          name: 'goodbye'
        },
        {
          key: 3,
          name: 'yerrrrrrr'
        }
      ],
      selectedTags: [
        'javascript',
        'vue',
        'react'
      ],
    }
  },
}
</script>

<style>
  .scroll-down-arrow {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    cursor: pointer;
  }

  .badge {
    white-space: normal !important
  }

  .badge-black {
    background: linear-gradient(to right, #84fab0, #8fd3f4) !important;
  }

  .md-field.md-theme-default:before {
    background: linear-gradient(to right, #84fab0, #8fd3f4) !important;
  }

  .md-checkbox.md-theme-default.md-checked.md-primary .md-checkbox-container {
    background: linear-gradient(to right, #84fab0, #8fd3f4) !important; 
    border-color: #84fab0 !important;
  }

  .md-checkbox.md-theme-default.md-checked .md-checkbox-container:after {
    border-color: transparent !important;
  }

  .md-list.md-theme-default .md-selected .md-list-item-content, .md-list.md-theme-default .router-link-active .md-list-item-content {
    color: #4abcf5 !important;
  }

  .md-field {
    margin: 4px 0 0 !important;
  }

  .inner-content-container {
    height:95vh;
    overflow-y:auto;
    border-radius:5px;
  }

  .outer-content-container {
    height:95vh;
    overflow-y:auto;
    border-radius:5px;
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