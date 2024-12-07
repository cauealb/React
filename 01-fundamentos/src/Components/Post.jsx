import post from '../Components/Post.module.css'

export function Post(){
    return (
        <section>
            <header className={post.hero}>
                <div className={post.author}>
                <img 
                    className={post.img}
                    src="https://avatars.githubusercontent.com/u/167707073?v=4" 
                />
                    <div className={post.head}>
                        <strong>Cauê Alves</strong>
                        <span>UI Design</span>
                    </div>
                </div>
                <time>Pública há 1hr</time>
            </header>

            <div className={post.infos}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis non quae accusantium minima! Eligendi et at vel facilis inventore molestiae explicabo, ad placeat cumque? Dignissimos voluptates deleniti officiis in architecto?</p>
            </div>
        </section>
    );
}