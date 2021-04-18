import HomeHeader from "../components/HomeHeader.js";
import MainFooter from "../components/MainFooter.js";
import SearchBox from "../components/SearchBox.js";
import FilterPanel from "../components/FilterPanel.js";
import MediaCard from "../components/MediaCard.js";


export default {
    name:"KidsPage",

    template: `
    <div>
        <div class="grid-container-index">

            <homeheader :kids="true"></homeheader>
            
            <div class="landing">
                <img src="../../../public/simpson-poster.jpg" alt="Landing Image">
            </div>

            <div class="landing-description kids-landing-description">
                <h2>The Simpsons</h2>
                <p>Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.</p>
                
                <ul>
                    <li><a href="#" class="kids-button">Play</a></li>
                    <li><a href="#">More Info</a></li>
                </ul>
            </div>

            <searchbox :kids="true"></searchbox>

            <!-- <div class="filter kids-filter">
                <ul class="year">
                    <li class="active"><a href="#">All Years</a></li>
                    <li><a href="#">2000's</a></li>
                    <li><a href="#">1900's</a></li>
                    <li><a href="#">1800's</a></li>
                    <li><a href="#">1700's</a></li>
                </ul>
            </div>

            <div class="mobile-filter kids-mobile-filter">

                <select>
                    <option value="all-years">All Years</option>
                    <option value="2000">2000</option>
                    <option value="1900">1900</option>
                    <option value="1800">1800</option>
                    <option value="1700">1700</option>
                </select>
            </div> -->

            <div class="display-popular">
                <h3 class="kids-display"><router-link :to="{ name: 'Media', params: { whichHome: 'kids', media: 'movies' }}">Movies</router-link></h3>
                <mediacard v-for="movie in this.allMovies.slice(0,6)" :kids="true" type="movies" :mediaInfo="movie" :key="'movie_' + movie.id"></mediacard>
                <h3 class="kids-display"><router-link :to="{ name: 'Media', params: { whichHome: 'kids', media: 'tvshows' }}">TV Shows</router-link></h3>
                <mediacard v-for="tv in this.allTVshows.slice(0,6)" :kids="true" type="tvshows" :mediaInfo="tv" :key="'tv_' + tv.id"></mediacard>
                <h3 class="kids-display"><router-link :to="{ name: 'Media', params: { whichHome: 'kids', media: 'music' }}">Music</router-link></h3>
                <mediacard v-for="music in this.allMusic.slice(0,6)" :kids="true" type="music" :mediaInfo="music" :key="'music_' + music.id"></mediacard>
            </div>


            <div class="back-to-top kids-back-to-top">
                <a href="#"><i class="fas fa-chevron-up"></i></a>
            </div>

            <!-- <div class="explore-all-btn">
                <p><a href="#">Explore All</a></p>
            </div> -->

            <footer class="kids-footer">
                <h3><a href="#"><img src="../../../public/logo-white.png" alt="Roku Flashback Logo"></a></h3>
                <ul>
                    <li><a href="#">Audio and Subtitles</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <!-- <p class="copyright">&copy; 2021 Roku Flashback All Rights Reserved.</p>
             -->
                <!-- <mainfooter></mainfooter> -->
            </footer>
        </div>
    </div>
    `,

    data: function() {
        return {
            allMovies: [],
            allTVshows: [],
            allMusic: [],
        }
    },

    methods: {
        getMediaByType(mediaType) {
            const url = `/api/${mediaType}/0`;
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

    created: function() {
        this.getMediaByType("movies");
        this.getMediaByType("tvshows");
        this.getMediaByType("music");
    },


    components: {
        homeheader: HomeHeader,
        mainfooter: MainFooter,
        searchbox: SearchBox,
        filterpanel: FilterPanel,
        mediacard: MediaCard
    }
}