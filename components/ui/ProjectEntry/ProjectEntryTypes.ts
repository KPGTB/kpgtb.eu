import {IconType} from "react-icons"

export enum ProjectMode {
	LEFT = "left",
	RIGHT = "right",
}

export type TechnologyType = {
	icon: IconType
}

export type ButtonType = {
	href: string
	label: string
}

export type ProjectProps = {
	id: string
	mode: ProjectMode
	logo: string
	name: string
	description: string
	images: string[]
	links: ButtonType[]
	technologies?: TechnologyType[]
}
