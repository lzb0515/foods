import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.scss';

class HomeAd extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				{this.props.data.map((item,index)=>{
					return <div key={index}>
								<a href={item.link}>
									<img src={item.img} width="100" />
								</a>
							</div>
				})}
			</div>
		)
	}
}

export default HomeAd