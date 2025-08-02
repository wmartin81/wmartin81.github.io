<script>
	let { children } = $props();
</script>

<div class="nav">
	<div class="profile-image"></div>
	<a href="/" class="nav-button home-button">Home</a>
	<a href="/aboutme" class="nav-button aboutme-button">About Me</a>
	<a href="/resume" class="nav-button resume-button">Resume</a>
	<a href="/github" class="nav-button repo-button">Repo</a>
	<a href="/linkedin" class="nav-button contact-button">Contact</a>
</div>

<div class="content">
	<div class="content-header">
		<div class="profile-image"></div>
	</div>
	<div class="route-render-area">
		{@render children()}
	</div>
</div>
