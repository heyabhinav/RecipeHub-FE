import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QouteSection from "../components/QuoteSection";
import ChiefsSection from "../components/ChiefsSection";

// import React, {useEffect, useState} from "react";


export default function Home(){

    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     fetch("/home").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             console.log(data);
    //             setUser(data);
    //         }
    //     );
    // }, []);

    return (
        <div>

            {/* {(typeof user.msg != "undefined") ? (<h3>{user.msg}</h3>) : (<h3>Home</h3>)} */}

            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}