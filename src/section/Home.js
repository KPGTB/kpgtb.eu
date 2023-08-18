import "../style/Home.css"
import logo from "../img/logo.png"
import {useEffect} from "react"

export default function Home() {
	useEffect(() => {
		let event = new Event("bttScroll")
		document
			.getElementById("projectsScroll")
			.addEventListener("click", (e) => {
				document.dispatchEvent(event)
			})
	})

	return (
		<div className="Home">
			<img
				alt="logo"
				src={logo}
			/>

			<p className="info">
				Hi! I'm known as <span className="nickname">KPG-TB</span>
				<br />
				A passionte Full Stack Developer & Creator of addons to various
				games!
				<br />
				<a
					id="projectsScroll"
					href="#Projects"
				>
					Read more!
				</a>
			</p>
		</div>
	)
}
