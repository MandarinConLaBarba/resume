import { combineReducers } from 'redux'
import jobs from 'app/reducers/jobs'
import skills from 'app/reducers/skills'
import selectedSkill from 'app/reducers/selectedSkill'

const reducers = combineReducers({
    jobs,
    skills,
    selectedSkill
})

export default reducers
