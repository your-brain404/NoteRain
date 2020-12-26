<template>
	<Page>
		<ActionBar class="page-title" title="Zarejestruj się" />
		<FlexboxLayout  class="auth-buttons" alignItems="center">
			<TextField  v-model="email" hint="Adres E-mail" />
			<TextField :secure="true" v-model="password"  hint="Hasło" />
			<TextField :secure="true" v-model="confirmPassword"  hint="Powtórz Hasło" />
			<Button text="Zarejestruj się!" @tap="register" />
		</FlexboxLayout>
	</Page>
</template>

<script>
	import { firebase } from "@nativescript/firebase";

	export default {
		data() {
			return {
				email: '',
				password: '',
				confirmPassword: '',
			}
		},
		methods: {
			validateEmail() {
				const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return pattern.test(this.email);
			},
			register() {
				if(!this.validateEmail()) {
					alert('Wprowadź poprawny adres E-mail!');
					return;
				}
				if(!this.password) {
					alert('Wprowadź hasło!');
					return;
				}
				if(this.password != this.confirmPassword) {
					alert('Hasła musza być takie same!');
					return;
				}

				firebase
				.createUser({
					email: this.email,
					password: this.password,
				})
				.then(async (userData) => {
					console.log("succeeded");
					localStorage.setItem('user', userData);
					alert('Pomyślnie utworzono konto!');
					this.$navigateTo(this.$routes.App);
					
				})
				.catch((err) => {
					console.log(err);
					commit("authError", translateErrors(err));
				});
			}
		}
		
	}
</script>