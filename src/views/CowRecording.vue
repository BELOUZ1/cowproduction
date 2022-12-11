<template>
  <v-container fluid>
    <h1 style="margin-top: 50px">تسجيل البقر</h1>
    <v-row>
      <v-col cols="3" sm="3" md="3">
        <v-form ref="form" lazy-validation class="mt-15">
          <v-text-field
            v-model="cownumber"
            label="رقم البقرة"
            outlined
            dense
            required
            class="mx-12"
          ></v-text-field>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="cowdateinsc"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="cowdateinsc"
                label="تاريخ دخولها"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mx-12"
                solo
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="cowdateinsc"
              no-title
              scrollable
              :min="this.mindate"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(cowdateinsc)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-select
            v-model="cowstrain"
            :items="selectstrain"
            label="سلالة"
            class="mx-12"
            item-value="text"
          ></v-select>
            <v-btn color="success" class="mx-12">OK</v-btn>

        </v-form>
      </v-col>
      <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">رقم البقرة</th>
                  <th class="text-left">تاريخ دخولها</th>
                  <th class="text-left">سلالة</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.number }}</td>
                  <td>{{ item.day }}</td>
                  <td>{{ item.strain }}</td>
                  <td><v-btn>Update</v-btn></td>
                  <td><v-btn color="error">Delete</v-btn></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >
export default {
  data() {
    return {
      cownumber: null,
      cowdateinsc: null,
      selectstrain: [{ text: "الهولشتاين" }, { text: "املونتبليارد" }],
      desserts: [
        {
          number: "12344",
          day: "2022-10-22",
          strain: "Race1",
        },
        {
          number: "12345",
          day: "2022-11-24",
          strain : "Race2"
        },
      ],
      menu: false,
      mindate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
};
</script>