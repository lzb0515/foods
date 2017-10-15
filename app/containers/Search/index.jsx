import React from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from "../../components/SearchHeader";
import SearchList from "./subpage/List.jsx"

class Search extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		const params = this.props.params;
		return(
			<div>
				<SearchHeader keyword={params.keyword} />
				<SearchList keyword={params.keyword} category={params.category} />
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
)(Search)