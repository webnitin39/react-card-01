
import {RiBookmarkLine} from '@remixicon/react'


const Cards = (props) => {
  return (
    
    <div className='card'>
        <div className="top">
            <img src={props.logo} alt="logo" />
            <button className="save">save 
< RiBookmarkLine size={18} /> </button>
        </div>
        <div className="center">
            <h3>{props.company} <span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <div className='tags'>
                <h4 className="tag">{props.tag1}</h4>
                <h4 className="tag">{props.tag2}</h4>
            </div>
        </div>
        <div className="bottum">
            <div className="pay">
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
            </div>
            <button className="apply">Apply Now</button>
        </div>


    </div>
  )
}

export default Cards