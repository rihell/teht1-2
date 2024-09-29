// Hae etusivudata GitHubista
fetch('https://raw.githubusercontent.com/rihell/Dig3JSON/refs/heads/master/Teht%201-2/etusivudata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (etusivudata) {
    kerroEtusivu(etusivudata);
  })
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

  function kerroEtusivu(data) {
    console.log(data);
    var teksti = "<h1>" + data.otsikko + "</h1>"; //Otsikko
    teksti += "<p>" + data.kuvaus + "</p>"; //Kuvaus
    teksti += "<p><img src='" + data.kuva + "' alt='kuva'></p>"; //Kuva
    teksti += "<h3>Opintojakso: " + data.opintojakso + " " + data.tunnus + " " + data.opintopisteet + " op</h3>"; //Opintojakso
    
    teksti += "<ul>"; // Aloita lista
    for (var i = 0; i < data.sisalto.length; i++) {
        teksti += "<li>" + data.sisalto[i] + "</li>"; //Lista totetuksen osa-alueista
    }
    teksti += "</ul>"; // Sulje lista
    
    teksti += "<h3>Linkit</h3><ul>"; // Aloita linkkilista
    for (var i = 0; i < data.tekniikat.length; i++) {
        teksti += "<li>" + data.tekniikat[i].aihe + " - <a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].linkki + "</a></li>"; //Aiheet ja linkit
    }
    teksti += "</ul>"; // Sulje linkkilista
    
    document.getElementById("vastaus").innerHTML = teksti;
}