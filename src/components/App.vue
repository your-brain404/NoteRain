<template>
    <Page>
        <ActionBar class="page-title" title="NoteRain" />
        <FlexboxLayout v-if="$store.getters.user.uid" class="auth-buttons" alignItems="center">
            <Button text="Moje Notatki" class="success-button" @tap="$navigateTo($routes.MyNotes)" />
            <Button text="Wyloguj" class="error-button" @tap="logout" />
        </FlexboxLayout>
        <FlexboxLayout v-else class="auth-buttons" alignItems="center">
            <Button text="Logowanie" class="success-button" @tap="$navigateTo($routes.Login)" />
            <Button text="Rejestracja" class="success-button" @tap="$navigateTo($routes.Register)" />
        </FlexboxLayout>
    </Page>
</template>
<script>

    export default {
        created() {
            this.$store.dispatch('autoLogin');
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>
<style>
    ActionBar {
        background-color: #2c974b;
        color: white;
    }
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
    .success-button {
        background-color: #2c974b!important; 
        color: white;
    }
    .error-button {
        background-color: #ea3636!important;
        color: white;
    }
    FlexboxLayout {
        margin-left: 40px;
        margin-right: 40px;
    }
    .page-title {
        font-size: 80px!important;
        text-align: center;
    }

    TextField, TextView {
        width: 100%;
    }
    TextView {
        height: 700px;
    }
    
</style>