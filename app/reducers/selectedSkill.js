import {fromJS} from 'immutable'

const selectedSkill = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_SKILL':
      let skill = action.skill
      if (skill === 'All') return null
      return skill
    default:
      return state
  }
}

export default selectedSkill
