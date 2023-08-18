import {Icon} from "@iconify/react"
import "../style/Contact.css"

export default function Contact() {
	return (
		<div
			className="Contact"
			id="ContactSection"
		>
			<h1>You can find me here</h1>
			<div className="container">
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
					onClick={() => {
						alert("Discord Tag: kpgtb")
					}}
				>
					<Icon icon="ic:baseline-discord" />
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
