import { FETCH_ARTICLES } from "./type";

export const fetchArticle = () => {

  return async (dispatch) => {
    const fetchArticle = await fetch('https://jsonplaceholder.typicode.com/posts')

    const json = await fetchArticle.json()

    // console.log(json);
    dispatch({
      type: FETCH_ARTICLES,
      payload: json
    })
  }
}