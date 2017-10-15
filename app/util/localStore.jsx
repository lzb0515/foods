export default {
	getItem: function(key){
		let value;
		try{
			value = localStorage.getItem(key);
		}catch (ex){
			//开发环境下显示error提示信息
			if(__DEV__){
				console.error('localStorage.getItem报错：'+ex.messaage);
			}
		}finally{
			return value
		}
	},
	setItem: function(key,value){
		try{
			//ios safari 下直接使用localStorage.setItem 会报错
			localStorage.setItem(key,value);
		}catch (ex){
			//开发环境下显示error提示信息
			if(__DEV__){
				console.error('localStorage.setItem报错：'+ex.messaage);
			}
		}
	}
}