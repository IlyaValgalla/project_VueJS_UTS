import {defineStore} from 'pinia';
import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const useDataStore = defineStore('data',{
    state: () => ({
        categories: [], // список категорий
        categories_total: null, // общее количество категорий

        equipment: [], // список оборудования
        equipment_total: null, // общее количество оборудования

        items: [],
        errorMessage: ""

    }),
    actions: {
        async get_categories(page = 0, perpage = 5){
            this.errorMessage = "";
            try {
                const token = localStorage.getItem('token'); //ПОЛУЧЕНИЯ ТОКЕНА
                const response = await axios.get(backendUrl + '/category', {
                    params: {
                        page: page,
                        perpage: perpage
                    },
                    headers: {'Authorization': `Bearer ${token}`}
                });
                this.categories = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                    console.log(error);
                } else if (error.request) {
                    this.errorMessage = error.message;
                    console.log(error);
                } else {
                    console.log(error);
                }
            }
        },
        async get_categories_total(){
            this.errorMessage = "";
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(backendUrl + '/categories_total', {
                    headers: {'Authorization': `Bearer ${token}`}
                });
                this.categories_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                    console.log(error);
                } else if (error.request) {
                    this.errorMessage = error.message;
                    console.log(error);
                } else {
                    console.log(error);
                }
            }
        },
        async get_equipment(page = 0, perpage = 5){
            this.errorMessage = "";
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(backendUrl + '/equipment', {
                    params: {
                        page: page,
                        perpage: perpage
                    },
                    headers: {'Authorization': `Bearer ${token}`}
                });
                this.equipment = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                    console.log(error);
                } else if (error.request) {
                    this.errorMessage = error.message;
                    console.log(error);
                } else {
                    console.log(error);
                }
            }
        },
        async get_equipment_total(){
            this.errorMessage = "";
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(backendUrl + '/equipment_total', {
                    headers: {'Authorization': `Bearer ${token}`}
                });
                this.equipment_total = response.data;
            } catch (error) {
                if (error.response) {
                    this.errorMessage = error.response.data.message;
                    console.log(error);
                } else if (error.request) {
                    this.errorMessage = error.message;
                    console.log(error);
                } else {
                    console.log(error);
                }
            }
        },
    },
});