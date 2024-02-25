export default function Card({recipe}){
    const {image, name, tag, numberOFMinutes} = recipe
    return (
    <div className='card'>
    <img src={image} 
    alt="" />
    <div className="card-content">
      <h3>{name}</h3>
      <div className="card-info">
      <div className="tag">
        <p>{tag}</p>
      </div>
      <p className="time-text">{numberOFMinutes} mins</p>
    </div>
    </div>  
  </div>
    )
}    