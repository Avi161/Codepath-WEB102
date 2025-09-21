function Event(props){
    return(
        <div className='event-card'>
        <h3 className='event-title'>{props.title}</h3>
        <img className='event-img' src={props.src} alt={`${props.title} event image`} />
        <p className='event-location'>📍 {props.location}</p>
        </div>
    )
}

export default Event
