import HomeHeader from "../components/HomeHeader.js";
import MainFooter from "../components/MainFooter.js";
import SearchBox from "../components/SearchBox.js";
import FilterPanel from "../components/FilterPanel.js";
import MediaCard from "../components/MediaCard.js";

export default {
    name:"HomePage",


    template: `
    <div class="grid-container-index" id="home/index-top">
        <homeheader :kids="false"></homeheader>

        <div class="landing">
            <img src="../../../public/the-little-things.jpg" alt="Select Media Image">
        </div>

        <div class="landing-description">
            <h2>The Little Things</h2>
            <p>Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.</p>
            
            <ul>
                <li><a href="#">Play</a></li>
                <li><a href="#">More Info</a></li>
            </ul>
        </div>

        <searchbox :kids="false"></searchbox>

        <div class="display-popular">
            <h3><router-link :to="{ name: 'Media', params: { whichHome: 'home', media: 'movies' }}">Movies</router-link></h3>
            <mediacard v-for="movie in this.allMovies.slice(0,6)" type="movies" :kids="false" :mediaInfo="movie" :key="'movie_' + movie.id"></mediacard>
            <h3><router-link :to="{ name: 'Media', params: { whichHome: 'home', media: 'tvshows' }}">TV Shows</router-link></h3>
            <mediacard v-for="tv in this.allTVshows.slice(0,6)" type="tvshows" :kids="false" :mediaInfo="tv" :key="'tv_' + tv.id"></mediacard>
            <h3><router-link :to="{ name: 'Media', params: { whichHome: 'home', media: 'music' }}">Music</router-link></h3>
            <mediacard v-for="music in this.allMusic.slice(0,6)" type="music" :kids="false" :mediaInfo="music" :key="'music_' + music.id"></mediacard>
        </div>

        <div class="back-to-top">
            <a href="#"><i class="fas fa-chevron-up"></i></a>
        </div>

        <!-- <div class="display-popular"></div>
        <div class="display-new-releases"></div>
        <div class="display-1990"></div>
        <div class="display-1980"></div>
        <div class="display-1970"></div> -->

        <!-- <div class="explore-all-btn">
            <p><a href="#">Explore All</a></p>
        </div> -->

        <footer>
            <h3><a href="#"><img src="../../../public/logo.png" alt="Roku Flashback Logo"></a></h3>
            <ul>
                <li><a href="#">Audio and Subtitles</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <!-- <mainfooter></mainfooter> -->
        </footer>
    </div> 
    `,

    data: function() {
        return {
            allMovies: [],
            allTVshows: [],
            allMusic: [],
        }
    },


    created: function() {
        this.getMediaByType("movies");
        this.getMediaByType("tvshows");
        this.getMediaByType("music");
    },
    
    methods: {
        getMediaByType(mediaType) {
            const url = `/api/${mediaType}/1`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === "failure"){
                    console.warn("data fetching has broken");

                } else { // success
                    if (mediaType === "movies") {
                        this.allMovies = data.data;
                    } else if (mediaType === "tvshows") {
                        this.allTVshows = data.data;
                    } else { // music
                        this.allMusic = data.data;
                    }
                }
            })
            .catch((err) => console.error(err));
        }
    },

    components: {
        homeheader: HomeHeader,
        mainfooter: MainFooter,
        searchbox: SearchBox,
        filterpanel: FilterPanel,
        mediacard: MediaCard
    }
}