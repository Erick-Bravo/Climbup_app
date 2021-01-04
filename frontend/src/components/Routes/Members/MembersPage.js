import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
// import { fetchAllMembers } from "../../../store/members";
import { fetchAllGroups, fetchGroupMembers } from "../../../store/groups";
import { fetchAllUsers } from "../../../store/users";
import { adamOndra } from '../../../loadingGiffs';
import "./index.css"


const Member = ({ member }) => {
    return (
        <>
            <div id="member">
                <img alt="null" src={member.photoUrl} />
                <h3>{member.username}</h3>
            </div>
        </>
    )
}

const MembersPage = () => {

    const dispatch = useDispatch();
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchGroupMembers(groupId))
    }, [dispatch])


    const members = useSelector(fullReduxState => fullReduxState.groups.Users)


    return (
        <>
            <div id="members-page-container">
                {!members && <img alt="Loading..." src={adamOndra} />}
                {members && members.map(member => {
                    return (
                        <Member member={member} key={member.id} />
                    )
                })}
            </div>
        </>
    )
}

export default MembersPage
