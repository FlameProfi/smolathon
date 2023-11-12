import cl from './Players.module.scss'

interface Props {
    
}



export const Players: React.FC<Props> = () => {
    
    return (
        <div className={cl.players}>
            <div className={cl.playerCard}>
                <img src="" alt="avatar" className={cl.playerAvatar} />
                <h5 className={cl.playerName}>ИМЯ</h5>
                <p className={cl.playerStatus}>Do pet-projects</p>
                <button title='kick button' className={cl.kickButton}>ВЫГНАТЬ</button>
            </div>
            <div className={cl.playerCard}>
                <img src="" alt="avatar" className={cl.playerAvatar}/>
                <h5 className={cl.playerName}></h5>
                <p className={cl.playerStatus}></p>
                <button title='kick button' className={cl.kickButton}>ВЫГНАТЬ</button>
            </div>
            <div className={cl.playerCard}>
                <img src="" alt="avatar" className={cl.playerAvatar}/>
                <h5 className={cl.playerName}></h5>
                <p className={cl.playerStatus}></p>
                <button title='kick button' className={cl.kickButton}>ВЫГНАТЬ</button>
            </div>
            <div className={cl.playerCard}>
                <img src="" alt="avatar" className={cl.playerAvatar}/>
                <h5 className={cl.playerName}></h5>
                <p className={cl.playerStatus}></p>
                <button title='kick button' className={cl.kickButton}>ВЫГНАТЬ</button>
            </div>
        </div>
    )
}

