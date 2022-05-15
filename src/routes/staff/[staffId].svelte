<script>
  export let person = {}

  // Calculate age
  const birthyear = new Date(person.birthdate).getFullYear()
  let age = new Date(Date.now()).getFullYear() - birthyear
  if (
    new Date(Date.now()).getMonth() < new Date(person.birthdate).getMonth() ||
    (new Date(Date.now()).getMonth() == new Date(person.birthdate).getMonth() &&
      new Date(Date.now()).getDate() < new Date(person.birthdate).getDate())
  )
    age--
</script>

<head>
  <title>{person.name} {person.surname} | ESTATION</title>
</head>

<main>
  <div class="person-data flex-container">
    <div class="person-photo-container">
      <img
        class="person-photo"
        src="/staff/photo/{person.id}"
        alt="foto de {person.name} {person.surname}"
      />
    </div>
    <div class="person-data">
      <div class="person-attribute">
        Nombre: {person.name}
      </div>
      <div class="person-attribute">
        Apellidos: {person.surname}
      </div>
      <div class="person-attribute">
        Año de nacimiento: {birthyear} ({age} años)
      </div>
      <div class="person-attribute">
        Rol: {person.role}
      </div>
    </div>
  </div>

  <div class="reports-container">
    <h1>Informes</h1>
    <hr />
  </div>
</main>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  main {
    width: 80%;
    margin: 1rem auto auto auto;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .person-photo-container {
    text-align: center;
  }
  .person-photo {
    max-height: 30vmin;
    max-width: 30vmin;
    border-radius: 50%;
  }

  .person-data {
    padding: 1rem;
    background-color: #78c892;
    border-radius: 1rem;
    font-size: x-large;
  }

  h1 {
    margin: 0;
  }
  hr {
    color: white;
  }

  .reports-container {
    margin-top: 2rem;
  }
</style>
