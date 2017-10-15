import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Item extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		const data = this.props.data
		return(
			<div>
				<h3>{data.title}</h3>
				<img src={data.img} width="100" />
			</div>
		)
	}
}

export default Item