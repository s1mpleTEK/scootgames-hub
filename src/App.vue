<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Home</a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/fnaf-franchise">
              <a class="nav-link " href="#">
                Five Night at Freddy's franchise
              </a>
            </router-link>
            <!-- <div class="dropdown-menu">
              <router-link to="/fnaf1"><a class="dropdown-item">Five Night at Freddy's</a></router-link>
              <router-link to="/fnaf2"><a class="dropdown-item">Five Night at Freddy's 2</a></router-link>
              <router-link to="/fnaf3"><a class="dropdown-item">Five Night at Freddy's 3</a></router-link>
              <router-link to="/fnaf4"><a class="dropdown-item">Five Night at Freddy's 4</a></router-link>
              <router-link to="/fnafsl"><a class="dropdown-item">Five Night at Freddy's: Sister Location</a></router-link>
              <router-link to="/fnafworld"><a class="dropdown-item">FNAF World</a></router-link>
              <router-link to="/ffps"><a class="dropdown-item">Freddy Fazbear's Pizzeria Simulator</a></router-link>
              <router-link to="/ucn"><a class="dropdown-item">Ultimate Custom Night</a></router-link>
              <router-link to="/fnafvrhw"><a class="dropdown-item">Five Night at Freddy's VR: Help Wanted</a></router-link>
              <router-link to="/fis2"><a class="dropdown-item">Freddy in Space 2</a></router-link>
              <router-link to="/fnafsb"><a class="dropdown-item">Five Night at Freddy's Security Breach</a></router-link>
            </div> -->
          </li>
          <li class="nav-item">
            <router-link to="/other-games">
              <a class="nav-link" href="#">
                Other games
              </a>
            </router-link>
            <!-- <div class="dropdown-menu">
              <router-link to="/lof1"><a class="dropdown-item">Legacy of Flan</a></router-link>
              <router-link to="/lofonline"><a class="dropdown-item">Legacy of Flan: Online</a></router-link>
              <router-link to="/lofsoh"><a class="dropdown-item">Legacy of Flan: Storm of Hades</a></router-link>
              <router-link to="/sg"><a class="dropdown-item">Stellar Gun</a></router-link>
            </div> -->
          </li>
          <li class="nav-item dropup">
            <router-link to="/troll-games">
              <a class="nav-link" href="#">
                Troll games
              </a>
            </router-link>
            <!-- <div class="dropdown-menu">
              <router-link to="/fnaf3-tg"><a class="dropdown-item">Five Night at Freddy's 3</a></router-link>
              <router-link to="/fnafworld-he"><a class="dropdown-item">FNaF World: Halloween Edition</a></router-link>
              <router-link to="/slma"><a class="dropdown-item">Sister Location: MA</a></router-link>
              <router-link to="/ucndemo"><a class="dropdown-item">Ultimate Custom Night Demo</a></router-link>
            </div> -->
          </li>
        </ul>
      </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#nav nav{
  font-family: 'Josefin Sans', sans-serif;
}

.dropdown-menu a.dropdown-item{
  color: black;
}

/* #nav a.router-link-exact-active {
  color: red;
} */
</style>
