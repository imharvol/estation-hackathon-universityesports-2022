<script context="module">
  export async function load({ props, fetch }) {
    const response = await fetch('/games.json')

    return {
      status: response.status,
      props: {
        ...props,
        games: response.ok && (await response.json())['games']
      }
    }
  }
</script>

<script>
  import { browser } from '$app/env'
  import { page } from '$app/stores'

  export let errors = {}

  export let teams = []
  export let games = []

  let filteredTeams = teams
  $: {
    filteredTeams = teams.filter(
      (team) =>
        team.name.toLowerCase().includes(normalizedQuery) ||
        team.game.toLowerCase().includes(normalizedQuery) ||
        team.notes.toLowerCase().includes(normalizedQuery)
    )
  }

  let showAddTeam = false

  let query = $page.url.searchParams.get('q') ?? ''
  $: normalizedQuery = query?.normalize()?.toLowerCase() ?? ''

  if (browser && $page.url.searchParams.get('_method')) history.pushState(null, null, '/teams')
</script>

<head>
  <title>Equipos | ESTATION</title>
</head>

<main>
  <div class="add-button flex-container" on:click={() => (showAddTeam = !showAddTeam)}>
    <img src="/icons/bx-x.svg" alt="signo x" class="add-button-icon" hidden={!showAddTeam} />
    <img
      src="/icons/bx-list-plus.svg"
      alt="signo mas"
      class="add-button-icon"
      hidden={showAddTeam}
    />
    Añadir equipo
  </div>

  {#if showAddTeam}
    {#if Object.entries(errors).length > 0}{JSON.stringify(errors)}{/if}
    <form class="add-team-form" action="" method="post">
      <label for="nameInput">Nombre del equipo:</label>
      <input name="name" type="text" id="nameInput" placeholder="Nombre" required />

      <label for="gameInput">Juego del equipo:</label>
      <select name="game" id="gameInput" required>
        {#each games as game}
          <option value={game.name}>{game.name}</option>
        {/each}
      </select>

      <label for="creationDateInput">Fecha creación:</label>
      <input type="date" id="creationDateInput" name="creationDate" />

      <label for="notesInput">Notas:</label>
      <textarea id="notesInput" name="notes" />

      <input type="submit" value="Crear equipo" />
    </form>
  {/if}

  <hr />

  <div class="search-container">
    <form method="get" action="">
      <input type="text" name="q" placeholder="Busqueda ..." bind:value={query} />
      <input type="submit" class="search-button" value="Buscar" />
    </form>
  </div>

  <div class="teams-container">
    {#each filteredTeams as team}
      <div class="team-container">
        <span class="team-name">{team.name}</span>
        <span class="team-game">{team.game}</span>
        {#if team.creationDate}
          <span class="team-creationdate">
            Creado en: {new Date(team.creationDate).toLocaleDateString()}
          </span>
        {/if}
        {#if team.notes}
          <span class="team-notes">Notas: {team.notes}</span>
        {/if}
        <form method="post" action="?_method=DELETE">
          <input type="number" name="id" value={team.id} hidden />
          <input type="submit" value="Eliminar equipo" />
        </form>
      </div>
    {/each}
  </div>
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  hr {
    color: white;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  main {
    width: 80vw;
    margin: auto;
    padding-top: 1rem;
  }

  .add-button {
    font-size: 1.5rem;
    background-color: white;
    color: #78c892;
    width: fit-content;
    border-radius: 0.5rem;
    padding: 0.3rem;
  }
  .add-button:hover {
    cursor: pointer;
  }
  .add-button-icon {
    height: 2rem;
  }

  .add-team-form {
    padding: 0.8rem;
    background-color: white;
    color: #78c892;
    margin: 1rem 0 1rem 0;
    border-radius: 0.5rem;
  }
  .add-team-form > * {
    display: block;
  }

  .team-container {
    background-color: #78c892;
    color: white;
    margin: 0.5rem 0 0.5rem 0;
    font-size: large;
    padding: 0.5rem;
  }
  .team-name {
    font-weight: bold;
    font-size: larger;
    display: block;
  }
  .team-game {
    display: block;
  }
  .team-creationdate {
    display: block;
  }
  .team-notes {
  }
</style>
