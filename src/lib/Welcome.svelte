<script>
    export let showWelcome = false;
    export let message;
    
</script>

{#if showWelcome}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" on:click|self>
        <div class="welcome">
            <h2>{message}</h2>
            <slot name="instruction"></slot>
            <slot></slot>
        </div>
    </div>
{/if}


<style>
    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;

        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
    }

    .welcome {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;
        background-color: red;
        padding: 50px 150px 50px 150px;
        margin-top: 100px;
        font-size: 24px;
    }

</style>