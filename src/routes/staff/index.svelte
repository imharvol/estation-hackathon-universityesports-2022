<script>
  import { page } from '$app/stores'

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
        <div class="flex-item flex-container">
          <div>
            <img
              class="person-photo"
              src="/staff/photo/{person.id}"
              alt="photo of {person.name} {person.surname}"
            />
          </div>
          <div class="person-attributes">
            <div class="person-attribute name">
              Nombre: <a href="/staff/{person.id}">{person.name} {person.surname}</a>
            </div>
            <div class="person-attribute email">
              Email: <a href="mailto:{person.email}">{person.email}</a>
            </div>
            <div class="person-attribute rol">
              Rol: {person.role}
            </div>
          </div>
        </div>
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

  .flex-item {
    background-color: #f95959;
    border-radius: 0.5rem;
    font-size: x-large;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  .person-photo {
    height: 8vh;
    max-width: 8vh;
    border-radius: 50%;
  }
  .person-attributes {
    margin-left: 1rem;
  }
  .person-attribute {
    display: block;
  }
</style>
