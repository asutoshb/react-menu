import './components/file.css';
import Props from './components/Props'

const data = [
  {color: "blue", name: "JOIN US"},
  {color: "grey", name: "SETTINGS"},
  {color: "orange", name: "LOGIN"},
  {color: "red", name: "CONTACT US"},
   {color: "green", name: "SEARCH"},
    {color: "violet", name: "HELP"},
     {color: "pink", name: "HOME"},
     {color: "brown", name: "DOWNLOAD"}
];

function App1()
{
    return (
        
        <div className="grid">
            {data.map((el)=>(
                    <Props color={el.color} name={el.name}/>
                
                
            ))}
        </div>
       
        
    );
}

export default App1;