import React from 'react';
import {hashHistory} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js';
import Header from '../../Components/Header/index.jsx';
import LoginComponent from '../../Components/Login/index.jsx';

class Login extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	checking: true
        }
    }

	render(){
		return(
			<div>
				<Header title="登录" />
				{
					this.state.checking
					? <div></div>
					: <LoginComponent loginFn={this.loginHandle.bind(this)} />
				}
			</div>
		)
	}

	componentDidMount(){
		this.doCheck()
	}
	loginHandle(username){
		const actions = this.props.userInfoActions;
		let userinfo = this.props.userinfo;
		userinfo.username = username;
		actions.update(userinfo);
		const params = this.props.params;
		const router = params.router;
		if(router){
			hashHistory.push(router);
		}else{
			this.goUserPage()
		}

	}
	doCheck(){
		var userinfo = this.props.userinfo;
		if(userinfo.name){
			this.goUserPage()
		}else{
			this.setState({
				checking: false
			})
		}
	}
	goUserPage(){
		hashHistory.push('/User')
	}
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)