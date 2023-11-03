import {Component, createRef} from "react"

import {Icon} from "@iconify/react"

import gallery from "../img/project/gallery/Gallery"
import logo from "../img/project/logo/Logo"
import styles from "../style/module/ProjectEntry.module.scss"
import {observer} from "../util/Observer"
import WebpImg from "../util/WebpImg"

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
	github?: string
	technologies?: string[]
}

type ProjectState = {
	currentImageIdx: number
}

export {ProjectMode}
export default class ProjectEntry extends Component<
	ProjectProps,
	ProjectState
> {
	state: ProjectState = {
		currentImageIdx: -1,
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
				window.innerWidth > 1050 ? (
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
				{this.props.technologies && (
					<div className={styles.technologies}>
						{this.props.technologies.map((icon) => {
							return (
								<Icon
									icon={icon}
									key={icon}
								/>
							)
						})}
					</div>
				)}

				<p className={styles.description}>{this.props.description}</p>

				<div className={styles.buttons}>
					<a
						href={this.props.url}
						target="blank"
						className={styles.link}
					>
						Check it!
					</a>

					{this.props.github && (
						<a
							href={this.props.github}
							target="blank"
							className={styles.link}
						>
							Source Code
						</a>
					)}
				</div>
			</div>
		)
	}

	Images: React.FC = () => {
		return (
			<div className={styles.images}>
				{this.props.images.map((img, idx) => {
					return (
						<WebpImg
							// @ts-ignore
							src={gallery[img + "Webp"]}
							// @ts-ignore
							fallback={gallery[img]}
							alt={this.props.name + " image"}
							onClick={() => {
								// @ts-ignore
								window.open(gallery[img], "_blank")
							}}
							aria-hidden={this.state.currentImageIdx !== idx}
							style={{
								translate:
									this.state.currentImageIdx * -100 + "%",
							}}
						/>
					)
				})}

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
		})
	}

	slidesInterval?: NodeJS.Timer = undefined

	componentDidMount() {
		this.changeImage()
		observer.observe(this.ref.current)
		this.slidesInterval = setInterval(this.changeImage.bind(this), 5000)
	}

	componentWillUnmount() {
		observer.unobserve(this.ref.current)
		if (this.slidesInterval !== undefined) {
			clearInterval(this.slidesInterval)
		}
	}
}
