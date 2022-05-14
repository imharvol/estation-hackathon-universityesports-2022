<script>
  export let errors = {}
</script>

<head>
  <title>Registro</title>
</head>

<main>
  <form method="post" action="">
    {JSON.stringify(errors)}
    <input type="text" name="name" placeholder="Nombre (opcional)" />
    <input type="text" name="username" placeholder="Nombre de usuario" required />
    <input type="email" name="email" placeholder="Correo electronico" required />

    <input type="password" name="password" placeholder="Contraseña" required />
    <input
      type="password"
      name="passwordConfirmation"
      placeholder="Confirma tu contraseña"
      required
    />

    <label for="countryInput">País:</label>
    <select name="country" id="countryInput">
      <option value="">--Selecciona un país--</option>
      <option value="spain">España</option>
      <option value="france">Francia</option>
      <option value="portugal">Portugal</option>
    </select>

    <label for="cityInput">Provincia:</label>
    <select name="provincia" id="provinciaInput">
      <option value="">--Selecciona una provincia--</option>
      <option value="alicante">Alicante</option>
      <option value="catalonia">Cataluña</option>
    </select>

    <input type="submit" value="Crear cuenta" />
  </form>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  * {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
