<template>
	<Page>
		<ActionBar class="page-title" :title="id == undefined ? 'Dodaj notatkę' : 'Edytuj notatkę'" />
		<FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center">
			<TextField v-model="note.title" hint="Tytuł*" />
        	<TextView v-model="note.content" hint="Treść" />
        	<Button text="Zapisz" class="success-button" @tap="saveNote" />
		</FlexboxLayout>
	</Page>
</template>

<script>
	import { firebase } from "@nativescript/firebase";

	export default {
		props: ['id'],
		computed: {
			note() {
				return this.id ? this.$store.getters.notes.find(note => note.id == this.id) : {title: '', content: '', userID: this.user.uid}; 
				return {title: '', content: '', userID: this.user.uid}
			},
			user() {
				return this.$store.getters.user;
			}
		},
		methods: {
			saveNote() {
				if(!this.note.title) {
					alert('Tytuł jest wymagany!');
					return;
				}
				if(!this.note.content) {
					alert('Treść jest wymagana!');
					return;
				}

				let ref = firebase.firestore.collection('notes');
				if(this.id) ref = ref.doc(this.note.id).update(this.note);
				else ref = ref.add(this.note);

				ref.then(() => {alert(`Pomyślnie ${this.id == undefined ? 'utworzono' : 'edytowano'} notatkę!`); this.$navigateTo(this.$routes.MyNotes)}).catch(err => console.log(err));
			}
		},
		created() {
			this.$store.dispatch('notes')
		}

	}
</script>