import {firebase} from "@nativescript/firebase";

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
			firebase.getCurrentUser().then(currentUser => {
				console.log("authInit succeded");
				if(currentUser !== null) commit("user", currentUser);
			}).catch((err) => {
				console.log(err)
			});
		},
		logout({commit}) {
			firebase.logout();
			commit("user", {});
			alert('Pomyślne wylogowano!');
		} 
	}
}