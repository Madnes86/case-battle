import { json } from '@sveltejs/kit';
import { API_KEY, FOLDER_ID } from '$env/static/private';

export async function POST({ request }) {
	const { texts, from = 'ru', to = 'en' } = await request.json();

	const response = await fetch(
		'https://translate.api.cloud.yandex.net/translate/v2/translate',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Api-Key ${API_KEY}`
			},
			body: JSON.stringify({
				folderId: FOLDER_ID,
				texts,
				sourceLanguageCode: from,
				targetLanguageCode: to
			})
		}
	);
	//   console.log('Translate request:');
	const data = await response.json();
	return json(data.translations?.map((t) => t.text));
}
