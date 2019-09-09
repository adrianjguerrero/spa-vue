<template>
  <li class="artist">
    <h2>
      <a :href="artist.url" target="_blank">{{artist.name}}</a>
      <img :src="artist.image[2]['#text']" alt="">
    </h2>
  </li>
</template>

<script>
  export default {
      name:'artist',
      props: ['artist']
  }

</script>

<style lang="scss" scoped>

li.artist{
    display: block;
    margin-bottom: 2em;
    
    a{
        margin-bottom: .8em;
        display: block;
    }
    img{
        display: block;
        margin: auto;
    }
}
</style>
