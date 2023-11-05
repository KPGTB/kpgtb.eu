"use client"

import {useState} from "react"
import {FaJava} from "react-icons/fa"
import {
	SiBootstrap,
	SiCsharp,
	SiCss3,
	SiFivem,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJetbrains,
	SiLua,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiReact,
	SiSass,
	SiSpigotmc,
	SiSpring,
	SiTypescript,
	SiVisualstudiocode,
} from "react-icons/si"

import Button from "@/components/ui/Button/Button"
import TechnologiesFeed from "@/components/ui/TechnologiesFeed/TechnologiesFeed"

import styles from "./Projects.module.scss"
import FivemProjects from "./types/FivemProjects"
import MinecraftProjects from "./types/MinecraftProjects"
import WebProjects from "./types/WebProjects"

enum ProjectType {
	WEB = "Web",
	MINECRAFT = "Minecraft",
	FIVEM = "Fivem",
}

const technologies = [
	{icon: FaJava},
	{icon: SiCsharp},
	{icon: SiLua},
	{icon: SiHtml5},
	{icon: SiCss3},
	{icon: SiSass},
	{icon: SiBootstrap},
	{icon: SiJavascript},
	{icon: SiTypescript},
	{icon: SiReact},
	{icon: SiNextdotjs},
	{icon: SiSpring},
	{icon: SiMysql},
	{icon: SiMongodb},
	{icon: SiSpigotmc},
	{icon: SiFivem},
	{icon: SiJetbrains},
	{icon: SiVisualstudiocode},
	{icon: SiGithub},
]

const Projects = () => {
	const [type, setType] = useState<ProjectType>(ProjectType.WEB)

	return (
		<article
			id="projects"
			className={styles.container}
		>
			<section className={styles.realContainer}>
				<h1 className={styles.title}>Projects</h1>
				<section className={styles.info}>
					Known technologies
					<TechnologiesFeed
						technologies={technologies}
						className={styles.technologies}
						iconClassName={styles.technology}
					/>
				</section>
				<section className={styles.buttons}>
					{Object.values(ProjectType).map((value) => {
						return (
							<Button
								aria-label={value}
								onClick={() => setType(value)}
								className={styles.button}
								key={value}
							>
								{value}
							</Button>
						)
					})}
				</section>

				<MinecraftProjects visible={type === ProjectType.MINECRAFT} />
				<FivemProjects visible={type === ProjectType.FIVEM} />
				<WebProjects visible={type === ProjectType.WEB} />
			</section>
		</article>
	)
}

export default Projects
