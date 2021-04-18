import router from "./components/Router.js";

(() => {
    console.log("fired");

    const vm = new Vue({
        data: {
            authenticated: false,  // account authentication
            accountID: undefined,
            currProfileID: undefined,
            currProfileName: undefined,
            currProfileLevel: undefined,
            allProfiles: undefined
            // isAdmin: false,
            // currentUser: undefined
        },

        created: function() {
        },

        methods: {
            setAccountAuth(setting, accountID) {
                console.log("set account authentication");
                this.authenticated = setting;
                this.accountID = (setting ? accountID : undefined);
            },

            setProfileInfo(setting, profileInfo) {
                console.log("set profile authentication");

                this.currProfileID = setting? profileInfo.profile_id : undefined;
                this.currProfileName = setting? profileInfo.profile_name : undefined;
                this.currProfileLevel = setting? profileInfo.profile_level : undefined;
            }

        },

        components: {
            // mainfooter: MainFooter,
        },

        router 
    }).$mount("#app");
})();