import openhousevideoSrc   from './../../images/projects/openhousevideo.jpg';
import openhousevideo1Src   from './../../images/projects/openhousevideo-1.png';
import openhousevideo2Src   from './../../images/projects/openhousevideo-2.png';
import openhousevideo3Src   from './../../images/projects/openhousevideo-3.png';
import openhousevideo4Src   from './../../images/projects/openhousevideo-4.png';
import chippmunkSrc   from './../../images/projects/chippmunk.jpg';
import chippmunk1Src   from './../../images/projects/chippmunk-1.png';
import chippmunk2Src   from './../../images/projects/chippmunk-2.png';
import chippmunk3Src   from './../../images/projects/chippmunk-3.png';
import chippmunk4Src   from './../../images/projects/chippmunk-4.png';
import magiclinksSrc   from './../../images/projects/magiclinks.jpg';
import magiclinks1Src   from './../../images/projects/magiclinks-1.png';
import magiclinks2Src   from './../../images/projects/magiclinks-2.png';
import magiclinks3Src   from './../../images/projects/magiclinks-3.png';
import magiclinks4Src   from './../../images/projects/magiclinks-4.png';
import gotoSrc   from './../../images/projects/goto.jpg';
import goto1Src   from './../../images/projects/goto-1.png';
import goto2Src   from './../../images/projects/goto-2.png';
import goto3Src   from './../../images/projects/goto-3.png';
import exclusiveSrc   from './../../images/projects/exclusive.jpg';
import exclusive1Src   from './../../images/projects/exclusive-1.png';
import exclusive2Src   from './../../images/projects/exclusive-2.png';
import exclusive3Src   from './../../images/projects/exclusive-3.png';
import exclusive4Src   from './../../images/projects/exclusive-4.png';

export function ProjectsData( t ) {
  return [
    {
      id: 5,
      src: exclusiveSrc,
      alt: 'Exclusive',
      title: 'Exclusive.one',
      description: 'Социальная медиа сеть. Стиль, мода и красота.',
      link: 'https://exclusive.one/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap4,PSD to HTML',
      images: [
        {
          src:exclusive1Src,
          altText: 'Home page',
          caption: 'Home page'
        },
        {
          src:exclusive2Src,
          altText: 'Brands page',
          caption: 'Brands page'
        },
        {
          src:exclusive3Src,
          altText: 'Products page',
          caption: 'Products page'
        },
        {
          src:exclusive4Src,
          altText: 'Info page',
          caption: 'Info page'
        },
      ]
    },
    {
      id: 4,
      src: openhousevideoSrc,
      alt: 'OpenHouseVideo',
      title: 'OpenHouseVideo',
      description: 'Проект риэлторской компании.',
      link: 'https://www.openhousevideo.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3,Metronic,VideoJS',
      images: [
        {
          src:openhousevideo1Src,
          altText: 'Home page',
          caption: 'Home page'
        },
        {
          src:openhousevideo2Src,
          altText: 'Agent/Broker page',
          caption: 'Agent/Broker page'
        },
        {
          src:openhousevideo3Src,
          altText: 'Player page',
          caption: 'Player page'
        },
        {
          src:openhousevideo4Src,
          altText: 'Create page',
          caption: 'Create page'
        },
      ]
    },
    {
      id: 3,
      src: gotoSrc,
      alt: 'GoTo',
      title: 'GoTo',
      description: 'Поисковый медиа портал.',
      link: 'https://www.goto.com/',
      skills: 'HTML5,CSS3,AngularJS,Bootstrap3',
      images: [
        {
          src:goto1Src,
          altText: 'Home page',
          caption: 'Home page'
        },
        {
          src:goto2Src,
          altText: 'Results page',
          caption: 'Results page'
        },
        {
          src:goto3Src,
          altText: 'Content page',
          caption: 'Content page'
        }
      ]
    },
    {
      id: 2,
      src: chippmunkSrc,
      alt: 'Chippmunk',
      title: 'Chippmunk',
      description: 'Сервис по поиску скидочных купонов для более чем 600 продавцов.',
      link: 'https://www.chippmunk.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3',
      images: [
        {
          src:chippmunk1Src,
          altText: 'Home page',
          caption: 'Home page'
        },
        {
          src:chippmunk2Src,
          altText: 'Search page',
          caption: 'Search page'
        },
        {
          src:chippmunk4Src,
          altText: 'Coupons page',
          caption: 'Coupons page'
        },
        {
          src:chippmunk3Src,
          altText: 'ExpertShoper page',
          caption: 'ExpertShoper page'
        },
      ]
    },
    {
      id: 1,
      src: magiclinksSrc,
      alt: 'MagicLinks',
      title: 'MagicLinks',
      description: 'Сервис по продвижению ваших продуктов.',
      link: 'https://www.magiclinks.org/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3',
      images: [
        {
          src:magiclinks1Src,
          altText: 'Home page',
          caption: 'Home page'
        },
        {
          src:magiclinks2Src,
          altText: 'Welcome page',
          caption: 'Welcome page'
        },
        {
          src:magiclinks3Src,
          altText: 'Create Links page',
          caption: 'Create Links page'
        },
        {
          src:magiclinks4Src,
          altText: 'Reports page',
          caption: 'Reports page'
        },
      ]
    }
  ]
}
