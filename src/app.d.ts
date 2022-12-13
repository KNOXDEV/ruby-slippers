// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	interface PageData {
		questions: { name: string; title: string; value: string }[];
		cities: { name: string }[];
	}
	// interface Platform {}
}
