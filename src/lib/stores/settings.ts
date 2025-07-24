import { writable } from 'svelte/store';

export const language = writable<'РУССКИЙ' | 'ENGLISH'>('РУССКИЙ');
