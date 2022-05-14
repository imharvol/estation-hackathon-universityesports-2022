<script>
  export let errors = {}
</script>

<head>
  <title>Acceso</title>
</head>

<main>
  <form method="post" action="">
    {JSON.stringify(errors)}
    <input type="text" placeholder="Nombre de usuario" />
    <input type="password" placeholder="Contraseña" />
    <input type="submit" value="Iniciar sesión" />
  </form>
</main>

<style>
</style>
