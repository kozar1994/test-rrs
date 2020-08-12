import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticle } from 'redux/action'
import { Link } from 'react-router-dom'

const HomeBlog = () => {

  const articlesDispach = useDispatch()
  const articles = useSelector((state)=> {
    return state.blog.articles
  })
  // console.log(articles,"--");

  if(!articles.length){
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={()=>{
            // console.log(articles);
            articlesDispach(fetchArticle())
          }}
        >Загрузити статті</button>
      </div>
    )
  }

  return articles.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-body">
          <Link to={`/${item.id}`} className="card-title">{item.title}</Link>
          <p className="card-text">{item.body}</p>
        </div>
      </div>
    )
  })
}

export default HomeBlog