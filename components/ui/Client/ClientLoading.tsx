"use client"

import "react-loading-skeleton/dist/skeleton.css"

import Skeleton from "react-loading-skeleton"

import {classesToClass} from "@/utils/convert"

import {ProjectMode} from "../ProjectEntry/ProjectEntryTypes"
import styles from "./Client.module.scss"

const ClientLoading = ({mode}: {mode: ProjectMode}) => {
	return (
		<section className={styles.container}>
			<section className={classesToClass(styles.client, mode, "show")}>
				<section className={classesToClass(styles.info, styles[mode])}>
					<section className={styles.imageLoading}>
						<Skeleton
							circle={true}
							className={styles.imageSkeleton}
						/>
					</section>

					<p className={styles.dataLoading}>
						<Skeleton count={2} />
					</p>
				</section>
				<section
					className={classesToClass(styles.review, styles[mode])}
				>
					<span className={styles.content}>
						<Skeleton count={5} />
					</span>
					<br />
					<br />
					<span className={styles.extraLoading}>
						<Skeleton />
					</span>
				</section>
			</section>
		</section>
	)
}

export default ClientLoading
