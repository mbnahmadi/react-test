import profilepic from "./assets/turtle.jpg"

function Card(){
    return(
        <div className="card">
            <img alt="profile picture" src={profilepic} className="card-img"></img>
            <h2 className="card-title">Mobin Ahmadi</h2>
            <p className="card-text">I am a web programmer and I learning React</p>
        </div>
    );
}


export default Card