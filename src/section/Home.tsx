import {FC} from "react"

import logo from "../img/logo.png"
import logoWebp from "../img/logo.webp"
import styles from "../style/module/Home.module.scss"
import WebpImg from "../util/WebpImg"

const Home: FC = () => {
	return (
		<div className={styles.container}>
			<WebpImg
				src={logoWebp}
				fallback={logo}
				alt="KPG-TB Logo"
				className={styles.logo}
			/>

			<p className={styles.info}>
				Hi! I'm known as <span className={styles.nickname}>KPG-TB</span>
				<br />
				A passionte Full Stack Developer & Creator of addons to various
				games!
				<br />
				<a
					id="projectsScroll"
					href="#Projects"
					className={styles.button}
				>
					Read more!
				</a>
			</p>
		</div>
	)
}

export default Home
