<template>
        <div class="container">
            <div class="col-12 mb-5 d-flex justify-content-center">
                <a :href="UrlProduts" aria-label="conheca-mais-funcionalidades" title="Conheça mais funcionalidades" class="btn btn-secondary col-12 col-md-4 px-4 d-flex fw-bold mt-1 mb-0 mb-md-3 ">Conheça mais funcionalidades</a>
            </div>
        </div>
</template>
<script>
    export default {
        props: ['UrlProduts'],
    };
</script>

