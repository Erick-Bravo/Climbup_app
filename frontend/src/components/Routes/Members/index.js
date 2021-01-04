import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { fetchAllMemberTables } from "../../../store/memberTables";
import { fetchAllGroups, fetchGroupMembers } from "../../../store/groups";
// import { fetchGroupMembers } from "../../../store/groups";
// import { adamOndra } from '../../../loadingGiffs';




const Members = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const Groups = useSelector(fullReduxState => fullReduxState.groups)

    useEffect(() => {
        dispatch(fetchAllMemberTables())
    }, [dispatch])

    const memberTables = useSelector(fullReduxState => fullReduxState.memberTables)

    // useEffect(() => {
    //     dispatch(fetchGroupMembers(groupId))
    // }, [dispatch])


    const GroupMembers = memberTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))
    console.log(GroupMembers)

    //Randomized 4 Members
    //Sometimes its only 3, which is weird.
    // let randomMemTables = [];
    // let randomNumCheck = []
    // for(let i = 0; i < 4; i++) {
    //     const randomMemberIndex = Math.floor(Math.random() * GroupMembers.length)
    //     if(randomNumCheck.indexOf(randomMemberIndex) === -1) {
    //         randomNumCheck.push(randomMemberIndex)
    //         randomMemTables.push(GroupMembers[randomMemberIndex])
    //     }
    // }

    // const randomMembers = randomMemTables.filter(memberTable => memberTable.userId === user)

    return (
        <div id="members-container">
            {/* {!GroupMembers && <img alt="Loading..." src={adamOndra} />} */}
            {/* {GroupMembers && <MembersComponent />} */}

            <p>{`Currently ${GroupMembers.length} Members`}</p>
            <NavLink to={`/groups/${groupId}/members`}>See All Members</NavLink>
            <button>JOIN GROUP</button>
        </div>
    )
}

export default Members
