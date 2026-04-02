<template>
  <MOpenSourceProject
    class="MGenerativeLines"
    v-bind:project="project"
  >
    <canvas
      ref="canvas"
      class="MGenerativeLines__canvas"
    />
  </MOpenSourceProject>
</template>

<script
  lang="ts"
  setup
>
import { useRenderer } from 'generative-lines/renderer'
import { onMounted, ref } from 'vue'
import type { OpenSourceProject } from '../../types/website'
import MOpenSourceProject from './MOpenSourceProject.vue'

defineProps<{
  project: OpenSourceProject
}>()

const canvas = ref<HTMLCanvasElement>()

function randomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

onMounted(() => {
  const canvasElement = canvas.value
  if (!canvasElement) {
    console.error('Canvas element not found')
    return
  }

  const context = canvasElement.getContext('2d')
  if (!context) {
    console.error('2D context not available')
    return
  }

  const renderer = useRenderer(canvasElement, context)
  renderer.initialize({
    renderWidth: canvasElement.offsetWidth,
    renderHeight: canvasElement.offsetHeight,
    steps: 12,
    colors: 3,
    distance: 12,
    amplitude: 8,
    thickness: 1,
    lines: 12,
    paddingX: 64,
    paddingY: 16,
    perspective: 0.02,
    background: '#181818',
    animationDuration: 2000,
  })

  // noinspection InfiniteRecursionJS
  async function infiniteLoop () {
    await renderer.animateIn()
    await new Promise(resolve => setTimeout(resolve, 1000))
    await renderer.animateWipeOut()
    await new Promise(resolve => setTimeout(resolve, 500))
    renderer.rerollColors()
    renderer.mergeConfig({
      steps: randomInt(8, 64),
      distance: randomInt(2, 24),
      amplitude: randomInt(8, 32),
    })
    return infiniteLoop()
  }

  infiniteLoop()
})
</script>

<style lang="scss">
.MGenerativeLines {
  &__canvas {
    border: 2px dashed var(--color-accent);
    display: block;
    height: auto;
    object-fit: contain;
    width: 100%;
  }
}
</style>