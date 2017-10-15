import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Buy extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	isStore: false
        }
    }

	render(){
		return(
			<div>
				购买
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy)