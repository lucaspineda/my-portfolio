<template>
  <section class="my-work-section flex flex-col items-center justify-center">
    <div class="title-section-area">
      <h2 class="section-title">
        My Projects
      </h2>
    </div>
    <section class="cards-section flex flex-col">
      <div v-for="(project, index) in projects" :key="index" class="projects-card flex flex-col mb-10" href="#">
        <img class="projects-card__project-image" :src="require(`@/assets/img/${project.image}`)" :alt="`${project.title} image`">
        <div class="projects-card__separator" />
        <div class="project-info flex flex-col h-full">
          <h4>{{ project.title }}</h4>
          <p class="project-description">
            {{ project.description }}
          </p>
          <div class="tags-area flex justify-center">
            <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">
              {{ tag }}
            </span>
          </div>
          <div class="links-area flex justify-center h-full items-end mb-10">
            <a href="#" class="flex rounded-lg">
              <div>
                <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span>
                View code
              </span>
            </a>
            <a href="#" class="flex rounded-lg">
              <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                View live
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Project } from '@/types/types'

@Component
export default class MyProjects extends Vue {
  projects: Project[] = []

  getImage (path: any) {
    return require(path)
  }

  created () {
    this.$axios('projects.json')
      .then((value) => {
        this.projects = value.data
        console.log(typeof this.projects[0].image)
        console.log(typeof '@/assets/img/icon.png')
      })
  }
}
</script>

<style>
.my-work-section {
  padding: 0 1rem 2rem 1rem;
  background-color: #7798ab;
  color: var(--secondary-color);
}

.title-section-area {
  font-family: var(--titles-font-family);
  font-weight: 500;
}

.section-title {
  font-size: 3.4rem;
  margin: 4rem 0 8rem 0;
}

.section-title::after {
  content: '';
  border-bottom: .3rem solid var(--secondary-color);
  display: flex;
  width: 50%;
  margin: .5rem auto 0 auto;
}

.projects-card {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  height: 52rem;
  border-radius: 1rem;
}

.projects-card__project-image {
  /* height: 100%; */
  width: auto;
  height: 26rem;
  border-radius: 1rem 1rem 0 0;
}

.projects-card__separator {
  border-top: .5rem solid var(--primary-color);
}

.project-info {
  margin: 2rem 0 0 0;
  padding: 0 1rem;
}

.project-info h4 {
  font-size: 2.6rem;
}

.project-description {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.tags-area {
  /* max-width: 100px; */
  flex-wrap: wrap;
}

.tags-area span {
  background-color: var(--quartenary-color);
  font-size: 1.4rem;
  padding: .4rem .8rem;
  margin: .4rem .4rem;
  border-radius: 2rem;
}

.links-area a {
  font-size: 1.4rem;
  margin: 0 .8rem;
  padding: .5rem 1rem;
  font-weight: 500;
  background-color: var(--tertiary-color);
  color: var(--primary-color);
}

</style>
