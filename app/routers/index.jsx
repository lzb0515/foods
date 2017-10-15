import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/index.jsx';
import Home from '../containers/Home/index.jsx';
import City from '../containers/City/index.jsx';
import Search from '../containers/Search/index.jsx'
import Login from '../containers/Login/index.jsx'
import User from '../containers/User/index.jsx'


class Routers extends React.Component{
	render(){
		return(
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<IndexRoute component={Home} />
					<Route path="/city" component={City} />
					<Route path="/search/:category(/:keyword)" component={Search} />
					<Route path="/login(/:router)" component={Login} />
					<Route path="/user" component={User} />
				</Route>
			</Router>
		)
	}
}

export default Routers;