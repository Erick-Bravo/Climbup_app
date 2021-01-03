import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllGroups } from "../../../store/groups";
import { fetchAllMembers } from "../../../store/members";
import { fetchAllUsers } from "../../../store/users";


//This file needed to be run here for the operation in index.js
const Members = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const currentUsers = useSelector(fullReduxState => fullReduxState.users)

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const group = useSelector(fullReduxState => fullReduxState.groups[groupId - 1])

    useEffect(() => {
        dispatch(fetchAllMembers())
    }, [dispatch])

    const membersTables = useSelector(fullReduxState => fullReduxState.members)
    console.log(membersTables)

    const GroupMembers = membersTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))
    console.log(GroupMembers)

    return (
        null
        // <div id="members-container">
        //     {GroupMembers ? GroupMembers.map(member => {
        //         return <MembersComponent />
        //     }) : <img alt="Loading..." src={adamOndra} /> }
        // </div>
    )
}

const GroupComponent = () => {

    const dispatch = useDispatch()
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const group = useSelector(fullReduxState => fullReduxState.groups[groupId - 1])
    console.log(group)

    return (
        <div id="group-page-container">
            <div id="group-page-photo">
                <img alt="photo" src={group.photoUrl} />
            </div>
            <div>
                <h1>{group.name}</h1>
                <h3>{group.name}</h3>
                <h3>{`Description: ${group.description}`}</h3>
            </div>
            <div>
                <Members />
            </div>
        </div>
    )
}


export default GroupComponent
