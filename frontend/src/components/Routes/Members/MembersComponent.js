import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
// import { fetchAllMembers } from "../../../store/members";
import { fetchAllUsers } from "../../../store/users";
import { adamOndra } from '../../../loadingGiffs';


const MembersComponent = () => {



    return (
        <>
            <h3>Display of random 4 members</h3>
        </>
    )
}

export default MembersComponent
