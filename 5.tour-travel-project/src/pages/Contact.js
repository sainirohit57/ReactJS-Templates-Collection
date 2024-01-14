import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactBanner from "../assets/contact-banner.jpg"

export default function Contact () {
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-mid"
                heroImg={contactBanner}
                title="Contact Page"
                btnClass="hide"
            />
        </>
    )
}