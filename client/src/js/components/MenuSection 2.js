export default {
    name: "MenuSection",

    template: `
    <div>
        <!-- Hamburger Menu -->
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>

        <!-- Normal Menu -->
        <ul class="menu" :class="{'kids-menu': $parent.kids}">
            <li><router-link :to="{ name: homeName }">Home</router-link></li>
            <li><router-link :to="{ name: 'Media', params: { whichHome: whichHome, media: 'movies' }}">Movies</router-link></li>
            <li><router-link :to="{ name: 'Media', params: { whichHome: whichHome, media: 'tvshows' }}">TV Shows</router-link></li>
            <li><router-link :to="{ name: 'Media', params: { whichHome: whichHome, media: 'music' }}">Music</router-link></li>
            <li v-if="!$parent.kids"><router-link :to="{ name: 'Kids' }">Kids</router-link></li>
            <li v-else><router-link :to="{ name: 'Profile' }">Leave Kids Zone</router-link></li>
            <li v-if="!$parent.kids"><router-link :to="{ name: 'AccountDetails' }">Account</router-link></li>
            <li><a href="#" @click.prevent="signOut">Sign Out</a></li>
        </ul>
    </div>
    `,

    data: function() {
        return {
            homeName: (this.$parent.kids ? "Kids" : "Home"),
            whichHome: (this.$parent.kids ? "kids" : "home"),
        }
    },

    methods: {
        signOut() {
            console.log("signout");
            localStorage.clear();
            this.$root. setAccountAuth(false, undefined);
            this.$root.setProfileInfo(false, {});
            this.$router.replace({ name: "Root" });
        }
    }
}