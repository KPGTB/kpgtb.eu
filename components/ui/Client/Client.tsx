"use client"

import {useEffect, useRef} from "react"
import {FaStar} from "react-icons/fa"

import type {Client} from "@/components/features/Clients/ClientTypes"
import {classesToClass} from "@/utils/convert"

import {ProjectMode} from "../ProjectEntry/ProjectEntryTypes"
import styles from "./Client.module.scss"

const Client = ({client, mode}: {client: Client; mode: ProjectMode}) => {
	const ref = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = require("@/utils/observer").observer
		const el = ref.current!
		observer.observe(el)
		return () => {
			observer.unobserve(el)
		}
	}, [])

	return (
		<section className={styles.container}>
			<section
				ref={ref}
				className={classesToClass(styles.client, mode)}
			>
				<section className={classesToClass(styles.info, styles[mode])}>
					<img
						src={client.user_image_url || "/client.png"}
						alt="Client image"
						className={styles.image}
					/>

					<p className={styles.data}>
						{client.username}{" "}
						<span className={styles.extra}>
							({client.reviewer_country})
						</span>
					</p>
					<section className={styles.stars}>
						{[...Array(5)].map((x, i) => {
							return (
								<FaStar
									key={i}
									className={classesToClass(
										styles.star,
										client.value > i ? styles.gold : ""
									)}
								/>
							)
						})}
					</section>
				</section>
				<section
					className={classesToClass(styles.review, styles[mode])}
				>
					<span className={styles.content}>{client.comment}</span>
					<br />
					<br />
					<span className={styles.extra}>
						Date: {client.created_at.split("T")[0]}&nbsp; Source:
						&nbsp;
						<a
							href="https://www.fiverr.com/kpg_tb"
							target="blank"
							aria-label="Fiverr source"
						>
							Fiverr
						</a>
					</span>
				</section>
			</section>
		</section>
	)
}

export default Client
