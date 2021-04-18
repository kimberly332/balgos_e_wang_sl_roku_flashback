export default {
    name: "ProfileCard",

    props: ["profile"],

    template: `
    <div class="default-account" @click.prevent="onClickProfile">
        <i class="fas fa-user-circle"></i>
        <p>{{ profile.profile_name }}</p>
    </div>
    `,

    data: function() {
        return {
            currRoute: this.$router.currentRoute.name
        }
    },

    methods: {
        onClickProfile() {
            if (this.currRoute === "Profile") {
                if (!this.profile.profile_level) { // number 0
                    this.$root.setProfileInfo(true, {profile_id: this.profile.profile_id, 
                                                     profile_name: this.profile.profile_name, 
                                                     profile_level: this.profile.profile_level});
                    localStorage.setItem("profile_id", this.profile.profile_id);
                    localStorage.setItem("profile_level", this.profile.profile_level);
                    this.$router.push({name: "Kids"});
                } else { // number 1
                    this.$emit("pinpad", this.profile);
                }
            }
            if (this.currRoute === "ManageProfiles") {
                this.$router.push({name: "ProfileDetails", params: { profile: this.profile }});
            }
        }
    }


}