<template>
  <section class="my-work-section flex flex-col items-center justify-center">
    <div class="title-section-area">
      <h2 class="section-title">
        My Projects
      </h2>
    </div>
    <section class="cards-section flex">
      <div href="#" class="projects-card flex flex-col mb-10">
        <img class="projects-card__project-image" src="@/assets/img/trade.jpeg" alt="Stock Trader Project">
        <div class="projects-card__separator" />
        <div class="project-info flex flex-col">
          <h4>Stock Trader</h4>
          <p class="project-description">
            Just a normal  project with vuejs and firebase
          </p>
          <div class="tags-area flex justify-center">
            <span>Vuejs</span>
            <span>Firebase</span>
            <span>Firebase</span>
            <span>Firebase</span>
            <span>Firebase</span>
            <span>Firebase</span>
            <span>Firebase</span>
          </div>
          <div class="links-area">
            <a>View code</a>
            <a>View live demo</a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.my-work-section {
  padding: 0 2.2rem;
  background-color: #7798ab;
  color: var(--secondary-color);
  padding: 0 2.2rem;
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
  height: 48rem;
  border-radius: 1rem;
}

.projects-card__project-image {
  /* height: 100%; */
  width: auto;
  height: 26em;
  border-radius: 1rem 1rem 0 0;
}

.projects-card__separator {
  border-top: .5rem solid var(--primary-color);
}

.project-info {
  margin: 2rem 0 0 0;
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
  margin: 0 .4rem;
  border-radius: 2rem;
}

</style>
