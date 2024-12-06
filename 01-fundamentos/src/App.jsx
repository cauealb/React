import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import AppCSS from './Components/App.module.css'
import { SideBar } from "./Components/Sidebar"

export function App() {

  return (
    <div>
      <Header />

      <div className={AppCSS.wapper}>
        <SideBar />
        <main>
        <Post
          autor="Cauê"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet nisi aut corporis, quaerat distinctio neque architecto. Aliquam magnam culpa dolorum deserunt laudantium! Soluta odio veritatis sequi repudiandae ab reiciendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet nisi aut corporis, quaerat distinctio neque architecto. Aliquam magnam culpa dolorum deserunt laudantium! Soluta odio veritatis sequi repudiandae ab reiciendis?"
        />

        <Post
          autor="Gabriel"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet nisi aut corporis, quaerat distinctio neque architecto. Aliquam magnam culpa dolorum deserunt laudantium! Soluta odio veritatis sequi repudiandae ab reiciendis?"
        />
        </main>
      </div>
    </div>
  )
}