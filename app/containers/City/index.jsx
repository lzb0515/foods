import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';
import Header from '../../components/Header/index.jsx';
import CurrentCity from '../../components/CurrentCity/index.jsx';
import CityList from '../../components/CityList/index.jsx';
import LocalStore from '../../util/localStore.jsx';
import { CITYNAME } from '../../config/localStoreKey.jsx';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class City extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

	render(){
		return(
			<div>
				<Header title="选择城市" />
				<CurrentCity cityName={ this.props.userinfo.cityName } />
				<CityList changFn={ this.changeCity.bind(this)} />
			</div>
		)
	}

	changeCity(newCity){
		if(newCity == null){
			return
		}

		const userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userInfoActions.update(userinfo);
		LocalStore.setItem(CITYNAME, newCity);

		hashHistory.push("/");
	}
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)