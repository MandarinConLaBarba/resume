import React from 'react'
import {Panel, Grid} from 'bootstrap'
import classNames from 'classnames'

import { connect } from 'react-redux'

let JobList = ({jobs}) => {

  return (
    <Grid>
      <h4>Experience</h4>
      {jobs.map(job => {
        let key = 'job-' + job.get('title') + job.get('where')
        return <JobListItem key={key} job={job} />
      })}
    </Grid>
  )
}

let JobListItem = ({job}) => {
console.log(job.toJS())
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
      </Panel>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {jobs: state.jobs}
}

JobList = connect(mapStateToProps)(JobList)

export default JobList
