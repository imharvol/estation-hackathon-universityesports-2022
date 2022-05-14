<script>
  export let errors = {}
</script>

<head>
  <title>Registro</title>
</head>

<main>
  <form method="post" action="">
    {JSON.stringify(errors)}
    <input type="text" name="username" placeholder="Nombre de usuario" />
    <input type="password" name="password" placeholder="Contraseña" />
    <input type="password" name="passwordConfirmation" placeholder="Confirma tu contraseña" />
    <input type="submit" value="Crear cuenta" />
  </form>
</main>

<style>
</style>
