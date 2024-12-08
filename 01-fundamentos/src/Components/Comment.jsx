import comment from '../Components/Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment({ value, deleteComment }){

    function handleTrash () {
        deleteComment(value)
    }

    return (
        <section className={comment.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/167707073?v=4" hasBorder={false}/>
            <div className={comment.infos}>
                <div className={comment.commentBox}>
                    <div className={comment.author}>
                        <div className={comment.head}>
                            <strong>Cauê Alves</strong>
                            <time title='07 de dezembro de 2024'>Cerca de 2h</time>
                        </div>
                        <button title='Deleter comentário'>
                            <Trash onClick={handleTrash} size={25}/>
                        </button>
                    </div>
                    <p className={comment.content}>{value}</p>
                </div>
                <footer className={comment.ft}>
                    <button title='Curtir'>
                        <ThumbsUp size={25}/>
                        <p>Aplaudir <span>20</span></p>
                    </button>
                </footer>
            </div>
        </section>
    );
}