<template>
<div>
  <h1>Create a post!</h1>
  <v-file-input
    accept="image/*"
    label="Upload your picture!(only jpeg or png)"
    prepend-icon="mdi-camera"
    v-model="files"
    :rule="checkfile"
  ></v-file-input>
  <v-btn 
    :disabled="!files"
    color="primary" 
    text 
    @click="uploadFile"
  >Upload</v-btn>
  <h1>{{ status }}</h1>

</div>
</template>

<script>
const axios = require('axios');
export default ({
  data: () => ({
    files: false,
    checkfile: [
      v => !!v || 'Please upload image!!'
    ],
    status: "",
  }),
  methods: {
    uploadFile() {
      let formData = new FormData()
      let that = this

      if(this.files){
        formData.append("file", this.files, this.files.name)

        console.log("formdata: ", formData)
        axios.post(process.env.VUE_APP_URL+'/v1/img/upload', formData,
        { 
          headers: { 
              'Content-Type': 'multipart/form-data'
          } 
        }).then( () => {
          that.$router.push('/');
        }).catch(error => {
          that.status = "Upload error"
          console.log({error})
        })
      } else {
          this.status = "No files." 
          console.log('there are no files.')
      }
      this.files = false
    }
  }
})
</script>
