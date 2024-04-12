import { Link } from "react-scroll";

function Introduction(){
    return(
    <div className="introduction">

        <div className="textinfo">
            <h3>Hello</h3>
            <h1>Iam Kent Clarence Evangelista</h1>
            <p>Iam a First Year College Student and Iam a front end developer</p>
            <button ><Link to="about"  smooth={true}  offset={0}   duration={500}>About Me</Link></button>
        </div>
            
    </div>
    )
}
export default Introduction