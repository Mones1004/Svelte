<script>
    import Calculator from '$lib/Calculator.svelte';
    import Welcome from '$lib/Welcome.svelte';
    import AddVisitor from '$lib/AddVisitor.svelte';

    let showWelcome = false;

    const toggleWelcome = () => {
        showWelcome = !showWelcome;
    }
    
</script>

<Welcome message = "Welcome to my 1st Svelte Project!" {showWelcome} on:click={toggleWelcome}>
    <AddVisitor />
</Welcome>

<body>
    <div class = "main-background">
        <div>
            <button on:click|once={toggleWelcome}>
                Open Welcome
            </button>
        </div>

        <div>
            <Calculator showCalculator={true} />
        </div>

    </div>
</body>

<style>
    .main-background {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>