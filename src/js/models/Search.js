import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'f70867036f71d2c442f17ab8ee98dc9e';

        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = res.data.recipes;
            console.log(this.recipes);
        } catch (error) {
            console.log(error);
        }
    }
}