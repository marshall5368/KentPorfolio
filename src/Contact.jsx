import { IoIosSend } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Contact (){
    return(
        <div className="contact" id="contacts">
            <h1 className="titlehead">Contact</h1>
                <div className="containerContact">
                    <div className="info">
                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                    </div>
                    <div className="message">
                    <input type="" placeholder="Message" className="MessageBox" />
                    <button><IoIosSend /></button>
                    </div>
                    <div className="contacts">
                        <div className="small">
                            <p>Other contacts</p>
                        </div>
                        <div className="socials">
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
export default Contact