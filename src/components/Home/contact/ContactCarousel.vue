<template>
  <div>
    <section>
      <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/partners/logo-tg.png" />
        </div>
      </div>
      <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/partners/logo-tg.png" />
        </div>
      </div>
      <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/partners/logo-tg.png" />
        </div>
      </div>
      <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/partners/logo-tg.png" />
        </div>
      </div>
      <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/partners/logo-tg.png" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ContactCarousel",
  data() {
    return {};
  },
  methods: {
    loading() {
      const logos = document.querySelectorAll(".logo-wrapper");
      gsap.set(logos, {
        autoAlpha: 1
      });

      logos.forEach((logo, i) => {
        gsap.set(logo, {
          xPercent: 100 * i
        });
      });

      // since the grid is 5 across, you want any amount more than 5 to enable animation
      if (logos.length > 5) {
        // wrap function for looping
        const logosWrap = gsap.utils.wrap(-100, (logos.length - 1) * 100);

        // how long it takes for each logo to move 100%;
        const duration = logos.length * 2.5;

        gsap.to(logos, {
          xPercent: `-=${logos.length * 100}`,
          duration,
          repeat: -1,
          ease: "none",
          modifiers: {
            // run xPercent through the wrap function
            xPercent: xPercent => logosWrap(parseFloat(xPercent))
          }
        });
      }
    }
  },
  mounted() {
    this.loading();
  }
};
</script>

<style scoped type="SCSS">
* {
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  position: relative;
}

section {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 40vw;
  top: calc(50% - 10vw);
}

.logo-wrapper {
  width: 40%;
  position: absolute;
  visibility: hidden;
  top: 0;

  &::after {
    content: "";
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  &:nth-of-type(even) {
    .logo {
      background: #eee;
    }
  }

  .logo {
    display: grid;
    place-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 100%;

    svg {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
}
</style>
