<template>
    <div>
        <!-- Header -->
        <header id="header">
            <div class="intro">
                <div class="overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 intro-text">
                                <h1>Montážní a stavební společnost VOSTAV s.r.o.</h1>
                                <p>Zaměřujeme se na komplexní realizace zdravotně technických instalací,včetně projekční přípravy a následného servisu.</p>
                                <nuxt-link :to="{path: '/', hash: '#about'}" class="btn btn-custom btn-lg page-scroll">Více o naší firmě</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Get Touch Section -->
        <section id="get-touch">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6 col-md-offset-1">
                        <h3>Nabídka práce</h3>
                        <p>Hledáme kolegu na pozici instalatér/topenář s praxí v oboru, schopného samostatné práce na zadaném úkolu, s časovou flexibilitou.
                            ŘP výhodou. Nabízíme nadstandardní ohodnocení s možností ubytování.</p>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <nuxt-link :to="{path: '/', hash: '#contact'}" class="btn btn-custom btn-lg">Kontakt</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6"><img src="img/about.jpg" class="img-responsive" alt=""></div>
                    <div class="col-xs-12 col-md-6">
                        <div class="about-text">
                            <h2>Kdo jsme</h2>
                            <p>Jsme mladá firma s velmi zkušeným týmem v oboru instalatérství, stavební činnosti, elektronického a kamerového zabezpečení budov.
                                Klademe důraz na spokojenost zákazníka, kterému se snažíme nabídnout cenově přijatelné služby při zachování vysoké kvality odvedené práce.</p>
                            <h3>Proč právě nás?</h3>
                            <div class="list-style">
                                <div class="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>100% orientace na zákazníka</li>
                                        <li>rychlá a kvalitní realizace zakázek</li>
                                        <li>záruční i pozáruční servis</li>
                                        <li>odbornost pracovníků</li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li>certifikace prováděných prací</li>
                                        <li>projektová dokumentace</li>
                                        <li>spolupráce se silnými partnery</li>
                                        <li>realizace velkých ZTI a TZB zákázek </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services">
            <div class="container">
                <div class="section-title">
                    <h2>Naše služby</h2>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/vodovod.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Vodoinstalatérství</h3>
                            <p>
                                Provádíme všechny potřebné instalatérské práce velkého i malého rozsahu a jejich následný servis. Máme dlouholeté zkušenosti s instalacemi
                                v průmyslových objektech, výrobních halách, rodinných domů, bytů i chalup. Zajištujeme
                                rozvody vody v plastu, mědi a kovu, dodávky a montáže sanitárních zařízení.
                                Zřizujeme požární rozvody a montáže hydrantových zařízení.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/vodovody.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Vodovody, kanalizace</h3>
                            <p>
                                Zřizujeme veškeré přípojky vody, plynu a kanalizace. Dodáváme a montujeme veškeré přípojky vody, plynu, podtlakové i tlakové kanalizace,
                                přečerpávací zařízení, rozvody, kanalizace v plastu, v kamenině, litině. Provádíme zasíťování nových developerských projektů.
                                Vyřizujeme veškerá potřebná povolení spojená se zimními pracemi.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/zavlazovani.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Zavlažování</h3>
                            <p>
                                Provádíme kompletní instalace automatických závlahových systémů pro velké i malé zahrady, parky a sportoviště. Zajištujeme návrh závlahového systému,
                                provedení zemních výkopových prací a uložení zeminy, instalace potrubních rozvodů,montáž a osazení postřikovačů, instalace ovládací jednotky,
                                seřízení systému, tlakové zkušky a následné začisťovací terénní úpravy a ošetření trávníku. Úzce spolupracujeme s hlavním dovozcem výrobků
                                celesvětové špičky na trhu v AZS firmy HUNTER.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/topeni.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Topení</h3>
                            <p>
                                Poskytujem kompletní služby a dodávky topných systémů v průmyslových objektech, firmách, rodinných domech a bytech.
                                Zajištujeme montáž otopných těles všech značek a typů, pokládku podlahového vytápění, montáž sahar a instalace kotlů na plyn,
                                tuhá paliva, peletky apod. Provádíme realizace tepelných výměníků.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/stavebni-prace.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Stavební činnost</h3>
                            <p>
                                Provádíme dodávky a realizace staveb pozemního, průmyslového a občanského charakteru, bourací práce, opravy, sanace, zednické práce,
                                základy a zakládaní staveb, hrubé stavby, přístavby, vestavby, nástavby, realizace půdních vestaveb, sádrokartony,
                                rekonstrukce a úpravy intériérů, rekonstrukce bytových jader, chodníky, pojezdové plochy a komunikace.
                                Vyřídíme veškerou projektovou dokumentaci a povolení potřebné k realizaci stavebního díla.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/vykopove-prace.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Výkopové práce</h3>
                            <p>
                                Provádíme veškeré zemní, výkopové a terenní práce, výkopy základů, sklepů, jímek, přípojek, inženýrských sítí a bazénů.
                                Nabízíme vám nejen vykopové a zemní práce za použití techniky, ale i provedení ručních výkopových prácí zejména tam,
                                kam by se těžká technika jen těžko dostala, tedy v prostorách těžko přístupných, nebo tam, kde práce mohou být výhodnější,
                                efektivnější a využítí těžké techniky již není účelné.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/ezs.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>EZS</h3>
                            <p>
                                Provádíme kompletní instalace elektronických zabezpečovacích systémů sloužících k ochraně proti nežádoucímu vniknutí cizích osob
                                do objektu a ochraně majetku . Zajistíme ochranu všech typů budov, hal, rodinných domů a chat nejen před nežádoucím vniknutím
                                cizí osoby, ale i před vzniknutím materialních škod způsobenou požárem, vodou (environmentální čidla – detektory kouře, plynu,
                                záplavová čidla atp.) a to včasnou signalizaci na pult centrální ochrany, telefon, e-mail. Samozřejmostí je možností vzdáleného
                                monitoringu a ovládání na dálku přes aplikaci v telefonu, tabletu či PC. Zřizujeme jak drátové, tak bezdrátové instalace EZS.
                                Jsme certifikovaní partneři firmy JABLOTRON s více než 15 lety zkušeností v oboru EZS.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="service-media"><img src="img/services/kamerove-systemy.jpg" alt=" "></div>
                        <div class="service-desc">
                            <h3>Kamerové systémy</h3>
                            <p>
                                Zajištujeme instalaci a následný servis chytrých kamerových systemů pro ochranu a monitoring průmyslových objektů, obchodů, hal,
                                činžovních a rodinných domů. Připravíme projekt a najdeme společně nejlepší řešení pro vaši potřebu video sledování za použití
                                nejnovějších systemů chytrých kamer s funkcí panorama, naklánění a zoomu, thermo bi-spektrálních kamer určených k detekci požárů,
                                kamer pro analýzu provozu a správu front, vysoce citlivých kamer pro čtení SPZ, kamer do výbušných prostředí. Používáme
                                osvědčené výrobce kamer a záznamových zařízení, které zajištují spolehlivý chod a příjemné uživatelské prostředí
                                při vzdáleném přístupu k video záznamu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section id="portfolio">
            <div class="container">
                <div class="section-title">
                    <h2>Naše práce</h2>
                </div>
                <div class="row">
                    <div class="portfolio-items text-center">
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="my-card">
                                <h4>
                                    <nuxt-link to="/reference/pozemni-stavitelstvi">Pozemní stavitelství</nuxt-link>
                                </h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="my-card">
                                <h4>
                                    <nuxt-link to="">Vnitřní instalace</nuxt-link>
                                </h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <div class="my-card">
                                <h4>
                                    <nuxt-link to="">Voda</nuxt-link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="my-card">
                                <h4>
                                    <nuxt-link to="">Kanalizace</nuxt-link>
                                </h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="my-card">
                                <h4>
                                    <nuxt-link to="">Ostatní</nuxt-link>
                                </h4>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Certifikáty -->
        <section id="certificates">
            <div class="container">
                <div class="section-title">
                    <h2>Certifikáty, oprávnění, osvědčení</h2>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="testimonial">
                            <div>
                                <img v-img:certificates :src="require('@/assets/img/certifikaty/alpex.jpg')" height="150">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="testimonial">
                            <div>
                                <img v-img:certificates :src="require('@/assets/img/certifikaty/buderus.jpg')" height="150">
                            </div>
                        </div>
                    </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/elektro.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/frabo.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/frabo1.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/nibe.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/plasty.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/revizeplyn.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/stavby.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/opr.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/opr1.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/ticrplyn.jpg')" height="150">
                        </div>
                    </div>
                </div><div class="col-md-3">
                    <div class="testimonial">
                        <div>
                            <img v-img:certificates :src="require('@/assets/img/certifikaty/ticrplyn1.jpg')" height="150">
                        </div>
                    </div>
                </div>


                    <!--                    <div class="col-md-4">-->
                    <!--                        <div class="testimonial">-->
                    <!--                            <div class="testimonial-image"><img src="img/reference/06.jpg" alt=""></div>-->
                    <!--                            <div class="testimonial-content">-->
                    <!--                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>-->
                    <!--                                <div class="testimonial-meta"> - Johnathan Doe </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <div class="container">
                <div class="col-md-8">
                    <div class="row">
                        <div class="section-title">
                            <h2>Kontakty</h2>
                        </div>
                        <span><iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1266.382915645279!2d14.0643403!3d50.5943056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470983c945f88107%3A0x71f64ba22aba8486!2zU2VidXrDrW4gNDEsIDQwMyAwMiDDmnN0w60gbmFkIExhYmVtLVN0xZlla292!5e0!3m2!1scs!2scz!4v1546210561752"
                                width="650" height="440" frameborder="0" style="border:0"
                                allowfullscreen></iframe></span>
                    </div>
                </div>
                <div class="col-md-3 col-md-offset-1 contact-info">
                    <div class="contact-item">
                        <h4>Kontaktní informace</h4>
                        <p><span>Sídlo</span>VOSTAV s.r.o<br>
                            Nové Aleje 379, 403 40, Ústí nad Labem</p>
                        <p><span>Provozovna</span>Sebuzín 41<br>
                            Ústí nad Labem - Střekov, 403 02</p>
                    </div>
                    <div class="contact-item">
                        <p><span>Telefon</span> (+420) 601 100 559 <br> Petr Vágner - vedoucí stavebního střediska - odpovědná osoba</p>
                        <p>(+420) 725 925 102 <br> Ing.Aleš Klapka - vedoucí střediska TZB</p>
                        <p>(+420) 720 117 335 <br> Jan Salava - jednatel</p>
                    </div>
                    <div class="contact-item">
                        <p><span>Email</span> info@vostav.eu</p>
                    </div>
                    <div class="contact-item">
                        <p><span>IČO, DIČ</span> 072 16 211</p>
                    </div>
                </div>
                <!--                <div class="col-md-12">-->
                <!--                    <div class="row">-->
                <!--                        <div class="social">-->
                <!--                            <ul>-->
                <!--                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>-->
                <!--                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
                <!--                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                <!--                                <li><a href="#"><i class="fa fa-youtube"></i></a></li>-->
                <!--                            </ul>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </section>
    </div>
</template>


<script>

    export default {}
</script>

<style>
    .my-card {
        border: 1px solid lightgray;
        margin: 10px 0;
        padding: 10px;
        box-shadow: #1f386e;
        text-align: center;
    }
</style>
