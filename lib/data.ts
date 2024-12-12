export async function fetchSeeds(
    currentPage: number,
){
    console.log('process env', process.env)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seeds?page=${currentPage}`, {
        cache: "no-store", // Ensure fresh data on every request
    });
    const { items, hasMore } = await res.json();

    return { items, hasMore };
}