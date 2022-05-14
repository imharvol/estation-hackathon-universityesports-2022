<script>
  export let staff = []
</script>

<head>
  <title>Personal</title>
</head>

<a href="/staff/add">Añadir personal</a>

{#if staff.length > 0}
  <div class="flex-container">
    {#each staff as person}
      <div class="flex-item flex-container">
        <div>
          <img
            class="person-photo"
            src="/staff/photo/{person.id}"
            alt="photo of {person.name} {person.surname}"
          />
        </div>
        <div class="person-attributes">
          <div class="person-attribute name">Nombre: <a href="/staff/{person.id}">{person.name} {person.surname}</a></div>
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
{:else}
  <span>No hay staff</span>
{/if}

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
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
