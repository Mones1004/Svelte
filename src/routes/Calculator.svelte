<script>
    import { equationObject } from '$lib/expression.js'

    export let showCalculator = false;

    const buttons = [1,2,3,4,5,6,7,8,9,0];
    const operations = ['+', '-', '/', '*']

    export let equation = "";
    export let equationCharacter = {};
    let count = 0;


    function showEquation() {
        document.querySelector('input').value = equation;
    }

    async function addInput(button) {
        equation += button;
        showEquation();

        equationCharacter = button

        const res = await fetch('api/addCharacter', {
			method: 'POST',
			body: JSON.stringify({equationCharacter}),
            headers: {
					'Content-Type': 'application/json'
				}
		})
		
        if (res.ok)
            console.log("Success");
        else 
            console.log("error");

		const result = await res.json()

        console.log(result);
        equationObject.push(equationCharacter);
    }

    async function calculate() {
        console.log(equationObject);

        const response = await fetch('/api/calculation');
        let ans = await response.json();
        
        document.querySelector('input').value = ans;
        equation = "";
    }


    function backSpace() {
        equation = equation.slice(0, -1);
        showEquation();
    }
    
</script>

{#if showCalculator}
<div >
    <div>
        <input >
    </div>
    <div class="buttons">
        <button
            on:click={() => backSpace()}
        >&#9003</button>

        {#each buttons as button, i}
            <button class="button{button}" 
                on:click={async () => addInput(buttons[i])}
            >{button}</button>
        {/each}
        
        {#each operations as button, i}
            <button class="button{button}"
                on:click={async () => addInput(operations[i])}
            >{button}</button>
        {/each}

        <button
            on:click={calculate}
        >=</button>

    </div>
</div>
{/if}

<style> 
    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background-color: #00ABE1;
        padding: 5px;
        border: solid;
        border-top: none;
    }

    button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #523232);
		transition: all 0.1s;
        margin-right: 2px;
        margin-bottom: 1px;

	}
    input {
        margin-top: 20px;
        max-width: 145px;
        height: 25px;
        border: solid;
        background-color: rgb(219, 219, 219);
        text-align: right;
        padding-right: 5px;
    }
</style>