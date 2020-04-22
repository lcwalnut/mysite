<template>
<div class="banner">
  <img
        v-if="$site.themeConfig.banner"
        :src="$withBase($site.themeConfig.banner)"
        :alt="$siteTitle"
      >
</div>
</template>

<script>
<style lang="stylus">
.banner
  width 100%
.banner img
  width:100%;
</style>
