import HomeHeader from "../components/HomeHeader.js";
import MainFooter from "../components/MainFooter.js";
import SearchBox from "../components/SearchBox.js";
import FilterPanel from "../components/FilterPanel.js";
import FilterPanelMobile from "../components/FilterPanelMobile.js";
import MediaCard from "../components/MediaCard.js";

export default {
    name:"MediaPage",

    props: {
        whichHome: String,
        media: String
    },

    template: `
    <div class="grid-container-index" id="home/index-top">
        <homeheader :kids="kids"></homeheader>

        <div class="landing">
            <img src="../../../public/the-little-things.jpg" alt="Selected Media Image">
        </div>

        <div class="landing-description">
            <h2>The Little Things</h2>
            <p>Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.</p>
            
            <ul>
                <li><a href="#">Play</a></li>
                <li><a href="#">More Info</a></li>
            </ul>
        </div>

        <searchbox :kids="kids"></searchbox>

        <filterpanel @setfilter="filterMedia" :kids="kids"></filterpanel>
        <filterpanelmobile  @setfilter="filterMedia" :kids="kids"></filterpanelmobile>

        <div class="display-popular">
            <mediacard v-for="m in this.allMedia" :kids="kids" :type="media" :mediaInfo="m" :key="m.id"></mediacard>
        </div>

        <div class="back-to-top">
            <a href="#"><i class="fas fa-chevron-up"></i></a>
        </div>

        <footer :class="{ 'kids-footer' : kids }">
            <h3 v-if="!kids"><a href="#"><img src="../../../public/logo.png" alt="Roku Flashback Logo"></a></h3>
            <h3 v-else><a href="#"><img src="./public/logo-white.png" alt="Roku Flashback Logo"></a></h3>
            <ul>
                <li><a href="#">Audio and Subtitles</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <!-- <p class="copyright">&copy; 2021 Roku Flashback All Rights Reserved.</p> -->
            <!-- <mainfooter></mainfooter> -->
        </footer>
    </div> 
    `,

    data: function() {
        return {
            allMedia: [],
            kids: (this.whichHome === "kids" ? true : false)
        }
    },


    created: function() {
        this.getMediaByType(this.media);

    },

    watch: {
        media: function () {
            console.log("watch");
            if (this.media === "movies" || this.media === "tvshows" || this.media === "music") {
                this.getMediaByType(this.media);
            } else {
                this.$router.go(-1); 
            }
        }
    },
    
    methods: {
        getMediaByType(mediaType) {

            const level = (this.whichHome === "kids" ? 0 : 1)
            const url = `/api/${mediaType}/${level}`;
            
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === "failure"){
                    console.warn("data fetching has broken");

                } else { // success
                    this.allMedia = data.data;
                }
            })
            .catch((err) => console.error(err));
        },

        getMediaByYear(mediaType, year) {
            if (year === "all") {
                this.getMediaByType(this.media);
                return;
            }
            const level = (this.whichHome === "kids" ? 0 : 1)
            const url = `/api/${mediaType}/${level}/time/${year}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === "failure"){
                    console.warn("data fetching has broken");

                } else { // success
                    this.allMedia = data.data;
                }
            })
            .catch((err) => console.error(err));
        },

        filterMedia(filter) {
            this.getMediaByYear(this.media, filter.year)
        }
    },

    components: {
        homeheader: HomeHeader,
        mainfooter: MainFooter,
        searchbox: SearchBox,
        filterpanel: FilterPanel,
        filterpanelmobile: FilterPanelMobile,
        mediacard: MediaCard
    }
}