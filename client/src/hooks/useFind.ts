import {useMemo} from 'react'
import { IFriend } from '../models/IFriend'


export const useSearchFriend = (friends: IFriend[], request: string) => {
    const searchedFriends= useMemo(() => {
        return friends.filter((friend: IFriend) => friend.username.toUpperCase().includes(request.toUpperCase()))
    }, [friends, request])

    return searchedFriends
}