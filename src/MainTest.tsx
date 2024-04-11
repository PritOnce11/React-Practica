import { Navbar } from "./pages/Navbar";
import CounterApp from "./pages_test/CounterApp";

export default function MainTest() {
    return (
        <div>
            <Navbar/>
            <hr />
            <h1 style={{textAlign: 'center'}}>Test</h1>

            <p style={{textAlign: 'center'}}>This is a test</p>

            <CounterApp/>
        </div>
    )
}