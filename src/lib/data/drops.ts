const BASE = 'https://cdn.case-battle.life/images';
const STEAM_URL = 'https://steamcommunity.com/profiles';

export const DROPS: {
	rarity: string;
	itemImg: string;
	itemName: string;
	fromName: string;
	fromLink: string;
	fromImg: string;
	steamLink: string;
	steamImg: string;
}[] = [
	{
		rarity: 'var(--rarity-restricted)',
		itemImg: `${BASE}/skin/1308/middle-5c793d25da448.png`,
		itemName: 'Negev Крикун',
		fromName: 'ЗОРА БЕННЕТТ',
		fromLink: 'https://case-battle.life/case/zorabennet',
		fromImg: `${BASE}/case/724/back/middle-68672673a16da.png`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-mil)',
		itemImg: `${BASE}/skin/2580/middle-5c793e8ed50a7.png`,
		itemName: 'StatTrak™ USP-S Сайрекс',
		fromName: 'upgrade',
		fromLink: '/upgrade',
		fromImg: '/icon/upgrade.svg',
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-mil)',
		itemImg: `${BASE}/skin/172/middle-5c793ad8eeaf5.png`,
		itemName: 'M4A4 Пиксельный камуфляж «Город»',
		fromName: 'upgrade',
		fromLink: `https://case-battle.life/case/sanuber`,
		fromImg: `${BASE}/case/725/back/middle-68672786a3918.png`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-mil)',
		itemImg: `${BASE}/skin/4717/middle-5c7940281f30d.png`,
		itemName: 'Tec-9 Удалённый доступ',
		fromName: 'upgrade',
		fromLink: `/upgrade`,
		fromImg: `/icon/upgrade.svg`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-restricted)',
		itemImg: `${BASE}/skin/1563/middle-5c793d53603eb.png`,
		itemName: 'StatTrak™ MP7 Особая доставка',
		fromName: 'contract',
		fromLink: `/contract`,
		fromImg: `/icon/contract.svg`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-rare)',
		itemImg: `${BASE}/skin/3953/middle-5c793f93021c1.png`,
		itemName: '★ Спортивные перчатки | Амфибия',
		fromName: 'CS2 кейс «Перчаточный»',
		fromLink: `https://case-battle.life/case/gloves`,
		fromImg: `${BASE}/case/225/back/middle-5ec525b1a2ec7.png`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	},
	{
		rarity: 'var(--rarity-covert)',
		itemImg: `${BASE}/skin/992/middle-5c793ca7cbbd6.png`,
		itemName: '★ Нож с лезвием-крюком | Дамасская сталь',
		fromName: '«Нож с лезвием-крюком»',
		fromLink: `https://case-battle.life/case/gut-knife`,
		fromImg: `${BASE}/case/435/back/middle-62c13cf3e521c.png`,
		steamLink: `${STEAM_URL}/76561199154970474/`,
		steamImg: `https://cdn.case-battle.dev/images/user/default/user.png`
	}
];
