import {getReviews} from "@/app/api/reviews/route"
import ClientsFeed from "@/components/ui/ClientsFeed/ClientsFeed"

import styles from "./Clients.module.scss"
import {Client} from "./ClientTypes"

export const dynamic = "force-dynamic"

const getData = async () => {
	const json = await getReviews("109612846")
	return json
}

const Clients = async () => {
	const reviews: Client[] = await getData()
	return (
		<article className={styles.container}>
			<h1 className={styles.title}>What people think about me</h1>
			<p className={styles.description}>
				I&apos;ve been working in Fiverr as a Freelancer, making
				Minecraft Plugins, since January 2023. Here are some reviews
				about me.
			</p>
			<ClientsFeed clients={reviews} />
		</article>
	)
}

export default Clients
