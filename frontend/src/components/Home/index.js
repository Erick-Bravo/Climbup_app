import "./index.css"
import picture2 from "./rjfranklinPhoto2.JPG"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux" //gets a callback function

const Home = () => {

    const loggedinUser = useSelector(state => {
        console.log(state);
        return state.session.user
    })

    return (
        <div>
            <div id="home-page-container">
                <img src={picture2} alt="whoops, a thing SHOULD be here..." />
                <div id="overlay-home">
                    <h1>Welcome to ClimbUp!</h1>
                    <ul>
                        <li>Find your group</li>
                        <li>Join an event</li>
                        <li>Live the life.</li>
                    </ul>
                </div>
            </div>
            <div id="second-banner-home">
                {loggedinUser && <p>You are logged in as {loggedinUser.username}</p>}
                <NavLink to="/groups">See All Groups</NavLink>
                <NavLink to="/events">See All Events</NavLink>
            </div>
        </div>
    );
};


export default Home;
