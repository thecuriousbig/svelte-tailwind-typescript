<script lang="ts">
	export let name: string
</script>

<main>
	<h1 class="text-center text-8xl text-green-600">Hello {name}!</h1>
	<p class="text-center text-2xl">Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>