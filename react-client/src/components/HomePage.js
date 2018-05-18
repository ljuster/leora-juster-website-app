import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'


class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="">Hola superMaria, is this creepy, I'm working on building my own website from scratch
        </Link>
        <Picker title='Pick your emoji' emoji='point_up' />

      </div>
    )
  }
}
export default HomePage