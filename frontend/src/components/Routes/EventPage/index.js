import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adamOndra } from '../../../loadingGiffs';
import { fetchAllEvents } from "../../../store/events";
import EventComponent from "./EventComponent"

const EventPage = () => {
    const dispatch = useDispatch()
    const { eventId } = useParams();

    useEffect(() => {
        dispatch(fetchAllEvents())
    }, [dispatch])

    const event = useSelector(fullReduxState => fullReduxState.groups[eventId - 1])

    return (
        <>
            {!event && <img alt="Loading..." src={adamOndra} />}
            {event && <EventComponent />}
        </>
    )
}


export default EventPage
