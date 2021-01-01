import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { fetchAllEvents } from "../../../store/events"
import { fetchAllGroups } from "../../../store/groups";
import { adamOndra } from "../../../loadingGiffs"
import "./index.css"


const Event = ({ theEvent }) => {
    const dispatch = useDispatch();
    const event = theEvent
    const eventId = event.id
    const eventGroupId = theEvent.groupId

    const currentGroups = useSelector((fullReduxState) => {
        return fullReduxState.groups
    })

    useEffect(() => {
        dispatch(
            fetchAllGroups()
        );
    }, [dispatch]);

    const EventOwner = currentGroups.find(({ id }) => id === eventGroupId )

    return (

        <div id="event-container">
            <NavLink to={`/events/${eventId}`}>
                <h2>{event.name}</h2>
                {!EventOwner && <img alt="Loading..." src={adamOndra}/>}
                {EventOwner && <h5>{`Hosted By: ${EventOwner.name}`}</h5>}
                <h5>{event.address}</h5>
                <h5>{event.date}</h5>
                <h5>{event.time}</h5>
            </NavLink>
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
        dispatch(
            fetchAllEvents()
        );
    }, [dispatch]);

    return (
        <div id="events">
            <h2>List of Events</h2>

            {currentEvents ? currentEvents.map(event => {
                return <Event theEvent={event} key={event.id} />
            }) : <img alt="Loading..." src={adamOndra} />}
        </div>
    );
};



export default Events;
