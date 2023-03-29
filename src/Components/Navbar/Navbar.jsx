import './Navbar.css';
import { useState } from 'react';
import logoDark from '../../Images/logo.png';
import logoLight from '../../Images/logo-light.png';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {

    const [lightMode, setLightMode] = useState(false);

    const changeColorMode = () => {
        setLightMode(!lightMode)
    }

    const navbarColor = lightMode ? 'light' : 'dark';
    const buttonColor = lightMode ? 'btn btn-dark' : 'btn btn-light';
    const logo = lightMode ? logoLight : logoDark;

    return (
        <>
            <header className={navbarColor}>
                <nav className="nav container">
                    <img src={logo} alt="Logo de IronClad" className="imgLogo" />

                    <ul className="menuNav">
                        <li>INICIO</li>
                        <li>SILLAS</li>
                        <li>MESAS Y ESCRITORIOS</li>
                        <li>ESTANTERÍAS</li>
                        <li>CAMAS</li>
                    </ul>

                    <div>
                        <CartWidget />

                        <button className={buttonColor} onClick={changeColorMode}>{lightMode ? 'Modo Oscuro ☾' : 'Modo Claro☀'}</button>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Navbar