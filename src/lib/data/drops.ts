
const BASE = "https://cdn.case-battle.life/images";
const STEAM_URL = "https://steamcommunity.com/profiles";

export const drops : { 
        rarity    : string,
        itemImg   : string, 
        itemName  : string,
        fromName  : string, 
        fromLink  : string, 
        fromImg   : string, 
        steamLink : string, 
        steamImg  : string 
    }[] = [
        { 
            rarity    : "#9f8bff",
            itemImg   : `${BASE}/skin/1308/middle-5c793d25da448.png`, 
            itemName  : "Negev Крикун", 
            fromName  : "ЗОРА БЕННЕТТ", 
            fromLink  : "https://case-battle.life/case/zorabennet", 
            fromImg   : `${BASE}/case/724/back/middle-68672673a16da.png`, 
            steamLink : `${STEAM_URL}/76561199154970474/`, 
            steamImg  : `${BASE}/user/2205/1102572/large-686a4c893a618.jpg` 
        },
        { 
            rarity    : "#9f8bff",
            itemImg   : `${BASE}/skin/2580/middle-5c793e8ed50a7.png`, 
            itemName  : "StatTrak™ USP-S Сайрекс", 
            fromName  : "upgrade", 
            fromLink  : "/upgrade", 
            fromImg   : "/icon/upgrade.svg", 
            steamLink : `${STEAM_URL}/76561199154970474/`, 
            steamImg  : `${BASE}/user/2205/1102572/large-686a4c893a618.jpg` 
        },
        { 
            rarity    : "#9f8bff",
            itemImg   : `${BASE}/skin/172/middle-5c793ad8eeaf5.png`, 
            itemName  : "M4A4 Пиксельный камуфляж «Город»", 
            fromName  : "upgrade",
            fromLink  : `https://case-battle.life/case/sanuber`,
            fromImg   : `${BASE}/case/725/back/middle-68672786a3918.png`, 
            steamLink : `${STEAM_URL}/76561199154970474/`, 
            steamImg  : `${BASE}/user/2205/1102572/large-686a4c893a618.jpg` 
        },
    ];