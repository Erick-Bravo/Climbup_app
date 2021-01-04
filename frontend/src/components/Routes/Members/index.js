import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
// import { fetchAllMembers } from "../../../store/members";
import { fetchAllGroups } from "../../../store/groups";
// import { fetchGroupMembers } from "../../../store/groups";
import { fetchAllUsers } from "../../../store/users";
import { adamOndra } from '../../../loadingGiffs';
// import MembersComponent from './MembersComponent';



const Members = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams();


    // useEffect(() => {
    //     dispatch(fetchAllMembers())
    // }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])




    // const users = useSelector(fullReduxState => fullReduxState.users)

    // const Groups = useSelector(fullReduxState => fullReduxState.groups)



    // const membersTables = useSelector(fullReduxState => fullReduxState.members)
    // // console.log(membersTables)

    // const GroupMembers = membersTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))
    // console.log(GroupMembers)

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

            {/* <p>{`Currently ${GroupMembers.length} Members`}</p> */}
            <NavLink to={`/groups/${groupId}/members`}>See All Members</NavLink>
        </div>
    )
}

export default Members
