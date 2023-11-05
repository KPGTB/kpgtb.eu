import Image from "next/image"

import Button from "@/components/ui/Button/Button"

import styles from "./Home.module.scss"

const Home = () => {
	return (
		<article className={styles.container}>
			<Image
				src={"/logo.webp"}
				alt="KPG-TB Logo"
				className={styles.logo}
				width={256}
				height={233}
			/>

			<p className={styles.info}>
				Hi! I&apos;m known as{" "}
				<span className={styles.nick}>KPG-TB</span>
				<br />
				A passionate Full Stack Developer & Creator of addons to various
				games!
				<br />
				<Button.A
					href="#projects"
					aria-label="Read more about myself"
					className={styles.button}
				>
					Read more!
				</Button.A>
			</p>
		</article>
	)
}

export default Home
