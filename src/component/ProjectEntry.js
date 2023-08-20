import {Component, createRef} from "react"
import "../style/ProjectEntry.css"
import {observer} from "../util/Observer"

export default class ProjectEntry extends Component {
	state = {
		currentImageIdx: -1,
		currentImageUrl: "",
	}

	ref = createRef()

	render() {
		return (
			<div
				className={`ProjectEntry ${
					this.props.mode === "right" ? "right" : "left"
				}`}
				ref={this.ref}
			>
				{this.props.mode === "right" ? (
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

	Info = () => {
		return (
			<div className="info">
				<div className="title">
					<img
						src={this.props.logo}
						alt={this.props.name + " logo"}
					/>
					<p>{this.props.name}</p>
				</div>
				<p>{this.props.description}</p>
				<a
					href={this.props.url}
					target="blank"
				>
					Check it!
				</a>
			</div>
		)
	}

	Images = () => {
		return (
			<div className="images">
				<img
					src={this.state.currentImageUrl}
					alt={this.props.name + " image"}
					onClick={() => {
						window.open(this.state.currentImageUrl, "_blank")
					}}
				/>
				<div className="imgDots">
					{this.props.images.map((url) => {
						let idx = this.props.images.indexOf(url)
						return (
							<button
								aria-label={"Next Image"}
								className={
									idx === this.state.currentImageIdx
										? "imgDot selected"
										: "imgDot"
								}
								key={idx}
								onClick={(el) => {
									this.changeImageTo(idx)
								}}
							></button>
						)
					})}
				</div>
			</div>
		)
	}

	imagesInterval = undefined

	changeImage() {
		let idx = this.state.currentImageIdx
		idx++
		if (idx >= this.props.images.length) {
			idx = 0
		}
		this.changeImageTo(idx)
	}

	changeImageTo(idx) {
		this.setState({
			currentImageIdx: idx,
			currentImageUrl: this.props.images[idx],
		})
	}

	componentDidMount() {
		this.changeImage()
		this.imagesInterval = setInterval(this.changeImage.bind(this), 5000)
		observer.observe(this.ref.current)
	}

	componentWillUnmount() {
		if (this.imagesInterval !== undefined) {
			clearInterval(this.imagesInterval)
		}
		observer.unobserve(this.ref.current)
	}
}
