export default {
    name: "MediaCard",

    props: ["kids", "type", "mediaInfo"],

    template: `
    <a href="#" @click.prevent="showDetails"><img :src="'../../../public/media/covers/' + mediaInfo.cover" :alt="mediaInfo.title + ' cover image'"></a>
    `,

    data: function() {
        return {
            whichHome: (this.kids ? "kids" : "home")
        }
    },

    methods: {
        showDetails() {
            this.$router.push({name: "MediaDetails", params: { whichHome: this.whichHome, media: this.type, id: this.mediaInfo.id.toString() }});
        }
    },


}