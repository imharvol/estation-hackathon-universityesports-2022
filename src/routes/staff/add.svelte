<script>
  import StaffCard from '$lib/StaffCard.svelte'

  export let errors = {}
  export let person = null
</script>

<head>
  <title>Añadir personal | ESTATION</title>
</head>

<main>
  <h1>Añadir persona</h1>
  {#if Object.entries(errors).length > 0}{JSON.stringify(errors)}{/if}
  <form method="post" action="" enctype="multipart/form-data" class="add-person-form">
    <label for="roleInput">Rol de la persona:</label>
    <select name="role" id="roleInput" required>
      <option value="player">Jugador</option>
      <option value="trainer">Entrenador</option>
      <option value="nutritionist">Nutricionista</option>
    </select>

    <label for="nameInput">Nombre:</label>
    <input type="text" name="name" id="nameInput" placeholder="Nombre" required />

    <label for="surnameInput">Apellidos:</label>
    <input type="text" id="surnameInput" name="surname" placeholder="Apellidos" />

    <label for="emailInput">Correo electronico:</label>
    <input type="email" id="emailInput" name="email" placeholder="Correo electronico" required />

    <label for="birthdateInput">Fecha de nacimiento:</label>
    <input type="date" id="birthdateInput" name="birthdate" />

    <label for="photoInput">Foto de perfil:</label>
    <input type="file" accept=".png,.jpg,.jpeg" name="photo" id="photoInput" />

    <input type="submit" value="Añadir al personal" />
  </form>
  {#if person}
    <h2>Nuevo perfil añadido:</h2>
    <StaffCard {person} />
  {/if}
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  main {
    width: 80vw;
    margin: auto;
  }

  input {
    border: 0.2rem black solid;
  }

  select {
    border: 0.2rem black solid;
  }

  form {
    background-color: white;
    border-radius: 1rem;
    color: #78c892;
    padding: 1rem;
  }
  form > * {
    display: block;
  }
</style>
