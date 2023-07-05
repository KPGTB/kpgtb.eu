import { Icon } from '@iconify/react'
import '../style/Contact.css'

export default function Contact() {
    return (
        <div className="Contact">
            <h1>You can find me here</h1>
            <div className='container'>
                <a href="https://github.com/KPGTB" target='blank'>
                    <Icon icon="mingcute:github-fill" />
                </a>
                <a onClick={() => {alert("Discord Tag: kpgtb")}}>
                    <Icon icon="ic:baseline-discord" />
                </a>
                <a href="https://www.spigotmc.org/members/kapegie.580061/" target='blank'>
                    <Icon icon="fa-solid:faucet" />
                </a>
                <a href="https://www.fiverr.com/kpg_tb" target='blank'>
                    <Icon icon="jam:fiverr-square" />
                </a>
            </div>
        </div>
    )
}