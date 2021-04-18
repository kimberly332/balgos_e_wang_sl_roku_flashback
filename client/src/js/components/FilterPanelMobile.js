export default {
    name: "FilterPanelMobile",

    props: ["kids"],

    template: `
    
    <div class="mobile-filter" :class="{ 'kids-mobile-filter' : kids }">
        <select v-model="activeYear">
            <option value="all">All Years</option>
            <option value="1990">1990</option>
            <option value="1980">1980</option>
            <option value="1970">1970</option>
            <option value="1960">1960</option>
            <option value="1950">1950</option>
            <option value="1940">1940</option>
            <option value="1930">1930</option>
        </select>
    </div>
    `,
    
    data: function() {
        return {
            activeYear: "all"
        }
    },

    watch: {
        activeYear: function () {
            this.$emit("setfilter", {year: this.activeYear});
        }
    }
}