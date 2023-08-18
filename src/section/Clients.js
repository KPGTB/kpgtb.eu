import {Component} from "react"
import "../style/Clients.css"
import {Icon} from "@iconify/react"

export default class Clients extends Component {
	state = {
		clients: undefined,
	}
	render() {
		return (
			<div className="Clients">
				<h1>What people think about me</h1>
				<p>
					I've been working in Fiverr as a Freelancer, making
					Minecraft Plugins, since January 2023. Here are some reviews
					about me.
				</p>
				<div
					className="container"
					id="clientsScroll"
				>
					{this.state.clients === undefined ? (
						<p>Loading reviews...</p>
					) : (
						this.state.clients.map((client) => {
							let image =
								"https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
							if (client.user_image_url !== undefined) {
								image = client.user_image_url
							}

							return (
								<div
									key={client.id}
									className="client"
								>
									<div className="info">
										<img
											src={image}
											alt="Client"
										/>
										<div className="data">
											<p>
												{client.username}{" "}
												<span className="country">
													({client.reviewer_country})
												</span>
											</p>
											<div className="stars">
												{[...Array(5)].map((x, i) => {
													return (
														<Icon
															className={
																client.value > i
																	? "star gold"
																	: "star"
															}
															key={i}
															icon="material-symbols:star"
														/>
													)
												})}
											</div>
										</div>
									</div>
									<div className="description">
										<span className="descInfo">
											Lang: {client.comment_language}{" "}
											Date:{" "}
											{client.created_at.split("T")[0]}
										</span>
										<br />
										{client.comment}
									</div>
								</div>
							)
						})
					)}
				</div>
			</div>
		)
	}

	scrollInterval = undefined
	back = false
	topScroll = false
	scrollSpeed = 30

	scroll() {
		let selector = document.getElementById("clientsScroll")
		let scrollWidth = selector.scrollWidth - window.innerWidth
		let scroll = selector.scrollLeft

		if (this.back && scroll === 0) {
			this.back = false
		}
		if (this.back) {
			return
		}
		if (this.topScroll) {
			return
		}

		scroll += this.scrollSpeed

		if (scrollWidth > scroll) {
			selector.scrollTo(scroll, 0)
		} else {
			this.back = true
			selector.scrollTo(0, 0)
		}
	}

	async componentDidMount() {
		this.scrollInterval = setInterval(this.scroll.bind(this), 100)

		document.addEventListener("bttScroll", (event) => {
			this.topScroll = true
			console.log("test")
		})

		document.addEventListener("scroll", (event) => {
			this.topScroll = true
		})

		document.addEventListener("scrollend", (event) => {
			this.topScroll = false
		})

		await fetch("https://fiverr-api.kpgtb.pl/reviews?id=109612846")
			.then((resp) => resp.json())
			.then((json) => this.setState({clients: json}))
	}

	componentWillUnmount() {
		if (this.scrollInterval !== undefined) {
			clearInterval(this.scrollInterval)
		}
	}
}
