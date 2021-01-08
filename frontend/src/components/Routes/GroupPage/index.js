import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adamOndra } from '../../../loadingGiffs';
import { fetchGroupMembers } from "../../../store/groups";
import { fetchAllMemberTables } from "../../../store/memberTables";
import GroupComponent from "./GroupComponent"




const GroupPage = () => {
    const dispatch = useDispatch()
    const { groupId } = useParams();
    const groupIdParsed = parseInt(groupId)

    
    useEffect(() => {
        dispatch(fetchGroupMembers(groupIdParsed))
    }, [dispatch])

    const group = useSelector(state => state.groups)

    return (
        <>
            {!group && <img alt="Loading..." src={adamOndra} />}
            {group && <GroupComponent group={group} />}
        </>
    )
}



export default GroupPage
