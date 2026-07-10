

export default function Counter({countvalue,onclick}){
    return <div>
        
        <p>{countvalue}</p>
        <button onClick={onclick}>Increment Count</button>
    </div>
}