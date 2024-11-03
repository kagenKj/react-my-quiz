import { questions } from '../questions'

function Results({correct}) {
    return (
      <div className="result">
        {
          (correct >= Math.round((questions.length/100) * 50))
          ? <img src="https://cdn.icon-icons.com/icons2/4057/PNG/512/done_ready_hand_up_thumbs_up_sticker_icon_258404.png" alt='congrats!' />
          : <img src="https://cdn.icon-icons.com/icons2/4057/PNG/512/nope_hand_no_approve_not_nah_dislike_thumbs_down_sticker_icon_258434.png" alt='try again!' />
        }
        
        <h2>Правильных ответов: {correct} из {questions.length}</h2>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
        
      </div>
    );
}

export default Results