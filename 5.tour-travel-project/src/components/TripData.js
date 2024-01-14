import "./Trip.css";

export default function TripData (props) {
    return (
        <div className="t-card">
            <div className="t-img">
                <img src={props.image} alt="Image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}