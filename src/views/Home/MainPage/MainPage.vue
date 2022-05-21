<template>
  <div class="main-page">
    <div class="top-container">
      <div class="first-container">
        <div class="title">Benvenuti nella realtà virtuale</div>
        <div class="desc">Il nuovo modo che trasforma il gioco in realtà</div>
      </div>
      <div class="second-container">
        <div class="row">
          <div class="img"></div>
          <div class="label">
            <div class="title">
              Il nuovo modo che trasforma il gioco in realtà
            </div>
            <div class="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit
            </div>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <div class="title">
              Il nuovo modo che trasforma il gioco in realtà
            </div>
            <div class="desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit
            </div>
          </div>
          <div class="img"></div>
        </div>
      </div>
      <div class="card-container">
        <div class="title">Titolo</div>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit
        </div>
        <div class="card-display">
          <div class="card">
            <div class="title">Orto</div>
            <div class="img"></div>
            <div class="cta" @click="() => goTo(ORTO_PAGE)">Scopri di più</div>
          </div>
          <div class="card">
            <div class="title">Pollaio</div>
            <div class="img"></div>
            <div class="cta" @click="() => goTo(POLLAIO_PAGE)">
              Scopri di più
            </div>
          </div>
          <div class="card">
            <div class="title">Arnia</div>
            <div class="img"></div>
            <div class="cta" @click="() => goTo(ARNIA_PAGE)">Scopri di più</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterNames } from "@/router/RouterNames";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    useHead({
      title: "bravo",
      htmlAttrs: { lang: "en", amp: true },
      meta: [
        {
          property: "og:title",
          content: "bravo",
        },
      ],
    });
    const router = useRouter();
    const POLLAIO_PAGE = RouterNames.POLLAIO_PAGE;
    const ORTO_PAGE = RouterNames.ORTO_PAGE;
    const ARNIA_PAGE = RouterNames.ARNIA_PAGE;

    const goTo = (pageName: string) => {
      router.push({ name: pageName });
    };

    return {
      goTo,
      POLLAIO_PAGE,
      ORTO_PAGE,
      ARNIA_PAGE,
    };
  },
};
</script>

<style lang="less" src="./MainPage.less" scoped></style>
