import { FaRegLightbulb } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { Link } from "react-scroll";


function Header(){
    
    const setDarkmode= () =>{
        document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLigthmode= () =>{
        document.querySelector("body").setAttribute('data-theme','ligth')
    }
    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkmode()
        else setLigthmode()
    }
    return(
        <header>
            
            <h1>MyPortfolio</h1>

                <ul>
                    <li><Link to="about"  smooth={true}  offset={0}   duration={500}>
                    <CgProfile /> </Link></li>
                    
                        
                    <li><Link to="skills" spy={true}   smooth={true}  offset={50}   duration={500} >
                   <FaReact /></Link></li>
                 
                        
                    <li><Link to="projects" spy={true}   smooth={true}  offset={1}   duration={500}>
                    <GrProjects /></Link></li>

                    <li><Link to="contact" spy={true}   smooth={true}  offset={50}   duration={500}>
                    <GrContact /></Link> </li>
                    
                   
                    <div className="con"><input type="checkbox" className="light" id="darkmode-toggle" onChange={toggleTheme} />
                    </div>
                    <li className="check"><FaRegLightbulb /></li>
                </ul>
                
        </header>
    )
}
export default Header