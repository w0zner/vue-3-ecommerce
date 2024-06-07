import type { Category } from "@/model/Type";
import { defineStore } from "pinia";


export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            {id: 1, name: "Oficina", description: "Productos para la oficina"},
            {id: 2, name: "Tecnología", description: "Productos tecnológicos para el hogar"},
            {id: 3, name: "Juguetes", description: "Juguetes para niños mayores a 3 años"}
        ] as Category[]
    })
})