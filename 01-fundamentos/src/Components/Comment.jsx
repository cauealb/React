import comment from '../Components/Comment.module.css'
import { Trash } from 'phosphor-react'

export function Comment(){
    return (
        <section>
            <img src="https://avatars.githubusercontent.com/u/167707073?v=4"/>
            <div className={comment.commentBox}>
                <div className={comment.author}>
                    <strong>Cauê Alves <span>(você)</span></strong>
                    <time title='07 de dezembro de 2024'>Cerca de 2h</time>
                    <Trash />
                    <div className={comment.content}>
                        Muito bom Cauê, parabénssss!!!
                    </div>
                </div>
                <p className={comment.ft}>
                    Aplaudir
                </p>
            </div>

        </section>
    );
}