import {Suspense} from "react"

import {getReviews} from "@/app/api/reviews/route"
import ClientsFeed from "@/components/ui/ClientsFeed/ClientsFeed"
import ClientsLoading from "@/components/ui/ClientsFeed/ClientsLoading"

import styles from "./Clients.module.scss"
import {Client} from "./ClientTypes"

export const dynamic = "force-dynamic"

const getData = async () => {
	const json = await getReviews("109612846")
	return json
}

const Clients = () => {
	return (
		<article className={styles.container}>
			<h1 className={styles.title}>What people think about me</h1>
			<p className={styles.description}>
				I&apos;ve been working in Fiverr as a Freelancer, making
				Minecraft Plugins, since January 2023. Here are some reviews
				about me.
			</p>
			<Suspense fallback={<ClientsLoading />}>
				<Reviews />
			</Suspense>
		</article>
	)
}

const Reviews = async () => {
	const data: Client[] = await getData()
	return <ClientsFeed clients={data} />
}

export default Clients
