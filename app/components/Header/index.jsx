import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';
import './style.scss';

class Header extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				<div id="home-header" className="clear-fix">
					<span className="back-icon" onClick={this.clickHandle.bind(this)}>
						<i className="icon-chevron-left"></i>
					</span>
					<h4>{this.props.title}</h4>
				</div>
			</div>
		)
	}

	clickHandle(){
		window.history.back()	
	}
}

export default Header