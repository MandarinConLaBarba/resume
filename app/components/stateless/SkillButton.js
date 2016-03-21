import React from 'react'
import {Button} from 'bootstrap'
import {Motion, spring} from 'react-motion'

const defaultHeight = 25;

const SkillButton = React.createClass({

  getInitialState() {
    return {
      height: defaultHeight
    }
  },

  render() {

    let {skill, selectSkill} = this.props

    return (
      <Button
        className="btn-skill"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={e => selectSkill(skill)}>{skill}</Button>
    )


  },

  _handleMouseEnter() {
    this.setState({height: 40});
  },

  _handleMouseLeave() {
    this.setState({height: defaultHeight});
  }

})

export default SkillButton
