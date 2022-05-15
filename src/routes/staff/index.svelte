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

<a href="/staff/add">Añadir personal</a>

<div class="search-container">
  <form method="get" action="">
    <input type="text" name="q" placeholder="Busqueda ..." bind:value={query} />
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

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  .search-container {
    width: 80vw;
    margin: auto;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
