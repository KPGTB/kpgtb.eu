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
                <hr />
                <ProjectEntry 
                    name="[ESX] KFines" 
                    logo="https://i.imgur.com/2KmzFge.png" 
                    description="KFines is advanced Traffic Tickets system that allows creating tickets for players by cops, that can be paid later (by default, player needs to pay it in 3 days). If player don't pay ticket after configured time, script will take money with additional fee (by default 25%)." 
                    images={[
                        "https://i.imgur.com/6CIKVM6.png"
                    ]} 
                    url="https://forum.cfx.re/t/free-esx-kfines-nice-traffic-tickets-with-option-to-pay-later/5155094" 
                />
                <hr />
                <ProjectEntry 
                    name="[ESX] KCrimeActivities" 
                    logo="https://i.imgur.com/3QzkhO6.png" 
                    description="KCrimeActivities is an advanced FiveM script that adds 3 new activities for (Car Thief, Truck Robbery, VIP Killing) that can be stared in a special tablet. Every activity has own levels (by default 3) that can be unlocked by EXP points (that can be gained by playing these games). Script also contains 3 hacking minigames that are used in Car Thief and Truck Robbery." 
                    images={[
                        "https://i.imgur.com/j2rGumi.png"
                    ]} 
                    url="https://forum.cfx.re/t/esx-paid-escrow-os-kcrimeactivities-new-3-activities-for-rp-crime/5156722" 
                />
            </div>
        :
            undefined
    )
}