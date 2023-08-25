<script>
 let firstName, lastName, age;

 const handleSubmit = () => {
    console.log(firstName, lastName, age, male, female)
 }
</script>

<form on:submit={handleSubmit}>
    <input type="text" placeholder="FirstName" bind:value={firstName}>
    <input type="text" placeholder="LastName" bind:value={lastName}>
    <input type="number" placeholder= "Age" bind:value={age}>
    <button>add Visitor</button>
</form>

<style>

</style>