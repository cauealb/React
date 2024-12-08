import { useState } from 'react';
import post from '../Components/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, date, content}){

    const [newCommentNow, setNewCommentNow] = useState('')
    const [comm , setComments] = useState([])

    function mudarComm (){
        event.preventDefault()

        setComments([...comm, newCommentNow])
        setNewCommentNow('')
    }

    function handleCommentChange (){
        event.preventDefault()

        setNewCommentNow(event.target.value)
    }

    function deleteComment (comment) {
        console.log(`Deletar comentário ${comment}`)
    }


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
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={mudarComm} className={post.formComment}>
                <p>Deixe seu feedback</p>

                <textarea 
                    value={newCommentNow}
                    onChange={handleCommentChange} 
                    name="comment" 
                    rows={4} 
                    placeholder='Escreva um comentário...'
                    className={post.comment}
                >

                </textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={post.commentList}>
                {comm.map(comment => {
                    return <Comment key={comment} value={comment} deleteComment={deleteComment}/>
                })}
            </div>
        </section>
    );
}