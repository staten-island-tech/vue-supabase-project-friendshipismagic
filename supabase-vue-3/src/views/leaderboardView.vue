<template>
    <div>
<h1 class="title">LeaderBoard</h1>

<div class="leaderboard">
    <h2>Click to get to the top!</h2>
    <p>im number one</p>
</div>
<div class="leaderboard">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>User</th>
        <th>Click Total</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>69420</td>
      </tr>
      <!-- row 2 -->
      <tr class="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>239</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>206</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.title{
    text-decoration: underline;
}

table, .table, th, td{
    justify-content: center;
    align-content: center;
    text-align: center;
    border: 1px solid;
}

table.table {
    width: 50%;
    border-collapse: collapse;
}

cursor{
  cursor:  url("../assets/punch.png")
}
</style>