const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
// name y blog son clases cambiar por .
const one = document.querySelector('.location');
//no utlizar $ ni numeros como comienzo de caracter de una variable
// se agrega la clase .location en html

// agregar async
async function displayUser(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  //devolver respuesta en formato json
  console.log(data);
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  one.textContent = `${data.location}`;
  //eliminar ' y agregar `
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);