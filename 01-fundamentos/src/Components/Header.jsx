import head from './Header.module.css'
console.log(head)

export function Header() {
    return (
        <header className={head.header}>
            <h1>Ignite Feed</h1>
        </header>
    )
}