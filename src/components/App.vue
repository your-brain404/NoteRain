<template>
    <Page>
        <ActionBar class="page-title" title="NoteRain" />
        <FlexboxLayout  class="auth-buttons" alignItems="center">
            <Button text="Logowanie" @tap="$navigateTo($routes.Login)" />
            <Button text="Rejestracja" @tap="$navigateTo($routes.Register)" />
        </FlexboxLayout>
    </Page>
</template>
<script>

    export default {
        
        methods: {
            login() {
                alert('login');
            },
            register() {
                alert('register');
            }
        },
        created() {
            this.$store.dispatch('autoLogin');
            if(this.$store.getters.user) {
                this.$navigateTo(this.$routes.MyNotes);
            }
        }
    }
</script>
<style>
    Button {
        width: 100%;
        font-size: 28px;
        font-weight: 500;
        text-transform: uppercase!important;
        padding: 50px 24px;
    }
    .auth-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .page-title {
        font-size: 80px!important;
        text-align: center;
    }

    TextField {
        width: 100%;
    }
    
</style>