<template>
  <VApp>
    <ClientOnly>
      <NavigationPanel />
    </ClientOnly>
    <NavigationBar />
    <VMain class="main-page-wrapper">
      <BaseOffline />
      <slot />
      <!-- <VFab
        @click="scrollToTop"
        v-scroll="onScroll"
        :active="fab"
        :appear="fab"
        elevation="1"
        rounded="circle"
        color="var(--primary_color2)"
        location="bottom end"
        size="60"
        title="To Top"
        app
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="4" fill="transparent" />
          <path
            d="M24.7071 14.2929C24.3166 13.9024 23.6834 13.9024 23.2929 14.2929L16.9289 20.6569C16.5384 21.0474 16.5384 21.6805 16.9289 22.0711C17.3195 22.4616 17.9526 22.4616 18.3431 22.0711L24 16.4142L29.6569 22.0711C30.0474 22.4616 30.6805 22.4616 31.0711 22.0711C31.4616 21.6805 31.4616 21.0474 31.0711 20.6569L24.7071 14.2929ZM25 33L25 15L23 15L23 33L25 33Z"
            fill="var(--text_light)"
          />
        </svg>
      </VFab> -->
    </VMain>
  </VApp>
</template>
<script setup lang="ts"></script>
