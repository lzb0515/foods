import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.scss';

class Category extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

	render(){
		var opt = {
			auto: 2000,
			callback: function(index){
				this.setState({index:index})
			}.bind(this)
		}
		return(
			<div>
				<ReactSwipe className="carousel" swipeOptions={opt}>
	                <div>PANE 1</div>
	                <div>PANE 2</div>
	                <div>PANE 3</div>
	            </ReactSwipe>
	            <div className="index-container">
	            	<ul>
	            		<li className={this.state.index === 0 ? 'selected' : ''}>1</li>
	            		<li className={this.state.index === 1 ? 'selected' : ''}>2</li>
	            		<li className={this.state.index === 2 ? 'selected' : ''}>3</li>
	            	</ul>
	            </div>
            </div>
		)
	}
}

export default Category