<script>
  import { loop_guard } from 'svelte/internal'
</script>

<head>
  <title>Inicio | ESTATION</title>
</head>

<main>
  <h1>Bienvenido de vuelta</h1>

  <img src="/logo.png" alt="logo de estation" />

  <ul>
    <li><strong>Personal</strong>: Administra tus empleados, sus datos, perfiles y demás</li>
    <li>
      <strong>Informes</strong>: Crea y analiza los informes junto con las personas y equipos
      relacionados
    </li>
    <li><strong>Equipos</strong>: Administra los diferentes equipos dentro de tu club</li>
    <li><strong>Partidos</strong>: Haz un seguimiento de los partidos de tus equipos</li>
  </ul>
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
  }

  main {
    text-align: center;
    width: 60vw;
    margin-inline: auto;
  }

  h1 {
    font-size: 8vmin;
    color: #78c892;
    font-weight: bold;
  }
</style>
