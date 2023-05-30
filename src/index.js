import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from "./components/Navbar";
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
import Playlist from './components/Playlist';
import Page404 from './components/Page404';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<App />} />
                <Route path="colorPicker" element={<ColorPicker />}/>
                <Route path="counter" element={<Counter />}/>
                <Route path="playlist" element={<Playlist />}/>
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();