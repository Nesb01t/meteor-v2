<script setup lang="ts">
const colorMode = useColorMode()

const randomTransform = (i: number) => {
  const scaleV = Math.random() * 0.5 + 0.3
  const translateYOffset = scaleV
  const transformValues = {
    rotate: `rotate(${Math.random() * 10 + 5}deg)`,
    scale: `scale(${scaleV})`,
    translateY: `translateY(${translateYOffset}%)`,
  }
  return {
    transform: Object.values(transformValues).join(' '),
  }
}
const isDark = computed(() => colorMode.preference === 'dark')
const bgColor = computed(() => (isDark.value ? 'black' : 'white'))
</script>

<template>
  <template v-for="i in 25" :key="i">
    <div class="rainbow" :style="randomTransform(i)" />
  </template>
</template>

<style lang="scss" scoped>
$purple: rgb(232 121 249);
$blue: rgb(96 165 250);
$green: rgb(94 234 212);
$bgColor: v-bind(bgColor);

$animationtime: 95s;
$length: 25;

.rainbow {
  height: 40vh;
  width: 0;
  top: 60vh;
  position: absolute;
  transform-origin: top right;
  @for $i from 1 through $length {
    &:nth-child(#{$i}) {
      $colors: 0;
      $r: random(6);
      @if $r == 1 {
        $colors: $purple, $blue, $green;
      }
      @elseif $r == 2 {
        $colors: $purple, $green, $blue;
      }
      @elseif $r == 3 {
        $colors: $green, $purple, $blue;
      }
      @elseif $r == 4 {
        $colors: $green, $blue, $purple;
      }
      @elseif $r == 5 {
        $colors: $blue, $green, $purple;
      }
      @elseif $r == 6 {
        $colors: $blue, $purple, $green;
      }
      box-shadow:
        -130px 0 80px 40px $bgColor,
        -50px 0 50px 25px nth($colors, 1),
        0 0 50px 25px nth($colors, 2),
        50px 0 50px 25px nth($colors, 3),
        130px 0 80px 40px $bgColor;

      animation: #{$animationtime -
        $animationtime /
        $length /
        2 *
        $i}
        linear
        infinite
        slide;
      animation-delay: -#{$i / $length * $animationtime};
    }
  }
}
@keyframes slide {
  from {
    right: -25vw;
  }
  to {
    right: 125vw;
  }
}
</style>
