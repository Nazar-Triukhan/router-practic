import s from './Header.module.css'
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.svg'
import Container from "../Container/Container"

function Header() {


    return (

    <header className={s.header}>
        <Container>
            <NavLink to="/">
            <img src={logo} alt="" />
        </NavLink>
        <nav className={s.nav}>
            <NavLink className={s.link} to="/about">About</NavLink>
            <NavLink className={s.link} to="/services">Services</NavLink>
            <NavLink className={s.link} to="/work">Work</NavLink>
            <NavLink className={s.link} to="/news">News</NavLink>
            <NavLink className={s.link} to="/contacts">Contacts</NavLink>
        </nav>
        </Container>
        
    </header>

    )
}

export default Header