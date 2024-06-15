import ProjectEntry from "@/components/ui/ProjectEntry/ProjectEntry"
import {ProjectMode} from "@/components/ui/ProjectEntry/ProjectEntryTypes"
import {classesToClass} from "@/utils/convert"

import styles from "../Projects.module.scss"

const MinecraftProjects = ({visible}: {visible: boolean}) => {
	return (
		visible && (
			<section
				className={classesToClass(styles.list, visible ? "fadeIn" : "")}
			>
				<ProjectEntry
					id="BattlePass"
					name="BattlePass"
					mode={ProjectMode.LEFT}
					logo={"/projects/logo/battlepass.webp"}
					description="With BattlePass, create your own quests and earn experience and customizable rewards, keeping players active and engaged. With both free and premium passes available, you can offer a unique experience to all your players. Increase player retention and engagement with BattlePass, the must-have Minecraft quests plugin for any server owner."
					extraInfo="Official Contributor"
					images={[
						"/projects/battlepass.webp",
						"/projects/battlepass2.webp",
						"/projects/battlepass3.gif",
					]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/1-17-1-21-%E2%AD%90-battlepass-%E2%AD%90-50-quests-with-unlimited-customisable-quests-%E2%9A%94%EF%B8%8F-gui-editor-%E2%AD%90.63076/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="AdvancedJobs"
					name="AdvancedJobs"
					mode={ProjectMode.RIGHT}
					logo={"/projects/logo/jobs.webp"}
					description="AdvancedJobs is the ultimate Spigot Jobs Plugin that allows you to create your own custom jobs without any programming knowledge. With Daily refreshing jobs, free & premium passes and In-Game editor, this is the best jobs plugin for Spigot servers.
					Bring an eco friendly approach and a reborn gameplay experience to your server."
					extraInfo="Official Contributor"
					images={[
						"/projects/jobs.webp",
						"/projects/jobs2.webp",
						"/projects/jobs3.gif",
					]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/1-17-1-21-%E2%AD%95-advancedjobs-%E2%AD%90-20-default-jobs-create-your-own-jobs-plugin%E2%9A%A1gui-editor-%E2%9C%85.114936/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KTools"
					name="KTools"
					mode={ProjectMode.LEFT}
					logo={"/logo.webp"}
					description="KTools is an advanced & modern minecraft plugin that helps to create plugins."
					images={["/projects/KTools.webp"]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/ktools.108301/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KThirst"
					name="KThirst"
					mode={ProjectMode.RIGHT}
					logo={"/projects/logo/KThirst.webp"}
					description="KThirst is advanced & modern minecraft plugin. It adds new thirst mechanic with custom UI above food bar. By default, the plugin contains 2 drinks - Dirty & Clean Water. Players can use an empty bottle to get dirty water from any water source. After it, they can craft filter machine (which has custom UI) and clean this water.The server's administrators can create their own, custom drinks."
					images={[
						"/projects/KThirst.webp",
						"/projects/KThirst2.webp",
					]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/kthirst.103387/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KLifesteal"
					name="KLifesteal"
					mode={ProjectMode.LEFT}
					logo={"/projects/logo/KLifesteal.webp"}
					description="KLifesteal is an advanced & modern LifeSteal-style plugin. It contains custom lives UI (above hunger bar) and 4 items with custom textures. The mechanic is simple - if you kill a player, you will get the next life, but if you death, you lose one. If your hearts drop to 0, you will be banned. Players are dropping souls that can be used to revive another player (revive totem) or to get more HP (compressed soul & additional heart)."
					images={[
						"/projects/KLifesteal.webp",
						"/projects/KLifesteal2.webp",
						"/projects/KLifesteal3.webp",
					]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/klifesteal.110849/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KLock"
					name="KLock"
					mode={ProjectMode.RIGHT}
					logo={"/projects/logo/KLock.webp"}
					description="KLock is an advanced & modern minecraft plugin that adds lock and lock picking mechanic. With this plugin you can secure any open-able block with lock, and later you can only open it or break with key. Players can also craft a lock pick and open blocks without a key. It is done by simple opening minigame with custom UI. Server's staff can obtain the universal key (by command) to open every lock."
					images={["/projects/KLock.webp", "/projects/KLock2.webp"]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/klock.111501/",
							label: "Read More",
						},
					]}
				/>
				<hr />
				<ProjectEntry
					id="KSkinCreator"
					name="KSkinCreator"
					mode={ProjectMode.LEFT}
					logo={"/projects/logo/KSkinCreator.webp"}
					description="KSkinCreator is an advanced minecraft plugin, that adds possibility to create entire, realistic minecraft skin, from various elements like clothes, hairs, skin color etc. This plugin tries to simulate creating character appearance from games like FiveM"
					images={["/projects/KSkinCreator.webp"]}
					links={[
						{
							href: "https://www.spigotmc.org/resources/kskincreator-make-your-rp-server-more-realistic.113984/",
							label: "Read More",
						},
					]}
				/>
			</section>
		)
	)
}

export default MinecraftProjects
