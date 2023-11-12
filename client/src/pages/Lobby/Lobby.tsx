import { InviteBar } from "../../components/InviteBar/InviteBar"
import { Players } from "../../components/Players/Players"
import { SideBar } from "../../components/SideBar/SideBar"
import { Wrapper } from "../../components/UI/Wrapper"
import cl from './Lobby.module.scss'
interface Props {
    
}

export const Lobby: React.FC<Props> = () => {
    return (
        <div className={cl.lobby}>
           <Wrapper>
                <SideBar/>
                <Players/>
                <InviteBar/>
           </Wrapper>
        </div>
    )
}