<template>
    <div>
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button
                            type="button"
                            class="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span
                            class="icon-bar"></span>
                    </button>
                    <nuxt-link class="navbar-brand page-scroll" :to="{path: '/', hash: '#page-top'}">
                        <img src="/img/logo-vostav.png" height="70" style="margin-top: -20px">
                    </nuxt-link>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <nuxt-link :to="{path: '/', hash: '#about'}">O nás</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{path: '/', hash: '#services'}">Služby</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{path: '/', hash: '#portfolio'}">Reference</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{path: '/', hash: '#certificates'}">Certifikáty</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{path: '/', hash: '#contact'}">Kontakt</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
        <nuxt/>
        <!-- Footer Section -->
        <div id="footer">
            <div class="container text-center">
                <p>&copy; 2018 Vostav s.r.o.</p>
            </div>
        </div>
    </div>
</template>

<script>
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('data-spy', 'scroll');
    body.setAttribute('data-target', '.navbar-fixed-top');

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            var nav = $('.nav');
            var navHeight = nav.outerHeight();

            $('section').each(function () {
                var top = $(this).offset().top - navHeight;
                var bottom = top + $(this).outerHeight();

                if (scrollPos >= top && scrollPos <= bottom) {
                    nav.find('a').removeClass('nuxt-link-exact-active');
                    $('section').removeClass('nuxt-link-exact-active');

                    $(this).addClass('nuxt-link-exact-active');
                    nav.find('a[href="/#' + $(this).attr('id') + '"]').addClass('nuxt-link-exact-active');
                }
            });
        }
    });

    export default {
        head() {
            return {
                bodyAttrs: {
                    id: 'page-top'
                }
            }
        },

    }
</script>

<style>

</style>
