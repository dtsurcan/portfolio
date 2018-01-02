import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Progress,
  Badge } from 'reactstrap';
import { translate/*, Trans*/ } from 'react-i18next';
import { Parallax } from 'react-parallax';

import {
  _log,
  handleScrollTo,
  handleTyper,
  handleCursor,
  handleSpyNavScroll,
  handleSpyItemScroll,
  getEmailLink } from './../utils';

import SkillItem from './../components/skills/item';
import { SkillsData } from './../components/skills/data';

import ProjectItem from './../components/projects/item';
import { ProjectsData } from './../components/projects/data';

import bgTopSrc      from './../images/home.jpg';
import upworkLogo   from './../images/logos/upwork-logo.png';
import manInSuitSrc   from './../images/man-in-suit.png';
import bgExpSrc   from './../images/experience.jpg';
import bgContactsSrc   from './../images/contacts.jpg';

class Home extends Component {

  // When component did mount
  componentDidMount() {
    this.handleLoadHome();
    window.addEventListener('resize', this.handleLoadHome);

    handleScrollTo()
    handleTyper()
    handleCursor()
    handleSpyNavScroll()
    handleSpyItemScroll()
  }
  componentWillUnmount() {
    window.removeListener('resize', this.handleLoadHome);
  }

  // Handle load event function
  handleLoadHome() {

    // Set min height for inner main content
    const handletMinHeight = () => {
      _log('Handle minHeight');

      const $sTop = document.querySelector('section.s-top .jumbotron');
      let h = window.innerHeight //(window.innerHeight - 200) > 400 ? (window.innerHeight - 200) : 400
      $sTop.style.minHeight = h + 'px';
    };

    // Call function
    handletMinHeight();
  }

  render() {
    const { t } = this.props;

    const skills = SkillsData(t)
    const projects = ProjectsData(t)

    const email = "mailto:" + getEmailLink()

    return (
      <div className="home-content" data-spy="nav-scroll" data-target="#main-header-menu" data-offset="100">
        <section className="s-top" id="home">
          <Parallax bgImage={ bgTopSrc } strength={ 400 }>
            <Jumbotron>
              <Container>
                <div className="wrapper-content">
                  <div className="content">
                    <span className="sub-text text-white">Hello <b>Stranger!</b> </span>
                    <h1><span className="text-white">I'M</span>Dmitri Turcan</h1>
                    <h2>
                      <span className="typer" data-delay="150" data-words="UX/UI Designer,Web Developer,Powerful Designer">Powerful De</span>
                      <span className="cursor" data-cursordisplay="|" data-owner="some-id"></span> </h2>
                  </div>
                </div>
              </Container>
            </Jumbotron>{/* /Jumbotron */}
          </Parallax>

          <div className="wrapper-goto">
            <a data-href="#header-skills" data-toggle="scroll-to">
              <i className="fadebounce-animated"></i>
            </a>
          </div>
        </section>
        {/* /section.s-top */}

        <section className="s-about-me" id="about-me" data-spy="item-scroll" data-item=".progress" data-offset="30" data-callback="loadingProgress">
          <Container>
            <div className="inner">
              <img src={ manInSuitSrc } alt="Man in suit" className="man-bg" />

              <blockquote>
                <h6>Know About me</h6>
                <h2>I AM A WEB DEVELOPER</h2>
                <p>Senior Front-end developer with more than 10 years of professional experience.</p>
                <p className="mb-0">Perfectionist, who is very sensitive regarding the product quality and is deadline oriented. I'm experienced with modern Front-end web development workflows, I'm able to suggest new and better ways of doing things and can make sure you website ends up being awesome.</p>

                <hr />

                <p><img src={ upworkLogo } alt="Upwork" style={{'height': '25px'}}/> Upwork tests:</p>

                <div className="mb-3">
                  <label>HTML5 <Badge color="success">Top 10%</Badge>:</label>
                  <Progress data-value="91" />
                </div>

                <div className="mb-3">
                  <label>CSS <Badge color="success">Top 10%</Badge>:</label>
                  <Progress data-value="96" />
                </div>

                <div className="mb-3">
                  <label>jQuery <Badge color="success">Top 20%</Badge>:</label>
                  <Progress data-value="88" />
                </div>

                <div className="mb-3">
                  <label>Bootstrap <Badge color="success">Top 20%</Badge>:</label>
                  <Progress data-value="80" />
                </div>

                <div className="mb-3">
                  <label>PHP5 <Badge color="success">Top 10%</Badge>:</label>
                  <Progress data-value="95" />
                </div>

                <p className="mb-0">
                  <a href="https://www.upwork.com/freelancers/web-developer_~~2795bf045a4c8da1" target="_blank" rel="noopener noreferrer">profile link</a>
                </p>
              </blockquote>
            </div>
          </Container>
        </section>
        {/* /section.s-about-me */}

        <section className="s-skills" id="skills" data-spy="item-scroll" data-item=".card" data-offset="30" data-callback="loadingSkills">
          <Parallax bgImage={ bgExpSrc } strength={ 400 }>
            <Container>
              <div className="inner">
                <h2 id="header-skills" className="text-center">{t('skills')}</h2>

                { skills.map((part, i) => {
                  const items = part.items;
                  const SkillItems = items.map((item, i) => {
                    return (
                      <Col sm={{ size: 'auto' }} key={i}>
                        <SkillItem {...item}></SkillItem>
                      </Col>
                    )
                  })

                  return (
                    <div key={i}>
                      <Row className="justify-content-center">
                        { SkillItems }
                      </Row>
                    </div>
                  )
                })}
              </div>
            </Container>
          </Parallax>
        </section>
        {/* /section.s-skills */}

        <section className="s-projects" id="projects" data-spy="item-scroll" data-item=".card" data-offset="30" data-callback="loadingSkills">
          <Container>
            <div className="inner">
              <h2 id="header-projects" className="text-center">{t('projects')}</h2>

              { projects.map((part, i) => {
                const items = part.items;
                const ProjectsItems = items.map((item, i) => {
                  return (
                    <Col sm={{ size: 'auto' }} key={i}>
                      <ProjectItem {...item}></ProjectItem>
                    </Col>
                  )
                })

                return (
                  <div key={i}>
                    <Row className="justify-content-center">
                      { ProjectsItems }
                    </Row>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>
        {/* /section.s-projects */}

        <section className="s-contacts" id="contacts">
          <Parallax bgImage={ bgContactsSrc } strength={ 400 }>
            <Container>
              <div className="inner">
                <h2 id="header-contacts" className="text-center">{t('contacts')}</h2>

                <div className="wrapper-link text-center">
                  <a href={ email } className="btn btn-primary btn-lg text-uppercase">Touch me</a>
                </div>
              </div>
            </Container>
          </Parallax>
        </section>
        {/* /section.s-contacts */}
      </div>
    );
  }
}

export default translate('translations')(Home);
