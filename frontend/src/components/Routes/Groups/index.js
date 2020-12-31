import { fetch } from "../../../store/csrf" //already doing res.json
import { useEffect, useState } from "react"


const Group = ({theGroup}) => {
    const ownerIdNumber = theGroup.ownerId

    const [currentUsers, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async() => {

            const response = await fetch("api/users")
            setUsers(response.data.users);
        }
        fetchData()
    }, []);

    const GroupOwner = currentUsers.find(({id}) => id === ownerIdNumber)
    console.log(GroupOwner)

    return (
        <div>
            <h3>{theGroup.name}</h3>
            {!GroupOwner && <img alt="Loading..." src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2a6dae53616869.593a85ce553c4.gif" />}
            {GroupOwner && <h5>{`Group owned by ${GroupOwner.firstName} ${GroupOwner.lastName}`}</h5>}
        </div>
    )
}


const Groups = () => {
    const [currentGroups, setGroups] = useState([])

    //Empty array = do this once when this comp is first shown.
    useEffect(() => {
        const fetchData = async() => {
            //Request to the server
            const response = await fetch("api/groups")
            // originally: const data = await response.json
            // no need because the import "fetch" takes care of this.
            // how?
            setGroups(response.data.groups);
        }
        fetchData()
    }, []);

    return (
        <div id="groups">
            <h2>This is the GROUPS page</h2>
            {!currentGroups && <img alt="Loading..." src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2a6dae53616869.593a85ce553c4.gif" />}
            {currentGroups && currentGroups.map(group => {
                return <Group theGroup={group} key={group.id}/>
            })}
        </div>
    );
};


export default Groups;
