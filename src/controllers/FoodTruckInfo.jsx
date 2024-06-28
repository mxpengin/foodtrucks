import axios from 'axios';

/**
2 * Retrieves information about the food trucks from https://data.sfgov.org/resource/rqzj-sfat.json
3 *
8 * @return {number} A user profile element.
9 */

export async function FoodTruckInfo(){

    const ftdata = await httpRequest("https://data.sfgov.org/resource/rqzj-sfat.json");
    ftdata.forEach(ft => {
        //console.log("applicant:"+ft.applicant );
        //console.log(ft);
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