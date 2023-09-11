import { useState } from "react";
import "./App.scss";
import Navbar from "./Components/navbar/Navbar";
import Background from "./Components/background/Background";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Background />
            <div className="App">
                <div className="content">
                    <Navbar />
                </div>
            </div>
        </>
    );
}

export default App;
