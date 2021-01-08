
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams} from 'react-router-dom';



const JoinGroup = () => {
    // const dispatch = useDispatch()
    // const { groupId } = useParams()
    // const loggedInUserId = useSelector(state => state.session.user.id)

    // const [joined, setJoined] = useState(false)

    // const GroupMembers = memberTables.filter(memberTable => memberTable.groupId === parseInt(groupId, 10))

    // const userIsAMember = GroupMembers.find(({userId}) => userId === loggedInUserId)


    // if(userIsAMember) {
    //     setJoined(true)
    // } else {
    //     setJoined(false)
    // }

    // const handleSubmit = async(e) => {
    //     e.prevent.default();

    //     const payload = {
    //         groupId: groupId,
    //         userId: loggedInUserId
    //     }

    //     // let createdMember = dispatch(createNewMemberTable(payload))
    // }

    return (
        <div id="join-group-container">
            <form>
                <button>Join Group</button>
            </form>
        </div>
    )
}


export default JoinGroup
