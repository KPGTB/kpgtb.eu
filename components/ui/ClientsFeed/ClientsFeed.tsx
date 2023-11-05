"use client"

import {useState} from "react"
import {FiMoreHorizontal} from "react-icons/fi"

import {freehand} from "@/app/font"
import {Client} from "@/components/features/Clients/ClientTypes"
import {classesToClass} from "@/utils/convert"

import ClientComponent from "../Client/Client"
import {ProjectMode} from "../ProjectEntry/ProjectEntryTypes"
import styles from "./ClientsFeed.module.scss"

const ClientsFeed = ({clients}: {clients: Client[]}) => {
	const [show, setShow] = useState<number>(5)

	return (
		<section className={styles.container}>
			{clients.map((client, idx) => {
				if (idx >= show) {
					return <></>
				}

				return (
					<>
						<ClientComponent
							mode={
								idx % 2 === 0
									? ProjectMode.LEFT
									: ProjectMode.RIGHT
							}
							client={client}
							key={client.id}
						/>
						{idx + 1 === show && clients.length > idx + 1 ? (
							<section
								className={styles.moreContainer}
								key={idx}
							>
								<section className={styles.more}></section>
								<button
									aria-label={"Show More"}
									className={styles.moreBTT}
									onClick={() => setShow(show + 5)}
								>
									<FiMoreHorizontal />
								</button>
								<section
									className={classesToClass(
										styles.moreOverlay,
										freehand.className
									)}
								>
									Show more
								</section>
							</section>
						) : (
							<hr
								className={styles.hr}
								key={idx}
							/>
						)}
					</>
				)
			})}
		</section>
	)
}

export default ClientsFeed
