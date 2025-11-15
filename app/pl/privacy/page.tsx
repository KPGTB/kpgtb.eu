const Page = () => {
	return (
		<main>
			<object
				data="/privacy_pl.pdf"
				type="application/pdf"
				width="100%"
				height="100%"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100vh",
				}}
			>
				<p>
					Unable to display PDF file.{" "}
					<a href="/privacy_pl.pdf">Download</a> instead.
				</p>
			</object>
		</main>
	)
}

export default Page
