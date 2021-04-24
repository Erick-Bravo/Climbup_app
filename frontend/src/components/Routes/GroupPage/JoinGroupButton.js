
import { useSelector, useDispatch } from 'react-redux';
import { useParams} from 'react-router-dom';
import { addGroupMember } from "../../../store/groups"



const JoinGroup = () => {
    const dispatch = useDispatch()
    const { groupId } = useParams()

    const loggedInUserId = useSelector(state => state.session.user)
    console.log(loggedInUserId)

    // const [joined, setJoined] = useState(false)
    // const GroupMembers = memberTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))
    // const userIsAMember = GroupMembers.find(({userId}) => userId === loggedInUserId)


    //else may be triggering too many render errors
    // if(userIsAMember) {
    //     setJoined(true)
    // } else {
    //     setJoined(false)
    // }

        const handleSubmit = async(e) => {
            e.preventDefault();

            //dispatch returns a promise;
            //usage of .then can apply
            dispatch(addGroupMember(groupId, loggedInUserId))
        }

        const ifNotLoggedIn = (e) => {
            alert("You need to Sign-up or Log in for that!!")
        }



    return (
        <div id="join-group-container">
            {!loggedInUserId && <button onClick={(e) => ifNotLoggedIn(e)}>Join Group</button>}
            {loggedInUserId && <button onClick={(e) => handleSubmit(e)}>Join Group</button>}
        </div>
    )
}


export default JoinGroup
