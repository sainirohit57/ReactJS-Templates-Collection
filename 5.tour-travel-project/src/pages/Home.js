import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import homeBanner from "../assets/home-banner.jpg"

export default function Home () {
    
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg={homeBanner}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip />
        </>
    )
}