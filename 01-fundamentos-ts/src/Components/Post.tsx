import { ChangeEvent, FormEvent, useState } from 'react';
import post from '../Components/Post.module.css'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'

interface Author {
    authorName: string
    role: string
    auhtorUrl: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostInteface {
    id: number
    author: Author
    public: Date
    content: Content[]
}

interface AuthorProps {
    postPost: PostInteface;
}


export function Post({postPost}: AuthorProps){

    const [newCommentNow, setNewCommentNow] = useState('')
    const [comm, setComments] = useState([
        'Post muito Bacana!!'
    ])

    function mudarComm (event: FormEvent){
        event.preventDefault()

        setComments([...comm, newCommentNow])
        setNewCommentNow('')
    }

    function handleCommentChange (event: ChangeEvent<HTMLTextAreaElement>){
        event.preventDefault()

        setNewCommentNow(event.target.value)
    }

    function deleteComment (comment: string) {
        const newComments = comm.filter(com => {
            return com != comment
        })

        setComments(newComments)
    }

    const dateTitle = format(postPost.public, "dd 'de' LLLL 'de' KK:mm'h'", {
        locale: ptBR
    })

    const datePrincipal =formatDistanceToNow(postPost.public, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <section className={post.postBox}>
            <header className={post.hero}>
                <div className={post.author}>
                    <Avatar src={postPost.author.auhtorUrl}/>
                    <div className={post.head}>
                        <strong>{postPost.author.authorName}</strong>
                        <span>{postPost.author.role}</span>
                    </div>
                </div>
                <time title={dateTitle} dateTime={postPost.public.toISOString()}>
                    {datePrincipal}
                </time>
            </header>

            <div className={post.infos}>
                {postPost.content.map(line => {
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
                    <button type='submit' disabled={newCommentNow.length === 0}>Publicar</button>
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