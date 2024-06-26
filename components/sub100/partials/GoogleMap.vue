<template>
    <div class="google-map-area" id="support">
        <iframe id="iframeGoogle" style="border: 0px;" src="https://maps.google.com/maps?q=Rua Machado de Assis, 621, Zona 06 - CEP 87015-580 - Maringá - PR&amp;output=embed" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<style lang="scss" scoped>
    #iframeGoogle {
        height: 500px;
        // res
        @media #{$small-mobile}{
            height: 350px;
        }
    }
</style>
