const WebpImg = ({
	src,
	fallback,
	...delegated
}: {
	src: string
	fallback: string
} & React.DetailedHTMLProps<
	React.ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
>) => {
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
