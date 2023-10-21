export default function Input({ type, name, placeholder, get, set }) {
    return <input type={type} placeholder={placeholder} name={name} required
        value={get} 
        onChange={ (e) => set(name, e.target.value)
    }/>
}