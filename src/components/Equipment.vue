<template>
  <DataTable
      :value="equipment"
      :lazy="true"
      :loading="dataStore.loading"
      :paginator="true"
      :rows="perpage"
      :rowsPerPageOptions="[2,5,10]"
      :totalRecords="equipment_total"
      @page="onPageChange"
      :first="offset"
  >
    <Column field="id" header="ID"/>
    <Column field="name" header="Название"/>
    <Column field="quantity_in_stock" header="Количество"/>
    <Column field="price" header="Цена"/>
    <Column field="category_id" header="Категория"/>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useDataStore } from '@/stores/dataStore';

export default {
  name: "Equipment",
  components: { DataTable, Column },
  data() {
    return {
      dataStore: useDataStore(),
      perpage: 5,
      offset: 0,
    }
  },
  computed: {
    equipment() {
      return this.dataStore.equipment;
    },
    equipment_total() {
      return this.dataStore.equipment_total;
    }
  },
  mounted() {
    this.dataStore.get_equipment();
    this.dataStore.get_equipment_total();
  },
  methods: {
    onPageChange(event) {
      this.offset = event.first;
      this.perpage = event.rows;
      const page = event.first / event.rows;
      this.dataStore.get_equipment(page, this.perpage);
    }
  }
}
</script>