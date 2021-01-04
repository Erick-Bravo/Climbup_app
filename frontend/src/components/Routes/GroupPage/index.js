import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adamOndra } from '../../../loadingGiffs';
import { fetchAllGroups, fetchGroupMembers } from "../../../store/groups";
import { fetchAllMemberTables } from "../../../store/memberTables";
import GroupComponent from "./GroupComponent"




const GroupPage = () => {
    const dispatch = useDispatch()
    const { groupId } = useParams();
    const groupIdParsed = parseInt(groupId)

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const group = useSelector(fullReduxState => fullReduxState.groups[groupId - 1])

    // useEffect(() => {
    //     dispatch(fetchGroupMembers(groupIdParsed))
    // }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllMemberTables())
    }, [dispatch])


    const memberTables = useSelector(fullReduxState => fullReduxState.memberTables)


    return (
        <>
            {!group && <img alt="Loading..." src={adamOndra} />}
            {group && <GroupComponent group={group} memberTables={memberTables}/>}
        </>
    )
}



export default GroupPage
