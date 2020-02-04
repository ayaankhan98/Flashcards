import React from 'react';
import './App.css'
class CardEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            front : "",
            back : "",
        }
    }
    
    render () {
        const rows = this.props.cards.map((card, i) => {
            return (
                <tr key={i}>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td><button data-index={i} onClick={this.deleteCard}>Delete</button></td>
                </tr>
            )
        })
        return (
            <div>
                <h2> This is the Editor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Front</th>
                            <th>Back</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <br/>
                <input onChange={this.handleChange} name="front" placeholder="Front of Card" value={this.state.front} />
                <input onChange={this.handleChange} name="back" placeholder="Back of Card" value={this.state.back} />
                <button onClick={this.addCard}>Add Card</button>
                <hr/>
                <button onClick={this.props.switchMode}>Switch to Viewer</button>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    } 

    addCard = () => {
        this.props.addCard(this.state.front, this.state.back)
        this.setState({
            front : "",
            back : "",
        })
    }

    deleteCard = (event) => {
        const index = event.target.dataset.index
        this.props.deleteCard(index)
    }

}

export default CardEditor