<template>
  <v-container fluid>
    <v-row class="mt-12">
      <v-col cols="3" sm="3" md="3">
        <v-form ref="form" lazy-validation class="mt-15">
          <v-row>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="examinationday"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="examinationday"
                  label="يوم الفحص"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  class="mx-12"
                  solo
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="examinationday"
                no-title
                scrollable
                :min="this.mindate"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(examinationday)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-row>
          <v-row>
            <v-text-field
              v-model="cowdisease"
              label="المرض"
              outlined
              dense
              required
              class="mx-12"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-btn color="success" class="mx-12">OK</v-btn>
          </v-row>
        </v-form>
      </v-col>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">يوم الفحص</th>
                <th class="text-left">المرض</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
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

<script >
export default {
  data() {
    return {
      menu: false,
      examinationday: null,
      mindate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      desserts: [
        {
          name: "2022-10-22",
          calories: "maladie 1",
        },
        {
          name: "2022-11-24",
          calories: "maladie 2",
        },
      ],
    };
  },
};
</script>