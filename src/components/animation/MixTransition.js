import React, {useState} from 'react';
import './Animation.css';
import Button from '../UI/button/button';
import { CSSTransition,TransitionGroup } from 'react-transition-group';


const MixTransition = () => {

    const [items, setItems] = useState([{'id': 0}])

    const addItem = () => {
        const newItems = [...items];
        newItems.push({'id': items.length});
        setItems(newItems);
    }

    const deleteItems = (index) => {
       const currentItems=[...items] ;
        currentItems.splice(index,1);
        setItems(currentItems);
    }
    return (
        <div   style={{display:'flex',flexflow:'column',marginTop: '70px'}}>

            <Button btnType="danger" clicked={addItem}>AddItem</Button>

            <TransitionGroup className="todo-list">
            {
                items.map((item)=>{
                    return(
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="item"
                        >
                        <div className='box' key={item.id}
                             onClick={()=>deleteItems(item.id)}>
                            <h1>Item{item.id}</h1>
                        </div>
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>

        </div>
    )

}
export default MixTransition;