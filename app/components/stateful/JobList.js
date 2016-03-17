import React from 'react'
import {Panel, Grid, Label} from 'bootstrap'
import {selectSkill} from 'app/actions'
import SkillButton from 'app/components/stateless/SkillButton'
import classNames from 'classnames'

import { connect } from 'react-redux'

let JobList = ({jobs, selectSkill}) => {

  return (
    <Grid>
      <h4>Experience</h4>
      {jobs.map(job => {
        let key = 'job-' + job.get('title') + job.get('where')
        return <JobListItem key={key} job={job} selectSkill={selectSkill} />
      })}
    </Grid>
  )
}

let JobListItem = ({job, selectSkill}) => {

  let dateFormat = 'MMM YYYY'

  let titleNode = (
    <h3>{job.get('title')} @ {job.get('where')}
      <span className="pull-right">{job.get('dateStarted').format(dateFormat)} - {job.get('dateEnded').format(dateFormat)}</span>
    </h3>
  );

  return (
    <div>
      <Panel header={titleNode} className={classNames({'panel-inactive': job.get('inactive')})}>
        {job.get('description')}
        <p>{job.get('skills').map(skill => <SkillButton skill={skill} selectSkill={selectSkill}/>)}</p>
      </Panel>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {jobs: state.jobs}
}

JobList = connect(mapStateToProps, {
  selectSkill
})(JobList)

export default JobList
