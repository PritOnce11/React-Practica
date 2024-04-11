import { Route, Routes } from "react-router-dom";
import RickMorty from "./pages/Navigate/RickMorty";
import RickMortyAll from "./pages/Navigate/RickMortyAll";
import HomePage from "./pages/Navigate/HomePage";
import StyledEmotionApp from "./styled_emotion/StyledEmotionApp";
import Hotels from "./pages/Navigate/Hotels";

export default function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rickMorty" element={<RickMorty />} />
            <Route path="/rickMortyAll" element={<RickMortyAll />} />
            <Route path="/form" element={<StyledEmotionApp />} />
            <Route path="/hotels" element={<Hotels />} />
        </Routes>
    )
}