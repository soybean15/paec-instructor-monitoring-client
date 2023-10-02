<!-- 
    'firstname',
'lastname',
'middlename',
'birthdate',
'gender',
'contact_number',
'image',
'address',

 -->


 <template>
  
      <div class="column bg-white p-10">
        <div class="row">
          <PhotoUpload @upload="upload" :attribute="'image'" :errors="errors" />
        </div>
  
        <LabelInput
          :title="'Firstname'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'firstname'"
        />
  
        <LabelInput
          :title="'Lastname'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'firstname'"
        />
        <LabelInput
          :title="'Gender'"
          :titleClass="'flex  font-bold'"
          :type="'select'"
          :data="['Male', 'Female']"
          :valueClass="'text-md '"
          :attribute="'gender'"
        />
  
        <LabelInput
          :title="'BirthDate'"
          :titleClass="'flex  font-bold'"
          :type="'date'"
          :valueClass="'text-md '"
          :attribute="'birthdate'"
        />
      </div>

  </template>
  
  <script>
  import PhotoUpload from "@/components/PhotoUpload.vue";
  import LabelInput from "@/components/LabelInput.vue";
  
  export default {
    components: { PhotoUpload, LabelInput },
  };
  </script>
  
  <style>
  </style>