const API_KEY = 'd498c38329345a4e9f58cf434cbcf3ae';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU'

// trending/all/day?api_key=<<api_key>>

function getData(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw `Что-то пошло не так, ошибка ${response.status}`
        })
        .catch(err => console.error(err))
}

async function getTriends(type = 'all', period = 'week', page = 1) {   
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`    
    return await getData(url)
}
export default getTriends

// export const getTriends = async () => {
//     const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}`
//     const data = await getData(url)
//     console.log(data);
// }