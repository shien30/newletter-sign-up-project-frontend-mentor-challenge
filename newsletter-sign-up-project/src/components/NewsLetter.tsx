
import iconList from"../images/icon-list.svg"


export default function NewLetter(){
     return(
        <div className="newsletter">

        <h1> Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
        <li><span><img src={iconList} alt="" /></span>Product discovery and building what matters</li>
        <li><span><img src={iconList} alt="" /></span>Measuring to ensure updates are a success </li>
        <li><span><img src={iconList} alt="" /></span>And much more!</li>
        </ul>
        </div>
        
    )
}