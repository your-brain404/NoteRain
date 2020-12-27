<template>
	<Page>
		<ActionBar class="page-title" title="Zaloguj się" />
		<FlexboxLayout  class="auth-buttons" alignItems="center">
			<TextField v-model="email" hint="Adres E-mail" />
			<TextField :secure="true" v-model="password" hint="Hasło" />
			<Button text="Zaloguj się!" class="success-button" @tap="login" />
		</FlexboxLayout>
	</Page>
</template>

<script>
	import { firebase } from "@nativescript/firebase";
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			validateEmail() {
				const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return pattern.test(this.email);
			},
			login() {
				if(!this.validateEmail()) {
					alert('Wprowadź poprawny adres E-mail!');
					return;
				}
				if(!this.password) {
					alert('Wprowadź hasło!');
					return;
				}
				
				firebase.login({
					type: firebase.LoginType.PASSWORD,
					passwordOptions: {
						email: this.email,
						password: this.password,
					},
				}).then(async (user) => {
					console.log("signIn succeeded");
					this.$store.commit("user", user);
					alert('Pomyślnie zalogowano!');
					this.$navigateTo(this.$routes.App);
				}).catch((err) => {
					console.log("signIn error");
					console.log(err);
					alert('Błąd serwera przepraszamy...');
				});
			}
		},
		

	}
</script>