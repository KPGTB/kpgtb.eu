import {Component} from "react"

import {Icon} from "@iconify/react"

import clientIMG from "../img/client.png"
import clientIMGWebp from "../img/client.webp"
import styles from "../style/module/Client.module.scss"
import {observer} from "../util/Observer"
import WebpImg from "../util/WebpImg"

type State = {
	clients: Client[] | undefined
	show: number
	done: boolean
}

type Client = {
	id: string
	comment: string
	comment_language: string
	username: string
	user_image_url: string
	created_at: string
	value: number
	reviewer_country_code: string
	reviewer_country: string
	encrypted_order_id: string
	score: number
	reviewer_industry: string[]
	repeat_buyer: boolean
	is_business: boolean
	gig_id: number
	gig_slug: string
	gig_category: number
	gig_sub_category: number
	gig_nested_sub_category: number
	relevancy_score: number
	price_range_end: number
	reviews_count_as_buyer: number
	is_cancelled_order: boolean
}

type ClientProp = {
	client: Client
	idx: number
	left: boolean
}

const ClientReview: React.FC<ClientProp> = (props) => {
	const client = props.client
	return (
		<div
			className={
				styles.review + " " + (props.left ? styles.left : styles.right)
			}
		>
			{client.comment}
			<br />
			<br />
			<span className={styles.clientDataInfo}>
				Date: {client.created_at.split("T")[0]}&nbsp; Source: &nbsp;
				<a
					href="https://www.fiverr.com/kpg_tb"
					target="blank"
				>
					Fiverr
				</a>
			</span>
		</div>
	)
}

const ClientData: React.FC<ClientProp> = (props) => {
	const client = props.client
	let image = undefined
	if (client.user_image_url !== undefined) {
		image = client.user_image_url
	}

	return (
		<div className={styles.clientInfo}>
			{image === undefined ? (
				<WebpImg
					src={clientIMGWebp}
					fallback={clientIMG}
					alt="Client"
				/>
			) : (
				<img
					src={image}
					alt="Client"
					className={styles.clientAvatar}
				/>
			)}

			<p className={styles.clientData}>
				{client.username}{" "}
				<span className={styles.clientDataInfo}>
					({client.reviewer_country})
				</span>
			</p>
			<div className="stars">
				{[...Array(5)].map((x, i) => {
					return (
						<Icon
							className={
								client.value > i
									? `star ${styles.goldStar}`
									: "star"
							}
							key={i}
							icon="material-symbols:star"
						/>
					)
				})}
			</div>
		</div>
	)
}

export default class Clients extends Component<any, State> {
	state: State = {
		clients: undefined,
		show: 5,
		done: false,
	}
	render() {
		return (
			<div className={styles.container}>
				<h1 className={styles.title}>What people think about me</h1>
				<p className={styles.description}>
					I've been working in Fiverr as a Freelancer, making
					Minecraft Plugins, since January 2023. Here are some reviews
					about me.
				</p>
				<div className={styles.reviews}>
					{this.state.clients === undefined ? (
						<p>Loading reviews...</p>
					) : (
						this.state.clients.map((client, idx) => {
							if (idx >= this.state.show) {
								return <div key={client.id}></div>
							}

							const realLeft = idx % 2 === 0
							const left = realLeft || window.innerWidth <= 550

							return (
								<div
									className={styles.clientContainer}
									key={client.id}
								>
									<div
										className={
											styles.client +
											" " +
											(realLeft ? "left" : "right")
										}
									>
										{left ? (
											<>
												<ClientData
													client={client}
													idx={idx}
													left={left}
												/>
												<ClientReview
													client={client}
													idx={idx}
													left={left}
												/>
											</>
										) : (
											<>
												<ClientReview
													client={client}
													idx={idx}
													left={left}
												/>
												<ClientData
													client={client}
													idx={idx}
													left={left}
												/>
											</>
										)}
									</div>
									{idx + 1 === this.state.show &&
									this.state.clients!?.length > idx + 1 ? (
										<div className={styles.moreContainer}>
											<div className={styles.more}></div>
											<button
												aria-label={"Show More"}
												className={styles.moreBTT}
												onClick={(el) =>
													this.setState({
														show:
															this.state.show + 5,
													})
												}
											>
												<Icon icon="uiw:more" />
											</button>
											<div className={styles.moreOverlay}>
												Show more
											</div>
										</div>
									) : (
										<hr className={styles.hr} />
									)}
								</div>
							)
						})
					)}
				</div>
			</div>
		)
	}

	async componentDidMount() {
		await fetch("https://fiverr-api.kpgtb.pl/reviews?id=109612846")
			.then((resp) => resp.json())
			.then((json) => this.setState({clients: json}))
	}

	observed: Element[] = []
	componentDidUpdate() {
		this.observed = []
		Array.from(document.getElementsByClassName(styles.client)).forEach(
			(el) => {
				this.observed.push(el)
				observer.observe(el)
			}
		)
	}

	componentWillUnmount() {
		this.observed.forEach((el) => {
			observer.unobserve(el)
		})
	}
}
