import React from "react"

import ClientLoading from "../Client/ClientLoading"
import {ProjectMode} from "../ProjectEntry/ProjectEntryTypes"
import styles from "./ClientsFeed.module.scss"

const ClientsLoading = () => {
	return (
		<section className={styles.container}>
			{[...Array(5)].map((_, idx) => {
				return (
					<React.Fragment key={idx}>
						<ClientLoading
							mode={
								idx % 2 === 0
									? ProjectMode.LEFT
									: ProjectMode.RIGHT
							}
						/>
						<hr className={styles.hr} />
					</React.Fragment>
				)
			})}
		</section>
	)
}

export default ClientsLoading
