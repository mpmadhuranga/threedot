<template>
  <div class="content-container">
    <div class="text-label">Input n-th (digits):</div>
    <div class="input-class">
      <input type="number" v-model="digit" id="digit" />
      <button v-on:click="check()">Check</button>
    </div>
    <div v-if="result">
      <div>Result</div>
      <div>{{numberPosition}}th is {{result}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskTwo",
  data() {
    return {
      digit: "",
      numberPosition: "",
      result: 0
    };
  },
  methods: {
    check() {
      this.numberPosition = this.digit;
      console.time("iterationTime");
      // Send the input -1 to get values from 0
      this.result = this.getDigit(this.digit-1);
      console.timeEnd("iterationTime");
    },
    getDigit(target) {
      let i = 1;
      let xDigitNumbers = 1; // eg 1 digit numbers, 2 digit numbers
      let digitsSoFar = 0;
  
      while (i > 0) {
        const digitsThisDecade = xDigitNumbers * 9 * 10 ** (xDigitNumbers - 1);
        if (digitsSoFar + digitsThisDecade > target) {
          // Then this is the "decade" in which the target digit is

          // digitIndexThisDecade: eg, starting from '100101102', to find the last '1' in '101', 
          // digitIndexThisDecade will be 6
          const digitIndexThisDecade = target - digitsSoFar;
          const numIndexThisDecade = Math.floor(
            digitIndexThisDecade / xDigitNumbers
          );
          // decadeStartNum: the number right before the decade starts (0, 9, 99, 999)
          const decadeStartNum = 10 ** (xDigitNumbers - 1);
          const num = decadeStartNum + numIndexThisDecade;
          // digitIndexInNum: the digit index in num that the target is
          // eg, for 101, targeting the last '1' will come from a digitIndexInNum of 2 (zero-indexed)
          const digitIndexInNum = digitIndexThisDecade % xDigitNumbers;
          return String(num)[digitIndexInNum];
        }
        digitsSoFar += digitsThisDecade;
        xDigitNumbers++;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-container {
  padding: 10px;
}
.text-label {
  padding-bottom: 10px;
}
.input-class {
  padding-bottom: 10px;
}
</style>
