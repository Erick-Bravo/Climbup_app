import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllEvents } from "../../../store/events";


//This file needed to be run here for the operation in index.js

const EventComponent = ({events}) => {

    const { eventId } = useParams();

    const event = events.find(({id}) => id === parseInt(eventId, 10))


    return (
        <div id="event-page-container">
            <div id="event-page-photo">
                <img alt="photo" src={event.photoUrl} />
            </div>
            <div>
                <h1>{event.name}</h1>
                <h3>{event.date}</h3>
                <h3>{event.time}</h3>
                <h3>{`Description: ${event.description}`}</h3>
            </div>
        </div>
    )
}


export default EventComponent
