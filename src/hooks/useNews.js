import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useSearchBook(query, pageNum) {
  if (!query) {
    query = 'tesla'
  }

  pageNum += 1

  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: query, lang: 'en', page: pageNum, page_size: 25 },
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      'X-RapidAPI-Key': '1a0231936emshaff72195ec4a566p1f4a6ejsn963bbb1dcad6'
    }
  }

  useEffect(() => {
    axios
      .request(options)
      .then((_res) => {
        setIsLoading(true)
        setData([])
        console.log(_res.data)
        setData(_res.data)
        // setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        setError(error)
        // setIsLoading(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageNum])

  return { data, error, isLoading, setIsLoading }
}
