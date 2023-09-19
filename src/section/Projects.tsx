import {FC, useState} from "react"
import styles from "../style/module/Projects.module.scss"
import MinecraftProjects from "../component/MinecraftProjects"
import FivemProjects from "../component/FivemProjects"

enum ProjectType {
	MINECRAFT,
	FIVEM,
	WEB,
}

const Projects: FC = () => {
	const [type, setType] = useState(ProjectType.MINECRAFT)

	return (
		<div
			className={styles.container}
			id="Projects"
		>
			<div className={styles.projects}>
				<h1 className={styles.title}>Projects</h1>
				<p className={styles.description}>
					I have over 4 years of experience with Front-End languages
					like HTML, CSS and JS. I also have experience with JAVA, C#
					and LUA. Currently I learn ReactJS and Spring.
				</p>
				<div className={styles.types}>
					<button
						aria-label="minecraft"
						onClick={() => setType(ProjectType.MINECRAFT)}
					>
						Minecraft
					</button>
					<button
						aria-label="fivem"
						onClick={() => setType(ProjectType.FIVEM)}
					>
						FiveM
					</button>
					<button
						aria-label="web"
						disabled
					>
						Web
					</button>
				</div>

				<MinecraftProjects visible={type === ProjectType.MINECRAFT} />
				<FivemProjects visible={type === ProjectType.FIVEM} />
			</div>
		</div>
	)
}

export default Projects
