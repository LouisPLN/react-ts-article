import { Route, Routes, Navigate } from 'react-router-dom'
import "./App.css"
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/articles" element={<Posts />} />
      <Route path="/articles/:id" element={<Post />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
