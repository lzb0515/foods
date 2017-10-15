import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class SearchList extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<h1>搜索子夜</h1>
		)
	}
}

export default SearchList