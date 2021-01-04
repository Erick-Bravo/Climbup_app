import JoinGroup from "./JoinGroupButton"
import Members from "../Members"
import "./index.css"

const GroupComponent = ({group, memberTables}) => {


    return (
        <div id="group-page-container">
            <div id="group-page-photo-box">
                <img alt="photo" src={group.photoUrl} />
            </div>
            <div>
                <JoinGroup memberTables={memberTables}/>
            </div>
            <div>
                <h1>{group.name}</h1>
                <h3>{`Description: ${group.description}`}</h3>
            </div>
            <div>
                <Members />
            </div>
        </div>
    )
}


export default GroupComponent
