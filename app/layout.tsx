import type {Metadata} from "next"
import "./globals.scss"

import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"], weight: ["400", "700", "900"]})

const title = "KPG-TB Portfolio"
const description =
	"KPG-TB - A passionate Full Stack developer & game's addons creator."

export const metadata: Metadata = {
	title: title,
	description: description,
	metadataBase: new URL("https://kpgtb.pl"),
	openGraph: {
		type: "website",
		url: "https://kpgtb.pl",
		title: title,
		description: description,
		siteName: title,
		images: "/logo.webp",
	},
}

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer>KPG-TB 2023 &copy; All rights reserved</footer>
			</body>
		</html>
	)
}

export default Layout
