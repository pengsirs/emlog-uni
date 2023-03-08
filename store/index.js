import {
	createStore
} from "vuex";
import persistedState from 'vuex-persistedstate'
export default createStore({
	plugins: [
		persistedState({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			}
		})
	],
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		isLogin: false, //登录信息
		options: "", //系统设置信息
		cookie:'',
		user:"",
		//api设置信息
		appData: {
			data: {
				auditing: ""
			}
		},
	},
	mutations: {
		// 定义mutations，用于修改状态(同步)
		// 登录
		login(state,cookie) {
			state.isLogin = true
			state.cookie = cookie
		},
		// 退出登录
		loginOut(state) {
			state.isLogin = false
		},
		setAppData(state, e) {
			state.appData = e
		},
		setUser(state,e){
			state.user = e
		},
		setOptions(state, e) {
			state.options = e
		},
		clearStorages(state) {
			state.options = 1;
			state.appData= '';
			// state = Object.assign({}, state, {});
		}
	},
	actions: {
		// 定义actions，用于修改状态(异步)

	},
	modules: {}
});
