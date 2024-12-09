const geocoding = require("./Utils/geocode");
const forecast = require("./Utils/forecast");

// console.log(process.argv);
/* to take input from command line */
const  address = process.argv[2]

if(!address){
  console.log('please provide an address');
}
else{
  geocoding(address, (error, dataGeo) => {
    if(error){
      console.log(error);
    }
    // console.log("error", error);
    // console.log(dataGeo);
  /* this is called callback chaining one callback inside another callback */
    forecast(dataGeo.latitude, dataGeo.longitude, (error, dataForecast) => {
      if(error){
        console.log(error);
      }
      // console.log("Error", error);
      // console.log("Data", dataForecast);
      console.log(dataGeo.location);
      console.log(dataForecast);
    });  
  });

}








