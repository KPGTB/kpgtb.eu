import {SiMongodb, SiNextdotjs, SiSass, SiTypescript} from "react-icons/si"

import ProjectEntry from "@/components/ui/ProjectEntry/ProjectEntry"
import {ProjectMode} from "@/components/ui/ProjectEntry/ProjectEntryTypes"
import {classesToClass} from "@/utils/convert"

import styles from "../Projects.module.scss"

const WebProjects = ({visible}: {visible: boolean}) => {
	return (
		visible && (
			<section
				className={classesToClass(styles.list, visible ? "fadeIn" : "")}
			>
				<ProjectEntry
					id="simple_blog"
					name="Simple Blog"
					mode={ProjectMode.LEFT}
					logo={"/logo.webp"}
					description="Simple Blog is a web application that works like blog. It is created using NextJS and handles authentication, email verification, handy articles editor and much more."
					images={["/projects/SimpleBlog.webp"]}
					links={[
						{
							href: "https://simpleblog.kpgtb.pl/",
							label: "Preview",
						},
						{
							href: "https://github.com/KPGTB/Simple_Blog",
							label: "Source Code",
						},
					]}
					technologies={[
						{icon: SiNextdotjs},
						{icon: SiTypescript},
						{icon: SiSass},
						{icon: SiMongodb},
					]}
				/>
			</section>
		)
	)
}

export default WebProjects
