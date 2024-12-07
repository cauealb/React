import post from '../Components/Post.module.css'

export function Post(){
    return (
        <section>
            <header className={post.hero}>
                <div className={post.author}>
                <img 
                    className={post.img}
                    src="https://avatars.githubusercontent.com/u/167707073?v=4" />
                    <div className={post.head}>
                        <strong>Cauê Alves</strong>
                        <span>UI Design</span>
                    </div>
                </div>
                <time title='07 de dezembro de 2024'>Pública há 1hr</time>
            </header>

            <div className={post.infos}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href='#'>jane.design/doctorcare</a></p>
                <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </section>
    );
}