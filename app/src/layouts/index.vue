<template>
  <div className="flex gap-3 justify-center">
    <router-link to="/home">
      Home
    </router-link>
    <router-link to="/count">
      Count
    </router-link>
  </div>
  <router-view />
  <Footer />
</template>
