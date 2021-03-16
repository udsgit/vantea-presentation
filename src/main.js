import {createApp} from 'vue'
import Presentation from './Presentation.vue';
import Reveal from "reveal.js/js";
import HighLight from "reveal.js/plugin/highlight/highlight";
import Zoom from "reveal.js/plugin/zoom/zoom";
import Notes from "reveal.js/plugin/notes/notes";
import "reveal.js/plugin/highlight/monokai.css";
import './assets/css/reset.css';
import './assets/css/reveal.css';
import './assets/css/black.css';
import './index.css';
import './assets/tailwind.css'

createApp(Presentation).mount('#app');

Reveal.initialize({
    plugins: [Zoom, Notes, HighLight]
});









