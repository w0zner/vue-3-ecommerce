import type { Category } from "@/model/Type";
import { defineStore } from "pinia";
import data from '../data/categories.json';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: data as Category[]
    })
})