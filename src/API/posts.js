const indexPosts = async () => {
    const fetched = await fetch('https://jsonplaceholder.typicode.com/posts', { mode: 'cors' });
    const data = await fetched.json();
    return data;
}
export default indexPosts;
