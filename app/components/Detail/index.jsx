import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from "../../components/SearchHeader";
import Header from "../../components/Header";
import SearchList from "./subpage/Buy.jsx";
import SearchList from "./subpage/Comment.jsx";
import SearchList from "./subpage/Info.jsx";

class Detial extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				<Header title="商户详情" type="share"/>
				<Buy id={id} />
				<Comment id={id} />
				<Info id={id} />
			</div>
		)
	}
}

export default Detial