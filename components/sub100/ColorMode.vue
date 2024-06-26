<template>
    <!-- theme toggler start -->
    <button class="button theme-color-toggler" @click="toggleTheme()" aria-label="Modo">
        <ColorScheme placeholder="..." tag="span">
        <span v-if="$colorMode.value === 'dark'">
            <img src="/images/icons/light.svg?55202404055" alt="constraste" title="Mude o constraste para dia" width="24" height="24"/>
        </span>
        <span v-else>
            <img src="/images/icons/dark.svg?55202404055" alt="constraste" title="Mude o constraste para noite" width="24" height="24"/>
        </span>
        </ColorScheme>
    </button>
    <!-- theme toggler end -->
</template>

<script>
    export default {
        methods: {
            toggleTheme() {
                if (this.$colorMode.preference !== 'dark') {
                    this.$colorMode.preference = 'dark'
                } else {
                    this.$colorMode.preference = 'light'
                }
            }
        },
    };
</script>
