const WebpImg = ({src, fallback, ...delegated}) => {
	return (
		<picture>
			<source
				srcSet={src}
				type="image/webp"
			/>
			<img
				src={fallback}
				{...delegated}
			/>
		</picture>
	)
}

export default WebpImg
