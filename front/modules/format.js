export let formatDate = (date) => {
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

export let formatData = (data) => {
let stockObj = {
  stockDates: [],
  stockLevels: []
}
  for (let i = 0; i < data.length; i++) {
    stockObj.stockDates.push(new Date(Date.parse(data[i]['stock_date'])));
    //a factoriser dans un module de formattage !
    stockObj.stockDates[i] = formatDate(stockObj.stockDates[i]);
    stockObj.stockLevels.push(data[i]['stock_level']);
  }
  return stockObj;
};
