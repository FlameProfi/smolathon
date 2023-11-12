import { Wrapper } from '../../../components/UI/Wrapper'
import cl from './Puzzle.module.scss'
import puzzle_0_0 from './assets/puzzles/0_0.png'
import puzzle_0_1 from './assets/puzzles/0_1.png'
import puzzle_0_2 from './assets/puzzles/0_2.png'
import puzzle_0_3 from './assets/puzzles/0_3.png'
import puzzle_1_0 from './assets/puzzles/1_0.png'
import puzzle_1_1 from './assets/puzzles/1_1.png'
import puzzle_1_2 from './assets/puzzles/1_2.png'
import puzzle_1_3 from './assets/puzzles/1_3.png'
import puzzle_2_0 from './assets/puzzles/2_0.png'
import puzzle_2_1 from './assets/puzzles/2_1.png'
import puzzle_2_2 from './assets/puzzles/2_2.png'
import puzzle_2_3 from './assets/puzzles/2_3.png'
import {useState} from 'react'
import {BsFillPauseFill, BsPause} from 'react-icons/bs'

interface IBoard<T> {
    className: string;
    id: number;
    items: T[];
}

interface IDragItem {
    id: string;
    src: string;
    className: string;
    
}

interface IDropItem{
    correctId: string;
   
}   

interface IDropContainer {
    dropItem: IDragItem;
    correctId: string;
}


interface Props {
    
}

export const Puzzle: React.FC<Props> = () => {
    // const [puzzles, setPuzzles] = useState([
    //     {id: '0_0', src: puzzle_0_0, className: [cl.puzzle].join(' ')},
    //     {id: '0_1', src: puzzle_0_1, className: [cl.puzzle].join(' ')},
    //     {id: '0_2', src: puzzle_0_2, className: [cl.puzzle, cl.leftLedge].join(' ')},
    //     {id: '0_3', src: puzzle_0_3, className: [cl.puzzle, cl.leftLedge].join(' ')},
    //     {id: '1_0', src: puzzle_1_0, className: [cl.puzzle, cl.bottomLedge].join(' ')},
    //     {id: '1_1', src: puzzle_1_1, className: [cl.puzzle, cl.topLedge].join(' ')},
    //     {id: '1_2', src: puzzle_1_2, className: [cl.puzzle, cl.bottomLedge].join(' ')},
    //     {id: '1_3', src: puzzle_1_3, className: [cl.puzzle, cl.topLedge, cl.bottomLedge, cl.leftLedge].join(' ')},
    //     {id: '2_0', src: puzzle_2_0, className: [cl.puzzle].join(' ')},
    //     {id: '2_1', src: puzzle_2_1, className:[ cl.puzzle, cl.topLedge].join(' ')},
    //     {id: '2_2', src: puzzle_2_2, className: [cl.puzzle, cl.leftLedge].join(' ')},
    //     {id: '2_3', src: puzzle_2_3, className: [cl.puzzle].join(' ')},

    // ])

    
    const [dragBoard, setDragBoard] = useState<IBoard<IDragItem>>(
        {id: 0, className: cl.dragBoard, items: [
            {id: '0_0', src: puzzle_0_0, className: [cl.puzzle].join(' ')},
            {id: '0_1', src: puzzle_0_1, className: [cl.puzzle].join(' ')},
            {id: '0_2', src: puzzle_0_2, className: [cl.puzzle, cl.leftLedge].join(' ')},
            {id: '0_3', src: puzzle_0_3, className: [cl.puzzle, cl.leftLedge].join(' ')},
            {id: '1_0', src: puzzle_1_0, className: [cl.puzzle, cl.bottomLedge].join(' ')},
            {id: '1_1', src: puzzle_1_1, className: [cl.puzzle, cl.topLedge].join(' ')},
            {id: '1_2', src: puzzle_1_2, className: [cl.puzzle, cl.bottomLedge].join(' ')},
            {id: '1_3', src: puzzle_1_3, className: [cl.puzzle, cl.topLedge, cl.bottomLedge, cl.leftLedge].join(' ')},
            {id: '2_0', src: puzzle_2_0, className: [cl.puzzle].join(' ')},
            {id: '2_1', src: puzzle_2_1, className:[ cl.puzzle, cl.topLedge].join(' ')},
            {id: '2_2', src: puzzle_2_2, className: [cl.puzzle, cl.leftLedge].join(' ')},
            {id: '2_3', src: puzzle_2_3, className: [cl.puzzle].join(' ')},
        ]}
    )
    const [dropBoard, setDropBoard] = useState<IBoard<IDropContainer>>(
       {id: 1, className: cl.dropBoard, items: [
        {dropItem: {} as IDragItem, correctId: '0_0'},
        {dropItem: {} as IDragItem, correctId: '0_1'},
        {dropItem: {} as IDragItem, correctId: '0_2'},
        {dropItem: {} as IDragItem,correctId: '0_3'},
        {dropItem: {} as IDragItem,correctId: '1_0'},
        {dropItem: {} as IDragItem,correctId: '1_1'},
        {dropItem: {} as IDragItem,correctId: '1_2'},
        {dropItem: {} as IDragItem,correctId: '1_3'},
        {dropItem: {} as IDragItem,correctId: '2_0'},
        {dropItem: {} as IDragItem,correctId: '2_1'},
        {dropItem: {} as IDragItem,correctId: '2_2'},
        {dropItem: {} as IDragItem,correctId: '2_3'},
   ] }
    )
    const [currentCard, setCurrentCard] = useState<null | IDragItem>(null);
    const [currentBoard, setCurrentBoard] = useState<null | IBoard<IDragItem>>(null);
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // e.preventDefault();
        if (e.target instanceof HTMLElement)
        e.dataTransfer.setData("text", e.target.id);
        // setCurrentBoard(board);
        // setCurrentCard(card);

    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLElement){
            if(e.target.nodeName.toLowerCase() === "img") {
                return true;
              }
              e.preventDefault();
        }
        
        // e.preventDefault();
        // const target = e.target;
        // if (target instanceof HTMLElement) {
        //     target.style.boxShadow = '0 0 5px 5px rgba(0, 0, 0, .6)'
        // }
       
        // if(target.nodeName.toLowerCase() === "img") {
        //     return true;
        //   }
        
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        
        const target = e.target;
        if (target instanceof HTMLElement) {
            target.style.boxShadow='none'
        }
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLElement) {
            e.preventDefault();
            const imageId = e.dataTransfer.getData("text");
            e.target.appendChild(document.getElementById(imageId)!);
        }
        // const target = e.target;
        // if (currentCard && currentBoard) {
        //     const currentIndex = currentBoard.items.indexOf(currentCard)
        //     currentBoard.items.splice(currentIndex, 1);
        //     const dropIndex = dropBoard.items.indexOf(card)
        //     currentBoard.items.splice(currentIndex, 1);
            
        // }
        
        // if (target instanceof HTMLElement) {
        //     target.style.boxShadow = 'none'
        //     const imageId = e.dataTransfer.getData("text");
        //     e.target.appendChild(document.getElementById(imageId));
        // }
       

        
    }
    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.target;
        console.log(target)
        if (target instanceof HTMLElement) {
            target.style.boxShadow = 'none'
        }
    }
    return (
        <div className={cl.puzzlePage}>
            <header className={cl.puzzlePage__header}><BsPause/> </header>
            <main className={cl.puzzlePage__main}>
               
                
                    <Wrapper className={cl.container}>
                        <div className={dropBoard.className}>
                            {dropBoard.items.map((item) => 
                                <div className={cl.dropBoard__col} datatype={item.correctId} key={item.correctId}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragLeave={(e) => dragLeaveHandler(e)}
                                    onDrop={(e) => dropHandler(e)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                ></div>
                            )}
                                
                        </div>
                    </Wrapper>
                    
              
            </main>
            <div className={dragBoard.className}>
                   {dragBoard.items.map((puzzle) => 
                        <div draggable="true" className={cl.puzzleContainer} onDragStart={(e) => dragStartHandler(e)} key={puzzle.id}>
                            <img 
                                src={puzzle.src} 
                                alt="puzzle" 
                                className={puzzle.className}
                                id={puzzle.id}
                                
                            />
                        </div>
                    )}
                </div>
        </div>
    )
}