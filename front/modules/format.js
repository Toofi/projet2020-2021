export let formatDate = (date) => {
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export let dateTimeFormat = (date) => {
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 
}

export let formatData = (data) => {
  let stockObj = {
    stockDates: [],
    stockLevels: []
  }
  stockObj.stockDates = data.map(element => formatDate(new Date(Date.parse(element.stock_date))));
  stockObj.stockLevels = data.map(element => element.stock_level);
  return stockObj;
};
