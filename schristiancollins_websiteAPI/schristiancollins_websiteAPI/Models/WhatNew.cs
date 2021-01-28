using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Models
{
    public class WhatNew
    {
        public int NewsId { get; }
        public DateTime News_date { get; set; }
        public string Information { get; set; }
    }
}
