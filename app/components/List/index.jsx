import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './item';

class ListComponent extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				{this.props.data.map((item,index)=>{
					return 	<div key={index}>
								<Item data={item}/>
							</div>
				})}
			</div>
		)
	}
}

export default ListComponent