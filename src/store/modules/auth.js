import { firebase } from "@nativescript/firebase";

export default {
	state: {
		user: {}
	},
	getters: {
		user: state => state.user
	},
	mutations: {
		user: (state, user) => state.user = user
	},
	actions: {
		autoLogin({commit}) {
			firebase.getCurrentUser().then(async (currentUser) => {
				console.log("authInit succeded");
				if (currentUser !== null) commit("user", currentUser);
			})
			.catch((err) => {
				console.log(err)
			});
		}
	}
}