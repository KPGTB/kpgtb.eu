import {getReviews} from "@/utils/reviews"

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url)
	const id = searchParams.get("id")
	if (id == null) {
		return Response.json([])
	}
	const data = await getReviews(id)
	return Response.json(data)
}
