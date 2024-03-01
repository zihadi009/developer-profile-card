import './style.css';

const skillList = [
  {
    skill: 'HTML-CSS',
    emoji: '💪',
    color: 'pink',
    skillLink: 'https://www.w3schools.com/html/default.asp',
    title: 'HTML defines the content and structure of a webpage, while CSS controls its presentation and appearance, resulting in a visually appealing and well-organized design.'
  },
  {
    skill: 'JavaScript',
    emoji: '💪',
    color: 'yellow',
    skillLink: 'https://www.w3schools.com/js/',
    title: 'JavaScript is a versatile programming language used to create interactive and dynamic elements on web pages, enhancing user experience and functionality.'
  },
  {
    skill: 'Web Design',
    emoji: '💪',
    color: 'limegreen',
    skillLink: 'https://www.simplilearn.com/what-is-web-designing-article',
    title: 'Web design encompasses the process of creating visually appealing, user-friendly, and functional websites by combining elements of graphic design, typography, layout, and user experience principles.'
  },
  {
    skill: 'Git and Github',
    emoji: '👍',
    color: 'orangered',
    skillLink: 'https://www.w3schools.com/git/git_intro.asp?remote=github',
    title: 'Git is a distributed version control system that allows developers to track changes to their codebase, collaborate with others, and manage project versions efficiently, while GitHub is a popular web-based platform built around Git, facilitating code hosting, collaboration, and version control management, serving as a hub for open-source and private projects alike.'
  },
  {
    skill: 'React',
    emoji: '💪',
    color: 'skyblue',
    skillLink: 'https://create-react-app.dev/',
    title: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create interactive and dynamic web applications efficiently by using a component-based architecture, facilitating code reusability and maintainability.'
  },
  {
    skill: 'Tailwind',
    emoji: '💪',
    color: 'lightgreen',
    skillLink: 'https://tailwindcss.com/',
    title: 'Tailwind CSS is a utility-first CSS framework that provides pre-designed, low-level utility classes to build custom user interfaces quickly. It enables developers to create responsive and modern designs by composing styles directly in HTML, promoting rapid development and consistent styling across projects.'
  }
]

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="IMG_1107.JPG" alt="Musfiqur Rahman Zihad" />
}
function Intro() {
  return (
    <div>
      <h1>
        <a href="https://www.facebook.com/profile.php?id=100088437303151" target='_blank' title="Find me on facebook">Musfiqur Rahman</a>
        <span style={{ margin: '5px' }}>
          <a style={{ textDecoration: "none" }} href="https://github.com/zihadi009" title='Visit my github profile' target='_blank'>
            <i class="ri-github-line"></i>
          </a>
        </span>
        <span>
          <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/musfiqur-rahman-735809294?fbclid=IwAR38AOpNK1ph_L_Qa9FKdbfD2bJSObIzBvKCmEJw5FJXhB-NIenYisQq7d0" title='Visit my linkedin profile' target='_blank'>
            <i class="ri-linkedin-line"></i>
          </a>
        </span>
      </h1>
      <p>
        Musfiqur Rahman is a dedicated individual with a passion for web development.
        He demonstrates a strong commitment to honing his skills and expanding his
        knowledge in the field. He approaches learning with enthusiasm and
        determination, seeking out new challenges to further his understanding of web
        technologies.
      </p>
    </div>
  )
}
function SkillList() {
  return (
    <div className='skill-list'>
      {
        skillList.map(skill => <Skill skill={skill} />)
      }
    </div>
  )
}
function Skill({ skill }) {
  return (
    <div className='skill' style={{ backgroundColor: skill.color }}>
      <a style={{ textDecoration: "none" }} href={skill.skillLink} title={skill.title} target='_blank'>
        <span>{skill.skill}</span>
        <span>{skill.emoji}</span>
      </a>
    </div>
  )
}

export default App;
