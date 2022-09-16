<script>
export default {
  name: "Loop",
  data() {
    return {
      users: [
        { name: "Ronak", surname: "Gondaliya", village: "Sultanpur" },
        { name: "Darhsil", surname: "Dobaiya", village: "Moviya" },
        { name: "Hardik", surname: "Mayani", village: "mayapadar" },
      ],
    };
  },
};
</script>

        
<template>
  <div>
    <table>
      <tr>
        <td>Name</td>
        <td>Surname</td>
        <td>Village</td>
      </tr>
      <tr v-for="user in users" :key="user.user">
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>{{ user.village }}</td>
      </tr>
    </table>
  </div>
</template>