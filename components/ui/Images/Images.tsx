"use client"

import Image from "next/image"
import {useEffect, useState} from "react"

import {classesToClass} from "@/utils/convert"

import styles from "./Images.module.scss"

const Images = ({
	className = "",
	images,
}: {
	className?: string
	images: string[]
}) => {
	const [current, setCurrent] = useState<number>(0)
	let timer: NodeJS.Timeout | undefined = undefined

	const changeImg = () => {
		setCurrent((prev) => {
			let idx = prev + 1

			if (idx >= images.length) {
				idx = 0
			}
			return idx
		})
	}

	useEffect(() => {
		timer = setInterval(changeImg, 5000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<section className={classesToClass(styles.container, className)}>
			{images.map((img, idx) => {
				return (
					<Image
						src={img}
						alt={"Slide Image"}
						onClick={() => {
							window.open(img, "_blank")
						}}
						aria-hidden={current != idx}
						style={{translate: `${current * -100}%`}}
						width={1280}
						height={720}
						key={idx}
					/>
				)
			})}

			{images.length > 1 && (
				<section className={styles.dots}>
					{[...Array(images.length)].map((_, idx) => {
						return (
							<button
								key={idx}
								className={classesToClass(
									styles.dot,
									current === idx ? styles.selected : ""
								)}
								onClick={() => setCurrent(idx)}
								aria-label={`Show ${idx + 1} image`}
							></button>
						)
					})}
				</section>
			)}
		</section>
	)
}

export default Images
