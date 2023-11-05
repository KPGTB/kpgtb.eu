import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
} from "react"

import {classesToClass} from "@/utils/convert"

import styles from "./Button.module.scss"

const Button = ({
	className = "",
	children,
	...delegated
}: {
	className?: string
	children: React.ReactNode
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button
			className={classesToClass(styles.button, className)}
			{...delegated}
		>
			{children}
		</button>
	)
}

const AButton = ({
	className = "",
	children,
	...delegated
}: {
	className?: string
	children: React.ReactNode
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>) => {
	return (
		<a
			className={classesToClass(styles.button, className)}
			{...delegated}
		>
			{children}
		</a>
	)
}

Button.A = AButton

export default Button
