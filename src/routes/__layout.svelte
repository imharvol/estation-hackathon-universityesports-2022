<head>
  <script src="/boxicons.js"></script>
</head>

<nav class="flex-container">
  <a href="/" class="flex-container brand">
    <img class="logo-image" src="/logo.png" alt="estation logo" />
    <span class="brand-name"><span class="green">E</span>STATION</span>
  </a>

  <a href="/staff" class="link flex-container">
    <img src="/icons/bxs-user.svg" alt="icono de personal" class="link-icon" />
    Personal
  </a>

  <a href="/reports" class="link flex-container">
    <img src="/icons/bxs-report.svg" alt="icono de informes" class="link-icon" />
    Informes
  </a>

  <a href="/teams" class="link flex-container">
    <img src="/icons/bx-sitemap.svg" alt="icono de teams" class="link-icon" />
    Equipos
  </a>

  <a href="/matches" class="link flex-container">
    <img src="/icons/bx-play.svg" alt="icono de teams" class="link-icon" />
    Partidos
  </a>
</nav>

<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  nav {
    font-family: 'Bebas Neue', cursive;
    width: 100%;
    background-color: #233142;
    color: white;
    padding: 0.5rem;
  }

  .brand {
    margin-right: 5rem;
  }

  nav > a {
    margin: 0 2rem 0 2rem;
    padding: 0;
    font-size: 3rem;
    text-decoration: none;
    color: white;
  }

  .logo-image {
    height: 4rem;
  }
  .brand-name {
    margin-left: 1rem;
  }
  .green {
    color: #78c892;
  }

  .link {
    text-decoration: underline;
  }
  .link-icon {
    height: 3rem;
  }
</style>
