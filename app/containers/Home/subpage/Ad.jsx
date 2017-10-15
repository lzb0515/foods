import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../fetch/home/home.js';
import HomeAd from '../../../components/HomeAd/index.jsx';

class Ad extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    	this.state={
    		data: []
    	}
    }

	render(){
		return(
			<div>
				<h2>超值特惠</h2>
				{
					this.state.data.length
					? <HomeAd data={this.state.data}/>
					: <div>Loading……</div>
				}
			</div>
		)
	}

	componentDidMount(){
		const result = getAdData();
		result.then((res=>{
			return res.json()
		})).then((json) => {
			const data = json;
			if(data.length){
				this.setState({
					data: data
				})
			}
		})
	}
}

export default Ad