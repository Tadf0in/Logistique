export default function Input({ type, name, placeholder, get, set }) {
    return <input type={type} placeholder={placeholder} name={name} required
        value={get} 
        onChange={ (e) => set(name, e.target.value)
    }/>
}

export function Select({name, options, get, set}) {
    return <select name={name} required value={get} onChange={(e) => set(name, e.target.value)}>
        { options.map((o, i) => 
            <option key={i}>{o}</option>
        )}
    </select>
}