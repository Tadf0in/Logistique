export default function Input({ type, name='', placeholder='', className='', required=true, get, set }) {
    return <input type={type} placeholder={placeholder} className={className} name={name} id={name} required={required}
        value={get} 
        onChange={ (e) => set(name, e.target.value)}
    />
}

export function Select({name, options, get, set}) {
    return <select name={name} value={get} onChange={(e) => set(name, e.target.value)}>
        <option value='' style={{fontStyle: 'italic', color: '#777', backgroundColor: 'white'}}>Indéfini</option>
        { options.map((o, i) => 
            <option key={i}>{o}</option>
        )}
    </select>
}