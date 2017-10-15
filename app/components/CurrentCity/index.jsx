import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

class CurrentCity extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				<div>
					<h1>{ this.props.cityName }</h1>
				</div>
				
			</div>
		)
	}
}

export default CurrentCity