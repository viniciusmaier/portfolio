<template>
    <main>
      <Header />
      <Home   />
    </main >
</template>

<script>
  import Home from "./pages/Home.vue";
  import Header from "./components/Header.vue"
  export default {
    name : "App",
    components : {
      Home,
      Header,
    }
  }
</script>