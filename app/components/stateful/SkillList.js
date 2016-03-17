import React from 'react'
import {Button, ButtonToolbar, Grid, Row, Col} from 'bootstrap'
import {selectSkill} from 'app/actions'
import SkillButton from 'app/components/stateless/SkillButton'

import { connect } from 'react-redux'

let SkillList = ({skills, selectSkill}, dispatcher) => {

  return (
    <Grid>
      <h4>Alphabet Soup</h4>
      <small>
        <em>
          A list of tech is obligatory these days, but it is not practical to list every framework/library/technology here.
        </em>
      </small>
      <br/>
      <ButtonToolbar>
        {skills.map(skill => <SkillButton key={'skill-label-' + skill} skill={skill} selectSkill={selectSkill} />)}
      </ButtonToolbar>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {skills: state.skills}
}



SkillList = connect(mapStateToProps, {
  selectSkill
})(SkillList)

export default SkillList
