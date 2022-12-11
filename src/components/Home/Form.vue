<template>
  <div id="form" class="">
    <!-- color="transparent" -->
    <v-img
      src="@/assets/design/pattern.svg"
      height="710px"
      style="opacity:6%important;background-color: #151314!important;"
    >
      <!-- <v-col cols="2" class="hidden-sm-and-down"></v-col> -->
      <v-row class="pb-0 pt-3">
        <v-col class="hidden-sm-and-down" md="2" lg="2"></v-col>
        <v-col xs="12" md="10" lg="10">
          <transition name="fadeOne">
            <div class="" style="font-size: 2rem!important;">
              <span
                class="pr-5 font-weight-black"
                style="color:#ffc40c!important;"
                >|</span
              >
              <span class="font-weight-black white--text">{{
                $t("contact.contactUs")
              }}</span>
            </div>
          </transition>
          <div class="subtitle-1 font-weight-black pt-5 white--text">
            {{ $t("contact.contactTitle") }}
          </div>
        </v-col>
      </v-row>
      <v-layout class="pb-0">
        <v-flex xs0 sm0 md2 lg2></v-flex>
        <v-flex xs12 sm12 md10 lg5 height="100%">
          <v-form
            @submit.prevent
            method="post"
            v-model="valid"
            novalidate="true"
            ref="form"
            height="100%"
          >
            <v-card
              class="mb-2"
              width="100%"
              flat
              style="background-color: transparent;"
            >
              <v-card-text>
                <!-- <div class="display-1 mb-4">{{ $t("contact.contactUs") }}</div> -->
                <v-row>
                  <v-col xs="6">
                    <p class="white--text font-weight-bold">
                      <span style="color: red!important;" class="pr-1">*</span
                      >{{ $t("contact.name") }}
                    </p>
                    <v-text-field
                      solo
                      prepend-inner-icon="mdi-account"
                      :rules="rules1"
                      class="mt-3 adjustTextField"
                      color="green green-darken-4"
                      :label="$t('contact.nameex')"
                      v-model="form.name"
                      required
                    >
                      <template #message="{ message }">
                        {{ $t(message) }}
                      </template>
                    </v-text-field>
                  </v-col>

                  <!-- <v-col xs="1"></v-col> -->

                  <v-col xs="6">
                    <p class="white--text font-weight-bold">
                      <span style="color: red!important;" class="pr-1">*</span
                      >{{ $t("contact.subject") }}
                    </p>
                    <v-select
                      solo
                      prepend-inner-icon="mdi-card-bulleted-outline"
                      color="green green-darken-4"
                      class="adjustTextField"
                      v-model="form.subject"
                      :items="$t('contact.subjectItem')"
                      :rules="rules2"
                      :label="$t('contact.subjectex')"
                      required
                    >
                      <template #message="{ message }">
                        {{ $t(message) }}
                      </template>
                    </v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col xs="6">
                    <p class="white--text font-weight-bold">
                      <span style="color: red!important;" class="pr-1">*</span
                      >{{ $t("contact.phone") }}
                    </p>
                    <v-text-field
                      solo
                      prepend-inner-icon="mdi-phone"
                      :rules="rules3"
                      class="mt-3 adjustTextField"
                      color="green green-darken-4"
                      :label="$t('contact.phone')"
                      v-model="form.phone"
                      required
                    >
                      <template #message="{ message }">
                        {{ $t(message) }}
                      </template>
                    </v-text-field>
                  </v-col>

                  <v-col xs="6">
                    <p class="white--text font-weight-bold">
                      <span style="color: red!important;" class="pr-1">*</span
                      >{{ $t("contact.email") }}
                    </p>
                    <v-text-field
                      solo
                      prepend-inner-icon="mdi-email-edit-outline"
                      :rules="rules4"
                      class="mt-3 adjustTextField"
                      color="green green-darken-4"
                      :label="$t('contact.email')"
                      v-model="form.email"
                      required
                    >
                      <template #message="{ message }">
                        {{ $t(message) }}
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col xs="12">
                    <p class="white--text font-weight-bold">
                      <span style="color: red!important;" class="pr-1">*</span
                      >{{ $t("contact.messagetitle") }}
                    </p>
                    <v-textarea
                      solo
                      :rules="rules5"
                      color="green green-darken-4"
                      class="adjustTextField mb-0"
                      :label="$t('contact.message')"
                      no-resize
                      v-model="form.message"
                      required
                      style="max-width:690px!important"
                    >
                      <template #message="{ message }">
                        {{ $t(message) }}
                      </template>
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
              <!-- style="padding-right: 10.25rem!important; -->
              <v-row justify="center" align="center">
                <v-card-actions>
                  <v-btn
                    :disabled="!valid"
                    @click="validate"
                    color="blue lighten-2"
                    id="custom-disabled"
                    style="margin-top:-1rem!important;width:270px!important;height:50px!important;font-size: 20px!important;"
                  >
                    {{ $t("contact.sendAMessage") }}
                  </v-btn>
                  <!-- <div class="hidden-lg-and-up hidden-sm-and-down" style="margin-right:10px!important"></div> -->
                  <div
                    class="hidden-md-and-up hidden-sm-and-down"
                    style="margin-right:130px!important"
                  ></div>
                  <div
                    class="hidden-md-and-down"
                    style="margin-right:150px!important"
                  ></div>
                </v-card-actions>
              </v-row>
            </v-card>
          </v-form>
        </v-flex>

        <v-flex xs0 sm0 md0 lg5 class="hidden-md-and-down">
          <img
            src="@/assets/design/knight.png"
            class=""
            width="760px"
            height="720px"
            alt=""
            style="position:absolute;top:-10px!important"
          />
        </v-flex>
      </v-layout>
    </v-img>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Form",
  data: () => ({
    //input規則
    //name
    rules1: [
      value => !!value || "contact.required",
      value => (value || "").length <= 20 || "contact.length"
      //(value) => (!/[ +/<>#$%^&*;:'~`¥|(){}[]!?]/.test(value)) || "請勿輸入特殊字元"
    ],
    //subject
    //商務 品牌推廣 支持 工作 其他
    // business branding support career other
    rules2: [
      value => !!value || "contact.required",
      value => (value || "").length <= 20 || "contact.length"
      // value => /^\d+$/.test(value) || "" || "請輸入純數字"
    ],
    //phone
    rules3: [
      value => !!value || "contact.required",
      value => (value || "").length <= 20 || "contact.length",
      value => /^\d+$/.test(value) || "" || "contact.numberRule"
    ],
    //email
    rules4: [
      value => !!value || "contact.required",
      value => (value || "").length <= 20 || "contact.length",
      value => /.+@.+\..+/.test(value) || "contact.emailRule"
      //(value) => (!/[ +/<>#$%^&*;:'~`¥|(){}!?]/.test(value)) || "請勿輸入特殊字元"
    ],
    //message
    rules5: [
      value => !!value || "contact.required",
      value => (value || "").length <= 200 || "contact.required"
      // value => /^\d+$/.test(value) || "" || "請輸入純數字"
    ],
    // form
    form: {
      name: "",
      subject: "",
      phone: "",
      email: "",
      message: ""
    },
    items: "contact.subjectItem",
    // valid
    valid: true,
    fomrIcon: {
      name: require("@/assets/design/name.png"),
      email: require("@/assets/design/@.png"),
      subject: require("@/assets/design/subject.png"),
      phone: require("@/assets/design/phone.png")
    }
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const { name, subject, phone, email, message } = this.form;
        this.valid = false;
        // const robotform = {
        //  "姓名":name,
        //  "主题":subject,
        //  "电话":phone,
        //  "Email":email,
        //  "讯息":message
        // };
        axios
          .post(
            "https://api.telegram.org/bot1486088406:AAENXb92z9iNzjgeFIktntKxK58j6Fo-alg/sendMessage",
            {
              chat_id: -659581219,
              text:
                `\n姓名: ${name}\n` +
                `主题: ${subject}` +
                `\n电话: ${phone}\n` +
                `Email: ${email}` +
                `\n讯息: ${message}\n`
            }
          )
          .then(() => {
            this.$refs.form.reset();
            // console.log(res);
            // alert("發送成功");
          })
          .catch(() => {
            alert("send failed");
            // console.log(err);
            // alert("發送失敗");
          });
      }
    }
  }
};
</script>

<style scoped>
/deep/ .v-text-field {
  max-width: 300px !important;
}
/* /deep/ .v-text-area{
	width: 450px!important;
} */
.adjustTextField {
  border-radius: 4px !important;
}

button.v-btn[disabled] {
  color: grey !important;
  /* background-color:yellow!important; */
  z-index: 3 !important;
}

#custom-disabled.v-btn--disabled {
  background-color: lightgrey !important;
}
</style>
