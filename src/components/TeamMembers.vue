<template>
  <div class="container-block container">
    <p class="text-blk team-head-text">Our Team</p>
    <div class="responsive-container-block teamcard-container">
      <TeamMemberItem
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user" />
    </div>
  </div>
</template>

<script>
import TeamMemberItem from "./TeamMemberItem.vue";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.json())
      .then((json) => (this.users = json));
  },
  components: {
    TeamMemberItem,
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => user.id <= 3);
    },
  },
};
</script>

<style scoped>
.container-block {
  color: var(--onyx);
}
.text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  line-height: 25px;
}

.responsive-container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  justify-content: flex-start;
}

.container-block {
  min-height: 75px;
  height: fit-content;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: block;
}

.responsive-cell-block {
  min-height: 75px;
}

.container {
  max-width: 1380px;
  margin-top: 80px;
  margin-right: auto;
  margin-bottom: 80px;
  margin-left: auto;
  padding-top: 0px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
}

.team-head-text {
  font-size: 25px;
  line-height: 50px;
  font-weight: 900;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 70px;
  margin-left: 0px;
}

.team-card-container {
  width: 263px;
  margin-top: 0px;
  margin-right: 15px;
  margin-bottom: 30px;
  margin-left: 15px;
}

.teamcard-container {
  justify-content: space-evenly;
}
</style>
