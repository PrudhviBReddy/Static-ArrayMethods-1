
import "./App.css";
import Marks from "./classes/Marks";

function App() {

let prudhvi= new Marks();
 prudhvi.teluguMarks = 88;
 prudhvi.hindiMarks = 88;
 prudhvi.englishMarks =77;
 prudhvi.mathsMarks =55;
 prudhvi.scienceMarks = 66;
 prudhvi.socialMarks = 100;

 console.log(Marks.passMarks)
Marks.prudhviDetails();
prudhvi.calculateResult();
  let charctersOfRamayan = [
    "Dasarada",
    "Kousalya",
    "Kaikeyi",
    "Sumitra",
    "Ram",
    "Lakshman",
    "Bharatha",
    "Shatrugna",
    "Sita",
    "Oormila",
    "Parashurama",
    "Janaka",
    "Ravana",
    "Vibheeshana",
    "Kumbhakarna",
    "Surpanaka",
  ];

  console.log(charctersOfRamayan);
  

  return (
  <div className="App">
    <h1>Array Methods and Properties</h1>
    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.length);
      console.log(charctersOfRamayan[10]);
      for( let i=0;i<charctersOfRamayan.length;i++ ){
        console.log(charctersOfRamayan[i]);
              }
             
    }}>Array Length</button>

    <button  type ="button" onClick={()=>{
        // console.log(charctersOfRamayan.length);
        for( let i=0;i<charctersOfRamayan.length;i++ ){
          console.log(charctersOfRamayan.at(i));
                }
     
    }}>Array at</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.toString());
    }}>Array toString</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.join(" | "));
    }}>Array Join</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
    charctersOfRamayan.push("Mandodhari","Brahma Dev");
      console.log(charctersOfRamayan);
    }}> Array Push</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      console.log(charctersOfRamayan.pop());
      console.log(charctersOfRamayan);
    }}> Array Pop</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      console.log(charctersOfRamayan.shift());
      console.log(charctersOfRamayan);
    }}>Array Shift</button>

    <button  type ="button" onClick={()=>{
console.log(charctersOfRamayan);
charctersOfRamayan.unshift("Atrimaharshi","Bruhumaharshi","Gowtamamaharshi")
    }}>Array Unshift</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      charctersOfRamayan.splice(0,0,"Meghnadha","Lankini")
      console.log(charctersOfRamayan);

      console.log(charctersOfRamayan);
      charctersOfRamayan.splice(10,3,);
      console.log(charctersOfRamayan);
    }}>Array Splice</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      delete charctersOfRamayan[9];
      console.log(charctersOfRamayan);
    }}>Array Delete</button>

  </div>
  );
}

export default App;