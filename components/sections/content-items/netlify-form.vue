<template>

  <form v-editable="content"
          data-netlify="true"
          class="netlify-form"
          :name="content.form_name"
          data-netlify-honeypot="bot-field"
          method="post"
          target="hidden_iframe"
          v-on:submit="postSubmit">


      <!-- Same Page Target -->
      <iframe name="hidden_iframe" 
              id="hidden_iframe" 
              style="display:none;"></iframe>
      <!-- End Same Page Target -->


      <h2> {{content.title}} </h2>


      <!-- Netlify Form Name Prop -->
      <input type="hidden" name="form-name" :value="content.form_name" />
      <!-- -->


      <!-- Form Fields -->
      <div v-for="field in content.form_fields"
           v-editable="field"
           class="form-field">
        <label v-if="content.show_labels"
               :for="field.id"> {{field.label}} </label>

        <textarea v-if="field.type === 'textarea'"
                :required="field.required.true"
                :placeholder="field.placeholder"
                :name="field.name"
                rows="5"
                v-model="formFields[field.id]"></textarea>

        <input v-else
               :id="field.id"
               :type="field.type"
               :required="field.required.true"
               :placeholder="field.placeholder"
               :name="field.name"
               v-model="formFields[field.id]" />
      </div>
      <!-- End Form Fields -->


      <!-- Bot Field -->
      <input  v-model="honeyPot"
              class="honeypot"
              name="bot-field"
              type="text"
              id="paranoidandroid"
              placeholder="sneaky sneaky"
              style="display: none;"/>
      <!-- End Bot Field -->


      <!-- Submit Button -->
      <input type="submit"
             class="form-submit"
             :value="content.send_prompt"
             :disabled="!canSubmit || itsATrap"/>
      <!-- End Submit Button -->


      <!-- Same Page Success Message -->
      <div class="submit-success"
           :class="{'is-active': formSuccess}">
        {{content.success_message}} 
      </div>
      <!-- End Same Page Success Message -->

  
  </form>


</template>



<script>

  
export default {
  
  props: ['content'],
  
  created() {
    this.content.form_fields.forEach(field => {
      if (field.required) {
        this.requiredFields.push(field.id);
      }
    });
  },
  
  data() {
    return {
      honeyPot: '',
      formSuccess: false,
      formFields: {},
      requiredFields: [],
    }
  },
  
  computed: {
    itsATrap: function() {
      return this.honeyPot !== '';
    },
    canSubmit: function() {
      let result = true;
      this.requiredFields.forEach(field => {
        if (!this.formFields[field]) {
          result = false;
        }
      });
      return result;
    }
  },
  
  methods: {
    submitSuccess: function() {
      Object.keys(this.formFields).forEach(field => {
        this.formFields[field] = '';
        this.formSuccess = true;
      }); 
    },
    postSubmit: function() {
      setTimeout(this.submitSuccess, 1000);
    },
  }
}


</script>



<style lang="scss">


  .netlify-form {
    @include column-scale(
      $default: 22,
    );
    max-width: $narrow-content-width;
    padding: $space-6;
    @include y-margin($space-6);
    background: $brand-lightest;
  }
  
  .form-field {
    margin-bottom: $space-5;
    
    input, textarea {
      width: 100%;
      padding: $space-2;
      font-size: $text-large;
      
      border-bottom: 2px solid $shade-base;
      
      &:placeholder-shown {font-style: italic;}
      &:not(:placeholder-shown),
      &:focus {
        border-bottom: 2px solid $brand-base;
        }
    }
    
  }
  
  .form-submit {
      padding: $space-4 $space-6;
      border: $brand-base;
      &:hover {
        cursor: pointer;
        color: $shade-lightest;
        background-color: $brand-base;
      }
      &:disabled {
        cursor: not-allowed;
        color: $shade-light;
        border: 2px solid $shade-light;
        &:hover {
          background-color: transparent;
        }
      }
    }
  
  .submit-success {
    overflow: hidden;
    @include container(center, center);
    height: 0rem;
    text-align: center;
    color: darkgreen;
    font-weight: 600;
    @include transition();
    cursor: default;
    
    &.is-active {
      height: 3rem;
      @include y-margin($space-4);
      border: 2px solid darkgreen;
    }
  }
  

  


  
</style>