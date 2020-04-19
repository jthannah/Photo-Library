<script>
	export let filterOptions;
	export let appliedFilters;
</script>

<div id="filter">
	<h3>Filter</h3>
	<div class="filter-options">
		{#each filterOptions as filter}
			<div class="filter-option">
				<span class="option-title">{filter.filterName}</span>
				{#each filter.options as option}
					<label>
						<input type="checkbox" value="{filter.filterField}:{option}" bind:group={appliedFilters}>
						{option}
					</label>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="stylus">

</style>