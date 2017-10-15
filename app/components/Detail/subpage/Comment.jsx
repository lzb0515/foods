import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Comment extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				购买121313
			</div>
		)
	}
}

export default Comment