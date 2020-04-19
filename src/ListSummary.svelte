<script>
	export let totalItems = 0;
	export let totalFilteredItems = 0;
	export let query = '';
</script>

<div id="items-summary">
    <p>showing {totalFilteredItems} of {totalItems}</p>
    <input bind:value={query} type="text" class="search">
</div>

<style>

</style>