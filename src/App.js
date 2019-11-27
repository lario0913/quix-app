import './App.css';
import React from 'react'


function Header () {
  return (
    <div className="header">
      <h4>Author Quiz</h4>
      <p>Select the correct book written by Author</p>
      <hr/>
    </div>
  )
}

function Books ({title, onClick}) {
  return(
    <div className="books" onClick={() => onClick(title)}>
    <button>{title}</button>
  </div>
  )
}

function Turn ({author, books, highlight, onAnswerSelected}) {
  function mapToBgColor (highlight){
    const mapping = {
      none: '',
      correct: "green",
      wrong: "red"
    }
    return mapping[highlight]
  }

  return (
    <div className="turn" style={{background:mapToBgColor(highlight)}}>
      <div className="turn-item image">
        <img src={author.imageUrl} alt="author" />
      </div>
      <div className="turn-item data">
        {
          books.map(title => 
          <Books key={title} title={title} onClick={onAnswerSelected} />)}
      </div>
      <hr />
    </div>
  )
}

function Continue (){
  return(
    <div>
      <hr/>
    </div>
  )
}

function Footer () {
  return (
    <div>
      <h5>@ lario 2019</h5>
    </div>
  )
}


function AuthorQuiz ({turnData, highlight, onAnswerSelected}) {
    return (
      <div>
        <Header />
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue />
        <Footer />
      </div>
    )
}

export default AuthorQuiz

