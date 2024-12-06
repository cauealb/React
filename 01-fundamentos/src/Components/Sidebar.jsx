import sidebar from './Siderbar.module.css'

export function SideBar() {
    return (
        <aside className={sidebar.side}>
            <img 
                className={sidebar.img}
                src="https://plus.unsplash.com/premium_photo-1685086785641-1c4dbf5853b2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ix   id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={sidebar.profile}>
                <strong>Cauê Alves</strong>
                <span>Full-Stack Developer</span>
            </div>

            <footer className={sidebar.ft}>
                <a 
                href="#"
                className={sidebar.btn}>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};