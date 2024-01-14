import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutBanner from "../assets/about-banner.jpg"

export default function About () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={aboutBanner}
                title="About Page"
                btnClass="hide"
            />
        </>
    )
}