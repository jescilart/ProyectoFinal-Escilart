//ESTE CÓDIGO LO PUSE APARTE PORQUE CUANDO ESTABA EN EL OTRO ARCHIVO NO FUNCIONABA, PERO POR SEPARADO SI FUNCIONA.

// PARA OBTENER LA COTIZACION DE 1 USD A  $ARS
// UTILICÉ LA SIGUIENTE API:  https://apilayer.com/marketplace/exchangerates_data-api


let myHeaders = new Headers();
myHeaders.append("apikey", "dqICFJwXi3t9ZAcib8C12DV1AWE8ilM7");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=ars&from=usd&amount=1", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result);
    const responseObj = JSON.parse(result);
    console.log(responseObj);
    const cambioOficial = responseObj.result;
    console.log(cambioOficial);
    let cotizacion = document.getElementById("cotizacion");
    cotizacion.textContent = cambioOficial.toFixed(2);
    console.log(cambioOficial); 
  })
  .catch(error => console.log('error', error));