import {Icon} from "@iconify/react"
import styles from "../style/module/Contact.module.scss"

const Contact: React.FC = () => {
	return (
		<div
			className={styles.container}
			id="ContactSection"
		>
			<h1 className={styles.title}>You can find me here</h1>
			<div className={styles.contact}>
				<a
					aria-label="github"
					href="https://github.com/KPGTB"
					target="blank"
				>
					<Icon icon="mingcute:github-fill" />
				</a>
				<a
					aria-label="discord"
					href="#ContactSection"
					className={styles.discord}
				>
					<Icon icon="ic:baseline-discord" />
					<div className={styles.discordOverlay}>kpgtb</div>
				</a>
				<a
					aria-label="spigotmc"
					href="https://www.spigotmc.org/members/kapegie.580061/"
					target="blank"
				>
					<Icon icon="fa-solid:faucet" />
				</a>
				<a
					aria-label="fiverr"
					href="https://www.fiverr.com/kpg_tb"
					target="blank"
				>
					<Icon icon="jam:fiverr-square" />
				</a>
			</div>
		</div>
	)
}

export default Contact
