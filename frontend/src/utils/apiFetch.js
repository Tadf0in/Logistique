export default async function apiFetch (url, options) {
    let loading = true
    let data = null
    let errors = null

    await fetch('http://localhost:8000' + url, {
        ...options,
        headers: {
            ...options.headers,
            'Accept': 'application/json; charset=UTF-8'
        }
        
    }).then(res => res.json()).then(d => {
        data = d
    })
    .catch(err => {
        errors = err
    })
    .finally(() => loading = false)

    return {
        loading, data, errors
    }
}