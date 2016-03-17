import React from 'react'
import {Button, ButtonToolbar, Grid, Row, Col} from 'bootstrap'
import {selectSkill} from 'app/actions'

import { connect } from 'react-redux'

let SkillList = ({skills, selectSkill}, dispatcher) => {

  return (
    <Grid>
      <h4>Alphabet Soup</h4>
      <small>
        <em>
          A list of things technologies is obligatory these days, but it is not practical to list every framework/library/technology here.
        </em>
      </small>
      <br/>
      <ButtonToolbar>
        {skills.map(skill => <SkillListItem key={'skill-label-' + skill} skill={skill} selectSkill={selectSkill} />)}
      </ButtonToolbar>
    </Grid>
  )
}

let SkillListItem = ({skill, selectSkill}) => {
  return (
    <Button onClick={e => selectSkill(skill)}>{skill}</Button>
  );

}

const mapStateToProps = (state) => {
  return {skills: state.skills}
}



SkillList = connect(mapStateToProps, {
  selectSkill
})(SkillList)

export default SkillList
