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
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  * {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
