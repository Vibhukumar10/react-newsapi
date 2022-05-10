import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useSearchBook(query) {
  if (!query) {
    query = 'tesla'
  }

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    setIsloading(true)
    axios
      .get(url)
      .then((_res) => {
        setData([])
        console.log(_res.data)
        setData(_res.data)
      })
      .catch((error) => {
        setError(error.message)
      })
    setIsloading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { data, error, isLoading }
}
