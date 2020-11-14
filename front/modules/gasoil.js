export let fetchGasoil = () => { fetch('http://localhost:3000/api/gasoil/', { method: 'GET' })
  .then((response) =>{
    console.log(response);
    response.text().then((text) => {
      console.log(text);
    });
  })
};