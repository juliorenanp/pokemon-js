import React from 'react'
import Trainer from '../components/Trainer'
import Windows from '../components/Windows'
import STORE from '../data/store'

export default class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = STORE
  }

  // Actions
  reframe = (update) => {
    const newState = Object.assign({}, this.state.frames, update)
    this.setState({ frames: newState })
  }
  attack = (move) => {
    console.log('attack: ' + move.name)
  }
  change = (pokemon) => {
    console.log('switch: ' + pokemon.name)
  }
  use = (item) => {
    console.log('use: ' + item.name)
  }
  run = () => {
    console.log('run')
  }

  render () {
    const foe = this.state.trainers[this.state.allot.right]
    const player = this.state.trainers[this.state.allot.left]

    return (
      <div className='depth'>
        <Trainer
          trainer={foe}
          currentTrainer={0} />
        <Trainer
          trainer={player}
          currentTrainer={1} />
        <Windows
          trainer={player}
          frames={this.state.frames}
          lines={this.state.lines}

          // Actions
          reframe={this.reframe}
          attack={this.attack}
          change={this.change}
          use={this.use}
          run={this.run} />
      </div>
    )
  }
}