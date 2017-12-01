import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Media } from 'reactstrap';
import { translate, Trans } from 'react-i18next';
import { Parallax } from 'react-parallax';
import FontAwesome from 'react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

import { _log, handleScrollTo, getEmailLink } from './../utils';

import SkillItem from './../components/skills/item';
import { SkillsData } from './../components/skills/data';

import bgSrc      from './../images/655147030.jpg';
import meAvatar   from './../images/me.jpg';

class Home extends Component {

  // When component did mount
  componentDidMount() {
    handleScrollTo()

    this.handleLoadHome();

    // window.addEventListener('load', this.handleLoadHome);
    window.addEventListener('resize', this.handleLoadHome);
  }
  componentWillUnmount() {
    window.removeListener('load', this.handleLoadHome);
    // window.removeListener('resize', this.handleLoadHome);
  }

  // Handle load event function
  handleLoadHome() {

    // Set min height for inner main content
    const setMinHeight = () => {
      _log('Changed min height of Top Content');

      const // $sAbout = document.querySelector('section.s-about-me'),
            $sTop = document.querySelector('section.s-top .jumbotron');
      let h = (window.innerHeight - 300) > 400 ? (window.innerHeight - 300) : 400
      $sTop.style.minHeight = h + 'px';
    };

    // Call function
    setMinHeight();
  }

  render() {
    const { t } = this.props;

    const skills = SkillsData(t);

    console.log(getEmailLink())

    return (
      <div className="home-content">
        <section className="s-top" id="s-top">
          <Parallax bgImage={ bgSrc } strength={ 400 }>
            <Jumbotron>
              <Container>
                <ScrollAnimation animateIn='bounceIn'
                    animateOnce={true}
                    offset={0}>
                    <div className="wrapper-title">
                      <h3>
                        {t('title')}
                      </h3>
                      <p className="lead mb-0">
                        <Trans i18nKey="description">Here you can see a list of my <a href="#skills">skills</a>, <a href="#projects">projects</a> and my <a href="#calendar">calendar</a> and you can <a href="#contact">contact</a> with me.</Trans>
                      </p>
                    </div>
                </ScrollAnimation>
              </Container>
            </Jumbotron>{/* /Jumbotron */}
          </Parallax>

          <div className="wrapper-goto">
            <a data-href="#header-skills" data-toggle="scroll-to">
              <FontAwesome name='angle-down' size='3x'></FontAwesome>
            </a>
          </div>
        </section>
        {/* /section.s-top */}

        <section className="s-about-me">
          <Container>
            <ScrollAnimation animateIn='fadeIn'
                animateOnce={true}
                offset={0}>
                <blockquote>
                  <Media>
                    <Media left className="mr-4 align-self-center">
                      <Media object src={ meAvatar } alt="Dmitry" />
                    </Media>
                    <Media body className="align-self-center">
                      <p className="mb-1">
                        <strong>Меня зовут Дмитрий, мне 30 лет.</strong>
                      </p>
                      <p className="mb-0">
                        <strong>Senior Front-end developer with more than 10 years of professional experience.</strong><br />
                        Perfectionist, who is very sensitive regarding the product quality and is deadline oriented.
                        I'm experienced with modern Front-end web development workflows,
                        I'm able to suggest new and better ways of doing things and can make sure you website ends up being awesome.</p>
                    </Media>
                  </Media>
                </blockquote>
            </ScrollAnimation>
          </Container>
        </section>
        {/* /section.s-about-me */}

        <section className="s-skills">
          <Container>
            <h2 id="header-skills">{t('skills')}</h2>

            { skills.map((part, i) => {
              const items = part.items;
              const SkillItems = items.map((item, i) => {
                return (
                  <Col sm={{ size: 'auto' }} key={i}>
                    <ScrollAnimation animateIn='bounceInDown'
                        animateOnce={true}
                        offset={0} key={i}>
                        <SkillItem {...item}></SkillItem>
                    </ScrollAnimation>
                  </Col>
                )
              })

              return (
                <div key={i}>
                  <ScrollAnimation animateIn='bounceInLeft'
                      animateOnce={true} key={i}>
                      <h3 className="h5">{part.title}</h3>
                  </ScrollAnimation>
                  <Row className="justify-content-center">
                    { SkillItems }
                  </Row>
                </div>
              )
            })}
          </Container>
        </section>
        {/* /section.s-skills */}
      </div>
    );
  }
}

export default translate('translations')(Home);
