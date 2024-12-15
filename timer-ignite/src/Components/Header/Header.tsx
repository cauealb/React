import { Timer, Scroll } from 'phosphor-react'
import logo from '../../assests/Logo-ignite.svg'
import { LayoutHeader } from './Header.style'
import { NavLink } from 'react-router'
 
export function Header () {
    return (
        <LayoutHeader>
           <img src={logo}/> 
           <nav>
            <NavLink to="/" title="Timer">
                <Timer size={5} />
            </NavLink>

            <NavLink to="/history" title="Histórico">
                <Scroll size={5} />
            </NavLink>

           </nav>
        </LayoutHeader>
    )
}