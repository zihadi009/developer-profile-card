import './style.css';

const skillList = [
  {
    skill: 'HTML-CSS',
    emoji: '💪',
    color: 'pink',
    skillLink: 'https://www.w3schools.com/html/default.asp'
  },
  {
    skill: 'JavaScript',
    emoji: '💪',
    color: 'yellow',
    skillLink: 'https://www.w3schools.com/js/'
  },
  {
    skill: 'Web Design',
    emoji: '💪',
    color: 'limegreen',
    skillLink: 'https://www.simplilearn.com/what-is-web-designing-article'
  },
  {
    skill: 'Git and Github',
    emoji: '👍',
    color: 'orangered',
    skillLink: 'https://www.w3schools.com/git/git_intro.asp?remote=github'
  },
  {
    skill: 'React',
    emoji: '💪',
    color: 'skyblue',
    skillLink: 'https://create-react-app.dev/'
  },
  {
    skill: 'Tailwind',
    emoji: '💪',
    color: 'lightgreen',
    skillLink: 'https://tailwindcss.com/'
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
        <a href="https://www.facebook.com/profile.php?id=100088437303151" target='_blank'>Musfiqur Rahman</a>
        <span style={{ margin: '5px' }}>
          <a style={{ textDecoration: "none" }} href="https://github.com/zihadi009" target='_blank'>
            <i class="ri-github-line"></i>
          </a>
        </span>
        <span>
          <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/musfiqur-rahman-735809294?fbclid=IwAR38AOpNK1ph_L_Qa9FKdbfD2bJSObIzBvKCmEJw5FJXhB-NIenYisQq7d0" target='_blank'>
            <i class="ri-linkedin-fill"></i>
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
      <a style={{ textDecoration: "none" }} href={skill.skillLink} target='_blank'>
        <span>{skill.skill}</span>
        <span>{skill.emoji}</span>
      </a>
    </div>
  )
}

export default App;
