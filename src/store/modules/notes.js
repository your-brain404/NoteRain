import { firebase } from "@nativescript/firebase";

export default {
	state: {
		notes: []
	},
	getters: {
		notes: state => state.notes
	},
	mutations: {
		notes: (state, notes) => state.notes = notes
	},
	actions: {
		notes({commit, getters}) {
			firebase.firestore.collection('notes').where('userID', '==', getters.user.uid).onSnapshot(querySnapshot => {
				let notes = [];
				querySnapshot.forEach(doc => {
					let note = doc.data();
					note.id = doc.id;
					notes.push(note);
				});
				commit('notes', notes);
			})
		} 
	}
}