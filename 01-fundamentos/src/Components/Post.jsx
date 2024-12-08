import post from '../Components/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, date}){
    const dateTitle = format(date, "dd 'de' LLLL 'de' KK:mm'h'", {
        locale: ptBR
    })

    const datePrincipal =formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <section className={post.postBox}>
            <header className={post.hero}>
                <div className={post.author}>
                    <Avatar src={author.auhtorUrl}/>
                    <div className={post.head}>
                        <strong>{author.authorName}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={dateTitle}>
                    {datePrincipal}
                </time>
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