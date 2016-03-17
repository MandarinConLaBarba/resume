import React from 'react'
import {Button} from 'bootstrap'
const SkillButton = ({skill, selectSkill}) => {
  return (
    <Button onClick={e => selectSkill(skill)}>{skill}</Button>
  );

}

export default SkillButton
