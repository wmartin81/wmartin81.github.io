<script>
	const snippets = [
		{
			title: 'What I Do',
			abstract:
				'I have worked with many tools across different industries facing many problems. I like to learn about software, new paradigms, and optimization techniques, but what drives me the most is solving tough problems.'
		},
		{
			title: 'Achievements',
			abstract:
				'I have designed project architectures, database structures, mid tier APIs, front-end javascript code and accompanying internal tools for varying companies, from chemical manufacturing and ad tech, to business intelligence products.'
		},
		{
			title: 'Skills',
			abstract:
				"Mostly C# and pure JavaScript, but with a sprinkle of Angular, React, TypeScript, Node, Webpack, Web Services, .NET Core, SQL, and Mongo (Phew that's alot!)."
		}
	];
</script>

<div class="aboutme">
	{#each snippets as snippet}
		<div class="snippet">
			<div><label class="title">{snippet.title}</label></div>
			<div><p class="abstract">{snippet.abstract}</p></div>
		</div>
	{/each}
</div>
