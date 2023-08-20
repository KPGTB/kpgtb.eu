import ProjectEntry from "../component/ProjectEntry"

export default function MinecraftProjects(props) {
	return props.visible ? (
		<div className={props.visible ? "list fadeIn" : "list"}>
			<ProjectEntry
				name="KTools"
				logo="https://www.spigotmc.org/data/resource_icons/108/108301.jpg?1680332082"
				description="KTools is an advanced & modern minecraft plugin that helps to create plugins."
				images={["https://i.imgur.com/7362YSH.png"]}
				url="https://www.spigotmc.org/resources/ktools.108301/"
			/>
			<hr />
			<ProjectEntry
				name="KThirst"
				mode="right"
				logo="https://www.spigotmc.org/data/resource_icons/103/103387.jpg?1683375762"
				description="KThirst is advanced & modern minecraft plugin. It adds new thirst mechanic with custom UI above food bar. By default, the plugin contains 2 drinks - Dirty & Clean Water. Players can use an empty bottle to get dirty water from any water source. After it, they can craft filter machine (which has custom UI) and clean this water.The server's administrators can create their own, custom drinks."
				images={[
					"https://i.imgur.com/Mg80p3V.png",
					"https://i.imgur.com/L2jERsg.png",
				]}
				url="https://www.spigotmc.org/resources/kthirst.103387/"
			/>
			<hr />
			<ProjectEntry
				name="KLifesteal"
				logo="https://www.spigotmc.org/data/resource_icons/110/110849.jpg?1688047106"
				description="KLifesteal is an advanced & modern LifeSteal-style plugin. It contains custom lives UI (above hunger bar) and 4 items with custom textures. The mechanic is simple - if you kill a player, you will get the next life, but if you death, you lose one. If your hearts drop to 0, you will be banned. Players are dropping souls that can be used to revive another player (revive totem) or to get more HP (compressed soul & additional heart)."
				images={[
					"https://i.imgur.com/pM4DZyQ.png",
					"https://i.imgur.com/uZEkgBI.png",
					"https://i.imgur.com/UbhiI1f.png",
				]}
				url="https://www.spigotmc.org/resources/klifesteal.110849/"
			/>
			<hr />
			<ProjectEntry
				name="KLock"
				mode="right"
				logo="https://www.spigotmc.org/data/resource_icons/111/111501.jpg?1690298528"
				description="KLock is an advanced & modern minecraft plugin that adds lock and lock picking mechanic. With this plugin you can secure any open-able block with lock, and later you can only open it or break with key. Players can also craft a lock pick and open blocks without a key. It is done by simple opening minigame with custom UI. Server's staff can obtain the universal key (by command) to open every lock."
				images={[
					"https://i.imgur.com/iWkPWc0.png",
					"https://i.imgur.com/lLLQgDv.png",
				]}
				url="https://www.spigotmc.org/resources/klock.111501/"
			/>
		</div>
	) : undefined
}
