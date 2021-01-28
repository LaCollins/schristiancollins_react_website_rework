CREATE TABLE whats_new (newsId int not null identity(1,1) primary key, news_date DATE not null, information varchar(2000) not null)

INSERT INTO whats_new (news_date, information)
VALUES('12-22-2009', 'I''ve been pretty busy, and haven''t had time to fill in the missing parts of the website. I''ve got a bunch of arranged sheet music accumulated during the past six years of teaching that I will be adding when I get some time.')

INSERT INTO whats_new (news_date, information)
VALUES('1-18-2010', 'Sitting for three hours at an airport--what a perfect opportunity to update my website! I have added some of <a href="performances.php">my recordings</a>, two new <a href="compositions.php">compositions</a>, and a whole slew of <a href="sheetmusic.php">free sheet music</a>. Check it out!')

INSERT INTO whats_new (news_date, information)
VALUES('7-29-2010', 'Added a new <a href="performances.php">performance</a> (Scarlatti K. 466) and three new Scarlatti Sonatas on the <a href="sheetmusic.php">free sheet music page</a>.')

INSERT INTO whats_new (news_date, information)
VALUES('7-26-2014', 'Updated my <a href="compositions.php">compositions page</a>, which now includes the sheet music for most of my written music as well as links to new YouTube performances of some of my songs. I also removed a few pages that were outdated with little hope of ever being updated. I doubt they will be missed.')

INSERT INTO whats_new (news_date, information)
VALUES('3-3-2015', 'Completely overhauled the visual appearance of the site with a new banner and darker look. I also fixed some problems with the audio recordings not playing.')

INSERT INTO whats_new (news_date, information)
VALUES('3-7-2016', 'I just completed a major update to my <a href="soundfonts.php">virtual instruments page</a>, featuring much more up-to-date information, details on the SFZ sampler format, and some new virtual instruments as well. I also made my first post on my <a href="https://schristiancollins.wordpress.com/" target="_blank" rel="noreferrer noopener">blog</a>, which I will now be linking to this site as well.')

INSERT INTO whats_new (news_date, information)
VALUES('11-18-2020', 'Completely overhauling the appearance of the site to update the styling and improve mobile viewing.')


select * from whats_new
