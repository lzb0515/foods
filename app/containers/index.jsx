import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import localStore from '../util/localStore.jsx';
import { CITYNAME } from '../config/localStoreKey.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js';

class App extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }

	render(){
		return(
			<div>
				{
					this.state.initDone
					? this.props.children
					: <p>Loading……</p>
				}
			</div>
		)
	}

	componentDidMount(){
		//从localStorage里面获取城市
		let cityName = localStorage.getItem(CITYNAME);

		if(cityName == null){
			cityName == '北京'
		}

		//将城市信息存到redux中
		this.props.userInfoActions.update({
			cityName: cityName
		})

		this.setState({
			initDone: true
		})
	}
}

function mapStateToProps(state){
	return {}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)