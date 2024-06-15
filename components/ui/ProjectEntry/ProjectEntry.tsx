"use client"

import Image from "next/image"
import {useEffect, useRef} from "react"

import {classesToClass} from "@/utils/convert"

import Button from "../Button/Button"
import Images from "../Images/Images"
import TechnologiesFeed from "../TechnologiesFeed/TechnologiesFeed"
import styles from "./ProjectEntry.module.scss"
import {ProjectProps} from "./ProjectEntryTypes"

const ProjectEntry = (props: ProjectProps) => {
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
		<section
			className={classesToClass(styles.container, props.mode)}
			ref={ref}
		>
			<section
				className={classesToClass(styles.info, styles[props.mode])}
			>
				<section className={styles.title}>
					<Image
						src={props.logo}
						width={128}
						height={128}
						alt={props.name}
					/>
					<p className={styles.name}>{props.name}</p>
				</section>

				{props.technologies && (
					<TechnologiesFeed
						technologies={props.technologies}
						className={styles.technologies}
						iconClassName={styles.technology}
					/>
				)}

				{props.extraInfo && (
					<p className={styles.extraInfo}>{props.extraInfo}</p>
				)}

				<p className={styles.description}>{props.description}</p>

				<section className={styles.buttons}>
					{props.links.map((link) => {
						return (
							<Button.A
								href={link.href}
								target="blank"
								className={styles.link}
								aria-label={link.label}
								key={link.label}
							>
								{link.label}
							</Button.A>
						)
					})}
				</section>
			</section>

			<Images
				className={classesToClass(styles.images, styles[props.mode])}
				images={props.images}
			/>
		</section>
	)
}

export default ProjectEntry
