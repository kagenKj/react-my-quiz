import { questions } from '../questions'

function Quiz({question, onClickVariant, progress}) {
    const percents = Math.round((progress / questions.length) * 100);
  
    return (
      <>
        <h1>
          {progress + 1 }/{questions.length}
        </h1>
        <div className="progress">
          <div style={{ width: `${percents}%`}} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((variant, index) => {
              return (
                <li
                  onClick={() => onClickVariant(index)}
                  key={index}
                  className={question.correct === index ? 'correct' : ''}
                >
                  {variant}
                </li>
              )
            })
          }
        </ul>
      </>
    );
}

export default Quiz