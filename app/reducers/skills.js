import jobData from 'app/data/jobs'

const jobs = (state = [], action) => {

  let skills = [];

  jobData.forEach(job => {
    job.skills.forEach(skill => {
      if (skills.indexOf(skill) >= 0) return;
      skills.push(skill)
    })
  })

  skills.push('All')

  return skills;

}

export default jobs
