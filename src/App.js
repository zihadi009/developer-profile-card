import './style.css';

const skillList = [
  {
    skill: 'HTML-CSS',
    emoji: '💪',
    color: 'blue'
  },
  {
    skill: 'JavaScript',
    emoji: '💪',
    color: 'yellow'
  },
  {
    skill: 'Web Design',
    emoji: '💪',
    color: 'limegreen'
  },
  {
    skill: 'Git and Github',
    emoji: '👍',
    color: 'orangered'
  },
  {
    skill: 'React',
    emoji: '💪',
    color: 'skyblue'
  },
  {
    skill: 'Svelte',
    emoji: '👶',
    color: 'lightgreen'
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
  return <img className='avatar' src="IMG_1939.JPG" alt="Musfiqur Rahman Zihad" />
}
function Intro() {
  return (
    <div>
      <h1>Musfiqur Rahman</h1>
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
      <span>{skill.skill}</span>
      <span>{skill.emoji}</span>
    </div>
  )
}

export default App;
