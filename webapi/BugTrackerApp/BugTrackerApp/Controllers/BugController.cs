using BugTrackerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;


namespace BugTrackerApp.Controllers
{
    public class BugController : Controller
    {

        //public class BugDTO {

        //    public int bugid { get; set; }
        //    public string title { get; set; }
        //    public string description { get; set; }
        //    public System.DateTime createdon { get; set; }
        //    public string state { get; set; }
        //    public string assignedto { get; set; }
        //    public user username { get; set; }

        //}


        public ActionResult GetAllBugs()
        {
            IList<bug> bugslist = null;
            
            //connects to db and returns the following
            using (var entities = new bugcheckerdbEntities())
            {
                bugslist = entities.bugs.Select(b => new bug()
                {
                    bugid = b.bugid,
                    title = b.title,
                    description = b.description,
                    createdon = b.createdon,
                    state = b.state,
                    assignedto = b.assignedto
                }
                ).ToList<bug>();
            }

            if (bugslist.Count == 0)
            {
                return View();
            }
            ViewData["data"] = bugslist;
            return View();
        }

    }
}
