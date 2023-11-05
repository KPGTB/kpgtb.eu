"use client"

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show")
				return
			}
			entry.target.classList.remove("show")
		})
	},
	{threshold: 0}
)
export {observer}
