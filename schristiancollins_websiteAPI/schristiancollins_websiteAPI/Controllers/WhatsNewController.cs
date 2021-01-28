using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using schristiancollins_websiteAPI.Repositories;
using schristiancollins_websiteAPI.Models;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Controllers
{
    [Route("api/schristiancollins/")]
    [ApiController]
    public class WhatsNewController : ControllerBase
    {
        WhatsNewRepository _whatsNewRepository;

        public WhatsNewController(WhatsNewRepository whatsNewRepository)
        {
            _whatsNewRepository = whatsNewRepository;
        }

        //Get news
        [HttpGet("news")]
        public IActionResult GetAllNews()
        {
            var result = _whatsNewRepository.GetAllNews();
            if (!result.Any())
            {
                return NotFound("No News");
            }

            return Ok(result);
        }
    }
}
