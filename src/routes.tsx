import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Default from './style';

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Default />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}