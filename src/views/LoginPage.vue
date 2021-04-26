<template>
  <b-card
    style="max-width: 40rem;"
    title="Login Required"
    class="mt-5 shadow p-3 mb-5 bg-white rounded mx-auto"
  >
    <ValidationObserver tag="form" ref="observer" v-slot="{ validate, valid }">
      <b-form
        class="formstyle"
        @submit.prevent="validate().then(onSubmit(valid))"
      >
        <b-card-text class="text-danger" v-show="form.invalid"
          >Invalid email or password.</b-card-text
        >
        <b-form-group
          label="Email"
          label-for="email"
          label-class="font-weight-bold pt-0"
        >
          <ValidationProvider
            rules="required|email"
            v-slot="{ errors }"
            name="e-mail"
          >
            <b-form-input
              id="email"
              text="User Name"
              v-model.trim="form.email"
              type="email"
            ></b-form-input>

            <ul v-if="form.hasErrors" class="overline text-left text-danger">
              <li v-for="(error, index) in errors" :key="index">
                <span>{{ error }}</span>
              </li>
            </ul>
          </ValidationProvider>
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="pword"
          label-class="font-weight-bold pt-0"
        >
          <!-- Password validation is 6 consistent with strapi default we use -->
          <ValidationProvider
            rules="required|min:6"
            v-slot="{ errors }"
            name="password"
          >
            <b-form-input
              id="pword"
              text="Password"
              v-model.trim="form.password"
              type="password"
            ></b-form-input>

            <ul v-if="form.hasErrors" class="overline text-left text-danger">
              <li v-for="(error, index) in errors" :key="index">
                <span>{{ error }}</span>
              </li>
            </ul>
          </ValidationProvider>
        </b-form-group>
        <div class="mt-2">
          <!-- <b-button variant="primary" :disabled="invalid" @click="login()"
            >Continue</b-button
          > -->
          <b-button variant="primary" type="submit">Continue</b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </b-card>
</template>

<script lang="ts">
//import { mapState, mapActions } from "vuex";
import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import axios from "axios";

export default Vue.extend({
  name: "Login",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        isValid: true,
        hasErrors: false,
        submitted: false,
        invalid: false
      }
    };
  },
  // computed: {
  //   //   ...mapState("account", ["status"])
  //   valid() {
  //     const isValid = this.$validator.validate();
  //     return isValid;
  //   }
  // },
  created() {
    // reset login status
    this.form.email = "";
    this.$cookies.remove("token");
    this.$cookies.remove("email");
  },
  methods: {
    //...mapActions("account", ["login", "logout"]),
    // handleSubmit(e) {
    //   this.submitted = true;
    //   const { username, password } = this.form;
    //   if (username && password) {
    //     //this.login({ username, password });
    //   }
    // },
    async onSubmit(valid: boolean) {
      this.form.isValid = valid;
      this.form.hasErrors = !valid;
      console.log(valid);
      //const isValid = false;
      //this.form.validated = true;
      //this.form.validated = await this.$validator.validate();
      //console.log(this.$refs.observer.validator().validate());
      console.log("Submitting");
      if (valid) {
        console.log("Basic validation passed. Submitting for token");

        this.form.submitted = true;
        axios
          .post("http://localhost:1337/auth/local", {
            identifier: this.form.email,
            password: this.form.password
          })
          .then(response => {
            const { data } = response;
            console.log(data);
            this.form.invalid = false;
            const {
              jwt,
              user: { email }
            } = data;
            this.$cookies.set("token", jwt);
            this.$cookies.set("email", email);
            this.$emit("login-successful", email);

            //const redirect = this.$route.query.redirect?.toString() || "PlanningBoard";

            //this.$router.replace({ name: redirect });
            this.$router.replace({ name: "PlanningBoard" });
          })
          .catch(e => {
            console.log(e);
            this.form.invalid = true;
          })
          .finally(() => {
            this.form.submitted = true;
          });
      }
      // const isValid = await this.$refs.observer.validate();
      // if (!isValid) {
      //   console.log("is not valid");
      //   alert("Please fix errors first!");
      // } else {
      //   console.log("is valid");
      //   console.log(this.name + " signed in with password " + this.password);
      //   // reset fields
      //   this.name = "";
      //   this.password = "";
      //   // reset validation
      //   // You should call it on the next frame
      //   requestAnimationFrame(() => {
      //     this.$refs.observer.reset();
      //   });
      // }
    },
    login() {
      console.log("Log me in!");
    }
  }
});
</script>

<style scoped>
.labelstyle {
  margin-right: 5px;
  margin-bottom: 10px;
}

.formstyle {
  margin: 1rem;
  padding: 1rem;
}
</style>
