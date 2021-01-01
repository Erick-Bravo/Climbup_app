import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllGroups } from "../../../store/groups";
import { fetchAllUsers } from "../../../store/users";
import "./index.css";

const fidgetpinnerGiff = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a36e39ed-2182-4fa3-af43-299e3d89d2de/db8jbxg-51f41c0c-b7ed-48f6-9128-3e5e701bfd88.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTM2ZTM5ZWQtMjE4Mi00ZmEzLWFmNDMtMjk5ZTNkODlkMmRlXC9kYjhqYnhnLTUxZjQxYzBjLWI3ZWQtNDhmNi05MTI4LTNlNWU3MDFiZmQ4OC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lC-RRl5AEyU4GPP1FMnMX8aEKDmGDtAAT5FfMTXxwj4"

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
                {!GroupOwner && <img alt="Loading..." src={fidgetpinnerGiff} />}
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
            }) : <img alt="Loading..." src={fidgetpinnerGiff} />}
        </div>
    );
};


export default Groups;
