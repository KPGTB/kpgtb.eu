import ProjectEntry from "@/components/ui/ProjectEntry/ProjectEntry"
import {ProjectMode} from "@/components/ui/ProjectEntry/ProjectEntryTypes"
import {classesToClass} from "@/utils/convert"

import styles from "../Projects.module.scss"

const FivemProjects = ({visible}: {visible: boolean}) => {
	return (
		visible && (
			<section
				className={classesToClass(styles.list, visible ? "fadeIn" : "")}
			>
				<ProjectEntry
					id="FivemReact"
					name="FiveM + ReactJS Simple Template"
					mode={ProjectMode.LEFT}
					logo={"/logo.webp"}
					description="A simple template to make FiveM Lua scripts with NUI created in ReactJS. Webpack is configured to make editing easier. Editing styles and assets doesn't require building a node project. Only changes in JS/JSX files require building."
					images={["/projects/ReactTemplate.webp"]}
					links={[
						{
							href: "https://forum.cfx.re/t/free-nui-fivem-reactjs-simple-template/5135320",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KFines"
					name="[ESX/QB] KFines"
					mode={ProjectMode.RIGHT}
					logo={"/projects/logo/KFines.webp"}
					description="KFines is advanced Traffic Tickets system that allows creating tickets for players by cops, that can be paid later (by default, player needs to pay it in 3 days). If player don't pay ticket after configured time, script will take money with additional fee (by default 25%)."
					images={["/projects/KFines.webp"]}
					links={[
						{
							href: "https://forum.cfx.re/t/free-esx-qb-kfines-nice-traffic-tickets-with-option-to-pay-later/5155094",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KCrimeActivities"
					name="[ESX/QB] KCrimeActivities"
					mode={ProjectMode.LEFT}
					logo={"/projects/logo/KCrimeActivities.webp"}
					description="KCrimeActivities is an advanced FiveM script that adds 3 new activities for (Car Thief, Truck Robbery, VIP Killing) that can be stared in a special tablet. Every activity has own levels (by default 3) that can be unlocked by EXP points (that can be gained by playing these games). Script also contains 3 hacking minigames that are used in Car Thief and Truck Robbery."
					images={["/projects/KCrimeActivities.webp"]}
					links={[
						{
							href: "https://forum.cfx.re/t/esx-qb-paid-escrow-os-kcrimeactivities-new-3-activities-for-rp-crime/5156722",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KExploration"
					name="[ESX/QB] KExploration"
					mode={ProjectMode.RIGHT}
					logo={"/projects/logo/KExploration.webp"}
					description="KExploration is a simple FiveM script that allows server’s staff to hide any place on map. Players can discover that place and save it on map."
					images={["/projects/KExploration.webp"]}
					links={[
						{
							href: "https://forum.cfx.re/t/esx-qb-kexploration-hide-any-place-on-map/5167773",
							label: "Read More",
						},
					]}
				/>
			</section>
		)
	)
}

export default FivemProjects
