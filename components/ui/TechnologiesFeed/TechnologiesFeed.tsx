import {classesToClass} from "@/utils/convert"

import {TechnologyType} from "../ProjectEntry/ProjectEntryTypes"
import styles from "./TechnologiesFeed.module.scss"

const TechnologiesFeed = ({
	technologies,
	className = "",
	iconClassName = "",
}: {
	technologies: TechnologyType[]
	className?: string
	iconClassName?: string
}) => {
	return (
		<section className={classesToClass(styles.technologies, className)}>
			{technologies.map((tech, idx) => {
				return (
					<tech.icon
						key={idx}
						className={classesToClass(
							styles.technology,
							iconClassName
						)}
					/>
				)
			})}
		</section>
	)
}

export default TechnologiesFeed
