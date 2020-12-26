<template>
	<Page>
        <ActionBar class="page-title" title="Zaloguj się" />
        <FlexboxLayout  class="auth-buttons" alignItems="center">
        	<TextField :text="email" hint="Adres E-mail" />
        	<TextField :secure="true" :text="password" hint="Hasło" />
        	<Button text="Zaloguj się!" @tap="login" />
        </FlexboxLayout>
    </Page>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				alert('login');
			}
		},
		created() {
            if(this.$store.getters.user) {
                this.$navigateTo(this.$routes.MyNotes);
            }
        }

	}
</script>