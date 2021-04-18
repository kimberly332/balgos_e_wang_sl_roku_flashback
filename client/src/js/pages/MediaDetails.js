import HomeHeader from "../components/HomeHeader.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "MediaDetailsPage",

    props: {
        whichHome: String,
        media: String,
        id: String
    },

    template: `
    <div>
        <div v-if="info !== undefined" class="grid-container-index">
            <homeheader :kids="kids"></homeheader>

            <div v-if="media==='music'" class="video-player">
                <video controls autoplay preload="auto" width="100%" poster="../../../public/media/covers/music_cover.jpg">
                    <source type="video/mp4" :src="'../../../public/media/' + media + '/' + info.source"/>
                </video>
            </div>
            <div v-else class="video-player">
                <video controls autoplay preload="auto" width="100%">
                    <source type="video/mp4" :src="'../../../public/media/' + media + '/' + info.source"/>
                </video>
            </div>
            
            <div class="details-img">
                <img :src="'../../../public/media/covers/' + info.cover" :alt="info.title + ' cover image'">
            </div>

            <div class="details">
                <h2>{{ info.title }}</h2>
                <p class="details-description">{{ info.description}}</p>
                <p v-if="media==='movies'">{{ info.year }} | <span class="red">{{ info.rating }}</span> | {{info.runtime}}m</p>
                <p v-else-if="media==='tvshows'">{{ info.year }} | <span class="red">{{ info.rating }}</span> | {{info.seasons}} Seasons {{ info.episodes }} Episodes</p>
                <p v-else="media==='music'">{{ info.year }} | <span class="red">{{ info.artist }}</span> | {{info.runtime}}m</p>
                <p>Genres: {{ info.genres }}</p>
            </div>


            <div class="back-to-top">
                <a href="#"><i class="fas fa-chevron-up"></i></a>
            </div>

            <footer :class="{ 'kids-footer': kids }">
                <h3><a href="#"><img src="../../../public/logo-white.png" alt="Roku Flashback Logo"></a></h3>
                <ul>
                    <li><a href="#">Audio and Subtitles</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <!-- <mainfooter></mainfooter> -->
            </footer>
        </div>

    </div>
    `,

    created: function() {
    },

    data: function() {
        return {
            info: undefined,
            kids: (this.whichHome === "kids" ? true : false)
        }
    },

    beforeRouteEnter: async (to, from, next) => {
        const level = (to.params.whichHome === "kids" ? 0 : 1);
        const url = `/api/${to.params.media}/level/${level}/detail/${to.params.id}`;
        const res = await fetch(url);
        const resData = await res.json();
        if (resData.status === "failure"){
            console.warn("resData fetching has broken");
        } else { // success
            next(vm => vm.setInfo(resData.data));
        }

    },

    beforeRouteUpdate: async (to, from, next) => {
        const url = `/api/${to.params.media}/detail/${to.params.id}`;
        const res = await fetch(url);
        const resData = await res.json();
        if (resData.status === "failure"){
            console.warn("resData fetching has broken");
        } else { // success
            // this.setInfo(resData.data);
            next(vm => vm.setInfo(resData.data));
        }
    },

    methods: {
        setInfo(data) {
            this.info = data;
        },
    },

    components: {
        homeheader: HomeHeader,
        mainfooter: MainFooter,
    }
}