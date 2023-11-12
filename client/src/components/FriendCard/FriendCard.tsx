import styled from 'styled-components'
import cl from './FriendCard.module.scss'
import {RxEnvelopeClosed} from 'react-icons/rx'



const EnvelopeIco = styled(RxEnvelopeClosed)`
    color: lightblue;
    width: 20px;
    height: 20px;

    &:hover {
        color: white;
    }
`


interface Props {
    username: string;
    status: string;
    avatar: string;
}



export const FriendCard: React.FC<Props> = ({username, status, avatar}) => {
    
    return (
        
        <div className={cl.friendCard}>
            <div className={cl.friendCard__container}>
                <img src={avatar} alt="avatar" className={cl.friendCard__avatar} />
                <div className={cl.friendCard__info}>
                    <h5 className={cl.friendCard__name}>{username}</h5>
                    <p className={cl.friendCard__status}>{status}</p>
                </div>
            </div>
            <button title='invite button' className={cl.friendCard__invite}><EnvelopeIco /></button>
         </div>
                
           
    )
}

