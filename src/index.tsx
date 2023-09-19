import React from "react"
import ReactDOM from "react-dom/client"

import "./style/fonts.scss"
import "./style/global.scss"
import Home from "./section/Home"
import Projects from "./section/Projects"
import Contact from "./section/Contact"
import Clients from "./section/Clients"
import Footer from "./section/Footer"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<div className="App">
			<Home />
			<Projects />
			<Contact />
			<Clients />
			<Footer />
		</div>
	</React.StrictMode>
)
