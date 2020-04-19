<script>
	import { onMount } from 'svelte';
	import Filter from './Filter.svelte';
	import ItemList from './ItemList.svelte';
	import ListSummary from './ListSummary.svelte';

	let query = '';
	let totalItems = 0;
	let totalFilteredItems = 0;
	let items = [];
	let filterOptions = [];
	let appliedFilters = [];
	onMount(async function() {
        //const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const response = await fetch("http://localhost:3000/photos");
        items = await response.json();
        // remove slice after filtering is figured out...
        //items = items.slice(1, 10);
        totalItems = items.length;
        filterOptions = [{ "filterName": "Albums", "filterField": "albumId", "options": [1,2,3,4,5]},
						{"filterName": "Category", "filterField": "category", "options": ["Technology", "Not Technology", "Other"]}];
    });

	let stringContains = (item, query) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	let matchesAppliedFilters = (item) => {
		return appliedFilters && appliedFilters.length
				? appliedFilters.some(filter => {
					let filterParts = filter.split(':');
					let filterId = filterParts[0];
					let filterValue = filterParts[1].toLowerCase();
					let itemValue = (item[filterId] !== undefined ? item[filterId].toString().toLowerCase() : '');
					return filterValue === itemValue;
				})
				: item
	}

	//$: filteredItemsList = query && query.length ? items.filter(item => startsWith(item.title, query)) : items;
	$: filteredItemsList =
			(query && query.length) || (appliedFilters && appliedFilters.length)
			? items
				.filter(item => stringContains(item.title, query) && matchesAppliedFilters(item))
				//.filter(item => matchesAppliedFilters(item))
			: items;
</script>

<main>
	<Filter {filterOptions} bind:appliedFilters />
	<div>
		<ListSummary {totalItems} totalFilteredItems={filteredItemsList.length} bind:query />
		{query}
		<ItemList items={filteredItemsList} />
	</div>
</main>

<style lang="stylus">
	main {
		display: flex;
		flex-direction: row;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>