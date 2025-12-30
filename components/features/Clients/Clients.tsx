import {Suspense} from "react"

import ClientsFeed from "@/components/ui/ClientsFeed/ClientsFeed"
import ClientsLoading from "@/components/ui/ClientsFeed/ClientsLoading"
import {getReviews} from "@/utils/reviews"

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
				In 2023, I&apos;ve been working on Fiverr as a freelancer,
				making Minecraft plugins. Here are some reviews of me.
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
