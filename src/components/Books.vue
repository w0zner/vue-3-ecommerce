<script lang="ts">
    export default {
    data() {
        return {
        author: {
            name: 'John Doe',
            books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
            ]
        }
        }
    },
    computed: {
        hashPublishedBooksText() {
            return this.author.books.length > 0 ? 'Yes' : 'No';
        },
        firstPublishedBookTitle() {
            return this.author.books[0] ?? 'No ha publicado ningún libro'
        }
    }
    }
</script>

<template>
    <b style="color: aliceblue;">Has published books:</b>
    <br>
    <span>{{ hashPublishedBooksText }}</span>
    <br>
    <span>{{ firstPublishedBookTitle }}</span>
</template>