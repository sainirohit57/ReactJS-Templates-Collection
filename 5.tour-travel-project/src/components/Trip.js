import "./Trip.css";
import TripData from "./TripData";
import img1 from "../assets/img-1.jpg";

export default function Trip () {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData image={img1} />
            </div>
        </div>
    )
}