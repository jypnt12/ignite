//base URL
const base_url = "https://api.rawg.io/api/";
// const API_KEY = process.env.REACT_APP_RAWG_API;
//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1;
    if (month<10){
        return `0${month}`;
    }else{
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day<10){
        return `0${day}`;
    }else{
        return day
    }
}

//getting current date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear-1}-${currentMonth}-${currentDay}`

//popular games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}$ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


export const popularGamesURL = ()=> `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`
export const gameDetailsURL = (game_id) => `${base_url}games?key=${process.env.REACT_APP_RAWG_API}&${game_id}`

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=fef58c3fa96b4523b08cd03c6f851735&dates=2019-09-01,2019-09-30&platforms=18,1,7
//https://api/rawg.io/api/games?key=undefined&dates=2022-04-21,2023-04-21$ordering=-rating&page_size=10