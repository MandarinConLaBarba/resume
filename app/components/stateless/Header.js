import React from 'react'
import {PageHeader, Button, Row, Col} from 'bootstrap'
import gridConfig from 'app/components/config/grid'

const Header = () => {

  return (
    <Row>
      <div className="profile-img">
        <img height="100%" src="//raw.githubusercontent.com/MandarinConLaBarba/resume/master/static/img/mandarin.jpg"/>
      </div>
      <Col {...gridConfig}>
        <PageHeader>
          Mandarin Drummond, Engineer
        </PageHeader>
        <h4>Introduction</h4>
        <p>
          I'm a software engineer with broad experience in various platforms and environments, and a
          strong believer in transparency and the "fail-fast" culture/mentality.
          I try to spend my time as efficiently as possible, and I'm always on the lookout for ways to improve productivity.
          I enjoy trying new things and sharing what I know with others.
          I consider my development "instincts" and efficiency to be my greatest assets.
        </p>
        <p>
          The last few years I've been riding the JavaScript wave. I find the JavaScript ecosystem exciting and dynamic, but I'm also interested
          in other areas. Beyond the workplace I enjoy practicing Spanish and volunteering.
        </p>
        <p>
          This resume is published via <a href="https://pages.github.com/">GitHub pages</a>.
          It was written with <a href="https://facebook.github.io/react/">React</a>+<a href="http://redux.js.org/">Redux</a>, among <a href="https://github.com/MandarinConLaBarba/resume/blob/master/package.json">other things</a>.
          The source is open and available <a href="https://github.com/MandarinConLaBarba/resume">here</a>.
        </p>


        <div className="page-header-icons">
          <a href="https://github.com/MandarinConLaBarba"><span className="fa fa-2x fa-github"/></a>
          &nbsp;
          &nbsp;
          <a href="https://www.linkedin.com/in/mandarind"><span className="fa fa-2x fa-linkedin"/></a>
        </div>

      </Col>
    </Row>
  )
}

export default Header
