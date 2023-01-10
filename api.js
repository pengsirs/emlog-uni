import set from '@/setting.js';
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: set.url + options.url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: options.method || 'POST', 
			data: options.data || {}, 
			success: (res) => {
					if (res.data.msg == 'parameter error') {
						uni.showToast({
							title: '必填参数缺失',
						});
					}else if(res.data.msg == 'sign error'){
						uni.showToast({
							title: '签名错误',
						});
					}else if(res.data.msg == 'api is closed'){
						uni.showToast({
							title: '未开启API，请在后台设置开启',
						});
					}else if(res.data.msg == 'API function is not exist'){
						uni.showToast({
							title: '不存在的API方法',
						});
					}
				resolve(res);
			},
			// fail: (err) => {
			// 	uni.showToast({
			// 		title: '请求接口失败',
			// 	});
			// 	reject(err);
			// },
		});
	})
};
export const apiRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'https://api.tianapi.com' + options.url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: options.method || 'POST', 
			data: options.data || {}, 
			success: (res) => {
				resolve(res);
			}
		});
	})
};

export const get = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: options.url,
			header: options.header,
			method: 'get', 
			data: options.data || {}, 
			success: (res) => {
				resolve(res);
			}
		});
	})
};

export const htRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: set.url + options.url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: options.method || 'POST', 
			data: options.data || {}, 
			success: (res) => {
				resolve(res);
			},
			fail(){
				resolve(0);
			}
		});
	})
}