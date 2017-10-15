import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class SearchHeader extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div id="home-header" className="clear-fix">
				<span className="back-icon" onClick={this.clickHandle.bind(this)}>
					<i className="icon-chevron-left"></i>
				</span>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<SearchInput vaule={this.props.keyword || ""} enterHandle={this.enterHandle.bind(this)} />
					</div>
				</div>
			</div>
		)
	}

	clickHandle(){
		window.history.back()	
	}

	enterHandle(value){
		hashHistory.push("/search/all/"+encodeURIComponent(value))
	}
}

export default SearchHeader