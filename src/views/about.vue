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

    <color-picker v-model="color" />
    <div :style="{ backgroundColor: color }" class="fw-bold">Hello</div>

    <toggle-btn v-model="isOn" />

    <hr />
    <hello-world msg="hello world" />
  </div>
</template>

<script>
import fancyText from '../components/fancy-text.vue'
import colorPicker from '../components/color-picker.vue'
import toggleBtn from '../components/toggle-btn.vue'
import helloWorld from '../components/hello-world.vue'

export default {
  name: 'about',
  data() {
    return {
      query: '',
      color: '',
      isOn: false,
    }
  },
  components: {
    fancyText,
    colorPicker,
    toggleBtn,
    helloWorld,
  },
}
</script>
