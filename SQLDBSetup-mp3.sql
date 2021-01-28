CREATE TABLE mp3 (songId int not null identity(1,1) primary key, songTitle varchar(255) not null, mediaType varchar(50) not null, oggUrl varchar(255), mp3Url varchar(255), downloadUrl varchar(255),
sheetMusicUrl varchar(255), additionalDetails varchar(255), collectionId int foreign key references song_collections(collectionId) not null)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Blade''s Edge', 'mp3', 'https://www.dropbox.com/s/xa6flruw0m18xgo/S_Christian_Collins--Blades_Edge.ogg?dl=1', 'https://www.dropbox.com/s/zty2rq9idhdpfri/S_Christian_Collins--Blades_Edge.mp3?dl=1',
'music/S_Christian_Collins--Blades_Edge.mp3', '', '', 2)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Fool Me Once', 'mp3', 'https://www.dropbox.com/s/cbuzffqy7gx615t/S_Christian_Collins--Fool_Me_Once.ogg?dl=1', 'https://www.dropbox.com/s/ie62kl3xzcyl12g/S_Christian_Collins--Fool_Me_Once.mp3?dl=1',
'foolmeonce', '', '', 4)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Title Theme', 'mp3', 'https://www.dropbox.com/s/txi8o1cxzvdzc2z/S_Christian_Collins--Star_Rangers-title.ogg?dl=1', 'https://www.dropbox.com/s/b0vkroez55klbl9/S_Christian_Collins--Star_Rangers-title.mp3?dl=1',
'starrangers', '', '', 5)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Song of Defeat', 'mp3', 'https://www.dropbox.com/s/8jf2esla8jj3hjn/S_Christian_Collins--Star_Rangers-defeat.ogg?dl=1', 'https://www.dropbox.com/s/lm56j6axjnvhfce/S_Christian_Collins--Star_Rangers-defeat.mp3?dl=1',
'starrangersdefeat', '', '', 5)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Victory Song', 'mp3', 'https://www.dropbox.com/s/azovhixg55fe5qp/S_Christian_Collins--Star_Rangers-victory.ogg?dl=1', 'https://www.dropbox.com/s/2oxgrk2hhv3wf8h/S_Christian_Collins--Star_Rangers-victory.mp3?dl=1',
'starrangersvictory', '', '', 5)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Dance of the Flower Fairies, Grand Dance and Transformation', 'mp3', 'https://www.dropbox.com/s/fj0tkvrt96op1m3/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.ogg?dl=1', 'https://www.dropbox.com/s/igbl0zd1djjjhnx/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.mp3?dl=1',
'thumbelinaflowerfairy', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Frigid Dance of the Snowflakes', 'mp3', 'https://www.dropbox.com/s/yocugapvoxj4xx3/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.ogg?dl=1', 'https://www.dropbox.com/s/ji5f8kavu7u921p/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.mp3?dl=1',
'thumbelinasnowflakes', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Dance of the Locusts', 'mp3', 'https://www.dropbox.com/s/pauv4wzv3huqae0/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.ogg?dl=1', 'https://www.dropbox.com/s/9bsbd31kzug7bub/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.mp3?dl=1',
'thumbelinalocusts', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Dance of the Autumn Leaves', 'mp3', 'https://www.dropbox.com/s/u0bln02fxci0owd/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.ogg?dl=1', 'https://www.dropbox.com/s/c374eklapnxqb1r/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.mp3?dl=1',
'thumbelinaleaves', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('Thumbelina''s Dance', 'mp3', 'https://www.dropbox.com/s/qyl1bw3ln6sxsny/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.ogg?dl=1', 'https://www.dropbox.com/s/3yay8dxjm8ylg9o/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.mp3?dl=1',
'thumbelinadance', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('The Tadpoles and the Goldfish', 'mp3', 'https://www.dropbox.com/s/9gc5n34n9zv7its/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.ogg?dl=1', 'https://www.dropbox.com/s/k4b1fquxx2lrm0a/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.mp3?dl=1',
'thumbelinatadpoles', '', '', 8)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('When He Speaks', 'mp3', 'https://www.dropbox.com/s/ojbd658cm3lczm1/S_Christian_Collins--When_He_Speaks.ogg?dl=1', 'https://www.dropbox.com/s/9ob91rsmf6m6100/S_Christian_Collins--When_He_Speaks.mp3?dl=1',
'whenhespeaks', '', '', 14)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('The Ponies Are Loose', 'mp3', 'https://www.dropbox.com/s/vbxbjjw9ywrvmm0/S_Christian_Collins--The_Ponies_are_Loose.ogg?dl=1', 'https://www.dropbox.com/s/wuddc0cmew8umzj/S_Christian_Collins--The_Ponies_are_Loose.mp3?dl=1',
'ponies', '', '', 15)

INSERT INTO mp3 (songTitle, mediaType, oggUrl, mp3Url, downloadUrl, sheetMusicUrl, additionalDetails, collectionId)
VALUES ('The Gift', 'mp3', 'https://www.dropbox.com/s/nll2lw65gt825cr/S_Christian_Collins--The_Gift.ogg?dl=1', 'https://www.dropbox.com/s/1xlwnxq5jx9248i/S_Christian_Collins--The_Gift.mp3?dl=1',
'thegift', '', '', 16)




select * from mp3

select * from song_collections

select * from mp3
join song_collections
on mp3.collectionId = song_collections.collectionId
WHERE mp3.collectionId = 8
