// // request.setRequestHeader('Cookie', 'POESESSID=52615fa99ef26f7a9ef96bb8bfd81c3b')
//   // http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi
//   // http://localhost:8888/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi

//   // POESESSID :"52615fa99ef26f7a9ef96bb8bfd81c3b"

export var tabsNumber;

export let initFetch = async () => { 
  let response = await fetch('http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=1&accountName=Toofi', {
  method: "GET"});
  let data = await response.json();
  console.log(data);
  return data;
  };

export let getAllItems = async () => {
  let tabs = await initFetch();
  let allItems = [];
  tabsNumber = tabs.tabs.length
  for (let i = 0; i < tabsNumber; i++){
    let grab = await fetch(`http://eteinsetrallume.com/api-stash/index.php?league=heist&tab=1&tabIndex=${i}&accountName=Toofi`, {
      method: "GET"});
    let grabJson = await grab.json();
    console.log(grabJson);
    allItems = allItems.concat(grabJson.items);

  }
  console.log(allItems);
};

