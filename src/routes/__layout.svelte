<nav class="flex-container">
  <a href="/" class="flex-container">
    <img class="logo-image" src="/logo.png" alt="estation logo" />
    <span class="brand-name"><span class="white">E</span>STATION</span>
  </a>
</nav>

<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .flex-container {
    display: flex;
    align-items: center;
  }

  nav {
    font-family: 'Bebas Neue', cursive;
    width: 100%;
    background-color: #233142;
    color: #78c892;
    padding: 0.5rem;
  }

  nav > a {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    text-decoration: none;
    color: #78c892;
  }

  .logo-image {
    height: 4rem;
  }
  .brand-name {
    margin-left: 1rem;
  }
  .white {
    color: white;
  }
</style>
