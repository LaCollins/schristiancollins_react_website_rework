CREATE TABLE soundCloud(songId int not null identity(1,1) primary key, songTitle varchar(255) not null, mediaType varchar(50) not null, embedUrl varchar(255), directUrl varchar(255), downloadUrl varchar(255),
sheetMusicUrl varchar(255), additionalDetails varchar(255), songDescription varchar(2000), collectionId int foreign key references electronic_pop(collectionId) not null)

INSERT INTO soundCloud (songTitle, mediaType, embedUrl, directUrl, downloadUrl, sheetMusicUrl, additionalDetails, songDescription, collectionId)
VALUES('King of Lizards', 'soundCloud', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106536381&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
'https://soundcloud.com/s-christian-collins/modemixer-king-of-lizards', 'http://modemixer.bandcamp.com/', '', '', 'Doskpop! Inspired by the tracker music of Gustaf Grefberg (Lizardking). Made in Mixcraft 6 Pro Studio using almost entirely built-in synths and effects originally as a Mixcraft demo for NAMM 2012. Finally remastered in August 2013.', 1)

INSERT INTO soundCloud (songTitle, mediaType, embedUrl, directUrl, downloadUrl, sheetMusicUrl, additionalDetails, songDescription, collectionId)
VALUES('Fast Taxi', 'soundCloud', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150058706&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
'https://soundcloud.com/s-christian-collins/modemixer-fast-taxi-2014-remaster', 'http://modemixer.bandcamp.com/track/fast-taxi-2014-remaster', '', '', 'Created as a demo for <a href="http://www.acoustica.com/mixcraft/" target="_blank" rel="noreferrer">Acoustica Mixcraft 5</a>.', 4)


select * from electronic_pop

select * from mp3

select * from soundCloud