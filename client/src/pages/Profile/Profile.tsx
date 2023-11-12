import { FriendsList } from '../../components/FriendsList/FriendsList'
import { SideBar } from '../../components/SideBar/SideBar'
import { Wrapper } from '../../components/UI/Wrapper'
import { useSearchFriend } from '../../hooks/useFind'
import { Friends } from '../Friends/Friends'
import cl from './Profile.module.scss'
import {FiUser, FiHome, FiSettings} from 'react-icons/fi'
import {useState} from 'react'
import { IUser } from '../../models/IUser'
import { IFriend } from '../../models/IFriend'
import { Input } from '../../components/UI/Input/Input'

interface Props {
    
}

export const Profile: React.FC<Props> = () => {
    const [friends, setFriends] = useState<IFriend[]>([{username: 'LKRN', status: 'legend', avatar: 'a'}, {username: 'Eptaaaaaaaaaaaaa', status: 'legend', avatar: 'a'}])
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<'friends' | 'subscribers' | 'subscriptions'>('friends')
    const searchedFriends = useSearchFriend(friends, search)
    return (
        <div className={cl.profile}>
            <SideBar/>
            <Wrapper className={cl.content}>
            <div className={cl.profileInfo}>
                <div className={cl.avatarContainer}>
                    <img className={cl.avatar} src="" alt="" />
                </div>
                <h3 className={cl.username}>LKRN</h3>
                <h5 className={cl.status}>Do pet-projects</h5>
            </div>
            <div className={cl.profileStats}>
                    <div className={cl.profileStats__header}>
                        <h3 className={cl.profileStats__title}>СТАТИСТИКА ПРОФИЛЯ</h3>
                        <a title='настройка профиля / profile settings' className={cl.ico}><FiSettings/></a>

                    </div>
                    <div className={cl.profileStats__body}>
                        <div className={[cl.friends, cl.card].join(' ')}>
                            <div>
                            <div className={cl.friends__header}>
                                <h5 className={cl.friends__title}>Друзья</h5>
                                
                            </div>
                            <div className={cl.friends__main}>
                            {category === 'friends' && 
                                <>
                                    <Input
                                type='text'
                                styles={{width: '100%'}}
                                placeholder='ВВЕДИТЕ ИМЯ'
                                value={search}
                                handleChange={(e) => setSearch(e.target.value)}
                            />
                                <FriendsList friends={searchedFriends} />
                                
                                </>
                            }
                            {category === 'subscriptions' && 
                                <>
                                    <Input
                                type='text'
                                styles={{width: '100%'}}
                                placeholder='ВВЕДИТЕ ИМЯ'
                                value={search}
                                handleChange={(e) => setSearch(e.target.value)}
                            />
                                
                                
                                </>
                            }
                            {category === 'subscribers' && 
                                <>
                                    
                                <FriendsList friends={searchedFriends} />
                                
                                </>
                            }
                            </div>
                            </div>
                            <div className={cl.friends__footer}>
                                <ul className={cl.friends__menu}>
                                    <li className={cl.friends__menu_item} onClick={() => setCategory('friends')}>Друзья</li>
                                    <li className={cl.friends__menu_item} onClick={() => setCategory('subscriptions')}>Подписки</li>
                                    <li className={cl.friends__menu_item} onClick={() => setCategory('subscribers')}>Подписчики</li>
                                </ul>
                            </div>
                        </div>
                        <div className={[cl.rating, cl.card].join(' ')}></div>
                        <div className={[cl.stats, cl.card].join(' ')}></div>
                        <div className={[cl.one, cl.card].join(' ')}></div>
                        <div className={[cl.two, cl.card].join(' ')}></div>
                        <div className={[cl.three, cl.card].join(' ')}></div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}