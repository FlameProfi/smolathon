import cl from './SideBar.module.scss'

import { Link } from "react-router-dom";
// import {IoSettingsOutline} from 'react-icons/io'
import {FaRegNewspaper} from 'react-icons/fa'
import {FiUser, FiHome, FiSettings} from 'react-icons/fi'
import {TbDoorExit} from 'react-icons/tb'



interface Props {
    
}



export const SideBar: React.FC<Props> = () => {
    
    return (
        <div className={cl.sideBar}>
            <img src="" alt="logo" />
            <nav className={cl.menu}>
                <ul className={cl.menuList}>
                    <Link className={cl.link} to={'/'}><FiHome className={cl.icon}/></Link>
                    <Link className={cl.link} to={'/profile'}><FiUser className={cl.icon}/></Link>
                    <Link className={cl.link} to={'/info'}><FaRegNewspaper className={cl.icon}/></Link>
                    <Link className={cl.link} to={'/friends'}><FaRegNewspaper className={cl.icon}/></Link>
                    
                    <Link className={cl.link} to={'/settings'}><FiSettings className={cl.icon}/></Link>
                </ul>
            </nav>

            
        </div>
    )
}

