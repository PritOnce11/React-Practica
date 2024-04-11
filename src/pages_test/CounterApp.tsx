import { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div style={{textAlign: 'center'}}>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}