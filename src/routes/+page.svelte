<script>
	import Post from "./Post.svelte";

	let { data } = $props();
</script>


<h1>Portfolio</h1>

{#each data.works as work}
	<Post work={work}></Post>
{/each}


<style>
	
</style>
