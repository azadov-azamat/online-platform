import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import './component/style/main.scss';
import Register from "./component/pages/Register";
import LoginJs from "./component/pages/LoginJs";
import ActiveCourses from "./component/pages/ActiveCourses";
import AdminPage from "./component/pages/AdminPage";
import MentorPage from "./component/pages/MentorPage";
import OperatorPage from "./component/pages/OperatorPage";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/signIn' component={LoginJs}/>
                    <Route exact path='/signUp' component={Register}/>
                    <Route exact path='/activeCourses' component={ActiveCourses}/>
                    <Route exact path='/adminPage' component={AdminPage}/>
                    <Route exact path='/mentorPage' component={MentorPage}/>
                    <Route exact path='/operatorPage' component={OperatorPage}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
