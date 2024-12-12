import AppCSS from './App.module.css'
import { Header } from "./Components/Header.tsx"
import { SideBar } from "./Components/Sidebar.tsx"
import { Post, PostInteface } from './Components/Post.tsx'

const api: PostInteface[] = [
  {
      id: 1,
      author: {
          authorName: "Cauê Alves",
          auhtorUrl: "https://avatars.githubusercontent.com/u/167707073?v=4",
          role: "Full-Stack Developer"
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' }
      ],
      public: new Date('2024-12-08 08:00:00')
  },
  {
      id: 2,
      author: {
          authorName: "Geovanna Vasconcelos",
          auhtorUrl: "https://avatars.githubusercontent.com/u/167707073?v=4",
          role: "Web Developer"
      },
      content: [
          { type: 'paragraph', content: 'Bom dia a todos 👋' },
          { type: 'paragraph', content: 'Acabei de consegui fazer aquele depoy da minha aplicação com Java com Angular, estou bastante feliz. Quem puder dar um feedback, ficarei muito agradecida!! Segue abaixo o link da aplicação. 🚀' },
          { type: 'link', content: 'www.pitica-deploy.com.br' }
      ],
      public: new Date('2024-12-05 08:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={AppCSS.wapper}>
        <SideBar />
        <main>
        {api.map(post => {
          return (
            <Post 
              key={post.id}
              postPost={post}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}