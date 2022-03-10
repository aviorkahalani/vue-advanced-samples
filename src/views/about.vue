<template>
  <div class="py-4 flex flex-col gap-2">
    <fancy-text txt="Lets try this text!" :num="'4'" :testTxt="'hello'" />
    <input
      v-focus
      v-model="query"
      class="form-input"
      type="text"
      placeholder="Search anything..."
    />
    <pre>
      {{ query }}
    </pre>
    <hr />

    <h1>v-model on components</h1>
    <color-picker v-model="color" />
    <div :style="{ backgroundColor: color }" class="fw-bold">Hello</div>

    <toggle-btn v-model="isOn" />

    <hr />
    <h1>custom-on directive</h1>
    <button v-custom-on:click="clicked" class="btn btn-primary">click me!</button>
    <input v-custom-on:change="onChange" type="text" class="form-input" />

    <hr />
    <h1>For Vitest</h1>
    <hello-world msg="hello world" />

    <hr />
    <h1>Animation</h1>
    <button class="btn btn-secondary" @click="isShow = !isShow">Toggle Text</button>
    <Transition name="fade">
      <h1 v-if="isShow">hello</h1>
    </Transition>
    <h1>Animation between components</h1>
    <label> <input type="radio" v-model="activeComponent" value="cmp-a" /> A </label>
    <label> <input type="radio" v-model="activeComponent" value="cmp-b" /> B </label>
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent" />
    </Transition>
  </div>
</template>

<script>
import fancyText from '../components/fancy-text.vue'
import colorPicker from '../components/color-picker.vue'
import toggleBtn from '../components/toggle-btn.vue'
import helloWorld from '../components/hello-world.vue'
import cmpA from '../components/cmp-a.vue'
import cmpB from '../components/cmp-b.vue'

export default {
  name: 'about',
  data() {
    return {
      query: 'Regular v-model',
      color: '',
      isOn: false,
      isShow: false,
      activeComponent: 'cmp-a',
    }
  },
  methods: {
    clicked() {
      alert('I got clicked!')
    },
    onChange(ev) {
      console.log('Look ma! I use custom input')
      console.log('ev.target.value :>> ', ev.target.value)
    },
  },
  components: {
    fancyText,
    colorPicker,
    toggleBtn,
    helloWorld,
    cmpA,
    cmpB,
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
