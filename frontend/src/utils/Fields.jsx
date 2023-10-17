export default function Input({ type, name, placeholder, get, set }) {
    return <input type={type} placeholder={placeholder} name={name} 
        value={get} 
        onChange={ (e) => set(name, e.target.value)
    }/>
}