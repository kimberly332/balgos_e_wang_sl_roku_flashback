import MediaCard from "./MediaCard.js";

export default {
    name: "MoviesMedia",

    template: `
        <div class="display-popular">
            <mediacard v-for="movie in this.$parent.allMovies" type="movies" :mediaInfo="movie" :key="movie.id"></mediacard>
        </div>
    `,

    components: {
        mediacard: MediaCard
    }
}