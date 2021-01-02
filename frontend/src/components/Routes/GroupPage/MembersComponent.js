import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllGroups } from "../../../store/groups";
import { fetchAllMembers } from "../../../store/members";

const Members = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllMembers())
    }, [dispatch])

    const members = useSelector(fullReduxState => fullReduxState.members)

    return (
        <div id="members-container">
            {!members ? members.map(member => {
                return <MembersComponent />
            }) : <img alt="Loading..." src={adamOndra} /> }
        </div>
    )
}
