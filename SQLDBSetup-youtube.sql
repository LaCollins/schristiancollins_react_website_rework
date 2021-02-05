CREATE TABLE youtube (songId int not null identity(1,1) primary key, songTitle varchar(255) not null, mediaType varchar(50), embedUrl varchar(255) not null, downloadUrl varchar(255),
sheetMusicUrl varchar(255), additionalDetails varchar(255), collectionId int foreign key references song_collections(collectionId) not null)

INSERT INTO youtube(songTitle, mediaType, embedUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Embers', 'youtube', 'https://www.youtube.com/embed/3LADJbl7Dao', '', '', '', 6)

INSERT INTO youtube(songTitle, mediaType, embedUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Fair Flower', 'youtube', 'https://www.youtube.com/embed/huG2Eg6-4rw?theme=light', '', '', '', 7)

INSERT INTO youtube(songTitle, mediaType, embedUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Sky Runner', 'youtube', 'https://www.youtube.com/embed/eNyBGmPPyTc?theme=light', 'skyrunner', 'sheet music coming soon...', '', 9)

INSERT INTO youtube(songTitle, mediaType, embedUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Prelude', 'youtube', 'https://www.youtube.com/embed/4VP5HjTd29A?theme=light', 'prelude', 'https://www.musicaneo.com/sheetmusic/sm-209153_prelude_op_16_no_1.html#209153', '', 10)

INSERT INTO youtube(songTitle, mediaType, embedUrl, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Crystal Rain', 'youtube', 'https://www.youtube.com/embed/6RyocfiubiY?theme=light', 'crystalrain', 'https://www.musicaneo.com/sheetmusic/sm-210245_crystal_rain_op_16_no_2.html#210245', '', 11)

select * from song_collections

select * from youtube