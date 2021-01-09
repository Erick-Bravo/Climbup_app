import JoinGroup from "./JoinGroupButton"
import Members from "../Members"
import GroupEvents from "./GroupEvents"
import "./index.css"

const GroupComponent = ({ group }) => {


    return (
        <div id="group-page-container">
            <div id="group-page-photo-box">
                <img alt="null" src={group.photoUrl} />
            </div>
            <div>
                <JoinGroup group={group} />
            </div>
            <div>
                <h1>{group.name}</h1>
                <h3>{`Description: ${group.description}`}</h3>
            </div>
            <div>
                <Members group={group} />
            </div>
            <div>
                <GroupEvents group={group}/>
            </div>
        </div>
    )
}


export default GroupComponent
