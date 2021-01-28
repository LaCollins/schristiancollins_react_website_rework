using Microsoft.Extensions.Configuration;
using schristiancollins_websiteAPI.Models;
using Microsoft.Data.SqlClient;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace schristiancollins_websiteAPI.Repositories
{
    public class WhatsNewRepository
    {
        string ConnectionString;

        public WhatsNewRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("SchristianCollinsWebsite");
        }

        public IEnumerable<WhatNew> GetAllNews()
        {
            var sql = @"SELECT *
                        FROM whats_new";

            using (var db = new SqlConnection(ConnectionString))
            {
                var news = db.Query<WhatNew>(sql);

                return news;
            }
        }
    }
}
