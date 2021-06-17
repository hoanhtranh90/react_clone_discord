import { useParams } from "react-router-dom";
import Main from './ChatComponent/Main'
import SlideBar from './SlideBar/index'
import NavBar from './NavBar/Navbar'
import './index.css'
const Channels = () => {
    let { id } = useParams();
    return (
        <div className="App">
            <div className="NavBar"><NavBar/></div>
            <div className="SlideBar">
                <SlideBar/>
            </div>
            
            <div className="MainChat"><Main id={id}/></div>
            <div className="RightBar">rightBar</div>
            {/* channels: {id}  */}
           
        </div>
    )
}
export default Channels;