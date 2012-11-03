using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebDevelopmentArticles.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult Introduction()
		{
			ViewBag.Title = "Introduction";
			return View();
		}

		public ActionResult ContentAndPresentation()
		{
			ViewBag.Title = "Content & Presentation";
			return View();
		}

		public ActionResult Javascript()
		{
			ViewBag.Title = "JavaScript & The DOM";
			return View();
		}

		public ActionResult ToolsAndFrameworks()
		{
			ViewBag.Title = "Tools & Frameworks";
			return View();
		}
	}
}
