/**
 * Created by caiqu on 24/02/2018.
 */

import React, {Component} from 'react';
import DragLayer from 'react-dnd/lib/DragLayer';
import './postit.css';
function collect(monitor) {
    var item = monitor.getItem();
    return {
        id: item && item.id,
        name: item && item.name,
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0
};

function getItemStyles(props) {
    const {currentOffset} = props;
    if (!currentOffset) {
        return {
            display: 'none'
        };
    }

    const {x, y} = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform: transform,
        WebkitTransform: transform
    };
}
class ItemPreview extends Component {
    render() {
        const {isDragging} = this.props;
        if (!isDragging) {
            return null
        }

        return (
            <div style={layerStyles}>
                <div style={getItemStyles(this.props)}>
                    <div className="postit">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

export default DragLayer(collect)(ItemPreview);