import { useParams } from "react-router-dom";
import Main from './ChatComponent/Main'
import SlideBar from './SlideBar/index'
import './index.css'
const Channels = () => {
    let { id } = useParams();
    return (
        <div className="App">
            <div className="Bar">
                <SlideBar/>
            </div>
            channels: {id} 
            <Main id={id}/>
        </div>
    )
}
export default Channels;