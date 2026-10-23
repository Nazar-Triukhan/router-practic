import { NavLink } from 'react-router-dom'

function ListAbout() {
    return (
        <nav>
            <NavLink to="homeabout" end>Homepage</NavLink>
            <NavLink to="detailsabout">About Us</NavLink>
        </nav>
    )
}

export default ListAbout