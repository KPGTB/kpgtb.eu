import {SiDiscord, SiFiverr, SiGithub, SiSpigotmc} from "react-icons/si"

import {freehand} from "@/app/font"
import {classesToClass} from "@/utils/convert"

import styles from "./Contact.module.scss"

const Contact = () => {
	return (
		<article className={styles.container}>
			<h1 className={classesToClass(styles.title, freehand.className)}>
				You can find me here
			</h1>
			<section className={styles.contact}>
				<a
					aria-label="github"
					href="https://github.com/KPGTB"
					target="blank"
				>
					<SiGithub />
				</a>
				<a
					aria-label="discord"
					href="#ContactSection"
					className={styles.discord}
				>
					<SiDiscord />
					<section className={styles.discordOverlay}>kpgtb</section>
				</a>
				<a
					aria-label="spigotmc"
					href="https://www.spigotmc.org/members/kapegie.580061/"
					target="blank"
				>
					<SiSpigotmc />
				</a>
				<a
					aria-label="fiverr"
					href="https://www.fiverr.com/kpg_tb"
					target="blank"
				>
					<SiFiverr />
				</a>
			</section>
		</article>
	)
}

export default Contact
