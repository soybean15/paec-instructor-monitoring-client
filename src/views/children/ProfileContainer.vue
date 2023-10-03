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
  
      <div class=" bg-white p-10 q-pa-xl rounded-md">
        <div class="row justify-center q-pa-sm">
          <PhotoUpload @upload="upload" :attribute="'image'" :errors="errors" />
        </div>
  
        <LabelInput
          :title="'First Name'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'firstname'"
        />
  
        <LabelInput
          :title="'Last Name'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'lastname'"
        />

        <LabelInput
          :title="'Middle Name'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'lastname'"
        />

        <div class="row justify-start">
          <div class="col-6 q-pt-sm">
            <LabelInput
              :title="'Gender'"
              :titleClass="'flex  font-bold'"
              :type="'select'"
              :data="['Male', 'Female']"
              :valueClass="'text-md '"
              :attribute="'gender'"
            />
          </div>
         <div class="col-6 q-pr-md q-pt-sm">
          <LabelInput
            :title="'BirthDate'"
            :titleClass="'flex  font-bold'"
            :type="'date'"
            :valueClass="'text-md '"
            :attribute="'birthdate'"
          />
        </div> 
         </div>
  
     
       

        <LabelInput
          :title="'Contact Number'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'contact_number'"
        />

        <LabelInput
          :title="'Address'"
          :titleClass="'flex  font-bold'"
          :valueClass="'text-md '"
          :attribute="'address'"
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
  
 