import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { adamOndra } from '../../../loadingGiffs';
import { fetchAllGroups } from "../../../store/groups";
import GroupComponent from "./GroupComponent"




const GroupPage = () => {
    const dispatch = useDispatch()
    const { groupId } = useParams();

    useEffect(() => {
        dispatch(fetchAllGroups())
    }, [dispatch])

    const group = useSelector(fullReduxState => fullReduxState.groups[groupId - 1])

    return (
        <>
            {!group && <img alt="Loading..." src={adamOndra} />}
            {group && <GroupComponent />}
        </>
    )
}



export default GroupPage
