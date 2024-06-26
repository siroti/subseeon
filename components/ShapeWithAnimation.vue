<template>
    <div class="shape scene" :class='addClassName'>
        <span :data-depth="dataDepth">
            <img :src="imgSrc" :alt="imgAlt" :title="imgTitle" :width="dataWidth" :height="dataHeight"/>
        </span>
    </div>
</template>

<script>
    import Parallax from 'parallax-js';
    
    export default {
        props: ['addClassName', 'imgSrc', 'imgAlt', 'imgTitle', 'dataDepth', 'dataWidth', 'dataHeight'],

        mounted () {
            var scene = document.querySelectorAll('.scene');
            if(scene) {
                scene.forEach((el, i) => {
                    new Parallax(el);
                });
            };
        },
    };
</script>
