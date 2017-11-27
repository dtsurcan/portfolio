import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { translate, Trans } from 'react-i18next';

import bgSrc from './../images/655147030.jpg';

class Home extends Component {

  render() {
    const { t } = this.props;

    const style = {
      backgroundImage: 'url(' + bgSrc + ')'
    }

    return (
      <div className="home-content">
        <Jumbotron style={ style } data-toggle="pane">
          <Container>
            <div className="wrapper-title">
              <h2>{t('title')}</h2>
              <Trans i18nKey="description.part1">
                To get started, edit <code>src/App.js</code> and save to reload.
              </Trans>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default translate('translations')(Home);
