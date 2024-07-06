<template>
  <div class="form-div">
    <h1 class="text-gray-500 text-3xl font-extrabold">This is an about page</h1>
    <h1 class="text-gray-500 text-3xl font-extrabold">Road trip planner</h1>
    <p class="p-tags"> <span class="spans">Introduction</span> <br>
In this project, you’ll give users the opportunity to list out the destinations they want to visit, let 
users order them, and display the best route between destinations. There are many ways you can 
enhance this project and share it with friends and family. Depending on how much extra challenge 
you take on, this project should take around 20 hours.</p>
<p class="p-tags">Read the following instructions below, before implementation. 
• Your code should be optimized and easy to understand 
• Use any of the programming languages listed below to achieve the project
• HTML 
• CSS 
• Vue.js 
• Bootstrap or any CSS framework 
• Laravel/PHP 
• Mysql 
• Fully responsive interface 
Requirements  • As a user, I should be able to add destinations. I should be able to do this by using a form, 
click on a map (with an API call), or other approaches included. 
• As a user, I should be able to rearrange the order of my destinations. 
• As a user, I’d like to be able to see my destinations on a map. 
• As a user, I’d like to be able to see information about the distance and journey time 
between each destination. 
• As a user, I’d like to be able to see summary data about my entire journey. This could 
include the total time, distance and, for extra points, even the fuel needed. 
• As a user, I’d like my data to be stored in my browser’s local storage so I can navigate 
away from this page and come back with the data still there. For extra challenge: 
• Display points of interest between each destination. This can be achieved by either 
looking at popular attractions or asking the user about their interests. 
• For longer parts of the journey, suggest where users might take shortstops (i.e. hotels and 
their rates). 
• Use the dates of the road trip and suggest events of interest that are on the path. 
Suggested Implementation 
For the initial pass, you can call out to the API directly from your application. You may want to 
introduce a server to obscure your API key going forward. There are a variety of mapping 
platforms and libraries you could use to access these features. Google Map API could be helpful 
for most of the feature set but you could equally explore Open Maps and Leaflet.
Submission
The codebase should be uploaded to a Github repository and the URL shared via email by 
responding to this email. The repository must contain a README.md file describing how to 
setup/deploy the application. You may also deploy the application on a free hosting service for the 
purpose of a demo.</p>

  </div>
</template>

<script setup>



</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .p-tags{
    padding: 7px;
    color: white;
    text-align: justify;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }
  .spans{
    color: black;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 30px;
  }
}
</style>
