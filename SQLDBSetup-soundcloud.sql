CREATE TABLE soundcloud (songId int not null identity(1,1) primary key, songTitle varchar(255) not null, mediaType varchar(50), embedUrl varchar(255) not null, directUrl varchar(255), downloadUrl varchar(255),
sheetMusicUrl varchar(255), additionalDetails varchar(255), collectionId int foreign key references song_collections(collectionId) not null)


INSERT INTO soundcloud (songTitle, mediaType, embedUrl, directUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('King of Lizards', 'soundcloud', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106536381&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true', 'https://soundcloud.com/s-christian-collins/modemixer-king-of-lizards',
'http://modemixer.bandcamp.com/', '', '', 1)

INSERT INTO soundcloud (songTitle, mediaType, embedUrl, directUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Fast Taxi', 'soundcloud', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/150058706&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true', 'https://soundcloud.com/s-christian-collins/modemixer-fast-taxi-2014-remaster',
'http://modemixer.bandcamp.com/track/fast-taxi-2014-remaster', '', '', 3)

INSERT INTO soundcloud (songTitle, mediaType, embedUrl, directUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Nocturne', 'soundcloud', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108995805&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true', 'https://soundcloud.com/s-christian-collins/nocturne-namm-2013-version',
'', '', '', 12)

select * from song_collections

select * from soundcloud
