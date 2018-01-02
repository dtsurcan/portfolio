import ohvSrc   from './../../images/projects/ohv.jpg';
import chippmunkSrc   from './../../images/projects/chippmunk.jpg';
import magiclinksSrc   from './../../images/projects/magiclinks.jpg';
import gotoSrc   from './../../images/projects/goto.jpg';
import exclusiveSrc   from './../../images/projects/exclusive.jpg';

export function ProjectsData( t ) {
  return [
    {
      id: 5,
      src: exclusiveSrc,
      alt: 'Exclusive',
      title: 'Exclusive.one',
      link: 'https://exclusive.one/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap4'
    },
    {
      id: 4,
      src: ohvSrc,
      alt: 'OpenHouseVideo',
      title: 'OpenHouseVideo',
      link: 'https://www.openhousevideo.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3,Metronic,VideoJS'
    },
    {
      id: 3,
      src: gotoSrc,
      alt: 'GoTo',
      title: 'GoTo',
      link: 'https://www.goto.com/',
      skills: 'HTML5,CSS3,AngularJS,Bootstrap3'
    },
    {
      id: 2,
      src: chippmunkSrc,
      alt: 'Chippmunk',
      title: 'Chippmunk',
      link: 'https://www.chippmunk.com/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3'
    },
    {
      id: 1,
      src: magiclinksSrc,
      alt: 'MagicLinks',
      title: 'MagicLinks',
      link: 'https://www.magiclinks.org/',
      skills: 'HTML5,CSS3,jQuery,Bootstrap3'
    }
  ]
}
