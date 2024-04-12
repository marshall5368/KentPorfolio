import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function About(){
    return(
    <div className="title" >
        <h1 className="titlehead"id="about">About me</h1>
        <div className="about">
            
                <div className="img">
                    <img src="src\assets\Profile-removebg-preview.png" alt="" />
                </div>
                <div className="textAbout">
                    <h1 className="name">I'am Kent Clarence Evangelista</h1>
                    <h2>I'am an First Year IT students From NCC</h2>
                    <h2>I'am 18 Years Old</h2>

                    <p>I'm a dedicated college student with a robust proficiency in front-end development, adeptly handling HTML, CSS, and JavaScript. Currently honing my skills in React. With a strong foundation in programming, I effectively manage my time to tackle both projects and life commitments with precision.
                    </p>
                    <div className="links">
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaYoutube /></a>
                        <a href=""><FaTiktok /></a>
                        <a href=""><FaInstagramSquare /></a>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default About