import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
// Six core concept practice in react

function App() {
// array of objects
// const data = [
//   {
//     name:"Md Shahin Alam",
//     age :21,
//     school:"Boguladangi"
//   },
//   {
//     name:"Nayem Sarkar",
//     age :20,
//     school:"Turukptha"
//   },
//   {
//     name:"Md Kawser Ahmed",
//     age :22,
//     school:"Vulli"
//   }
// ]
// 
  



// Api data fetch..
return (
    <div className="App">
    {/* {
      data.map(each => <Test details={each}></Test>)
    } */}

      {/* <State></State> */}
      <FetchData></FetchData>
    </div>
  );
}

// custom components
// function Test(props){
//   console.log(props.details);
//   return (
//     <div className="my-class">
//       <h1>Name : {props.details.name}</h1>
//       <h4>School : {props.details.school}</h4>
//     </div>
//   );
// }

// use state use
// function State(){
//   const [count,setState] = useState(10);
//   const increaseCount = ()=> setState(count+1);
//   const decreaseCount = ()=> setState(count-1);
//   return (
//     <div className="state-class">
//       <div>count : {count}</div>
//       <button onClick={decreaseCount}>Data increase</button>
//       <button onClick={increaseCount}>Data increase</button>
//     </div>
//   );
// }

// api uses
function FetchData(){
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(data => data.json())
    .then(res => setComments(res));

  },[]);

  return (
    <div>
      {
        comments.map(comment => <MessageShow name={comment.name} body={comment.body}></MessageShow>)
      }
    </div>
  )
}

function MessageShow(props){
  return (
    <div className='my-class'>
      <h1>Name : {props.name}</h1>
      <p> {props.body}  </p>
    </div>
  )
}

export default App;




// the main core concepts
// 1. componet add
// 2. data pass as attribute
// 3. event handaler add
// 4. call event bubble
// 5. useState for data set
// 6. useEvent for api