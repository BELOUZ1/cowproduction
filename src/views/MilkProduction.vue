<template>
  <v-container fluid>
    <v-row class="mt-12">
      <v-col cols="3" sm="3" md="3">
        <v-form ref="form" lazy-validation class="mt-15">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="cowday"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="cowday"
                label="اليوم"
                readonly
                v-bind="attrs"
                v-on="on"
                class="mx-12"
                solo
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="cowday"
              no-title
              scrollable
              :min="this.mindate"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(cowday)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field
            v-model="amountmilk"
            label="كمية الحليب باللتر"
            outlined
            dense
            required
            class="mx-12"
          ></v-text-field>
        </v-form>
      </v-col>
            <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">يوم</th>
                <th class="text-left">كمية الحليب باللتر</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.day">
                <td>{{ item.day }}</td>
                <td>{{ item.amountmilk }}</td>
                <td><v-btn >Update</v-btn></td>
                <td><v-btn color="error">Delete</v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      amountmilk: 0,
      datebirth: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      desserts: [
        {
          amountmilk: "12",
          day: "2022-10-22",
        },
        {
          amountmilk: "14",
          day: "2022-11-24",
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