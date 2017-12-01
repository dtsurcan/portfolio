import html5Logo  from './../../images/logos/html5.png';
import css3Logo   from './../../images/logos/css3.png';
import jsLogo     from './../../images/logos/js.png';
import b4Logo     from './../../images/logos/bootstrap-4.png';
import f6Logo     from './../../images/logos/foundation-6.jpg';
import sassLogo   from './../../images/logos/sass.png';
import lessLogo   from './../../images/logos/less.png';
import jqueryLogo from './../../images/logos/jquery.png';
import coffeeLogo from './../../images/logos/coffeescript.png';
import npmLogo    from './../../images/logos/npm.png';
import bowerLogo  from './../../images/logos/bower.png';
import gitLogo    from './../../images/logos/git.png';

export function SkillsData( t ) {
  return [
    { 'title': t('skills-sub.best-friends'),
      'items': [
        { id: 1,
          srcLogo: html5Logo,
          altLogo: "HTML5 logo",
          title: "HTML 5",
          description: {
            __html:
            `<div>
              <strong>HTML5</strong> (HyperText Markup Language, version 5) — язык для структурирования и представления содержимого всемирной паутины.<br />
              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">Wiki</a>
            </div>`
          }
        },
        { id: 2,
          srcLogo: css3Logo,
          altLogo: "CSS3 logo",
          title: "CSS 3",
          description: {
            __html:
            `<div>
              <strong>CSS3</strong> (Cascading Style Sheets 3 — каскадные таблицы стилей третьего поколения) — активно разрабатываемая спецификация CSS.
              Представляет собой формальный язык, реализованный с помощью языка разметки.<br />
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3" target="_blank">Wiki</a>
            </div>`
          }
        },
        { id: 3,
          srcLogo: jsLogo,
          altLogo: "JavaScript logo",
          title: "JavaScript",
          description: {
            __html:
            `<div>
              <strong>JavaScript</strong> — мультипарадигменный язык программирования.
              Поддерживает объектно-ориентированный, императивный и функциональный стили.<br />
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Wiki</a>
            </div>`
          }
        }
      ]
    },
    { 'title': t('skills-sub.js-css-helpers'),
      'items': [
        { id: 4,
          size: 'sm',
          srcLogo: jqueryLogo,
          altLogo: "jQuery logo",
          title: "jQuery",
          description: {
            __html:
            `<div>
              <strong>jQuery</strong> — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. <br />
              <a href="https://jquery.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 5,
          size: 'sm',
          srcLogo: coffeeLogo,
          altLogo: "CoffeeScript logo",
          title: "CoffeeScript",
          description: {
            __html:
            `<div>
              <strong>CoffeeScript</strong> — язык программирования, транслируемый в JavaScript. <br />
              <a href="http://coffeescript.org/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 6,
          size: 'sm',
          srcLogo: sassLogo,
          altLogo: "SASS logo",
          title: "SASS",
          description: {
            __html:
            `<div>
              <strong>Sass</strong> (Syntactically Awesome Stylesheets) — модуль, включенный в Haml.
              Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей. <br />
              <a href="http://sass-lang.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 7,
          size: 'sm',
          srcLogo: lessLogo,
          altLogo: "LESS logo",
          title: "LESS",
          description: {
            __html:
            `<div>
              <strong>LESS</strong> (Leaner Style Sheets) — это динамический язык стилей, который разработал Alexis Sellier.
              Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS», в котором также использован синтаксис, являющийся расширением СSS. <br />
              <a href="http://lesscss.org/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        }
      ]
    },
    { 'title': t('skills-sub.html-css-js-libraries'),
      'items': [
        { id: 8,
          size: 'sm',
          srcLogo: b4Logo,
          altLogo: "Bootstrap4 logo",
          title: "Bootstrap 4",
          description: {
            __html:
            `<div>
              <strong>Bootstrap</strong> (Twitter Bootstrap) — свободный набор инструментов для создания сайтов и веб-приложений. <br />
              <a href="http://getbootstrap.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 9,
          size: 'sm',
          srcLogo: f6Logo,
          altLogo: "Foundation6 logo",
          title: "Foundation 6",
          description: {
            __html:
            `<div>
              <strong>Foundation</strong> (Foundation Zurb) — свободный набор инструментов для создания сайтов и веб-приложений. <br />
              <a href="https://foundation.zurb.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        }
      ]
    },
    { 'title': t('skills-sub.additional'),
      'items': [
        { id: 10,
          size: 'sm',
          srcLogo: npmLogo,
          altLogo: "npm logo",
          title: "npm",
          description: {
            __html:
            `<div>
              <strong>npm</strong> (Node.js Package Manager) — менеджер пакетов, входящий в состав Node.js. <br />
              <a href="https://www.npmjs.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 11,
          size: 'sm',
          srcLogo: bowerLogo,
          altLogo: "Bower logo",
          title: "Bower",
          description: {
            __html:
            `<div>
              <strong>Bower</strong> - это система управления пакетами в программировании на стороне клиента. <br />
              <a href="https://bower.io/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        },
        { id: 12,
          size: 'sm',
          srcLogo: gitLogo,
          altLogo: "Git logo",
          title: "Git",
          description: {
            __html:
            `<div>
              <strong>Git</strong> — распределённая система управления версиями. <br />
              <a href="https://git-scm.com/" target="_blank">Оффициальный сайт</a>
            </div>`
          }
        }
      ]
    }
  ]
}
