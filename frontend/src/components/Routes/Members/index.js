import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchAllMemberTables } from "../../../store/memberTables";

// import { fetchGroupMembers } from "../../../store/groups";
// import { adamOndra } from '../../../loadingGiffs';




const Members = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllMemberTables())
    }, [dispatch])

    const memberTables = useSelector(fullReduxState => fullReduxState.memberTables)

    const GroupMembers = memberTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))

    // const members = useSelector(fullReduxState => fullReduxState.groups.Users)


    // //Randomized 4 Members
    // //Sometimes its only 3, which is weird.

    // let randomMemTables = [];
    // let randomNumCheck = []

    // for(let i = 0; i < 4; i++) {
    //     const randomMemberIndex = Math.floor(Math.random() * members.length)
    //     if(randomNumCheck.indexOf(randomMemberIndex) === -1) {
    //         randomNumCheck.push(randomMemberIndex)
    //         randomMemTables.push(members[randomMemberIndex])
    //     }
    // }


    return (
        <div id="members-container">
            {/* {!GroupMembers && <img alt="Loading..." src={adamOndra} />} */}
            {/* {GroupMembers && <MembersComponent />} */}

            <p>{`Currently ${GroupMembers.length} Members`}</p>

            <NavLink to={`/groups/${groupId}/members`}>See All Members</NavLink>
        </div>
    )
}

export default Members
