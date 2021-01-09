import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupEvents } from "../../../store/groupEvents"
import { NavLink, useParams } from 'react-router-dom';
import { adamOndra } from "../../../loadingGiffs"


const Event = ({ event }) => {
    const id = event.id
    const name = event.name
    const time = event.time
    const date = event.date
    const address = event.address
    const photo = event.photoUrl
    console.log(event)

    return (
        <>
            <NavLink to={`/events/${id}`}>
                <div id="event-container">
                    <img alt="null" src={photo} />
                    <h4>{name}</h4>
                    <p>Location: {address}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>

                </div>
            </NavLink>
        </>
    )
}

const GroupEvents = () => {
    const { groupId } = useParams();
    const dispatch = useDispatch()
    const groupIdParsed = parseInt(groupId)


    useEffect(() => {
        dispatch(fetchGroupEvents(groupIdParsed))
    }, [dispatch])

    const groupEvents = useSelector(state => state.groupEvents)

    return (
        <div id="groupEvent-container">
            <h3>Current Events</h3>
            {!groupEvents && <img alt="Loading..." src={adamOndra} />}
            {groupEvents && groupEvents.map(event => {
                return <Event event={event} />
            })}

        </div>
    )
}

export default GroupEvents
