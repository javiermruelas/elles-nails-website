<template>
    <div class="form-cont">
        <div class="error-notif" v-show="error">{{error}}</div>
        <form id="quoteModal" @submit.prevent="validateFields" autocomplete="off">
            <h1 class="contact">contact</h1>

            <div class="validation">
                <input type="text" id="name" name="name" v-model="name" class="effect" placeholder size="30" required>
                <label for="name">first name (required)</label>
                <span class="focus-border"></span>
            </div>
            
            <!-- <p class="validation">* name is required</p> -->
            <div class="validation">
                <input type="email" id="email" name="email" v-model="email" class="effect" size="30" placeholder required>
                <label for="email">email address (required)</label>
                <span class="focus-border"></span>
            </div>

            <!-- <p class="validation">* email is required</p> -->
            <div class="validation">
                <input type="text" id="phone" name="phone" v-model="phone" class="effect" size="30" placeholder>
                <label for="phone">phone number (not required)</label>
                <span class="focus-border"></span>
            </div>
            <!-- <p class="validation">* optional</p> -->

            <textarea id="help" name="help" v-model="help" rows="4" placeholder="What color, length and design would you like?"></textarea>

            <h3>specifics (not required)</h3>

            <input type="submit" value="Submit">

        </form>
        <div class="copy-notif" v-show="sent">request sent</div>
        <button class="close-modal" @click="closeModal">close</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'quote-modal',
  props: {
  },
  data() {
      return {
        sent: false,
        error: '',
        name: '',
        email: '',
        phone: '',
        help: ''
      }
  },
  watch: {
      error: function(newVal) {
        if (newVal) {
            setTimeout(() => {
                this.error = '';
            }, 2000);
        }
      }
  },
  methods: {
        closeModal(e) {
            // preventing refresh
            if (e) {
                e.preventDefault();
            }
            this.name = "";
            this.email = "";
            this.phone = "";
            this.help = "";
            this.emitter.emit("closeModal");
        },
        validateFields(e) {
            // do not refresh/post back - prevent default behavior
            if (e) e.preventDefault();

            // browser checks for '@' , check for .com
            if (!this.email.match('.com')) return this.error = "Invalid email";
            
            if (this.phone == '') return this.phone = 'No phone number provided';
            if (this.help == '') return this.help = 'No specifics provided';
            this.submitForm();
        },
        submitForm() {
            const self = this;

            axios.post('/send', {
                name: self.name,
                email: self.email,
                phone: self.phone,
                help: self.help
            })
            .then(function (response) {
                console.log(response);
                self.sent = true;
                setTimeout(() => {
                    self.sent = false;
                    self.closeModal();
                }, 3000);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>