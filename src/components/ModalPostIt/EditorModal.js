/**
 * Created by caiqu on 07/03/2018.
 */
import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

class EditorModal extends React.Component {
    constructor(props) {
        super(props);
        if (props.value)
            this.state = {editorState: EditorState.createWithContent(ContentState.createFromText(props.value))};
        else
            this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => {
            const value = stateToHTML(editorState.getCurrentContent()).split('</p>')[0].split('<p>')[1];
            this.setState({editorState}, () => props.onChange({target: {value, name: this.props.name}}))
        };
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} value={this.props.value} onChange={this.onChange}/>
        );
    }
}

export default EditorModal