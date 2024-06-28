import axios from 'axios';

/**
 * Retrieves information about the food trucks from https://data.sfgov.org/resource/rqzj-sfat.json
 * Assigns a color to each truck depending on the type of food
 * Filters only status APPROVED
 */

export async function FoodTruckInfo(){
    const regex_mex = /mex|taco/;
    const regex_usa = /deli|hamb|dog|chee|americ/;
    const regex_ita = /piz/;
    const regex_ice = /ice|coff/;
    const regex_sam = /braz/;
    let result = [];

    const ftdata = await httpRequest("https://data.sfgov.org/resource/rqzj-sfat.json");
    ftdata.forEach(ft => {
        if((ft.fooditems!==undefined)&&(ft.fooditems.toLowerCase().match(regex_mex))){
            ft.color="#00ff00";
        }else if((ft.fooditems!==undefined)&&(ft.fooditems.toLowerCase().match(regex_usa))){
            ft.color="#ff0000";
        }else if((ft.fooditems!==undefined)&&(ft.fooditems.toLowerCase().match(regex_ita))){
            ft.color="#0000ff";
        }else if((ft.fooditems!==undefined)&&(ft.fooditems.toLowerCase().match(regex_ice))){
            ft.color="#ff00ff";
        }else {
            ft.color="#00ffff";
        }
        if(ft.status=== "APPROVED"){
            result.push(ft);
        }

    });
    return result;
}

async function httpRequest ( url ) {
    try{
        const response = await axios.get(url);
        return response.data;
    } catch(error){
        return null;
    }
      
}