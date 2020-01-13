<template>
  <div class="content-container">
    <div class="text-label">Input Sentence:</div>
    <div class="input-class">
      <input type="text" v-model="sentence" />
      <button @click="analyze()">Analyze</button>
    </div>

    <div v-if="resDetails.length > 0">
      <table id="data-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Character Count</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resDetails" v-bind:key="item.element">
            <td>{{item.element.toUpperCase() }}</td>
            <td>{{item.count}}</td>
            <td>
              before: {{item.before}} after: {{item.after}}
              <span v-if="item.diff">max-distance: {{item.diff}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskOne",
  data() {
    return {
      sentence: "",
      resDetails: []
    };
  },
  methods: {
    analyze() {
      // empty the variable before assging new values
      this.resDetails = [];

      // truncate space from string
      let str = this.sentence.replace(/\s/g, "");
      let arr = str.split("");
      // check the number of occurences in string
      let hist = {};
      arr.map(a => {
        if (a in hist) hist[a]++;
        else hist[a] = 1;
      });

      // loop through each distinct values and send those to function to get details
      for (const [key, value] of Object.entries(hist)) {
        this.resDetails.push(this.checkArray(arr, key, value));
      }
    },


    checkArray(arr, element, count) {
      let indices = [];
      let idx = arr.indexOf(element);
      let before = "";
      let after = "";
      // get indexes of all occurences 
      while (idx != -1) {
        indices.push(idx);
        // adding 'none' if undefined returned
        before += arr[idx + 1] === undefined ? "none" : arr[idx + 1] + ",";
        after += arr[idx - 1] === undefined ? "none" : arr[idx - 1] + ",";
        idx = arr.indexOf(element, idx + 1);
      }

      // create a object with containing all required details
      let result = {
        element: element,
        count: count,
        before: before.replace(/,\s*$/, ""),
        after: after.replace(/,\s*$/, ""),
        diff: Math.max(...indices) - Math.min(...indices)
      };

      return result;
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

#data-table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#data-table td,
#data-table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#data-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#data-table tr:hover {
  background-color: #ddd;
}

#data-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
