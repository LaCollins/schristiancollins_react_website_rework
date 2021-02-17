using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Interfaces
{
    public interface IMusic
    {
        int CollectionId { get; set; }
        string CollectionTitle { get; set; }
        string Genre { get; set; }
        string CollectionDescription { get; set; }
        int SongId { get; set; }
        string SongTitle { get; set; }
        string MediaType { get; set; }
        string DownloadURL { get; set; }
        string SheetMusicUrl { get; set; }
        string AdditionalDetails { get; set; }
    }
}
