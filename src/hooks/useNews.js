import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useSearchBook(query) {
  if (!query) {
    query = 'tesla'
  }

  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    const getNews = () => {
      fetch(url)
        .then((res) => {
          // Unfortunately, fetch doesn't send (404 error)
          // into the cache itself
          // You have to send it, as I have done below
          if (res.status >= 400) {
            throw new Error('Server responds with error!')
          }
          return res.json()
        })
        .then(
          (news) => {
            setData(news)
            setIsLoading(false)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components
          (err) => {
            setError(err)
            setIsLoading(false)
          }
        )
    }
    getNews()
  }, [query])

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((_res) => {
  //       setData([])
  //       console.log(_res.data)
  //       setData(_res.data)
  //     })
  //     .catch((error) => {
  //       setError(error.message)
  //     })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query])

  return { data, error, isLoading }
}
