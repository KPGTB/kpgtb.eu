const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showEntry")
			return
		}
		entry.target.classList.remove("showEntry")
	})
})
export {observer}
