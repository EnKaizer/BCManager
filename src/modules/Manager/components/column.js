/**
 * Created by caiqu on 24/02/2018.
 */
import React, {Component} from 'react';
import PostIt from './postit';
import { DropTarget } from 'react-dnd';
import ReactDOM from 'react-dom';

const DropTargetColumn = {
    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = ReactDOM.findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {
        // Obtain the dragged item
        const item = monitor.getItem();
        console.log({props, monitor, component, item})
        component.props.onChange(item, component.props.id, item.oldId);
        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true };
    }
};

function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}


class Column extends Component {
    render() {
        const { position } = this.props;

        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isOver, canDrop, connectDropTarget } = this.props;
        console.log('tasks', this.props.tasks);
        return connectDropTarget(
            <div className="column">
                <span>{this.props.name} </span>
                <div>
                    {this.props.tasks.map(task => {
                        return <PostIt oldId={this.props.id} {...task}/>
                    })}
                </div>
            </div>
        )
    }

}

export default DropTarget('PostIt', DropTargetColumn, collect)(Column);