//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BugTrackerApp.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class bug
    {
        //public bug() => state = "open";
        public int bugid { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public System.DateTime createdon { get; set; }
        public string state { get; set; }

        [ForeignKey("assignedto")]
        public string assignedto { get; set; }
        //public user username { get; set; }

    }
}
