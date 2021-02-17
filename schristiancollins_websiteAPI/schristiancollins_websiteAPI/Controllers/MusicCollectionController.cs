using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using schristiancollins_websiteAPI.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace schristiancollins_websiteAPI.Controllers
{
    [Route("api/schristiancollins/music_collection")]
    [ApiController]
    public class MusicCollectionController : ControllerBase
    {
        MusicCollectionRepository _musicCollectionRepository;

        public MusicCollectionController(MusicCollectionRepository musicCollectionRepository)
        {
            _musicCollectionRepository = musicCollectionRepository;
        }

        [HttpGet("mp3/genre/{genre}")]
        public IActionResult GetMp3ByGenre(string genre)
        {
            var result = _musicCollectionRepository.GetMp3ByGenre(genre);
            if (!result.Any())
            {
                return NotFound("No MP3's with that genre exist");
            }

            return Ok(result);
        }


        [HttpGet("soundcloud/genre/{genre}")]
        public IActionResult GetSoundcloudByGenre(string genre)
        {
            var result = _musicCollectionRepository.GetSoundcloudByGenre(genre);
            if (!result.Any())
            {
                return NotFound("No Soundcloud songs in that genre exist");
            }

            return Ok(result);
        }

        [HttpGet("youtube/genre/{genre}")]
        public IActionResult GetYoutubeByGenre(string genre)
        {
            var result = _musicCollectionRepository.GetYouTubeByGenre(genre);
            if (!result.Any())
            {
                return NotFound("No Youtube videos in that genre exist");
            }

            return Ok(result);
        }
    }
}
