import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

class CityList extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				<div>
					<h3>热门城市</h3>
					<ul>
						<li onClick={this.clickHandle.bind(this,'北京')}>北京</li>
						<li onClick={this.clickHandle.bind(this,'上海')}>上海</li>
						<li onClick={this.clickHandle.bind(this,'广州')}>广州</li>
					</ul>
				</div>
				
			</div>
		)
	}

	clickHandle(newCity){
		var changFn = this.props.changFn;
		console.log(newCity);
		changFn(newCity);
	}
}

export default CityList