import {FC} from "react"
import ProjectEntry, {ProjectMode} from "./ProjectEntry"
import styles from "../style/module/Projects.module.scss"

type Props = {
	visible: boolean
}

const MinecraftProjects: FC<Props> = (props: Props) => {
	return props.visible ? (
		<div className={props.visible ? `${styles.list} fadeIn` : styles.list}>
			<ProjectEntry
				id="KTools"
				name="KTools"
				mode={ProjectMode.LEFT}
				logo={"KTools"}
				description="KTools is an advanced & modern minecraft plugin that helps to create plugins."
				images={["KTools"]}
				url="https://www.spigotmc.org/resources/ktools.108301/"
			/>
			<hr />
			<ProjectEntry
				id="KThirst"
				name="KThirst"
				mode={ProjectMode.RIGHT}
				logo={"KThirst"}
				description="KThirst is advanced & modern minecraft plugin. It adds new thirst mechanic with custom UI above food bar. By default, the plugin contains 2 drinks - Dirty & Clean Water. Players can use an empty bottle to get dirty water from any water source. After it, they can craft filter machine (which has custom UI) and clean this water.The server's administrators can create their own, custom drinks."
				images={["KThirst", "KThirst2"]}
				url="https://www.spigotmc.org/resources/kthirst.103387/"
			/>
			<hr />
			<ProjectEntry
				id="KLifesteal"
				name="KLifesteal"
				mode={ProjectMode.LEFT}
				logo={"KLifesteal"}
				description="KLifesteal is an advanced & modern LifeSteal-style plugin. It contains custom lives UI (above hunger bar) and 4 items with custom textures. The mechanic is simple - if you kill a player, you will get the next life, but if you death, you lose one. If your hearts drop to 0, you will be banned. Players are dropping souls that can be used to revive another player (revive totem) or to get more HP (compressed soul & additional heart)."
				images={["KLifesteal", "KLifesteal2", "KLifesteal3"]}
				url="https://www.spigotmc.org/resources/klifesteal.110849/"
			/>
			<hr />
			<ProjectEntry
				id="KLock"
				name="KLock"
				mode={ProjectMode.RIGHT}
				logo={"KLock"}
				description="KLock is an advanced & modern minecraft plugin that adds lock and lock picking mechanic. With this plugin you can secure any open-able block with lock, and later you can only open it or break with key. Players can also craft a lock pick and open blocks without a key. It is done by simple opening minigame with custom UI. Server's staff can obtain the universal key (by command) to open every lock."
				images={["KLock", "KLock2"]}
				url="https://www.spigotmc.org/resources/klock.111501/"
			/>
		</div>
	) : (
		<></>
	)
}

export default MinecraftProjects
