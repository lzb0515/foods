import React from 'react';
import { render } from 'react-dom';
import Routers from './routers/index.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import './static/css/common.scss';
import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore();

//性能测试
//import Perf from 'react-addons-perf';

//if(__DEV__){
//	window.Perf = Perf
//}

render(
	<Provider store={ store }>
		<Routers />
	</Provider>,
	document.getElementById("root")
)