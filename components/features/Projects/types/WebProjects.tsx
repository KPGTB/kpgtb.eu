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
							href: "https://simpleblog.kpgtb.eu/",
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
				<hr />
				<ProjectEntry
					id="smtp_sender"
					name="SMTP Sender"
					mode={ProjectMode.RIGHT}
					logo={"/logo.webp"}
					description="SMTP Sender App is a simple web application that allows to connect with SMTP server and send mails using it. That application provides a simple UI with content editor to make sure that UX is good enough."
					images={["/projects/SmtpSender.webp"]}
					links={[
						{
							href: "https://smtp.kpgtb.eu/",
							label: "Preview",
						},
						{
							href: "https://github.com/KPGTB/smtp-sender",
							label: "Source Code",
						},
					]}
					technologies={[
						{icon: SiNextdotjs},
						{icon: SiTypescript},
						{icon: SiSass},
					]}
				/>
			</section>
		)
	)
}

export default WebProjects
