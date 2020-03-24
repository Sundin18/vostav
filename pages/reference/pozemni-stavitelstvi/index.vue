<template>
    <section id="test">
        <div class="container">
            <div class="section-title">
                <h2>Pozemní stavitelsví</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p>
                            Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný,
                            ale pravidelný text (např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu, která se od běžného textu liší.
                            Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě dlouhá, frekvence písmen je podobná běžné
                            řeči, interpunkce vypadá přirozeně atd.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="test-item">
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="test-item">
                            <div class="hover-bg">
                                <nuxt-link to="/reference/pozemni-stavitelstvi/londynska" title="Jump Ústí n.L.">
                                    <div class="hover-text">
                                        <h4>Rekonstrukce a úprava průmyslové haly Jump Ústí</h4>
                                    </div>
                                    <img :src="require('@/assets/img/reference/pozemni-stavitelstvi/pripojka_trmice1.jpg')" class="img-responsive" alt="Jump Ústí n.L"></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <div class="hover-bg">
                                <nuxt-link to="/reference/pozemni-stavitelstvi/jump" title="Jump Ústí n.L.">
                                    <div class="hover-text">
                                        <h4>Přepsat h4</h4>
                                    </div>
                                    <img :src="require('@/assets/img/reference/pozemni-stavitelstvi/jump_usti1.jpg')" class="img-responsive" alt="Jump Ústí n.L"></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <div class="hover-bg">
                                <nuxt-link to="/reference/2" title="Polyfunkní dům, Ústí n.L.">
                                    <div class="hover-text">
                                        <h4>Rekonstrukce kanceláří polyfunkčního domu Ústí nad Labem.</h4>
                                    </div>
                                    <img :src="require('@/assets/img/reference/pozemni-stavitelstvi/pripojka_trmice1.jpg')" class="img-responsive" alt="Polyfunkní dům, Ústí n.L." width="320"></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <div class="hover-bg">
                                <nuxt-link to="/reference/3" title="Vodovodní přípojka.">
                                    <div class="hover-text">
                                        <h4>Výměna vodovodní přípojky bytový dům Trmice.</h4>
                                    </div>
                                    <img :src="require('@/assets/img/reference/pozemni-stavitelstvi/05e2063.jpg')" class="img-responsive" alt="Vodovodní přípojka." width="320"></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="test-item">
                            <div class="hover-bg">
                                <nuxt-link to="/reference/3" title="Vodovodní přípojka.">
                                    <div class="hover-text">
                                        <h4>Výměna vodovodní přípojky bytový dům Trmice.</h4>
                                    </div>
                                <img src="img/reference/pripojka_trmice1.jpg" class="img-responsive" alt="Vodovodní přípojka." width="320"></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>