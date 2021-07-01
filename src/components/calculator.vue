<template>
  <div id="calculator">
    <form>
      <input
        class="m"
        type="number"
        placeholder="amount"
        v-model="amount"
      /><br />
      <input
        class="m"
        type="number"
        placeholder="interest"
        v-model="interest"
      />
    </form>
    <form>
      term:
      <input type="radio" id="15" name="term" @click="term = 15" />
      <label class="p-1" for="15">15</label>
      <input type="radio" id="30" name="term" @click="term = 30" />
      <label class="p-1" for="30">30</label>
    </form>
    total: {{ total }}
  </div>
</template>

<script>
import calculate from "../utils/calculate";
export default {
  name: "calculator",
  data() {
    return {
      amount: null,
      interest: null,
      term: null,
    };
  },
  computed: {
    total() {
      return calculate(this.amount, this.interest, this.term).balance;
    },
  },
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
.m {
  margin: 5px 0px;
}
#calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
}
</style>
