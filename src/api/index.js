import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data }} = await axios.get(URL, {
            method: 'GET',
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '2f6322782dmsh2e910ee829cdb2dp177ae5jsn1fd11a27b82e'
            }
        })
        return data;
    } catch (error) {
        console.log(error)
    }
}
