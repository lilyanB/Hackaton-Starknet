import uniqid from 'uniqid'
import { exercices } from '../../constants'
import ExerciceContainer from '../ExerciceContainer/ExerciceContainer'
import './Exercices.css'

const Exercices = () => {
  if (!exercices.length) return null

  return (
    <section id='exercices' className='section exercices'>
      <h2 className='section__title'>Exercices</h2>

      <div className='exercices__grid'>
        {exercices.map((exercice) => (
          <ExerciceContainer key={uniqid()} exercice={exercice} />
        ))}
      </div>
    </section>
  )
}

export default Exercices
