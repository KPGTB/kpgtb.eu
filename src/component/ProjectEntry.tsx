import {Component, createRef} from "react"
import {observer} from "../util/Observer"
import styles from "../style/module/ProjectEntry.module.scss"
import WebpImg from "../util/WebpImg.js"
import logo from "../img/project/logo/Logo"
import gallery from "../img/project/gallery/Gallery"

enum ProjectMode {
	LEFT,
	RIGHT,
}

type ProjectProps = {
	id: string
	mode: ProjectMode
	logo: string
	name: string
	description: string
	url: string
	images: string[]
}

type ProjectState = {
	currentImageIdx: number
	currentImageUrl: string
}

export {ProjectMode}
export default class ProjectEntry extends Component<
	ProjectProps,
	ProjectState
> {
	state: ProjectState = {
		currentImageIdx: -1,
		currentImageUrl: "",
	}

	ref: React.RefObject<any> = createRef()

	render() {
		return (
			<div
				className={`${styles.container} ${
					this.props.mode === ProjectMode.RIGHT ? "right" : "left"
				}`}
				ref={this.ref}
			>
				{this.props.mode === ProjectMode.RIGHT &&
				window.innerWidth > 550 ? (
					<>
						<this.Images />
						<this.Info />
					</>
				) : (
					<>
						<this.Info />
						<this.Images />
					</>
				)}
			</div>
		)
	}

	Info: React.FC = () => {
		return (
			<div className={styles.info}>
				<div className={styles.title}>
					<WebpImg
						// @ts-ignore
						src={logo[this.props.logo + "Webp"]}
						// @ts-ignore
						fallback={logo[this.props.logo]}
						alt={this.props.name + " logo"}
					/>
					<p className={styles.name}>{this.props.name}</p>
				</div>
				<p className={styles.description}>{this.props.description}</p>
				<a
					href={this.props.url}
					target="blank"
					className={styles.link}
				>
					Check it!
				</a>
			</div>
		)
	}

	Images: React.FC = () => {
		return (
			<div
				className={
					styles.images +
					(this.props.images.length > 1 ? " " + styles.anim : "")
				}
			>
				<WebpImg
					// @ts-ignore
					src={gallery[this.state.currentImageUrl + "Webp"]}
					// @ts-ignore
					fallback={gallery[this.state.currentImageUrl]}
					alt={this.props.name + " image"}
					onClick={() => {
						window.open(this.state.currentImageUrl, "_blank")
					}}
					className={`${this.props.id}ImgGallery`}
				/>
				<div className={styles.imgDots}>
					{this.props.images.length > 1
						? this.props.images.map((url) => {
								let idx = this.props.images.indexOf(url)
								return (
									<button
										aria-label={"Next Image"}
										className={
											idx === this.state.currentImageIdx
												? `${styles.imgDot} ${styles.selected}`
												: styles.imgDot
										}
										key={idx}
										onClick={(el) => {
											this.changeImageTo(idx)
										}}
									></button>
								)
						  })
						: undefined}
				</div>
			</div>
		)
	}

	changeImage() {
		let idx = this.state.currentImageIdx
		idx++
		if (idx >= this.props.images.length) {
			idx = 0
		}
		this.changeImageTo(idx)
	}

	changeImageTo(idx: number) {
		this.setState({
			currentImageIdx: idx,
			currentImageUrl: this.props.images[idx],
		})
	}

	componentDidMount() {
		this.changeImage()
		observer.observe(this.ref.current)
		document
			.querySelectorAll(`.${this.props.id}ImgGallery`)
			.forEach((el) => {
				el.addEventListener("animationiteration", () => {
					this.changeImage()
				})
			})
	}

	componentWillUnmount() {
		observer.unobserve(this.ref.current)
	}
}
