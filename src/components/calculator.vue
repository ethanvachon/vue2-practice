<template>
  <div>
    <form>
      <input type="number" placeholder="amount" />
      <input type="number" placeholder="interest" />
    </form>
    <form>
      term:
      <input type="radio" id="15" name="term" />
      <label class="p-1" for="15">15</label>
      <input type="radio" id="30" name="term" />
      <label class="p-1" for="30">30</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "calculator",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
