import React from 'react';

class CardViewer extends React.Component {

    render () {
        return (
            <div>
                <h2> This is the Viewer</h2>
                <hr/>
                <button onClick={this.props.switchMode}>Switch to Editor</button>
            </div>
        )
    }
}

export default CardViewer