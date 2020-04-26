import Filter from '../src/Filter.svelte';
import { render, fireEvent} from '@testing-library/svelte';

it('Loads filter', async () => {
    const { getByText } = render(Filter);

    expect(getByText("Filter")).toBeInTheDocument();
})