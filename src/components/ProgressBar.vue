<template>
  <progress :min="min" :max="max" :value="value"></progress>
</template>
<script>
export default {
	name: 'Progress',
	props: {
		min: Number,
		max: Number,
		value: Number,
	},
};
</script>
<style scoped>
progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 0.6rem;
}

progress[value]::-webkit-progress-bar {
  background-color: #ECFFF7;
  border-radius: 5px;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  border-radius: 0.5rem;
  background: linear-gradient(#44DF9E, #2AB87D);
  background-repeat: repeat-y;
}
</style>
