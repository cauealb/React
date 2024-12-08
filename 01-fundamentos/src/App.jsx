import AppCSS from './App.module.css'
import { Header } from "./Components/Header"
import { SideBar } from "./Components/Sidebar"
import { Post } from './Components/Post'

const api = [
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
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' }
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
              author={post.author}
              content={post.content}
              date={post.public}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}