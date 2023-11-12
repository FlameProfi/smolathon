
import cl from './InviteBar.module.scss'

import {useState} from 'react'
import { useSearchFriend } from '../../hooks/useFind'
import { FriendsList } from '../FriendsList/FriendsList'
import { Input } from '../UI/Input/Input'





interface Props {
    
}



export const InviteBar: React.FC<Props> = () => {
    const [search, setSearch] = useState('');
    const searchedFriends = useSearchFriend([{username: 'LKRN', status: 'legend', avatar: 'a'}, {username: 'Eptaaaaaaaaaaaaa', status: 'legend', avatar: 'a'}], search)

    
    return (
        <div className={cl.inviteBar}>
            <Input 
                type='text'
                styles={{width: '100%'}}
                placeholder='ВВЕДИТЕ ИМЯ'
                value={search}
                handleChange={(e) => setSearch(e.target.value)}
            />
           
            <FriendsList
                friends={searchedFriends}
            />


            
        </div>
    )
}

