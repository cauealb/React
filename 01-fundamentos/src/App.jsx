import { Post } from "./Components/Post"

export function App() {

  return (
    <div>
      <Post
      autor="Cauê"
      content="Um post sobre React"
    />

    <Post
      autor="Gabriel"
      content="Um post sobre Angular"
    />
    </div>
  )
}
