
import cl from './Friends.module.scss'
import {useState} from 'react'
import { SideBar } from '../../components/SideBar/SideBar';
import { Input } from '../../components/UI/Input/Input';
import { IFriend } from '../../models/IFriend';
import { FriendCard } from '../../components/FriendCard/FriendCard';
interface Props {
    
}

export const Friends: React.FC<Props> = () => {
    const [friendName, setFriendName] = useState('');
    const [friends, setFriends] = useState<IFriend[]>([])
    return (
        <div className={cl.friends}>
            <SideBar/>

            <div className={cl.friendsContainer}>
                <h3 className={cl.friendsContainer__title}>ДРУЗЬЯ</h3>
                <div>
                    <Input
                        type='text'
                        placeholder='ВВЕДИТЕ ИМЯ'
                        value={friendName}
                        handleChange={(e) => setFriendName(e.target.value)}
                        styles={{width: '100% '}}
                    />
                    <button className={cl.friendsContainer__sort}></button>
                </div>
                <ul className={cl.friendsContainer__list}>
                    {friends.map((friend) => 
                        <FriendCard
                            avatar={friend.avatar}
                            status={friend.status}
                            username={friend.username}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}