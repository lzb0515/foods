import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class LoadMore extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div ref="wrapper">
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.loadingMoreHandle.bind(this)}>点击加载</span>
				}
			</div>
		)
	}

	componentDidMount(){
		const loadMoreFn = this.props.loadMoreFn;
		const wrapper = this.refs.wrapper;
		let timeId;
		function callback(){
			let top = wrapper.getBoundingClientRect().top;
			let windowHeight = window.screen.height;
			if(top && top < windowHeight){
				loadMoreFn()
			}
		}
		window.addEventListener('scroll',function(){
			if(this.props.isLoadingMore){
				return
			}
			if(timeId){
				clearTimeout(timeId);
			}
			timeId = setTimeout(callback,100)
		}.bind(this),false);
		
	}

	loadingMoreHandle(){
		this.props.loadMoreFn()
	}
}

export default LoadMore