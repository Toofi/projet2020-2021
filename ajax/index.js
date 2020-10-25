// // request.setRequestHeader('Cookie', 'POESESSID=52615fa99ef26f7a9ef96bb8bfd81c3b')
//   // http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi
//   // http://localhost:8888/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi

//   // POESESSID :"52615fa99ef26f7a9ef96bb8bfd81c3b"

let promise = async () => { 
  let response = await fetch('http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi', {
  method: "GET"});
  let data = await response.json();
  console.log(data);
  };

promise();