import {promises as fs} from "fs"

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url)
	const id = searchParams.get("id")
	if (id == null) {
		return Response.json([])
	}
	const data = await getReviews(id)
	return Response.json(data)
}
export const getReviews = async (id: string) => {
	const res = await fetch(
		"https://www.fiverr.com/reviews/user_page/fetch_user_reviews/" +
			id +
			"?user_id=" +
			id +
			"&sort_by=recent&limit=255",
		{
			method: "GET",
			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.0.0",
				"Sec-Fetch-Dest": "empty",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Site": "same-origin",
				"X-Requested-With": "XMLHttpRequest",
				Accept: "application/json",
				"Upgrade-Insecure-Requests": "1",
				TE: "trailers",
			},
		}
	)

	if (res.status !== 201) {
		const file = await fs.readFile(
			process.cwd() + "/assets/cache.json",
			"utf-8"
		)
		const json = await JSON.parse(file)
		return json
	}

	const json = await res.json()
	const reviews = json.reviews

	if (reviews === undefined) {
		const file = await fs.readFile(
			process.cwd() + "/assets/cache.json",
			"utf-8"
		)
		const json = await JSON.parse(file)
		return json
	}

	await fs.writeFile(
		process.cwd() + "/assets/cache.json",
		JSON.stringify(reviews),
		"utf-8"
	)
	return reviews
}
