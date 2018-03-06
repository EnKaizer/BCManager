/**
 * Created by caiqu on 24/02/2018.
 */
import React, {Component} from 'react';
import "./postit.css";
import {DragSource} from 'react-dnd';
import Preview from './preview';
import {Rating, ModalPostIt} from '../../../components';
const cardSource = {
    beginDrag(props) {
        return {...props
        };
    },
    isDragging(props, monitor) {
        // If your component gets unmounted while dragged
        // (like a card in Kanban board dragged between lists)
        // you can implement something like this to keep its
        // appearance dragged:
        return monitor.getItem().id === props.id;
    },

    endDrag(props, monitor, component) {

        // When dropped on a compatible target, do something.
        // Read the original dragged item from getItem():
        const item = monitor.getItem();

        // You may also read the drop result from the drop target
        // that handled the drop, if it returned an object from
        // its drop() method.
        const dropResult = monitor.getDropResult();
        console.log(dropResult, item);
    }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class PostIt extends Component {


    render() {
        const {isDragging, connectDragSource, description, name,evaluation, color} = this.props;
        return connectDragSource(
            <div>
                <div style={{opacity: isDragging ? 0.5 : 1, cursor: 'move', color}} className="postit">
                    <div className="containerTitle">
                        <label>Titulo</label>
                        <span className="titlePostit">{name}</span>
                    </div>
                    <div className="containerDesc">
                        <label>Descrição</label>
                        <span className="textPostit">{description}</span>
                    </div>
                    <div className="containerDesc">
                        <label>Avaliação</label>
                        <Rating rate={evaluation ? evaluation : 0}/>
                    </div>
                </div>
                <Preview {...this.props}/>
            </div>, {dropEffect: 'move'}
        );
    }
}

export default DragSource('PostIt', cardSource, collect)(PostIt);
