<template>
  <section id="contact-me" class="contact-me-section flex flex-col items-center justify-center">
    <div class="title-section-area">
      <h2 class="section-title">
        Contact Me
      </h2>
    </div>
    <ContactImage />
    <div class="contacts-area flex flex-col">
      <a href="https://github.com/lucaspineda" class="contact-row flex items-center">
        <i class="fab fa-github mr-4 w-10 flex justify-center" />
        <p>
          /lucaspineda
        </p>
      </a>
      <a class="contact-row flex items-center">
        <i class="fas fa-mobile-alt mr-4 w-10 flex justify-center" />
        <p>
          +55 11 97678-3992
        </p>
      </a>
      <a href="mailto: lucas.pineda@hotmail.com" target="_blank" class="contact-row flex items-center">
        <i class="far fa-envelope mr-4 w-10 flex justify-center" />
        <a>
          lucas.pineda@hotmail.com
        </a>
      </a>
      <a href="https://twitter.com/LucasPineda96" target="_blank" class="contact-row flex items-center">
        <i class="fab fa-twitter-square mr-4 w-10 flex justify-center" />
        <a>
          @LucasPineda96
        </a>
      </a>
      <!-- <a href="https://www.instagram.com/pineda_luucas/" target="_blank" class="contact-row flex items-center">
        <i class="fab fa-instagram mr-4 w-10 flex justify-center" />
        <a>
          pineda_luucas
        </a>
      </a> -->
      <a href="https://www.linkedin.com/in/lucas-pineda/" target="_blank" class="contact-row flex items-center">
        <i class="fab fa-linkedin-in mr-4 w-10 flex justify-center" />
        <a>
          /lucas-pineda
        </a>
      </a>
      <a
        href="https://www.google.com.br/maps/place/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo/@-23.6821604,-46.8755025,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5505199!4d-46.6333094"
        target="_blank"
        class="contact-row flex items-center"
      >
        <i class="fas fa-map-marker-alt mr-4 w-10 flex justify-center" />
        <a>
          São Paulo, Brazil
        </a>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    ContactImage: () => import('@/components/ContactMe/ContactImage.vue')
  }
})

@Component
export default class ContactMe extends Vue {

}
</script>

<style scoped>

.contact-me-section {
  padding: 0 1rem 2rem 1rem;
  background-color: var(--quintenary-color);
  color: var(--secondary-color);
}

.title-section-area {
  font-family: var(--titles-font-family);
  font-weight: 500;
}

.section-title {
  font-size: 4.4rem;
  margin: 4rem 0 6rem 0;
  font-weight: 700;
}

.section-title::after {
  content: '';
  border-bottom: .3rem solid var(--secondary-color);
  display: flex;
  width: 50%;
  margin: .5rem auto 0 auto;
}

.contacts-area {
  margin: 4rem 0 0 0;
  font-weight: 400;
}

.contact-row {
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
}

.contact-row i {
  font-size: 2.2rem;
  /* margin: 0 0 1rem 0; */
}

</style>
