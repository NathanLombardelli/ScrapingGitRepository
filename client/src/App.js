import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


  const [result, setResult] = useState("no api");
    const [username, setusername] = useState("");

   function callAPI() {
    let tab = [];
    fetch("http://localhost:9000/testAPI"+username)
        .then(res => res.text())
        .then(res => tab = res.split(';')).then( ()=> {
            let list = document.getElementById("listRepo");
            list.innerHTML = "";
            for (let i = 0; i < tab.length; i++) {
                let li = document.createElement('li');
                li.innerText = tab[i];
                list.append(li);
            }
        }
    );



  }

  return (
      <div className="App">
        <header className="App-header">
            <p className="App-intro">{result}</p>
            <input id='user' />
            <button onClick={()=>{ setusername("?username=" + document.getElementById('user').value);callAPI()}}>Submit</button>
            <ol id={"listRepo"}>

            </ol>
        </header>
      </div>
  );
}

export default App;
