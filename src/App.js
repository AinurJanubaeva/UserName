
import './App.css';
import { Counter } from './companents/Counter';
import { UserName } from './companents/UserName';

function App() {

  const users = [
    {
      name:"Text-1",
      age:46
    },
    {
      name:"Text-2",
      age:23
    },
    {
      name:"Text-3",
      age:14
    },
  ]
  const mapArray = users.map((el)=>{
    return el.name 
  })
  const ageArray = users.map((el)=>{
    return el.age
  })

let save = (data)=>{
  console.log(data);
  return data
}

// save("hello")


  return (
    <div className="App">
      <Counter/>
      {/* <UserName render={mapArray} age={ageArray} onSave={save}/>  */}
    </div>
  );
}

export default App;







