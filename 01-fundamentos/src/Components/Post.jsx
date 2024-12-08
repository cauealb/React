import post from '../Components/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, date, content}){
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
                <time title={dateTitle} dateTime={date.toISOString()}>
                    {datePrincipal}
                </time>
            </header>

            <div className={post.infos}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
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