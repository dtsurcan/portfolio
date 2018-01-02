import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col } from 'reactstrap';
import { translate, Trans } from 'react-i18next';
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

import TestItem from './../components/tests/item';
import { TestsData } from './../components/tests/data';

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
      $sTop.style.minHeight = window.innerHeight + 'px';
    };

    // Call function
    handletMinHeight();
  }

  render() {
    const { t } = this.props;

    const skills = SkillsData(t)
    const projects = ProjectsData(t)
    const tests = TestsData(t)

    const email = "mailto:" + getEmailLink()

    return (
      <div className="home-content" data-spy="nav-scroll" data-target="#main-header-menu" data-offset="100">
        <section className="s-top" id="home">
          <Parallax bgImage={ bgTopSrc } strength={ 400 }>
            <Jumbotron>
              <Container>
                <div className="wrapper-content">
                  <div className="content">
                    <span className="sub-text text-white">
                      <Trans i18nKey="hello-stranger">Hello <b>Stranger!</b></Trans>
                    </span>
                    <h1><span className="text-white">{t('im')}</span>{t('dmitry-tsurcan')}</h1>
                    <h2>
                      <span className="typer" data-delay="150" data-words={t('typer-text')}>Senior Front</span>
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
              <img src={ manInSuitSrc } alt="Man in suit" className="man-bg d-none d-lg-block" style={{ maxWidth: '400px' }} />

              <blockquote>
                <h6>{t('know-about-me')}</h6>
                <h2>{t('im-a-web-developer')}</h2>
                <p>{t('about-me-1')}</p>
                <p className="mb-0">{t('about-me-2')}</p>

                <hr />

                <p><img src={ upworkLogo } alt="Upwork" style={{'height': '25px'}}/> {t('upwork-tests')}</p>

                {/* Tests */}
                { tests.map((test, i) => {
                  return (
                    <div key={i} className="mb-3">
                      <TestItem {...test}></TestItem>
                    </div>
                  )
                })}

                <p className="mb-0">
                  <a href="https://www.upwork.com/freelancers/web-developer_~~2795bf045a4c8da1" target="_blank" rel="noopener noreferrer">{t('profile-link')}</a>
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

                <Row className="justify-content-center">
                  {/* Skills */}
                  { skills.map((skill, i) => {
                    return (
                      <Col sm={{ size: 'auto' }} key={i}>
                        <SkillItem {...skill}></SkillItem>
                      </Col>
                    )
                  })}
                </Row>
              </div>
            </Container>
          </Parallax>
        </section>
        {/* /section.s-skills */}

        <section className="s-projects" id="projects" data-spy="item-scroll" data-item=".card" data-offset="30" data-callback="loadingSkills">
          <Container>
            <div className="inner">
              <h2 id="header-projects" className="text-center">{t('projects')}</h2>

              <Row className="justify-content-center">
                {/* Projects */}
                { projects.map((project, i) => {
                  return (
                    <Col sm={{ size: 'auto' }} key={i}>
                      <ProjectItem {...project}></ProjectItem>
                    </Col>
                  )
                })}
              </Row>
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
                  <a href={ email } className="btn btn-primary btn-lg text-uppercase">{t('write-me')}</a>
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
