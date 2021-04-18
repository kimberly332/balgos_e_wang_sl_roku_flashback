export default {
    name: "MainLogo",

    props: ["to"],

    template: `
    <router-link :to="{ name: 'Root' }" class="logo" :class="{'kids-logo': $parent.kids}">Roku</router-link>
    `,

    data: function() {  
        return {
            toRoute: "{name: '" + this.to + "'}"
        }
    }
}