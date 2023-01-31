using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BugTrackerApp.Models;

namespace BugTrackerApp.Controllers
{
    [EnableCors("*","*","*")]
    public class bugsController : ApiController
    {
        private bugcheckerdbEntities db = new bugcheckerdbEntities();


        // GET: api/bugs
        public IQueryable<bug> Getbugs()
        {
            return db.bugs;
        }

        // GET: api/bugs/5
        [ResponseType(typeof(bug))]
        public IHttpActionResult Getbug(int id)
        {
            bug bug = db.bugs.Find(id);
            if (bug == null)
            {
                return NotFound();
            }

            return Ok(bug);
        }

        // PUT: api/bugs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putbug(int id, bug bug)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bug.bugid)
            {
                return BadRequest();
            }


            var updatedBug = db.bugs.SingleOrDefault(i=>i.bugid== id);

            if (!String.IsNullOrEmpty(bug.title))
            {
                updatedBug.title = bug.title;
            }

            if (!String.IsNullOrEmpty(bug.description))
            {
                updatedBug.description = bug.description;
            }

            if (!String.IsNullOrEmpty(bug.state))
            {
                updatedBug.state = bug.state;
            }

            if (!String.IsNullOrEmpty(bug.assignedto))
            {
                updatedBug.assignedto = bug.assignedto;
            }

            db.Entry(updatedBug).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!bugExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/bugs
        [ResponseType(typeof(bug))]
        public IHttpActionResult Postbug(bug bug)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(null == bug.state)
            {
                bug.state = "Open";
            }
            if (String.IsNullOrEmpty(bug.assignedto))
            {
                bug.assignedto = "Admin";
            }
            if (null == bug.createdon)
            {         
                bug.createdon = DateTime.Now;
            }
            db.bugs.Add(bug);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bug.bugid }, bug);
        }

        // DELETE: api/bugs/5
        [ResponseType(typeof(bug))]
        public IHttpActionResult Deletebug(int id)
        {
            bug bug = db.bugs.Find(id);
            if (bug == null)
            {
                return NotFound();
            }

            db.bugs.Remove(bug);
            db.SaveChanges();

            return Ok(bug);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool bugExists(int id)
        {
            return db.bugs.Count(e => e.bugid == id) > 0;
        }
    }
}