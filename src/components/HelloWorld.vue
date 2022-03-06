<template>
    <div class="container">
      <div class="row mx-md-5 ">
        <div class="col px-md-5">
          <!-- Columna izquierda superior -->
          <div class="p-3 ">
            <h3 class="">WELCOME TO NEODANCE STUDIO
            </h3>
            <p class="fs-4 p-3">This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
            <p class="fs-4 p-3">You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
            <p class="fs-4 p-3">If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
            <p class="fs-4 p-3">Want an easier solution for a Free Website? Head straight to Wix and immediately start customizing your website! Wix is an online website builder with a simple drag & drop interface, meaning you do the work online and instantly publish to the web. Nothing to download, nothing to upload. All Wix templates are fully customizable and free to use. Just pick one you like, click Edit, and enter the online editor. Change, add, and remove items as you like. Wix also offers a ton of free design elements right inside the editor, like images, icons, animation files, and interactive widgets. Publish your Free Website in minutes!</p>
          </div>
        </div>
        <div class="col px-md-5">
          <!-- Columna derecha superior -->
          <div class="p-3 shadow">
            <img src="../assets/jumping.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    
    <div class='carrusel'>
      <CarruselItem/>
    </div>

    <div class="container gap-3">
      <div class="row">
      <div class="col-7 p-3 ">
        <h3>ACTUACIONES RECIENTES</h3>
        <div class="row">
          <div class="col-md-5 p-3">
            <img src="../assets/video-swanLake.jpg" class="img-fluid">
            <p>THIS IS JUST A PLACE HOLDER. <br>2023</p>
          </div>
          <div class="col-md-5 p-3">
            <img src="../assets/video-img1.webp" class="img-fluid">
            <p>THIS IS JUST A PLACE HOLDER. <br>2023</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 p-3">
            <img src="../assets/video-img2.webp" class="img-fluid">
            <p>THIS IS JUST A PLACE HOLDER. <br>2023</p>
          </div>
          <div class="col-md-5 p-3">
            <img src="../assets/video-img3.webp" class="img-fluid">
            <p>THIS IS JUST A PLACE HOLDER. <br>2023</p>
          </div>
        </div>
      </div>
      <!-- Fin de la columna -->
      <div class="col-5 p-3 ">
        <h3>THIS IS JUST A PLACE HOLDER. !</h3>
        <div class="row">
          <div class="col">
            <p >June 4-8 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 3 to 5 </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p >June 11-15 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 6 to 10 </p>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col">
            <p >June 18-22 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 11 to 13 </p>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col">
            <p >June 26-29 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 14 to 16 </p>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col">
            <p >May 2-6 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 17 to 18 </p>
          </div>
        </div>
        <!-- end row -->
        <div class="row">
          <div class="col">
            <p >May 9-13 <br>8am- 5pm</p>
          </div>
          <div class="col">
            <a href="#" class="text-custom2">This is just a place holder, so you can see what the site would look like.</a>
            <p>Ages 18 to 21 </p>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <div class='footer'>
      <footerItem/> 
    </div>
  </div>
</template>

<script>
import CarruselItem from "@/components/CarruselItem.vue";
import footerItem from '@/components/footerItem.vue';

export default {
  name: 'HelloWorld',
  components: {
    CarruselItem,
    footerItem

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
