const BASE: string = 'https://cdn.case-battle.life/images/case';

// limitNew ?

export const CASES: {
	name: string;
	category: string;
	slug: string;
	items: number;
	state: string | null;
	backImg: string;
	frontImg: string;
	limit: number | null;
	limitOld: number | null;
	price: number;
	priceOld: number | null;
}[] = [
	{
		name: 'Зора беннетт',
		category: 'СЕРИЙНЫЕ КЕЙСЫ',
		slug: 'zora-bennett',
		items: 32,
		state: 'new',
		backImg: `${BASE}/724/back/middle-68672673a16da.png`,
		frontImg: `${BASE}/724/front/middle-6867bb48b7799.png`,
		limit: null,
		limitOld: null,
		price: 349,
		priceOld: null
	},
	{
		name: 'Сен-Юбер',
		category: 'СЕРИЙНЫЕ КЕЙСЫ',
		slug: 'sen-uber',
		items: 4,
		state: 'disable',
		backImg: `${BASE}/725/back/middle-68672786a3918.png`,
		frontImg: `${BASE}/725/front/middle-6867bb522f3c5.png`,
		limit: null,
		limitOld: null,
		price: 500,
		priceOld: 1500
	},
	{
		name: 'Дистортус Рекс',
		category: 'СЕРИЙНЫЕ КЕЙСЫ',
		slug: 'destortus-rex',
		items: 36,
		state: null,
		backImg: `${BASE}/726/back/middle-6867286a915a4.png`,
		frontImg: `${BASE}/726/front/middle-6867bb601c214.png`,
		limit: 50,
		limitOld: 21,
		price: 249,
		priceOld: null
	},
	{
		name: 'Геном Лумиса',
		category: 'СЕРИЙНЫЕ КЕЙСЫ',
		slug: 'genome-lumis',
		items: 38,
		state: null,
		backImg: `${BASE}/727/back/middle-68672956734e2.png`,
		frontImg: `${BASE}/727/front/middle-6867bb6c9c3a3.png`,
		limit: null,
		limitOld: null,
		price: 499,
		priceOld: null
	},
	{
		name: 'Код Паркер',
		category: 'СЕРИЙНЫЕ КЕЙСЫ',
		slug: 'code-parker',
		items: 38,
		state: 'disable',
		backImg: `${BASE}/728/back/middle-686729f617bae.png`,
		frontImg: `${BASE}/728/front/middle-6867bb7c00a76.png`,
		limit: null,
		limitOld: null,
		price: 1199,
		priceOld: null
	},
	{
		name: 'Брелоки',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'charm',
		items: 33,
		state: null,
		backImg: `${BASE}/693/back/middle-67e53885c9250.png`,
		frontImg: `${BASE}/693/front/middle-67e6abf3a431b.png`,
		limit: null,
		limitOld: null,
		price: 69,
		priceOld: null
	},
	{
		name: 'Наборы музыки',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'music',
		items: 143,
		state: 'null',
		backImg: `${BASE}/692/back/middle-67e536fbd75b4.png`,
		frontImg: `${BASE}/692/front/middle-67e6abd602e75.png`,
		limit: null,
		limitOld: null,
		price: 199,
		priceOld: null
	},
	{
		name: 'Нашивки',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'patch',
		items: 56,
		state: 'null',
		backImg: `${BASE}/695/back/middle-67e5450f80e38.png`,
		frontImg: `${BASE}/695/front/middle-67e6ac2e63259.png`,
		limit: null,
		limitOld: null,
		price: 189,
		priceOld: null
	},
	{
		name: 'Нашивки команд',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'teampatches',
		items: 50,
		state: 'null',
		backImg: `${BASE}/694/back/middle-67e539fe95572.png`,
		frontImg: `${BASE}/694/front/middle-67e6ac1433a5f.png`,
		limit: null,
		limitOld: null,
		price: 399,
		priceOld: null
	},
	{
		name: 'Пины',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'pins',
		items: 45,
		state: 'null',
		backImg: `${BASE}/696/back/middle-67e545fcb20d4.png`,
		frontImg: `${BASE}/696/front/middle-67e6ac4ad5562.png`,
		limit: null,
		limitOld: null,
		price: 499,
		priceOld: null
	},
	{
		name: 'Агенты',
		category: 'ИМИДЖ-КЕЙСЫ',
		slug: 'agents',
		items: 58,
		state: 'null',
		backImg: `${BASE}/486/back/middle-63e3b057c81b2.png`,
		frontImg: `${BASE}/486/front/middle-63e3afecc83e7.png`,
		limit: null,
		limitOld: null,
		price: 899,
		priceOld: null
	},
	{
		name: 'Желтые скины',
		category: 'ФИРМЕННЫЕ КЕЙСЫ',
		slug: 'yellowskin',
		items: 36,
		state: 'null',
		backImg: `${BASE}/718/back/middle-68344fce3f139.png`,
		frontImg: `${BASE}/718/front/middle-683456885a8ff.png`,
		limit: null,
		limitOld: null,
		price: 89,
		priceOld: null
	},
	{
		name: 'Зеленые скины',
		category: 'ФИРМЕННЫЕ КЕЙСЫ',
		slug: 'green',
		items: 65,
		state: 'update',
		backImg: `${BASE}/148/back/middle-63241b21dfde2.png`,
		frontImg: `${BASE}/148/front/middle-63241ce0ad3da.png`,
		limit: null,
		limitOld: null,
		price: 59,
		priceOld: 100
	},
	{
		name: 'Синие скины',
		category: 'ФИРМЕННЫЕ КЕЙСЫ',
		slug: 'blue',
		items: 64,
		state: 'update',
		backImg: `${BASE}/149/back/middle-63241946d9802.png`,
		frontImg: `${BASE}/149/front/middle-63241a3db54e5.png`,
		limit: null,
		limitOld: null,
		price: 105,
		priceOld: 200
	},
	{
		name: 'Красные скины',
		category: 'ФИРМЕННЫЕ КЕЙСЫ',
		slug: 'red',
		items: 63,
		state: 'update',
		backImg: `${BASE}/150/back/middle-63241a5aa89bb.png`,
		frontImg: `${BASE}/150/front/middle-63241aef23558.png`,
		limit: null,
		limitOld: null,
		price: 185,
		priceOld: 330
	},
	{
		name: 'Евро 2024',
		category: 'ФИРМЕННЫЕ КЕЙСЫ',
		slug: 'euro2024',
		items: 38,
		state: 'null',
		backImg: `${BASE}/619/back/middle-6662e9c6ac764.png`,
		frontImg: `${BASE}/619/front/middle-66c8935333cbd.png`,
		limit: null,
		limitOld: null,
		price: 1269,
		priceOld: null
	},
	{
		name: 'Складной',
		category: 'НОЖЕВЫЕ КЕЙСЫ',
		slug: 'flipknife',
		items: 51,
		state: 'null',
		backImg: `${BASE}/704/back/middle-68078511353f3.png`,
		frontImg: `${BASE}/704/front/middle-6808dea7dfe64.png`,
		limit: null,
		limitOld: null,
		price: 15000,
		priceOld: null
	},
	{
		name: 'Кукри',
		category: 'НОЖЕВЫЕ КЕЙСЫ',
		slug: 'kukriknife',
		items: 27,
		state: 'null',
		backImg: `${BASE}/705/back/middle-680785e52e537.png`,
		frontImg: `${BASE}/705/front/middle-6808deb7af9cc.png`,
		limit: null,
		limitOld: null,
		price: 12000,
		priceOld: null
	},
	{
		name: 'Бродяга',
		category: 'НОЖЕВЫЕ КЕЙСЫ',
		slug: 'nomadknife',
		items: 40,
		state: 'null',
		backImg: `${BASE}/706/back/middle-680786f17772c.png`,
		frontImg: `${BASE}/706/front/middle-6808dec5217aa.png`,
		limit: null,
		limitOld: null,
		price: 16000,
		priceOld: null
	},
	{
		name: 'Боуи',
		category: 'НОЖЕВЫЕ КЕЙСЫ',
		slug: 'bowieknife',
		items: 52,
		state: 'null',
		backImg: `${BASE}/707/back/middle-6807882d02294.png`,
		frontImg: `${BASE}/707/front/middle-6808ded187634.png`,
		limit: null,
		limitOld: null,
		price: 12000,
		priceOld: null
	},
	{
		name: 'Нож-смерть близко',
		category: 'ОГРАНИЧЕННАЯ СЕРИЯ',
		slug: 'knifedeath',
		items: 32,
		state: 'disable',
		backImg: `${BASE}/126/back/middle-632e91f0df9b6.png`,
		frontImg: `${BASE}/126/front/middle-632ec4eeccb5c.png`,
		limit: 530,
		limitOld: 0,
		price: 499,
		priceOld: 1200
	},
	{
		name: 'Horizone-ножи из будущего',
		category: 'ОГРАНИЧЕННАЯ СЕРИЯ',
		slug: 'horizon',
		items: 29,
		state: 'null',
		backImg: `${BASE}/140/back/middle-632ea114227aa.png`,
		frontImg: `${BASE}/140/front/middle-632ec4aea274d.png`,
		limit: 600,
		limitOld: 479,
		price: 799,
		priceOld: 1200
	},
	{
		name: 'Убийца нубов',
		category: 'ОГРАНИЧЕННАЯ СЕРИЯ',
		slug: 'killernoob',
		items: 35,
		state: 'disable',
		backImg: `${BASE}/131/back/middle-6324bc0a631b3.png`,
		frontImg: `${BASE}/131/front/middle-6324bc72c7823.png`,
		limit: 750,
		limitOld: 209,
		price: 80,
		priceOld: 89
	},
	{
		name: 'Киберпанк',
		category: 'ОГРАНИЧЕННАЯ СЕРИЯ',
		slug: 'cyberpank',
		items: 34,
		state: 'disable',
		backImg: `${BASE}/180/back/middle-6319eb0472cd4.png`,
		frontImg: `${BASE}https://cdn.case-battle.life/images/case/180/front/middle-6319ec1811b1e.png`,
		limit: 800,
		limitOld: 0,
		price: 105,
		priceOld: 115
	}
];
