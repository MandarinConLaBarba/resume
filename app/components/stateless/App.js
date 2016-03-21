import React from 'react'
import JobList from 'app/components/stateful/JobList'
import SkillList from 'app/components/stateful/SkillList'
import Header from 'app/components/stateless/Header'
import {Grid} from 'bootstrap'

const App = () => (
  <Grid fluid>
    <Header/>
    <SkillList/>
    <JobList/>
  </Grid>
)

export default App
