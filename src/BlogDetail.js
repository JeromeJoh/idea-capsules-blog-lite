import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {
  const { id } = useParams()
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method: 'DELETE',
    }).then(() => {
      
      history.push('/')
    })
  }

  return (
    <div className="blog-detail">
      { isPending && <h3>Loading...</h3>}
      { error && <h3>{ error }</h3>}
      { blog && (
        <article className='blog-detail'>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetail;