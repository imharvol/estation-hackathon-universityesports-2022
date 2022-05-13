<nav>
  <a href="/">Hackathon University Esports</a>
</nav>

<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  * {
    font-family: 'Bebas Neue', cursive;
  }

  nav {
    width: 100%;
    background-color: #233142;
    color: #f95959;
    padding: 0.5rem;
  }

  nav > a {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    text-decoration: none;
    color: #f95959;
  }
</style>
