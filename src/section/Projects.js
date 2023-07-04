import ProjectEntry from '../component/ProjectEntry'
import '../style/Projects.css'

export default function Projects() {
    return (
        <div className="Projects" id="Projects">
            <div className='container'>
                <h1>Projects</h1>
                <p>
                    I have over 4 years of experience with Front-End languages like HTML, CSS and JS.
                    I also have experience with JAVA, C# and LUA. Currently I learn ReactJS and Spring.
                </p>
                <div className='types'>
                    <button>Minecraft</button>
                    <button disabled>FiveM</button>
                    <button disabled>Web</button>
                </div>
                <div className='list'>
                    <ProjectEntry 
                        name="KTools" 
                        logo="https://www.spigotmc.org/data/resource_icons/108/108301.jpg?1680332082" 
                        description="KTools is an advanced & modern minecraft plugin that helps to create plugins." 
                        images={[
                            "https://proxy.spigotmc.org/fda6ac9590b42065a8f777a5272176f5957a4b38?url=https%3A%2F%2Fi.imgur.com%2Fz84oQCI.png"
                        ]} 
                        url="https://www.spigotmc.org/resources/ktools.108301/" 
                    />
                    <hr />
                    <ProjectEntry 
                        name="KThirst" 
                        logo="https://www.spigotmc.org/data/resource_icons/103/103387.jpg?1683375762" 
                        description="KThirst is advanced & modern minecraft plugin. It adds new thirst mechanic with custom UI above food bar. By default, the plugin contains 2 drinks - Dirty & Clean Water. Players can use an empty bottle to get dirty water from any water source. After it, they can craft filter machine (which has custom UI) and clean this water.The server's administrators can create their own, custom drinks." 
                        images={[
                            "https://proxy.spigotmc.org/9ba61d065b07b9602fa5af8d745fdbfc0e1c60d5?url=https%3A%2F%2Fi.imgur.com%2FMg80p3V.png",
                            "https://proxy.spigotmc.org/6cdac87a6e3041f3a362efaeae33426b068514a6?url=https%3A%2F%2Fi.imgur.com%2FL2jERsg.png"
                        ]} 
                        url="https://www.spigotmc.org/resources/kthirst.103387/" 
                    />
                    <hr />
                    <ProjectEntry 
                    name="KLifesteal" 
                    logo="https://www.spigotmc.org/data/resource_icons/110/110849.jpg?1688047106" 
                    description="KLifesteal is an advanced & modern LifeSteal-style plugin. It contains custom lives UI (above hunger bar) and 4 items with custom textures. The mechanic is simple - if you kill a player, you will get the next life, but if you death, you lose one. If your hearts drop to 0, you will be banned. Players are dropping souls that can be used to revive another player (revive totem) or to get more HP (compressed soul & additional heart)." 
                    images={[
                        "https://proxy.spigotmc.org/0e88f48e96d9d8699b4aa7c7cf32c89044c4a937?url=https%3A%2F%2Fi.imgur.com%2FpM4DZyQ.png",
                        "https://proxy.spigotmc.org/436f8ec501def36e00f9042fba6f275e07b2ff8e?url=https%3A%2F%2Fi.imgur.com%2FuZEkgBI.png",
                        "https://proxy.spigotmc.org/0948c402f98d77bff273da378f5a768f172b979c?url=https%3A%2F%2Fi.imgur.com%2FUbhiI1f.png"
                    ]} 
                    url="https://www.spigotmc.org/resources/klifesteal.110849/" 
                    />
                </div>
            </div>
        </div>
    )
}