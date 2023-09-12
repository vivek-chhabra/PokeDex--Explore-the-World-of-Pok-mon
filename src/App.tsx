import { useState } from "react";
import "./App.scss";
import Navbar from "./Components/navbar/Navbar";
import Background from "./Components/background/Background";
import {Routes, Route} from 'react-router-dom'
import About from "./Pages/about/About";
import Compare from "./Pages/compare/Compare";
import Pokemon from "./Pages/pokemon/Pokemon";
import MyList from "./Pages/mylist/MyList";
import Search from "./Pages/search/Search";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Background />
            <div className="App">
                <div className="content">
                    <Navbar />
                    <Routes>
                      <Route path="/search" element={<Search/>}/>
                      <Route path="/list" element={<MyList/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/compare/:id" element={<Compare/>}/>
                      <Route path="/pokemon/1" element={<Pokemon/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
