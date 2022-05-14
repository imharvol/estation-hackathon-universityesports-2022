<script>
  export let errors = {}
</script>

<head>
  <title>Añadir personal | ESTATION</title>
</head>

<main>
  {JSON.stringify(errors)}
  <form method="post" action="" enctype="multipart/form-data">
    <label for="roleInput">Rol de la persona:</label>
    <select name="role" id="roleInput" required>
      <option value="player">Jugador</option>
      <option value="trainer">Entrenador</option>
      <option value="nutritionist">Nutricionista</option>
    </select>

    <input type="text" name="name" placeholder="Nombre" required />
    <input type="text" name="surname" placeholder="Apellidos" />

    <input type="email" name="email" placeholder="Correo electronico" required />

    <label for="birthdateInput">Fecha de nacimiento:</label>
    <input type="date" id="birthdateInput" name="birthdate" />

    <label for="photoInput">Foto</label>
    <input type="file" accept=".png,.jpg,.jpeg" name="photo" id="photoInput" />

    <input type="submit" value="Añadir al personal" />
  </form>
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    border: 0.2rem black solid;
  }
</style>
