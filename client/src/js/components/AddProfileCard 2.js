export default {
    name: "AddProfileCard",

    template: `
    <div class="add-account" @click.prevent="onClick">
        <i class="fas fa-user-plus"></i>
        <p>Add New Profile</p>
    </div>
    `,

    methods: {
        onClick() {
            this.$router.push({name: "AddProfile"});
        }
    }
}