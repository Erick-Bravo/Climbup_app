import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllGroups } from "../../../store/groups";
import { fetchAllUsers } from "../../../store/users";
import { adamOndra } from "../../../loadingGiffs"
import "./index.css";



const Group = ({ theGroup }) => {
    const ownerIdNumber = theGroup.ownerId;
    const groupId = theGroup.id;


    //the return of the render returns BEFORE useEffect.
    //an && operation in the return is necissary to check if loaded.
    const dispatch = useDispatch();
    // const [currentGroups, setGroups] = useState([])
    const currentUsers = useSelector((fullReduxState) => {
        return fullReduxState.users
    })

    //Empty array = do this once when this comp is first shown.
    useEffect(() => {
        dispatch(
            fetchAllUsers()
        );
    }, [dispatch]);

    const GroupOwner = currentUsers.find(({ id }) => id === ownerIdNumber)

    return (
        <div id="group-container">
            <NavLink to={`/groups/${groupId}`}>
                <h3>{theGroup.name}</h3>
                {!GroupOwner && <img alt="Loading..." src={adamOndra} />}
                {GroupOwner && <h5>{`Group owned by ${GroupOwner.firstName} ${GroupOwner.lastName}`}</h5>}
            </NavLink>
        </div>
    )
}


const Groups = () => {
    const dispatch = useDispatch();
    // const [currentGroups, setGroups] = useState([])
    const currentGroups = useSelector((fullReduxState) => {
        return fullReduxState.groups
    })

    //Empty array = do this once when this comp is first shown.
    useEffect(() => {
        dispatch(
            fetchAllGroups()
        );
    }, [dispatch]);

    return (
        <div id="groups">
            <h2>List of Groups</h2>
            {currentGroups ? currentGroups.map(group => {
                return <Group theGroup={group} key={group.id} />
            }) : <img alt="Loading..." src={adamOndra} />}
        </div>
    );
};


export default Groups;
