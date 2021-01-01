import { fetch } from "../../../store/csrf" //already doing res.json
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllEvents } from "../../../store/events"
import "./index.css"

const fidgetpinnerGiff = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a36e39ed-2182-4fa3-af43-299e3d89d2de/db8jbxg-51f41c0c-b7ed-48f6-9128-3e5e701bfd88.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTM2ZTM5ZWQtMjE4Mi00ZmEzLWFmNDMtMjk5ZTNkODlkMmRlXC9kYjhqYnhnLTUxZjQxYzBjLWI3ZWQtNDhmNi05MTI4LTNlNWU3MDFiZmQ4OC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lC-RRl5AEyU4GPP1FMnMX8aEKDmGDtAAT5FfMTXxwj4"


const Event = ({theEvent}) => {
    console.log(theEvent)
    const event = theEvent
    return (
        <div id="event-container" onClick={(e) => console.log(`This is the div!!!! ${e.target.id}`)}>
            <h2>{event.name}</h2>
            <h5>{event.address}</h5>
            <h5>{event.date}</h5>
            <h5>{event.time}</h5>
        </div>
    )
}

const Events = () => {
    const dispatch = useDispatch();
    // const [currentEvents, setGroups] = useState([])
    const currentEvents = useSelector((fullReduxState) => {
    return fullReduxState.events
    })
    // console.log(Array.isArray(currentGroups))

    //Empty array = do this once when this comp is first shown.
    useEffect(() => {
        const fetchData = async() => {
            dispatch(
                fetchAllEvents()
            );
        }
        fetchData()
    }, [dispatch]);

    return (
        <div id="events">
            <h2>List of Events</h2>
            {console.log(Array.isArray(currentEvents))}
            {currentEvents ? currentEvents.map(event => {
                return <Event theEvent={event} key={event.id}/>
            }) : <img alt="Loading..." src={fidgetpinnerGiff} />}
        </div>
    );
};



export default Events;
