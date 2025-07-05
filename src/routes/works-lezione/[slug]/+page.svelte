<script>

  import {onMount} from 'svelte';
  import {supabase} from '../../supabaseClient.js';
  export let data

  let loading = true;
  let work;
  let error;


  onMount(() => {
    console.log('data',data);
    supabase.from('works').select().eq('slug',data.slug).single().then((e)=>{
      loading=false 
      error=e.error;
      work=e.data})
  });

</script>

{#if loading}
  <p>loading...</p>
{:else if error}
  <p>{error.message}</p>
{:else}
  <h1>{work.title}</h1>
  <p>{work.description}</p>

  {#if work.checkout_link}
    <h3><a href={work.checkout_link}>Subscribe</a>
    </h3>
  {/if}

{/if}

<a href="https://billing.stripe.com/p/login/test_14keYd2RmbxZaA0dQQ">Manage Your Account</a>

<style></style>