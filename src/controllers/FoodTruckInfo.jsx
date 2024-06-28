import axios from 'axios';

/**
2 * Retrieves information about the food trucks from https://data.sfgov.org/resource/rqzj-sfat.json
3 *
8 * @return {number} A user profile element.
9 */

export async function FoodTruckInfo(){
    const regex_mex = /mex|taco/;
    const regex_usa = /deli|hamb|dog|chee|americ/;
    const regex_ita = /pizza/;
    const regex_ice = /ice|coff/;
    const regex_asi = /chai|india|massala/;

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
        }else if((ft.fooditems!==undefined)&&(ft.fooditems.toLowerCase().match(regex_asi))){
            ft.color="#ffff00";
        }else {
            ft.color="#00ffff";
        }
        

    });
    return ftdata;
}

async function httpRequest ( url ) {
    try{
        const response = await axios.get(url);
        return response.data;
    } catch(error){
        return null;
    }
      
}