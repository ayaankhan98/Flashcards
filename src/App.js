import React from 'react';
import CardEditor from './cardeditor'
import CardViewer from './cardviewer'


class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          editor : true,
          cards : [],
          }
  }

  render() {
      if (this.state.editor){
          return (<CardEditor 
                      cards = {this.state.cards}
                      switchMode={this.switchMode}
                      addCard={this.addCard}
                      deleteCard = {this.deleteCard} 
                  />)
      } else {
          return (<CardViewer 
                      cards = {this.state.cards}
                      switchMode={this.switchMode} 
                  />)
      }
  }

  switchMode = () => {
      this.setState(state => ({
          editor: !state.editor,
      }))
  }

  addCard = (front, back) => {
      this.setState(state => ({
          cards : [...state.cards,{front, back}],
      }))
  }

  deleteCard = (index) => {
      this.setState(state => {
          const cards = [...state.cards]
          cards.splice(index,1)
          return {
              cards : cards
          }
      })
  }
}

export default App;
