<template>
    <section id="test">
        <div class="container">
            <div class="section-title">
                <h2>Potrubí Londýnská, Ústí nad Labem</h2>
                <a href="javascript:history.back()">Zpět</a>
            </div>
            <div class="row">
                <div class="portfolio-items">
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <img v-img:package :src="require('@/assets/img/reference/pozemni-stavitelstvi/londynska/05-large.jpg')" height="150">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <img v-img:package :src="require('@/assets/img/reference/pozemni-stavitelstvi/londynska/05-large.jpg')" height="150">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <img v-img:package :src="require('@/assets/img/reference/pozemni-stavitelstvi/londynska/05-large.jpg')" height="150">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-3">
                        <div class="portfolio-item">
                            <img v-img:package :src="require('@/assets/img/reference/pozemni-stavitelstvi/londynska/05-large.jpg')" height="150">
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