import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";
import ProfileCard from "../components/ProfileCard.js";
import AddProfileCard from "../components/AddProfileCard.js";


export default {
    name: "ManageProfilePage",

    props: {
        profiles: Array
    },

    template:`
    <div class="profile-bg">
        <div class="grid-container">
            <fullwordslogo></fullwordslogo>
            
            <div>
                <h2>Manage Profiles:</h2>

                <profilecard v-for="p in profiles" :key="p.profile_id" :profile="p"></profilecard>

                <addprofilecard v-if="canAdd"></addprofilecard>
            </div>
            
            <router-link :to="{ name: 'Profile' }" class="manage-profile-btn">DONE</router-link>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    created: function() {
        if (this.profiles === undefined) {
            this.$router.replace({name: "Profile"});
        }
    },

    data: function() {
        return {
            canAdd: this.profiles === undefined ? false : this.profiles.length < 4,
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter,
        profilecard: ProfileCard,
        addprofilecard: AddProfileCard
    }
}