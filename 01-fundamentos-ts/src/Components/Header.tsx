import head from './Header.module.css'
import img from '../assets/ignite-logo.svg'
console.log(img)

export function Header() {
    return (
        <header className={head.header}>
            <img src={img} alt="Logo da Ignite" />
            <h1>Ignite Feed</h1>
        </header>
    )
}