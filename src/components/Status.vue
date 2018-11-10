<template>
  <div class="status-container">
    <img v-bind:src="avatarURL" class="avatar">
    <div class="player-information">
      <h4 class="player-name">{{playerName}}</h4>
      <hr class="divider" />
      <h2 class="player-score">{{score}}</h2>
    </div>
  </div>
</template>
<script>
export default {
	name: 'Status',
	props: {
		playerName: {
			type: String,
			required: true,
			default: 'Player Name',
		},
		avatarURL: {
			type: String,
			required: true,
			default: '../assets/logo.png',
		},
		score: {
			type: Number,
			required: true,
			default: 0,
		},
	},
};
</script>
<style scoped>
  .status-container {
    display: flex;
    align-items: center;
    background-color: #C9C9C9;
    /* border-radius: 10px; */
    z-index: 10;

  }

  .avatar {
    max-width: 15%;
    max-height: 15%;
    border-radius: 50%;
    background-color: #555555;
    margin: 2%;
  }

  .player-information {
    flex-grow: 1;
    margin: 2%;
  }

  .player-name {
    font-size: 2.125rem;
    margin:0px;
  }

  .divider {
    border-width: 0px;
    border-top: 2px solid #555555;
  }

  .player-score {
    font-size: 3.75rem;
    margin: 0px;
    line-height: 3.75rem;
  }
</style>
