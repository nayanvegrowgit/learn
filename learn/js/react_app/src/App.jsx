import { useState } from 'react';

export default function MyApp() {
  const [mycount, setCount] = useState(0);
  function handleClick() {
    setCount(mycount + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={mycount}  onClick={handleClick} />
      <MyButton count={mycount}  onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) { 
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function create_para(str) {
  const para = document.createElement("p");
  para.innerText = str;
  const indiv = document.getElementById("in_div");
  indiv.appendChild(para);
}
function ret_body_text(obj) {
  // return obj.body;                                                                                                                               
  // return `${obj.id} : ${obj.title} : ${obj.body}`;                                                                                               

}
function f() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json()) // Convert the response to JSON format                                                                     
      .then(data => {                    //                                                                                                         
          var data_length = data.length;
          console.log(`data dength : ${data_length}`);
          body_data = data.map(ret_body_text);
          // body_data.map(create_para);                                                                                                            
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}
