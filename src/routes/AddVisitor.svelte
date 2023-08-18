<script>
 let firstName, lastName, age;
 let male = false;
 let female = false;


 const handleSubmit = () => {
    console.log(firstName, lastName, age, male, female)
 }
</script>

<form on:submit={handleSubmit}>
    <input type="text" placeholder="FirstName" bind:value={firstName}>
    <input type="text" placeholder="LastName" bind:value={lastName}>
    <input type="number" placeholder= "Age" bind:value={age}><br>
    <label>
        Gender:<br>
    </label>
    <input type="checkbox" bind:checked={male}>Male<br>
    <input type="checkbox" bind:checked={female}>Female<br>
    <button>add Visitor</button>
</form>

<style>
    form {
        align-items: center;
    }
</style>