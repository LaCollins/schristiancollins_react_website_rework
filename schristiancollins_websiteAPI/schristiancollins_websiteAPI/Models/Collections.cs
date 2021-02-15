using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Models
{
    public class Collections
    {
        public int CollectionId { get; set; }
        public string CollectionTitle { get; set; }
        public string Genre { get; set; }
        public string CollectionDescription { get; set; }
    }
}
