const request = new XMLHttpRequest();
function connectStashs() {
  request.open('GET', 'http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi');
  // request.withCredentials = true;
  // request.setRequestHeader('Cookie', 'POESESSID=52615fa99ef26f7a9ef96bb8bfd81c3b')

  // request.responseType = 'json';
  // POESESSID :"52615fa99ef26f7a9ef96bb8bfd81c3b"

  request.onload = function () {
    console.log("coucou");
    console.log(request)

  }
  request.onload();
  request.send()

}

connectStashs();
//utiliser elasticsearch pour la recherche ? 
//utiliser d3js pour la représentation ?