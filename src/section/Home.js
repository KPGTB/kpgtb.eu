import '../style/Home.css'
import logo from '../img/logo.png'

export default function Home() {
    return (
        <div className="Home">

            <img alt="logo" src={logo} />

            <p className="info">
                Hi! I'm known as <span className='nickname'>KPG-TB</span><br />
                A passionte Full Stack Developer & Creator of addons to various games!<br />
                <a href="#Projects">Read more!</a>
            </p>
            
        </div>
    )
}