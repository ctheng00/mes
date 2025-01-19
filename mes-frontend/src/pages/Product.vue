<template>
  <div id="home">

    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Home</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </li>
        <li class="flex items-center">
          <a href="#" class="text-gray-600">Production</a>
        </li>
      </ol>
    </nav>
    <div class="flex items-end justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded items-end"
        @click="openDialog()">
        Add new batch
      </button>
    </div>
    <div>
      <vue-good-table :columns="columns" :rows="rows">
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field === 'edit'">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="openDialog(props.row.id)">
              Edit
            </button>
          </span>
          <span v-else>{{ props.formattedRow[props.column.field] }}</span>
        </template>
      </vue-good-table>

      <div v-if="showDialog" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div class="bg-white p-6 rounded shadow-lg">
          <h2 class="text-xl font-bold mb-4">{{ editItemId ? 'Edit Batch' : 'Add Batch' }}</h2>
          <p v-if="editItemId">Editing Batch: {{ editItemId }}</p>
          <!-- Add your form fields here -->
          <div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="batch_size">Batch Size</label>
              <input v-model="editingItem.batch_size"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="batch_size" type="text" placeholder="Batch Size" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="status">Status</label>
              <select v-model="editingItem.status"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status">
                <option value="0">Scheduled</option>
                <option value="1">Running</option>
                <option value="2">Completed</option>
                <option value="3">Cancelled</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="scheduled_date">Scheduled Date</label>
              <input v-model="editingItem.schedule_date"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="scheduled_date" type="date" placeholder="Scheduled Date" />
            </div>
            <div class="flex items-center justify-between">
              <button v-if="editItemId" class="bg-red-500 mx-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                @click="openDeleteDialog()">
                Delete
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded" @click="submit">
                Save
              </button>
              <button class="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-2 px-4 rounded"
                @click="closeDialog">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showDeleteDialog"
        class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div class="bg-white p-6 rounded shadow-lg">
          <h2 class="text-xl font-bold mb-4">Delete Batch</h2>
          <p>Are you sure you want to delete this batch?</p>
          <div class="flex items-center justify-between">
            <button class="bg-red-500 mx-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteItem">
              Delete
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-2 px-4 rounded"
              @click="closeDeleteDialog">
              Cancel
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Batch ID',
          field: 'id',
        },
        {
          label: 'Batch Size(kg)',
          field: 'batch_size',
          type: 'number',
        },
        {
          label: 'Status',
          field: 'status_description',
        },
        {
          label: 'Schedule Date',
          field: 'schedule_date',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'dd/MM/yyyy',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'dd/MM/yyyy',
        },
        {
          label: 'Edit',
          field: 'edit',
        },
      ],
      rows: [
        { id: 1, batch_size: "120.00", status: 'Completed', schedule_date: '2025-01-18', createdAt: '2025-01-18', edit: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>' },
      ],
      showDialog: false,
      showDeleteDialog: false,
      editItemId: null,
      editingItem: { id: '', batch_size: '', status: 0, schedule_date: '' },
    };
  },
  methods: {
    async fetchData() {
      try {
        let data = await axios.get('http://localhost:3000/production');
        data = data.data;
        data.forEach((item) => {
          item.batch_size = parseFloat(item.batch_size).toFixed(2);
          item.schedule_date = this.formatDate(item.schedule_date);
          item.createdAt = this.formatDate(item.createdAt);
          item.status_description = ['Scheduled', 'Running', 'Completed', 'Cancelled'][item.status];
        });
        console.log(data);
        this.rows = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    openDeleteDialog() {
      this.showDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.showDeleteDialog = false;
    },
    openDialog(id = '') {
      this.editItemId = id;
      if (id) {
        this.editingItem = this.rows.find((item) => item.id === id);
      } else {
        this.editingItem = { id: '', batch_size: '', status: 0, schedule_date: '' };
      }
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.editItemId = null;
    },
    async deleteItem() {
      console.log('delete', this.editItemId);
      await axios.delete(`http://localhost:3000/production/${this.editItemId}`)
        .then((response) => {
          console.log(response);
          if (response.status !== 204) {
            console.error('Error deleting data:', response);
            return;
          }
          this.fetchData();
          this.closeDeleteDialog();
          this.closeDialog();
        })
        .catch((error) => {
          console.error('Error deleting data:', error);
        });
    },
    async submit() {
      console.log('submit', this.editingItem);
      if (this.editItemId) {
        // update
        await axios.put(`http://localhost:3000/production/${this.editItemId}`, {
          batch_size: this.editingItem.batch_size,
          status: this.editingItem.status,
          schedule_date: this.editingItem.schedule_date,
        })
          .then((response) => {
            console.log(response);
            if (response.status !== 200) {
              console.error('Error updating data:', response);
              return;
            }
            this.fetchData();
            this.closeDialog();
          })
          .catch((error) => {
            console.error('Error updating data:', error);
          });
      }
      else {
        await axios.post(`http://localhost:3000/production`, {
          batch_size: this.editingItem.batch_size,
          status: this.editingItem.status,
          schedule_date: this.editingItem.schedule_date,
        })
          .then((response) => {
            console.log(response);
            if (response.status !== 200) {
              console.error('Error adding data:', response);
              return;
            }
            this.fetchData();
            this.closeDialog();
          })
          .catch((error) => {
            console.error('Error updating data:', error);
          });
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>