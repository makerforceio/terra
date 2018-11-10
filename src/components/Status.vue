<template>
  <div class="status-container">
    <img :src="avatarURL" class="avatar">
    <div class="player-information">
      <h4 class="player-name">{{playerName}} <span class="ranking">#24</span></h4>
      <font-awesome-icon :icon="['fab', 'ethereum']" class="level-icon" />
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
			required: false,
			default: '',
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
    height: 6rem;
    width: 100%;
    background: linear-gradient(180deg, #67FFA4 0%, #44DF9E 0.01%, #2AB87D 100%);
    color: #fff;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;

    font-family: "Nunito";
    font-style: normal;
    line-height: normal;
  }

  .avatar {
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.25rem solid #FFFFFF;
    background-color: #CFE4EB;
    left: 1rem;
    top: 1rem;
    box-sizing: border-box;
  }

  .player-information {
    position: absolute;
    height: 4rem;
    left: 6rem;
    top: 1rem;
    right: 1rem;
  }

  .player-name {
    position: absolute;
    height: 1.75rem;
    width: 100%;
    margin: 0;
    top: 0;

    font-weight: 600;
    font-size: 1.25rem;
  }

  .ranking {
    position: absolute;
    right: 0;
    top: 0;
    text-align: right;

    font-weight: 600;
    font-size: 0.875rem;
  }

  .level-icon {
    position: absolute;
    left: 0;
    bottom: 0;

    font-size: 2rem;
  }

  .player-score {
    position: absolute;
    height: 2.3125rem;
    margin: 0;

    bottom: 0;
    left: 1.75rem;

    font-weight: 800;
    font-size: 2rem;
  }
</style>
