import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import HeartRating from './HeartRating'
import "./RatingForm.css"

type Props = {
  user_id: number,
  product_id: number,
  category_id: number,
  score: number[],
  clickSubmit?: React.MouseEventHandler<HTMLButtonElement>,
  clickCancel?: React.MouseEventHandler<HTMLButtonElement>,

}


function RatingForm(props: Props) {
  const navigate = useNavigate();
  const [rateState, setRateState] = useState(false);

  //update score for each question when the user clicks rating
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);
  const [comment, setComment] = useState("");

  const updateScore1 = (score: number): void => {
    setScore1(score)
  }
  const updateScore2 = (score: number): void => {
    setScore2(score)
  }
  const updateScore3 = (score: number): void => {
    setScore3(score)
  }
  const updateScore4 = (score: number): void => {
    setScore4(score)
  }
  const updateScore5 = (score: number): void => {
    setScore5(score)
  }

  const clickRateHandler = () => {
    setRateState(true);
  }
  const clickBackHandler = () =>{
    setRateState(false);
  }

  const clickSaveHandler = () => {
    //데이터를 저장하려면 정보가 부족함..
  }

  return (
    <div>
      <div>
        {rateState === false && 
          <button id='rate_button' onClick={() => clickRateHandler()}>평가하기</button>
        }
      </div>
      <div>
        {rateState === true &&
              <div className="rating_form">
              <h2 className="rating_heading"> 리뷰 작성하기</h2>
              <button id='cancel_button' onClick={() => clickBackHandler()}>취소</button>
              <button id='save_button' onClick={() => clickSaveHandler()}>저장</button>
              <br></br>

              <div>맛 만족도 {<HeartRating score={score1} updateScore={updateScore1} />} </div>
              <div>가성비 {<HeartRating score={score2} updateScore={updateScore2} />}</div>
              <div>재구매 의사 {<HeartRating score={score3} updateScore={updateScore3} />}</div>
        
              <div>
                {props.category_id === 0 &&
                  <div> 편리성 </div>
                }
                {props.category_id === 1 &&
                  <div> 용량 </div>
                }
                {props.category_id === 2 &&
                  <div> 신선도 </div>
                }
                {props.category_id === 3 &&
                  <div> 건더기 양 </div>
                }
                {props.category_id === 4 &&
                  <div> 목넘김 </div>
                }
                {<HeartRating score={score4} updateScore={updateScore4} />}
              </div>
        
              <div>
                {props.category_id === 0 &&
                  <div> 재료 양 </div>
                }
                {props.category_id === 1 &&
                  <div> 추천 의사 </div>
                }
                {props.category_id === 2 &&
                  <div> 당도 </div>
                }
                {props.category_id === 3 &&
                  <div> 간편함 </div>
                }
                {props.category_id === 4 &&
                  <div> 당도 </div>
                }
                {<HeartRating score={score5} updateScore={updateScore5} />}
              </div>

              <div>
                <div>한줄평</div>
                <input type="text" onChange={(event) => setComment(event.target.value)}/>
              </div>
            </div>
        }
        </div>
    </div>
    
  )
}

export default RatingForm
