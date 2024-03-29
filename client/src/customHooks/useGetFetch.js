import { useEffect } from "react"
import { useState} from "react"


const useGetFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok)
            {
                throw Error("Could not fetch the data for that resource.")
            }
            return res.json()

        })
        .then(data => {
            console.log(data);

            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })

    }, [url])


    return {data, isPending, error}
}

export default useGetFetch