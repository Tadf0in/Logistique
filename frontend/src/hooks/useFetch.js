import { useEffect, useState } from "react"

export default function useFetch (url, options, dependencies) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        async function get() {
            console.log('fetch')
            await fetch('http://localhost:8000' + url, {
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
        }
        get()
        let interval = setInterval(() => get(), 10000)

        return () => {
            clearInterval(interval)
        }
    }, dependencies)

    return {
        loading, data, errors
    }
}