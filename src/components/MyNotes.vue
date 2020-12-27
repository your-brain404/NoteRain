<template>
	<Page>
		<ActionBar class="page-title" title="Moje notatki" android.icon="@/assets/images/plus.svg">
			<ActionItem @tap="$navigateTo($routes.Note)" android.systemIcon="ic_input_add" />
		</ActionBar>
			
		<ListView v-if="notes.length > 0" v-for="(note, i) in notes">
			<v-template>
				<FlexboxLayout style="padding: 45px" alignItems="center" justifyContent="space-between"> 
					<Label @tap="$navigateTo($routes.Note, {props: {id: note.id}})" :text="note.title" />
					<Button @tap="deleteNote(note)" class="delete-button" text="Usuń" />
				</FlexboxLayout>
			</v-template>
		</ListView>
		<FlexboxLayout v-else verticalAlignment="center" horizontalAlignment="center">
			<Button  text="Dodaj notatkę!" class="success-button" @tap="$navigateTo($routes.Note)" />
		</FlexboxLayout>
	</Page>
</template>

<script>
	import { firebase } from "@nativescript/firebase"; 

	export default {
		computed: {
			notes() {
				return this.$store.getters.notes;
			}
		},
		created() {
			this.$store.dispatch('notes');
		},
		methods: {
			deleteNote(note) {
				confirm(`Czy na pewno usunąć notatkę o tytule ${note.title}?`).then(result => {
					if(result) {
						firebase.firestore.collection('notes').doc(note.id).delete().then(() => {

							alert('Pomyślnie usunięto!');
						}).catch(() => {
							alert('Błąd serwera przepraszamy...');
						})
					}
				});
				

				
			}
		}
	}
</script>

<style>
	ListView {
		font-size: 30px;
		padding: 16px;
	}

	.delete-button {
		font-size: 16px;
		color: white;
		width: 300px;
		background-color: #ea3636;
	}
</style>