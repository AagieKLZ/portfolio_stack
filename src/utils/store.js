import { writable } from 'svelte/store'

export const openComponents = writable({
    "Languages": false,
    "Frontend": false,
    "Backend": false,
    "Databases": false,
    "Others": false
  } )