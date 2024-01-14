import "./Hero.css";

export default function Home (props) {
    return(
        <>
            <div className={props.cName}>
                <img alt="Banner Image" src={props.heroImg} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.btnText}</a>
                </div>
            </div>
        </>
    )
}