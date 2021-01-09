import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGroupEvents } from '../../../store/group';


const GroupEvents = () => {
    const dispatch = useDispatch()
    const { groupId } = useParams();
    const groupIdParsed = parseInt(groupId)

    // useEffect(() => {
    //     dispatch(fetchGroupEvents(groupIdParsed))
    // }, [dispatch])

    // const groupEvents = useSelector(state => state)

    // console.log(groupEvents)

    return (
        <>

        </>
    )
}

export default GroupEvents
