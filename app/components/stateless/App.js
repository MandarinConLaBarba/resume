import React from 'react'
import JobList from 'app/components/stateful/JobList'
import SkillList from 'app/components/stateful/SkillList'
import Header from 'app/components/stateless/Header'
const App = () => (
  <div>
    <Header/>
    <SkillList/>
    <JobList/>
  </div>
)

export default App
