import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceBanner from "../assets/service-banner.jpg"

export default function Service () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={serviceBanner}
                title="Service Page"
                btnClass="hide"
            />
        </>
    )
}