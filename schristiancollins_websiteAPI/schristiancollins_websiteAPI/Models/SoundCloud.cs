﻿using schristiancollins_websiteAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Models
{
    public class SoundCloud : IMusic
    {
        public int SongId { get; set; }
        public string SongTitle { get; set; }
        public string MediaType { get; set; }
        public string DownloadURL { get; set; }
        public string SheetMusicUrl { get; set; }
        public string AdditionalDetails { get; set; }
        public int CollectionId { get; set; }
        public string CollectionTitle { get; set; }
        public int CollectionDate { get; set; }
        public string Genre { get; set; }
        public string CollectionDescription { get; set; }

        public string EmbedUrl { get; set; }
        public string DirectUrl { get; set; }
    }
}
