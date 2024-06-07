import type { Category } from "@/model/Type";
import { defineStore } from "pinia";
import data from '../../public/data/categories.json';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: data as Category[]
    })
})