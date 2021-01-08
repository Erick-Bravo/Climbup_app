import { useParams, NavLink } from 'react-router-dom';
import { adamOndra } from "../../../loadingGiffs"
import "./index.css"


const Members = ({ group }) => {

    const { groupId } = useParams();

    // const GroupMembers = memberTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))
    const GroupMembers = group.Users

    const randomBoxGen = (groupMembers) => {
        let randomMembers = [];
        let randomNumCheck = [];

        for (let i = 0; i < 4; i++) {
            const randomMemberIndex = Math.floor(Math.random() * groupMembers.length)

            if (randomNumCheck.indexOf(randomMemberIndex) === -1) {
                randomNumCheck.push(randomMemberIndex)
                randomMembers.push(groupMembers[randomMemberIndex])
            }
        }

        return (
            <div id="random-members-box">
                <div>
                    <p>{`Currently ${GroupMembers.length} Members`}</p>
                    <NavLink to={`/groups/${groupId}/members`}>See All Members</NavLink>
                </div>
                {randomMembers.map((member) => {
                    return (
                        <>
                            <div id="member">
                                <img alt="null" src={member.photoUrl} />
                                <h3>{member.username}</h3>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }


    return (
        <div id="members-container">
            {!GroupMembers && <img alt="Loading..." src={adamOndra} />}
            {GroupMembers &&
                <>
                    {randomBoxGen(GroupMembers)}
                </>}
        </div>
    )
}

export default Members
