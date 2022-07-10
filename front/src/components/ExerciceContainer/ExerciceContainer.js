import uniqid from 'uniqid'
import { useNavigate } from 'react-router-dom'
// import GitHubIcon from '@mui/icons-material//GitHub'
// import LaunchIcon from '@mui/icons-material/Launch'
import './ExerciceContainer.css'

const ExerciceContainer = ({ exercice }) => {
  const navigage = useNavigate();

  return (
    <button type="button" className='exercice' onClick={() => {
      navigage(`/game/starknet/${exercice.id}`)
    }}>
      <h3 >{exercice.name}</h3>
      <p className='exercice__description'>{exercice.description}</p>
      {
        exercice.stack && (
          <ul className='exercice__stack'>
            {exercice.stack.map((item) => (
              <li key={uniqid()} className='exercice__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )
      }

      {
        exercice.sourceCode && (
          <a
            href={exercice.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            {/* <GitHubIcon /> */}
          </a>
        )
      }

      {
        exercice.livePreview && (
          <a
            href={exercice.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            {/* <LaunchIcon /> */}
          </a>
        )
      }
    </button >
  )
}

export default ExerciceContainer
