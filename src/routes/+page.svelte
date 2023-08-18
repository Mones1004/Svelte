<script>
    import Calculator from './Calculator.svelte';
    import Welcome from './Welcome.svelte';
    import AddVisitor from './AddVisitor.svelte';

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