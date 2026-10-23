// import s from './About.module.css'
import ListAbout from './conponents/listAbout/listAbout'
import HomeAbout from './HomeAbout/HomeAbout'
import { Outlet } from 'react-router-dom'


function About() {


    return (

    <>
        <ListAbout/>

        <Outlet />
    </>

    )
}

export default About