import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";


function Skills(){
    return(
        <div className="Skills" >
            <h1 className="titlehead" id="skills">Skills</h1>
            <div className="cardContainer">

                <div className="card">
                    <div className="icon">
                    <IoLogoHtml5 />

                    </div>
                    <div className="textBoxCard">
                        <h1>Html</h1>
                        <p>I'am an expert on HTML I have created alot of projects using it.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                    <IoLogoCss3 />


                    </div>
                    <div className="textBoxCard">
                        <h1>CSS</h1>
                        <p>I'am an expert on CSS I have created alot of projects using it together  with HTML.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                    <IoLogoJavascript />


                    </div>
                    <div className="textBoxCard">
                        <h1>JavaScript</h1>
                        <p>I have Knwoledge in JavaScript and I also Created Alot of projects using it</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                    <SiCanva />


                    </div>
                    <div className="textBoxCard">
                        <h1>Canva</h1>
                        <p>I mainly sue this to create some webdesign graphics and more</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                    <SiMicrosoftpowerpoint />


                    </div>
                    <div className="textBoxCard">
                        <h1>Power Point</h1>
                        <p>I am an expert of this app using this to create awsome presentation.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                    <PiMicrosoftWordLogoFill />


                    </div>
                    <div className="textBoxCard">
                        <h1>MS Word</h1>
                        <p>I have great skills on using this app i use this to make some documents and more</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skills