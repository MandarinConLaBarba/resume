import { combineReducers } from 'redux'
import jobs from 'app/reducers/jobs'
import skills from 'app/reducers/skills'
// import theme from './theme'

const reducers = combineReducers({
    jobs,
    skills
})

export default reducers
