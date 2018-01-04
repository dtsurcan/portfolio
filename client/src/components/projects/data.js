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
      description: "exclusive-description",
      link: 'https://exclusive.one/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap4,PSD to HTML',
      images: [
        {
          src:exclusive1Src,
          caption: "exclusive-image-1"
        },
        {
          src:exclusive2Src,
          caption: "exclusive-image-2"
        },
        {
          src:exclusive3Src,
          caption: "exclusive-image-3"
        },
        {
          src:exclusive4Src,
          caption: "exclusive-image-4"
        },
      ]
    },
    {
      id: 4,
      src: openhousevideoSrc,
      alt: 'OpenHouseVideo',
      title: 'OpenHouseVideo',
      description: "openhousevideo-description",
      link: 'https://www.openhousevideo.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3,Metronic,VideoJS',
      images: [
        {
          src:openhousevideo1Src,
          caption: "openhousevideo-image-1"
        },
        {
          src:openhousevideo2Src,
          caption: "openhousevideo-image-2"
        },
        {
          src:openhousevideo3Src,
          caption: "openhousevideo-image-3"
        },
        {
          src:openhousevideo4Src,
          caption: "openhousevideo-image-4"
        },
      ]
    },
    {
      id: 3,
      src: gotoSrc,
      alt: 'GoTo',
      title: 'GoTo',
      description: "goto-description",
      link: 'https://www.goto.com/',
      skills: 'HTML5,CSS3,AngularJS,Bootstrap3',
      images: [
        {
          src:goto1Src,
          caption: 'goto-image-1'
        },
        {
          src:goto2Src,
          caption: 'goto-image-2'
        },
        {
          src:goto3Src,
          caption: 'goto-image-3'
        }
      ]
    },
    {
      id: 2,
      src: chippmunkSrc,
      alt: 'Chippmunk',
      title: 'Chippmunk',
      description: "chippmunk-description",
      link: 'https://www.chippmunk.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3',
      images: [
        {
          src:chippmunk1Src,
          caption: 'chippmunk-image-1'
        },
        {
          src:chippmunk2Src,
          caption: 'chippmunk-image-2'
        },
        {
          src:chippmunk4Src,
          caption: 'chippmunk-image-3'
        },
        {
          src:chippmunk3Src,
          caption: 'chippmunk-image-4'
        },
      ]
    },
    {
      id: 1,
      src: magiclinksSrc,
      alt: 'MagicLinks',
      title: 'MagicLinks',
      description: "magiclinks-description",
      link: 'https://www.magiclinks.org/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3',
      images: [
        {
          src:magiclinks1Src,
          caption: 'magiclinks-image-1'
        },
        {
          src:magiclinks2Src,
          caption: 'magiclinks-image-2'
        },
        {
          src:magiclinks3Src,
          caption: 'magiclinks-image-3'
        },
        {
          src:magiclinks4Src,
          caption: 'magiclinks-image-4'
        },
      ]
    }
  ]
}
