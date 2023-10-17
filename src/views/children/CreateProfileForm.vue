<template>

   
  <q-form>

    <!-- 
        Form here

    firstname
    lastname
    middlename
    birthdate
    contactnumber
    address
    
    -->
    <q-form>
    <div class="form-group">
      <label for="firstname">First Name:</label>
      <input type="text" id="firstname" v-model="formData.firstname" required>
    </div>
    <div class="form-group">
      <label for="lastname">Last Name:</label>
      <input type="text" id="lastname" v-model="formData.lastname" required>
    </div>
    <div class="form-group">
      <label for="middlename">Middle Name:</label>
      <input type="text" id="middlename" v-model="formData.middlename">
    </div>
    <div class="form-group">
      <label for="birthdate">Birthdate:</label>
      <input type="date" id="birthdate" v-model="formData.birthdate" required>
    </div>
    <div class="form-group">
      <label for="contactnumber">Contact Number:</label>
      <input type="tel" id="contactnumber" v-model="formData.contactnumber" required>
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <textarea id="address" v-model="formData.address" required></textarea>
    </div>
  </q-form>
  

  </q-form>
</template>

<script>
export default {

}
</script>

<style>

</style>