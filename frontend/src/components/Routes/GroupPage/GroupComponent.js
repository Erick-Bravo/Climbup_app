import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllGroups } from "../../../store/groups";


//This file needed to be run here for the operation in index.js

const GroupComponent = () => {



    const dispatch = useDispatch()
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const group = useSelector(fullReduxState => fullReduxState.groups[groupId - 1])
    console.log(group)


    return (
        <div id="group-page-container">
            <div id="group-page-photo">
                <img alt="photo" src={group.photoUrl} />
            </div>
            <div>
                <h1>{group.name}</h1>
                <h3>{group.name}</h3>
                <h3>{`Description: ${group.description}`}</h3>
            </div>
        </div>
    )
}


export default GroupComponent
