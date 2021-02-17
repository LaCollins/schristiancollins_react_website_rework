using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using schristiancollins_websiteAPI.Interfaces;
using schristiancollins_websiteAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Repositories
{
    public class MusicCollectionRepository
    {
        string ConnectionString;

        public MusicCollectionRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("SchristianCollinsWebsite");
        }

        public IEnumerable<Mp3> GetMp3ByGenre(string genre)
        {
            var sql = @"SELECT song_collections.collectionId, collectionTitle, YEAR(collectionDate) as collectionDate, genre, collectionDescription, mp3.songId, mp3.songTitle,
                        mp3.mediaType, mp3.oggUrl, mp3.mp3Url, mp3.downloadUrl, mp3.sheetMusicUrl, mp3.additionalDetails
                        FROM mp3
                        JOIN song_collections
                        ON mp3.collectionId = song_collections.collectionId
                        WHERE song_collections.genre = @genre";

            using (var db = new SqlConnection(ConnectionString))
            {
                var mp3s = db.Query<Mp3>(sql, new { genre = genre } );

                return mp3s;
            }
        }

        public IEnumerable<SoundCloud> GetSoundcloudByGenre(string genre)
        {
            var sql = @"SELECT song_collections.collectionId, collectionTitle, YEAR(collectionDate) as collectionDate, genre, collectionDescription, soundcloud.songId, soundcloud.songTitle,
                        soundcloud.mediaType, soundcloud.embedUrl, soundcloud.directUrl, soundcloud.downloadUrl, soundcloud.sheetMusicUrl, soundcloud.additionalDetails
                        FROM soundcloud
                        JOIN song_collections
                        ON soundcloud.collectionId = song_collections.collectionId
                        WHERE song_collections.genre = @genre";

            using (var db = new SqlConnection(ConnectionString))
            {
                var soundcloud = db.Query<SoundCloud>(sql, new { genre = genre });

                return soundcloud;
            }
        }

        public IEnumerable<YouTube> GetYouTubeByGenre(string genre)
        {
            var sql = @"SELECT song_collections.collectionId, collectionTitle, YEAR(collectionDate) as collectionDate, genre, collectionDescription, youtube.songId, youtube.songTitle,
                        youtube.mediaType, youtube.embedUrl, youtube.downloadUrl, youtube.sheetMusicUrl, youtube.additionalDetails
                        FROM youtube
                        JOIN song_collections
                        ON youtube.collectionId = song_collections.collectionId
                        WHERE song_collections.genre = @genre";

            using (var db = new SqlConnection(ConnectionString))
            {
                var youtube = db.Query<YouTube>(sql, new { genre = genre });

                return youtube;
            }
        }
    }
}
