<script>
	import { fade } from 'svelte/transition';

	export let items;
</script>

<div id="items">
	{#if items.length > 0}
		<ul transition:fade>
			{#each items as item}
				<li>{item.title}</li>
			{/each}
		</ul>
	{:else}
		<p transition:fade>Loading...</p>
	{/if}
</div>

<style>

</style>