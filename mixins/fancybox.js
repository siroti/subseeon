import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    props: ['addClassName', 'imgSrc', 'dataDepth'],
    mounted(){
        Fancybox.bind('[data-fancybox]', {
            Thumbs: false,
            infinite: false,
            click: null,
            Toolbar: {
                display: ["close"]
            }
        });
    }
};