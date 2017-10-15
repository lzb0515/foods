import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class SearchInput extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
        	value: ""
        }
    }

	render(){
		return(
			<input type="text" placeholder="请输入关键字" onChange={this.changeHandle.bind(this)} onKeyUp={this.keyUpHandle.bind(this)} value={this.state.value} />
		)
	}

	componentDidMount(){
		this.setState({
			value: this.state.value || ""
		})
	}

	changeHandle(e){
		this.setState({
			value: e.target.value
		})
	}

	keyUpHandle(e){
		if(e.keyCode !== 13){
			return
		}
		this.props.enterHandle(this.state.value)
	}
}

export default SearchInput