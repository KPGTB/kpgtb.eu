export type Client = {
	id: string
	comment: string
	comment_language: string
	username: string
	user_image_url: string
	created_at: string
	value: number
	reviewer_country_code: string
	reviewer_country: string
	encrypted_order_id: string
	score: number
	reviewer_industry: string[]
	repeat_buyer: boolean
	is_business: boolean
	gig_id: number
	gig_slug: string
	gig_category: number
	gig_sub_category: number
	gig_nested_sub_category: number
	relevancy_score: number
	price_range_end: number
	reviews_count_as_buyer: number
	is_cancelled_order: boolean
}
