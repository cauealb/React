import { Timer, Scroll } from 'phosphor-react'
import logo from '../../assests/Logo-ignite.svg'
import { LayoutHeader } from './Header.style'

export function Header () {
    return (
        <LayoutHeader>
           <img src={logo}/> 
           <nav>
            <a href="">
                <Timer size={5} />
            </a>
            <a href="">
                <Scroll size={5} />
            </a>
           </nav>
        </LayoutHeader>
    )
}