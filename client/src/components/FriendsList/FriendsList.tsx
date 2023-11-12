import cl from './FriendsList.module.scss'

import { FriendCard } from '../FriendCard/FriendCard'
import { IFriend } from '../../models/IFriend'



interface Props {
    friends: IFriend[]
}



export const FriendsList: React.FC<Props> = ({friends}) => {
    
    return (

           
        <ul className={cl.friendsList}>
            {friends.map((friend) => 
                <FriendCard
                    username={friend.username}
                    avatar={friend.avatar}
                    status={friend.status}
                    key={friend.username}
                />
            )}
        </ul>


            
        
    )
}

