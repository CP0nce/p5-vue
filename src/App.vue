<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-marron shadow-lg p-3">
        <div class="container-fluid ">
            <a class="navbar-brand text-title" href="#"><img src="./assets/logo.png"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active text-custom2" > <router-link to="/HomeView">Home </router-link></a>
                </li>

                    <li class="nav-item">
                        <a class="nav-link active text-custom2" > <router-link to="/ShopView">Shop </router-link> </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <router-view/>
</template>

<script>

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
