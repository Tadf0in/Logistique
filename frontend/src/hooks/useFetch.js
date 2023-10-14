import { useEffect, useState } from "react"

export default function useFetch (url, options, dependencies) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        console.log('fetch')
        fetch('http://localhost:8000' + url, {
            ...options,
            headers: {
                ...options.headers,
                'Accept': 'application/json; charset=UTF-8'
            }

        }).then(res => res.json()).then(data => {
            setData(data)
        })
        .catch(err => {
            setErrors(err)
        })
        .finally(() => setLoading(false))
    }, dependencies)

    return {
        loading, data, errors
    }
}