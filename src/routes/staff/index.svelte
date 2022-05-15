<script>
  import { page } from '$app/stores'
  import StaffCard from '$lib/StaffCard.svelte'

  export let staff = []

  let query = $page.url.searchParams.get('q') ?? ''

  $: roles = [...new Set(staff.map((person) => person.role))]

  let filteredStaff = staff
  $: {
    filteredStaff = staff.filter(
      (person) =>
        person.name.includes(query) ||
        person.surname.includes(query) ||
        person.email.includes(query) ||
        person.role.includes(query)
    )
  }
</script>

<head>
  <title>Personal | ESTATION</title>
</head>

<main>
  <a class="add-button flex-container" href="/staff/add">
    <img src="/icons/bx-user-plus.svg" alt="signo de +" class="add-button-icon" />
    Añadir personas
  </a>

  <div class="search-container">
    <form method="get" action="">
      <input
        type="text"
        name="q"
        placeholder="Busqueda ..."
        class="search-input"
        bind:value={query}
      />
      <input type="submit" class="search-button" value="Buscar" />
    </form>
  </div>

  <div class="results-container">
    {#if filteredStaff.length > 0}
      <div class="flex-container">
        {#each filteredStaff as person}
          <StaffCard {person} />
        {/each}
      </div>
    {:else if staff.length > 0}
      <span>No se ha encontrado a ninguna persona que cumpla la busqueda</span>
    {:else}
      <span>No hay staff <a href="/staff/add">¡añade a alguien!</a></span>
    {/if}
  </div>
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  main {
    margin-top: 1rem;
  }

  .search-container {
    width: 80vw;
    margin: auto;
    text-align: center;
  }

  .search-container * {
    font-size: xx-large;
  }

  .search-input {
    border: 0.2rem solid black;
  }

  .search-button {
    border: 0.2rem solid black;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .add-button {
    margin: 1rem auto 1rem auto;
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
</style>
