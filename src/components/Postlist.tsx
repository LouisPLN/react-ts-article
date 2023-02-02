import { useNavigate } from 'react-router-dom'
import { PostsType } from '../interfaces'

interface PostsTypeProps {
  allPosts: PostsType[] | null
}

export const Postlist: React.FC<PostsTypeProps> = ({ allPosts }) => {
  const navigate = useNavigate()

  return (
    <ul className="w-9/12 grid gap-6 grid-cols-3 my-6">
      {allPosts?.map((post) => (
        <li
          className="card bg-base-100 shadow-xl border-solid border-2"
          key={post.id}
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="btn btn-active btn-link" onClick={() => navigate(`/articles/${post.id}`)}>
              Lire l'article
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
