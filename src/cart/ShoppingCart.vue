<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ currency(robot.cost, '$') }}
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="sale-items">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ currency(robot.cost, '$') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import currencyFilter from '../shared/currency-filter';

export default {
  name: 'Cart',

  methods: {
    currency: currencyFilter,
  },

  computed: {
    ...mapState('robots', ['cart']),
    ...mapGetters('robots', ['cartSaleItems']),
  },
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.sale-items {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>
