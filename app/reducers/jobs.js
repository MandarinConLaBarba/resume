import jobData from 'app/data/jobs'
import {fromJS} from 'immutable'

const sortedJobs = fromJS(jobData.sort((a, b) => {
  if (a.dateStarted.isBefore(b.dateStarted)) return 1;
  return -1;
}))

const jobs = (state = sortedJobs, action) => {
console.log(action)
  switch (action.type) {
    case 'SELECT_SKILL':
      let skill = action.skill;
      if (skill === 'All') return sortedJobs
      return sortedJobs.map(job => {
        if (job.get('skills').indexOf(skill) !== -1) return job;
        return job.set('inactive', true)
      })
    default:
      return state
  }
}

export default jobs
