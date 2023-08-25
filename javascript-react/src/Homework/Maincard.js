import'./App.css'
import Socails from'.Socails';

function App(){
    return(
        <div className='card'>
            <img src= {props.img} alt={props.alt}/>
            <h2>{props.name}</h2>
            <h5>{props.positoin}</h5>
            <p>{props.discription}</p>
            <Socails />
        </div>
    )
}
export default App 