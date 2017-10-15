import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class LoginComponent extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	phone:""
        }
    }

	render(){
		return(
			<div>
				<input type="text" placeholder="请输入手机号" onChange={this.changeHandle.bind(this)} value={this.props.phone} />
				<button onClick={this.clickHandle.bind(this)}>登录</button>
			</div>
		)
	}

	changeHandle(e){
		this.setState({
			phone: e.target.value
		})
	}

	clickHandle(){
		const username = this.state.phone;
		const loginHandle = this.props.loginFn;
		loginHandle(username)
	}

}

export default LoginComponent