import {FC} from "react"
import ProjectEntry, {ProjectMode} from "./ProjectEntry"
import styles from "../style/module/Projects.module.scss"

type Props = {
	visible: boolean
}

const FivemProjects: FC<Props> = (props: Props) => {
	return props.visible ? (
		<div className={props.visible ? `${styles.list} fadeIn` : styles.list}>
			<ProjectEntry
				name="FiveM + ReactJS Simple Template"
				mode={ProjectMode.LEFT}
				logo={"ReactTemplate"}
				description="A simple template to make FiveM Lua scripts with NUI created in ReactJS. Webpack is configured to make editing easier. Editing styles and assets doesn't require building a node project. Only changes in JS/JSX files require building."
				images={["ReactTemplate"]}
				url="https://forum.cfx.re/t/free-nui-fivem-reactjs-simple-template/5135320"
			/>
			<hr />
			<ProjectEntry
				name="[ESX/QB] KFines"
				mode={ProjectMode.RIGHT}
				logo={"KFines"}
				description="KFines is advanced Traffic Tickets system that allows creating tickets for players by cops, that can be paid later (by default, player needs to pay it in 3 days). If player don't pay ticket after configured time, script will take money with additional fee (by default 25%)."
				images={["KFines"]}
				url="https://forum.cfx.re/t/free-esx-qb-kfines-nice-traffic-tickets-with-option-to-pay-later/5155094"
			/>
			<hr />
			<ProjectEntry
				name="[ESX/QB] KCrimeActivities"
				mode={ProjectMode.LEFT}
				logo={"KCrimeActivities"}
				description="KCrimeActivities is an advanced FiveM script that adds 3 new activities for (Car Thief, Truck Robbery, VIP Killing) that can be stared in a special tablet. Every activity has own levels (by default 3) that can be unlocked by EXP points (that can be gained by playing these games). Script also contains 3 hacking minigames that are used in Car Thief and Truck Robbery."
				images={["KCrimeActivities"]}
				url="https://forum.cfx.re/t/esx-qb-paid-escrow-os-kcrimeactivities-new-3-activities-for-rp-crime/5156722"
			/>
			<hr />
			<ProjectEntry
				name="[ESX/QB] KExploration"
				mode={ProjectMode.RIGHT}
				logo={"KExploration"}
				description="KExploration is a simple FiveM script that allows server’s staff to hide any place on map. Players can discover that place and save it on map."
				images={["KExploration"]}
				url="https://forum.cfx.re/t/esx-qb-kexploration-hide-any-place-on-map/5167773"
			/>
		</div>
	) : (
		<></>
	)
}

export default FivemProjects
