<template>
  <section id="my-projects" class="my-work-section flex flex-col items-center justify-center">
    <div class="container flex flex-col mx-auto items-center">
      <div class="title-section-area">
        <h2 class="section-title">
          My Projects
        </h2>
      </div>
      <section class="cards-section flex flex-wrap justify-center md:justify-start">
        <div v-for="(project, index) in projects" :key="index" class="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <div class="projects-card flex flex-col">
            <img class="projects-card__project-image" :src="require(`@/assets/img/${project.image}`)" :alt="`${project.title} image`">
            <div class="projects-card__separator" />
            <div class="project-info flex flex-col h-full">
              <h4 class="mb-4">
                {{ project.title }}
              </h4>
              <p class="project-description">
                {{ project.description }}
              </p>
              <div class="tags-area flex justify-center">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">
                  {{ tag }}
                </span>
              </div>
              <div class="links-area flex justify-center h-full items-end">
                <a v-if="project.srcCode" :href="project.srcCode" target="_blank" class="project-btn flex rounded-lg">
                  <div>
                    <svg class="project-btn__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span>
                    View code
                  </span>
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" class="project-btn flex rounded-lg">
                  <svg class="project-btn__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>
                    View live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
      })
  }
}
</script>

<style scoped>
.my-work-section {
  padding: 0 1rem 2rem 1rem;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
  font-size: 1em;
}

@media (min-width: 1400px) {
  .my-work-section  {
    font-size: 1.2em
  }
}

.title-section-area {
  font-family: var(--titles-font-family);
  font-weight: 500;
}

.section-title {
  font-size: 4.4rem;
  margin: 4rem 0 6rem 0;
  font-weight: 700;
  color: var(--secondary-color);
}

.section-title::after {
  content: '';
  border-bottom: .3rem solid var(--secondary-color);
  display: flex;
  width: 50%;
  margin: .5rem auto 0 auto;
}

.cards-section {
  width: 100%;
  justify-content: center;
}

.projects-card {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  height: 52em;
  border-radius: 1em;
  margin: 0 1em 3em 1em;
  padding-bottom: 2em;
  width: 30em;
  transition: all .4s;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
}

.projects-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.9);
}

.projects-card__project-image {
  width: auto;
  height: 26em;
  border-radius: 1em 1em 0 0;
  object-fit: cover;
  min-height: 20em;
}

.projects-card__separator {
  border-top: .5em solid var(--primary-color);
}

.project-info {
  margin: 2em 0 0 0;
  padding: 0 1em;
}

.project-info h4 {
  font-size: 2.6em;
}

.project-description {
  font-size: 1.4em;
  margin-bottom: 1em;
}

.tags-area {
  flex-wrap: wrap;
}

.tags-area span {
  background-color: var(--quartenary-color);
  font-size: 1.4em;
  padding: .4em .8em;
  margin: .4em .4em;
  border-radius: 2em;
  cursor: default;
}

.project-btn {
  font-size: 1.4em;
  margin: 0 auto;
  padding: .5em .8em;
  font-weight: 500;
  background-color: var(--tertiary-color);
  color: var(--secondary-color);
}

.project-btn__icon {
  width: 1.4em;
  height: 1.4em;
  margin: 0 .4em 0 0;
}
</style>
