import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adamOndra } from '../../../loadingGiffs';
// import { fetchAllGroups } from "../../../store/groups";
import { fetchAllEvents } from "../../../store/events";
import EventComponent from "./EventComponent"

const EventPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllEvents())
    }, [dispatch])

    const events = useSelector(fullReduxState => fullReduxState.events);
    const eventsExist = events && events.length > 0;

    return (
        <>
            {!eventsExist && <img alt="Loading..." src={adamOndra} />}
            {eventsExist && <EventComponent events={events}/>}
        </>
    )
}


export default EventPage
