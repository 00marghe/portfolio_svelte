<script>
    export let work;
</script>

<div class="work-card">
    <div class="work-image" style="background-color: rgba(255,255,255,0.05);">
        <div class="work-tags">
            {#if work.tags}
                {#each work.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            {/if}
        </div>
    </div>
    <div class="work-info">
        <h3>{work.title}</h3>
        <p>{work.description}</p>
    </div>
</div>

<style>
    .work-card {
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
        margin-bottom: 3rem;
    }

    .work-card:hover {
        transform: translateY(-10px);
    }

    .work-image {
        width: 100%;
        aspect-ratio: 16/9;
        background-size: cover;
        background-position: center;
        position: relative;
        margin-bottom: 1rem;
        border-radius: 2px;
        overflow: hidden;
    }

    .work-tags {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        display: flex;
        gap: 0.5rem;
    }

    .tag {
        background-color: var(--black);
        color: var(--white);
        padding: 0.25rem 0.75rem;
        font-size: 0.7rem;
        border-radius: 50px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .work-info h3 {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }
</style>