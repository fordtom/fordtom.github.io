export const prerender = true;

type MetaModule = { title: string; date: string };

type Entry = MetaModule & { slug: string };

export function load() {
	const modules = import.meta.glob<MetaModule>('./*/meta.ts', { eager: true });
	const entries: Entry[] = Object.entries(modules)
		.map(([path, mod]) => ({ slug: path.split('/')[1]!, ...mod }))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { entries };
}
