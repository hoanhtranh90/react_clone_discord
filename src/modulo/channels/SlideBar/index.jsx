import './slideBar.css'
import { Avatar } from 'antd';
const SlideBar = () => {
    return (
        <div>
            <ul className="listUser1">
                <li className="chatLine1">
                    <div>
                        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                            U
                        </Avatar>
                    </div>
                    <div>
                        <div className="userName1">
                            User 1
                        </div>
                    </div>
                </li>
                <li className="chatLine1">
                <div>
                        <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large">
                            A
                        </Avatar>
                    </div>
                    <div>
                        <div className="userName1">
                            User 1
                        </div>
                    </div>
                </li>
                <li className="chatLine1">
                <div>
                        <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="large">
                            B
                        </Avatar>
                    </div>
                    <div>
                        <div className="userName1">
                            User 1
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default SlideBar;