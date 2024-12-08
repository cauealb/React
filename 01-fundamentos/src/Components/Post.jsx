import post from '../Components/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post(){
    return (
        <section className={post.postBox}>
            <header className={post.hero}>
                <div className={post.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/2254731?v=4"/>
                    <div className={post.head}>
                        <strong>Cauê Alves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='07 de dezembro de 2024'>Pública há 1hr</time>
            </header>

            <div className={post.infos}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href='#' className={post.link}>jane.design/doctorcare</a></p>
                <p>
                    <a href='#' className={post.link}>#novoprojeto</a>{' '}
                    <a href="#" className={post.link}>#nlw</a>{' '}
                    <a href="" className={post.link}>#rocketseat</a>{' '}
                </p>
            </div>

            <form className={post.formComment}>
                <p>Deixe seu feedback</p>

                <textarea rows={4} placeholder='Escreva um comentário...'
                className={post.comment}>

                </textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={post.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </section>
    );
}