import React from "react";
import '../../index.css';
import Components from "./Components";
import HomeAbout from './HomeAbout';
import Location from "./Location";
import NoticeBoard from "./NoticeBoard";
import Slider from './Slider';

const Home = () => {
    return (
        <>
            <Slider/>
            <NoticeBoard/>
            <HomeAbout/>
            <Components/>
            <Location/>
        </>
    )
}

export default Home;