import ProjectEntry from "./ProjectEntry";

export default function FivemProjects(props) {
    return (
        props.visible ?
            <div className={props.visible ? "list fadeIn" : "list"}>
                <ProjectEntry 
                    name="FiveM + ReactJS Simple Template" 
                    logo="https://www.spigotmc.org/data/resource_icons/108/108301.jpg?1680332082" 
                    description="A simple template to make FiveM Lua scripts with NUI created in ReactJS. Webpack is configured to make editing easier. Editing styles and assets doesn't require building a node project. Only changes in JS/JSX files require building." 
                    images={[
                        "https://i.imgur.com/hDl0FQg.png"
                    ]} 
                    url="https://forum.cfx.re/t/free-nui-fivem-reactjs-simple-template/5135320" 
                />
            </div>
        :
            undefined
    )
}