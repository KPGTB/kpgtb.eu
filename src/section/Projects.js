import { useState } from 'react'
import '../style/Projects.css'
import MinecraftProjects from '../component/MinecraftProjects'
import FivemProjects from '../component/FivemProjects'

export default function Projects() {

    const [type, setType] = useState("minecraft")

    return (
        <div className="Projects" id="Projects">
            <div className='container'>
                <h1>Projects</h1>
                <p>
                    I have over 4 years of experience with Front-End languages like HTML, CSS and JS.
                    I also have experience with JAVA, C# and LUA. Currently I learn ReactJS and Spring.
                </p>
                <div className='types'>
                    <button aria-label='minecraft' onClick={() => setType("minecraft")}>Minecraft</button>
                    <button aria-label='fivem' onClick={() => setType("fivem")}>FiveM</button>
                    <button aria-label='web' disabled>Web</button>
                </div>

                <MinecraftProjects visible={type==="minecraft"} />
                <FivemProjects visible={type==="fivem"} />
            </div>
        </div>
    )
}