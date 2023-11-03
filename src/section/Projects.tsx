import {FC, useState} from "react"

import FivemProjects from "../component/FivemProjects"
import MinecraftProjects from "../component/MinecraftProjects"
import WebProjects from "../component/WebProjects"
import styles from "../style/module/Projects.module.scss"

enum ProjectType {
	MINECRAFT,
	FIVEM,
	WEB,
}

const Projects: FC = () => {
	const [type, setType] = useState(ProjectType.WEB)

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
					and LUA. Currently I learn NextJS with bunch of new
					technologies.
				</p>
				<div className={styles.types}>
					<button
						aria-label="web"
						onClick={() => setType(ProjectType.WEB)}
					>
						Web
					</button>
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
				</div>

				<MinecraftProjects visible={type === ProjectType.MINECRAFT} />
				<FivemProjects visible={type === ProjectType.FIVEM} />
				<WebProjects visible={type === ProjectType.WEB} />
			</div>
		</div>
	)
}

export default Projects
