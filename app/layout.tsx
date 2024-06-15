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
	metadataBase: new URL("https://kpgtb.eu"),
	openGraph: {
		type: "website",
		url: "https://kpgtb.eu",
		title: title,
		description: description,
		siteName: title,
		images: "/logo.png",
	},
}

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer>
					KPG-TB 2023 - {new Date().getFullYear()} &copy; All rights
					reserved
				</footer>
			</body>
		</html>
	)
}

export default Layout
