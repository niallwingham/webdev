using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;
using System.Text.RegularExpressions;

namespace WebDevelopmentArticles
{
	/// <summary>
	/// Configures the Cassette asset bundles for the web application.
	/// </summary>
	public class CassetteBundleConfiguration : IConfiguration<BundleCollection>
	{
		public void Configure(BundleCollection bundles)
		{
			// Bundle stylesheets and scripts by directory
			bundles.Add<StylesheetBundle>("Content");
			bundles.AddPerSubDirectory<ScriptBundle>("Scripts", true);

			// A special bundle for library scripts that should go in the head of the page
			bundles.Add<ScriptBundle>("Scripts/modernizr-2.6.2.js", b => b.PageLocation = "head");

			// A bundle for the regular library scripts
			bundles.Add<ScriptBundle>("Scripts", new FileSearch {
				Pattern = "*.js",
				Exclude = new Regex("modernizr|\\.min|\\.debug|\\.intellisense|_references\\.js")
			});
		}
	}
}