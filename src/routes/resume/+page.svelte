<script>
	const experiences = [
		{
			company: "MediaRadar Inc.",
			specialty: "Ad sales intelligence/Advertising Analysis",
			title: "Senior Software Engineer",
			responsibilities:
				"Extend and improve MediaRadar's binary gathering applications, supporting services, and database procedures. Oversee upgrade of internal tools portal frontend, from angular 1.5 to angular 15. Architect series of services to consume Large Datasets from 3rd parties (up to 10mil rows/day). Package and deploy release builds to remote servers. ",
		},
		{
			company: "Infragistics",
			specialty: "Web Controls/UX/Data Analytics",
			title: "Software Developer",
			responsibilities:
				"Research/design/develop new features across all tiers for Infragistics' ReportPlus Server, an enterprise-level server application designed for storing, viewing and sharing business analytics. Migrate application front-end from JavaScript & JQuery to Angular & TypeScript front-end. Implement OAuth based data-sources. Add recent and favorite dashboard cross-platform sync functionality. Package and deploy release build to remote servers.",
		},
		{
			company: "Princing Engine Inc.",
			specialty: "Digital Marketing",
			title: "Software Engineer",
			responsibilities:
				"Developed/maintained/deployed digital marketing SaaS platform that would be hosted in AWS EC2 instance. Upgraded and maintained support systems and APIs. Led overhaul of MVC application for Wix marketplace.",
		},
		{
			company: "Ungerer & Company",
			specialty: "Chemicals Manufacturer",
			title: "Jr. Software Developer",
			responsibilities:
				"Supported, maintained, and extended, Expense System, PTO Application, Formula Inventory Tracking and Labeling, ERP system built on proprietary DML, SSRS Reports and other internal business applications.",
		},
	];
</script>

<div class="resume">
	{#each experiences as exp}
		<div class="experience">
			<div>
				<label class="company">{exp.company}</label>
			</div>
			<div>
				<label class="specialty">{exp.specialty}</label>
			</div>
			<div>
				<label class="title">{exp.title}</label>
			</div>
			<div>
				<p class="responsibilities">
					{exp.responsibilities}
				</p>
			</div>
		</div>
	{/each}
</div>
