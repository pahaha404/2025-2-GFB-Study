/*eslint-disable*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let post = '강남 우동 맛집';


  let [title, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);
  let [modal, setModal] = useState(false);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>리액트블로그</h4>
      </div>
      <button onClick={() => {

        let copy = [...title];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      <div className="list">
        <h4>{title[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👌</span> {따봉} </h4>
        <p>1월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>1월 17일 발행</p>
      </div>
      <div className="list">
        <button onClick={() => { setModal(!modal) }}> {title[2]} </button>
        {
          modal == true ? <Modal></Modal> : null
        }

        <p>1월 17일 발행</p>
      </div>

      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4>{title[i]} <span onClick={() => { 따봉변경(따봉 + 1) }}
              >👌</span> {따봉} </h4>
              <p>1월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} /> : null
      }






    </div>
  );
}

function Modal(props) {
  return (

    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div >

  )
}

export default App;