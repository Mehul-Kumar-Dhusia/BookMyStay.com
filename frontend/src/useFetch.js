import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data , setData] = useState([])
    useEffect(() => {
        const dataFetch = async () => {
            const res = await axios.get(url) ;
            setData(res.data)
        }
        dataFetch()
    },[url])

    return {data} ;
}

export default useFetch