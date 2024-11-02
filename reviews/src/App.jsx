import { useState } from "react";
import review from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = review[index];

  const nextPerson = () => {
    setIndex((index) => {
      if (index === review.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const prevPerson = () =>{
    setIndex((index)=>{
      if(index === 0){
        return review.length -1
      }
      return index - 1
    })
  }
  
  const randomPerson = () =>{
    let randomNum = Math.floor(Math.random() * review.length)
    if(randomNum === index){
      randomNum = index + 1
    }
    setIndex(randomNum)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <br />
        <p className='job'>{job}</p>
        <br />
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>Surprise me!</button>
      </article>
    </main>
  );
};
export default App;
