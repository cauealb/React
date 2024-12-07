import comment from '../Components/Comment.module.css'
import { Trash } from 'phosphor-react'

export function Comment(){
    return (
        <section className={comment.comment}>
            <img src="https://avatars.githubusercontent.com/u/167707073?v=4"/>

            <div className={comment.infos}>
                <div className={comment.commentBox}>
                    <div className={comment.author}>
                        <div className={comment.head}>
                            <strong>Cauê Alves</strong>
                            <time title='07 de dezembro de 2024'>Cerca de 2h</time>
                        </div>
                        <button title='Deleter comentário'>
                            <Trash size={25}/>
                        </button>
                    </div>
                    <p className={comment.content}>Muito bom Cauê, parabénssss!!!</p>
                </div>
                <footer className={comment.ft}>Aplaudir</footer>
            </div>
        </section>
    );
}