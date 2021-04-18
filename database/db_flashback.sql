-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 18, 2021 at 01:20 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_flashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

DROP TABLE IF EXISTS `tbl_accounts`;
CREATE TABLE IF NOT EXISTS `tbl_accounts` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `account_email` varchar(50) NOT NULL,
  `account_password` varchar(50) NOT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_accounts`
--

INSERT INTO `tbl_accounts` (`account_id`, `account_email`, `account_password`) VALUES
(1, 'tom@gmail.com', '123123'),
(2, 'jerry@gmail.com', '123123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `year` year(4) NOT NULL,
  `description` varchar(500) NOT NULL,
  `level` int(1) NOT NULL DEFAULT '0',
  `runtime` varchar(30) NOT NULL,
  `cover` varchar(60) NOT NULL,
  `source` varchar(60) NOT NULL,
  `genres` varchar(400) NOT NULL,
  `rating` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`id`, `title`, `year`, `description`, `level`, `runtime`, `cover`, `source`, `genres`, `rating`) VALUES
(1, 'Forrest Gump', 1994, 'In 1951, in Greenbow, Alabama, young Forrest is fitted with leg braces to correct a curved spine, and is unable to walk properly. He lives alone with his mother, who runs a boarding house out of their home that attracts many tenants, including a young Elvis Presley, who plays the guitar for Forrest and incorporates Forrest\'s jerky dance movements into his performances. On his first day of school, Forrest meets a girl named Jenny Curran, and the two become best friends.', 1, '142', 'forrest_gump.jpg', 'forrest_gump.mp4', 'Drama', 'PG'),
(2, 'Rain Man', 1988, 'An abrasive, selfish young wheeler-dealer Charlie Babbitt discovers that his estranged father has died and bequeathed virtually all of his multimillion dollar estate to his other son, Raymond, an autistic savant, of whose existence Charlie was unaware. Charlie is left with only his father\'s beloved vintage car and rosebushes.', 1, '134', 'rain_man.jpg', 'rain_main.mp4', 'Drama', 'PG-12'),
(3, 'Driving Miss Daisy', 1989, 'An old Jewish woman and her African-American chauffeur in the American South have a relationship that grows and improves over the years.', 1, '99', 'driving_miss_daisy.jpg', 'driving_miss_daisy.mp4', 'Drama, Comedy', 'PG'),
(4, 'Snow White and The Seven Dwarfs', 1937, 'When Snow White, a princess, is exiled by her stepmother, an evil queen who wants to kill her, she runs into a forest. Soon, she is rescued by seven dwarfs who form a friendship with her.', 0, '80', 'snow_white_and_the_seven_dwarfs.jpg', 'snow_white_and_the_seven_dwarfs.mp4', 'Animation, Fantasy, Family', 'GP'),
(5, 'Cinderella', 1950, 'When Cinderella\'s dream of attending the Royal Ball and meeting the Grand Duke is hindered by her cruel stepmother, she gets some astounding help from her Fairy Godmother.', 0, '76', 'cinderella.jpg', 'cinderella.mp4', 'Animation, Family, Fantasy, Musical', 'GP'),
(6, 'The Sound of Music', 1965, 'Julie Andrews plays the role of Maria, the tomboyish postulant at an Austrian abbey who becomes a governess in the home of a widowed naval captain with seven children, and brings a new love of life and music into the home.', 0, '174', 'the_sound_of_music.jpg', 'the_sound_of_music.mp4', 'Musical, Romance', 'G'),
(7, 'Edward Scissorhands', 1990, 'Edward, a synthetic man with scissor hands, is taken in by Peg, a kindly Avon lady, after the passing of his inventor. Things take a turn for the worse when he is blamed for a crime he did not commit.', 1, '105', 'edward_scissorhands.jpg', 'edward_scissorhands.mp4', 'Fantasy, Romance', 'GP'),
(8, 'Bambi ', 1942, 'Bambi is a young fawn who is chosen to become the next prince of the forest like his father. While living in the forest, he learns about friendship, love and how to protect his near and dear ones.', 0, '70', 'bambi.jpg', 'bambi.mp4', 'Animation, Family', 'G'),
(9, 'The Sword in the Stone', 1963, 'Frustrated of living in a Medieval mess, Merlin uses all his magical powers to change a skinny little boy into a legendary hero.', 0, '79', 'the_sword_in_the_stone.jpg', 'the_sword_in_the_stone.mp4', 'Animation, Family, Fantasy,  Musical', 'GP'),
(10, 'The Lion King', 1994, 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.', 0, '88', 'the_lion_king.jpg', 'the_lion_king.mp4', 'Animation, Family, Musical', 'GP'),
(11, 'Sleeping Beauty', 1959, 'A witch curses a newborn princess to die on her 16th birthday. However, a fairy alters the curse, allowing the princess to survive by going into a deep sleep that can be broken by true love\'s kiss.', 0, '75', 'sleeping_beauty.jpg', 'sleeping_beauty.mp4', 'Animation, Family, Fantasy, Musical', 'GP'),
(12, 'The Little Mermaid', 1989, 'Ursula, the sea witch, makes a devious deal with Princess Ariel allowing her to meet Eric, the human prince she loves. Unaware of her true intentions, Ariel lands herself in trouble.', 0, '83', 'the_little_mermaid.jpg', 'the_little_mermaid.mp4', 'Animation, Family, Fantasy, Musical', 'GP'),
(13, 'Toy story', 1995, 'In a world where toys are living things but pretend to be lifeless when humans are present, a group of toys, owned by young Andy Davis, are caught off-guard when Andy\'s birthday party is moved up a week, as his family (including his mother and infant sister Molly) are preparing to move the following week. ', 0, '81', 'toy_story.jpg', 'toy_story.mp4', 'Animation, Family, Comedy', 'GP'),
(14, 'Peter Pan', 1953, 'Peter Pan and his friend Tinker Bell, a fairy, whisk away siblings Wendy, John and Michael to the island of Never Land, where Captain Hook seeks vengeance against Peter for cutting off his hand.', 0, '77', 'peter_pan.jpg', 'peter_pan.mp4', 'Animation, Family, Fantasy', 'G'),
(15, 'Mulan', 1998, 'Young Mulan is distraught to learn that her weak father must join the army to fight the invading Huns. Unwilling to endanger his life, she disguises herself as a man and joins the army in his place.', 0, '87', 'mulan.jpg', 'mulan.mp4', 'Animation, Musical, Family', 'GP'),
(16, 'Out of Africa', 1985, 'Initially set on being a dairy farmer, the aristocratic Karen Blixen travels to Africa to join her husband, Bror, who instead spends their money on a coffee plantation. After discovering Bror is unfaithful, Karen develops feelings for hunter Denys, but realizes he prefers a simplistic lifestyle compared to her upper class background. The two continue on until a series of events force Karen to choose between her love and personal growth.', 1, '161', 'out_of_africa.jpg', 'out_of_africa.mp4', 'Drama, Romance', 'PG'),
(17, 'Dances with Wolves', 1990, 'A drama movie that narrates the story of Lt. John Dunbar who is exiled to a remote western Civil War outpost, where he befriends wolves and Indians, making him an intolerable aberration.', 1, '175', 'dances_with_wolves.jpg', 'dances_with_wolves.mp4', 'Drama, Western', 'PA'),
(18, 'The Prince of Egypt', 1998, 'Two brothers named Moses and Rameses grow up to be the best of friends. However, when one of them becomes a ruler and the other chooses to live for the people, their friendship turns bitter.', 0, '70', 'the_prince_of_egypt.jpg', 'the_prince_of_egypt.mp4', 'Animation, Family, Musical', 'G'),
(19, 'Braveheart', 1995, 'William Wallace, a Scottish rebel, along with his clan, sets out to battle King Edward I of England, who killed his bride a day after their marriage.', 1, '178', 'braveheart.jpg', 'braveheart.mp4', 'Drama, War, History', '18A'),
(20, 'The Shawshank Redemption', 1994, 'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.', 0, '142', 'the_shawshank_redemption.jpg', 'the_shawshank_redemption.mp4', 'Drama, Crime', 'R-12'),
(21, 'Se7en', 1995, 'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.', 1, '127', 'se7en.jpg', 'se7en.mp4', 'Crime', 'AA'),
(22, 'Batman', 1989, 'Batman, a masked vigilante from Gotham City, fights against evil to keep its citizens safe. He must battle Jack Napier, who turns into the Joker and threatens to take over Gotham City.', 0, '126', 'batman.jpg', 'batman.mp4', 'Action, Adventure', 'PG'),
(23, 'Life Is Beautiful', 1997, 'A Jewish father and his family are surrounded by Nazi death camps. Living in a hostile environment, he uses humor to shield his young son from the grim realities of war.', 1, '116', 'life_is_beautiful.jpg', 'life_is_beautiful.mp4', 'Drama, War', 'PG-12'),
(24, 'Home Alone', 1990, 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', 0, '103', 'home_alone.jpg', 'home_alone.mp4', 'Comedy, Family', 'G'),
(25, 'Schindler\'s List', 1993, 'Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.', 1, '197', 'schindlers_list.jpg', 'schindlers_list.mp4', 'Drama, War, History', 'R-15'),
(26, 'The Truman Show', 1998, 'An insurance salesman is oblivious of the fact that his entire life is a TV show and his family members are mere actors. As he starts noticing things and uncovers the truth, he decides to escape.', 1, '103', 'the_truman_show.jpg', 'the_truman_show.mp4', 'Sci-fi， Drama', 'PG'),
(27, 'The Silence of the Lambs', 1991, 'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.', 1, '138', 'the_silence_of_the_lambs.jpg', 'the_silence_of_the_lambs.mp4', 'Thriller, Horror, Crime', '18+'),
(28, 'Legends of Fall', 1994, 'Colonel Ludlow decides to move to Montana\'s country-side and raise his three children. His life changes when he learns that all his children have fallen in love with the same girl.', 1, '133', 'legends_of_fall.jpg', 'legends_of_fall.mp4', 'Drama, Romance, War, Western', '14A'),
(29, 'Ghost', 1990, 'Sam Wheat is a banker, Molly Jensen is an artist, and the two are madly in love. However, when Sam is murdered by friend and corrupt business partner Carl Bruner over a shady business deal, he is left to roam the Earth as a powerless spirit. When he learns of Carl\'s betrayal, Sam must seek the help of psychic Oda Mae Brown to set things right and protect Molly from Carl and his goons.', 1, '129', 'ghost.jpg', 'ghost.mp4', 'Drama, Fantasy, Romance, Thriller', 'PG-12'),
(30, 'Sleepless in Seattle', 1993, 'After his wife Maggie passes away, Sam Baldwin and his 8-year-old son Jonah relocate from Chicago to Seattle to escape the grief associated with Maggie\'s death. Eighteen months later Sam is still grieving and can\'t sleep. Although Jonah misses his mother, he wants his father to get a new wife despite Sam having not even contemplated dating again.', 1, '106', 'sleepless_in_seattle.jpg', 'sleepless_in_seattle.mp4', 'Comedy, Drama, Romance', 'PG'),
(31, 'Philadelphia', 1993, 'A young Philadelphia lawyer who is infected with AIDS keeps his homosexuality hidden from his employers. When he is suddenly dismissed, he hires a homophobic lawyer for a wrongful dismissal suit.', 1, '126', 'philadelphia.jpg', 'philadelphia.mp4', 'Drama', 'PG'),
(32, 'The Last Emperor', 1987, 'Aisin Gioro Puyi, the last emperor of China, has a sheltered upbringing till his world gets turned upside down by the Chinese revolution, a subsequent exile and an inconspicuous end.', 1, '219', 'the_last_emperor.jpg', 'the_last_emperor.mp4', 'Drama, History', 'R-12'),
(33, 'Farewell My Concubine', 1993, 'In 1924, young Cheng Dieyi begins training at the Beijing Opera House at the same time as Duan Xiaolou. Cheng specializes in playing female parts, often against Duan\'s commanding male leads. While pretending to be in love with Duan onstage, Cheng begins to develop actual romantic feelings for his co-star, which are not reciprocated. Over the next 50 years, the two men maintain a complicated friendship as China undergoes turbulent changes.', 1, '157', 'farewell_my_concubine.jpg', 'farewell_my_concubine.mp4', 'Drama, Romance, History', 'PG-12'),
(34, 'Days of Being Wild', 1990, 'Set in 1960, the film centres on the young, boyishly handsome Yuddy, who learns from the drunken ex-prostitute who raised him that she is not his real mother. Hoping to hold onto him, she refuses to divulge the name of his real birth mother. The revelation shakes Yuddy to his very core, unleashing a cascade of conflicting emotions.', 1, '100', 'days_of_being_wild.jpg', 'days_of_being_wild.mp4', 'Crime, Drama, Romance', 'PG-12'),
(35, 'Happy Together', 1997, 'Yiu-Fai and Po-Wing arrive in Argentina from Hong Kong and take to the road for a holiday. Something is wrong and their relationship goes adrift. A disillusioned Yiu-Fai starts working at a tango bar to save up for his trip home.', 1, '99', 'happy_together.jpg', 'happy_together.mp4', 'Drama, Romance', 'PA'),
(36, 'The Wedding Banquet', 1993, 'Wai-Tung and his boyfrien live happily as a gay couple in New York City. Wai-Tung has not been open about his sexuality with his Taiwanese parents, and decides to acquiesce to their wish for a traditional Chinese union by marrying Wei-Wei, a struggling artist desperate for a green card. But the simple arrangement turns into a lavish debacle when Wai-Tung\'s parents plan an extravagant wedding banquet.', 1, '106', 'the_wedding_banquet.jpg', 'the_wedding_banquet.mp4', 'Comedy, Drama, Romance', 'PG-12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `artist` varchar(30) NOT NULL DEFAULT 'Undefined',
  `year` year(4) NOT NULL,
  `description` varchar(500) NOT NULL,
  `level` int(11) NOT NULL,
  `runtime` varchar(30) NOT NULL,
  `cover` varchar(60) NOT NULL,
  `source` varchar(60) NOT NULL,
  `genres` varchar(400) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`id`, `title`, `artist`, `year`, `description`, `level`, `runtime`, `cover`, `source`, `genres`) VALUES
(1, 'My Heart Will Go On', 'Céline Dion', 1997, '\"My Heart Will Go On\" is a song recorded by Canadian singer Celine Dion. It serves as the main theme song to James Cameron\'s blockbuster film Titanic. The song\'s music was composed by James Horner, its lyrics were written by Will Jennings, while the production was handled by Walter Afanasieff, Horner and Simon Franglen.', 1, '4:41', 'my_heart_will_go_on.jpg', 'my_heart_will_go_on.mp3', 'Pop'),
(2, 'Lemon Tree', 'Fools Garden', 1995, '\"Lemon Tree\" is a folk song by German band Fool\'s Garden from the album Dish of the Day, which was released as a single in 1995 and became a major international hit in 1996. The single reached number 26 on the UK Singles Chart and remained at number one for four weeks in Germany. It also reached number one in Austria, Iceland, Ireland, Norway and Sweden.', 1, '3:44', 'lemon_tree.jpg', 'lemon_tree.mp3', 'Folk, Pop'),
(3, 'Me Myself And I', 'De La Soul', 1989, '\"Me Myself and I\" is a song by American hip hop trio De La Soul, released as a single in 1989 from their debut studio album, 3 Feet High and Rising. The song, along with its B-side are structurally similar to Black is Black by The Jungle Brothers.', 1, '4:01', 'me_myself_and_i.jpg', 'me_myself_and_i.mp3', 'Hip-Hop, Rap'),
(4, 'The Thrill Is Gone', 'BB King', 1969, '\"The Thrill Is Gone\" is a slow minor-key blues song written by West Coast blues musician Roy Hawkins and Rick Darnell in 1951. Hawkins\' recording of the song reached number six in the Billboard R&B chart in 1951. In 1970, it became a major hit for B.B. King. His rendition helped make the song a blues standard.', 0, '5:29', 'the_thrill_is_gone.jpg', 'the_thrill_is_gone.mp3', 'R&B, Blues'),
(5, 'I Will Always Love You', 'Whitney Houston', 1992, 'In 1992, American singer Whitney Houston recorded a new arrangement of \"I Will Always Love You\" for the soundtrack to The Bodyguard, her film debut. The song has a saxophone solo by Kirk Whalum.', 1, '4:32', 'i_will_always_love_you.jpg', 'i_will_always_love_you.mp3', 'Country'),
(6, 'I Have Nothing', 'Whitney Houston', 1993, '\"I Have Nothing\" is a song recorded by American singer Whitney Houston, released as the third single from The Bodyguard: Original Soundtrack Album (1992) on February 20, 1993, by Arista Records. The song was written by David Foster and Linda Thompson, and produced by Foster.', 1, '4:50', 'i_have_nothing.jpg', 'i_have_nothing.mp3', 'R&B, Pop'),
(7, 'Nothing\'s Gonna Change My Love for You', 'George Benson', 1985, '\"Nothing\'s Gonna Change My Love for You\" is a song by George Benson, an American singer and guitarist. It was written by composers Michael Masser and Gerry Goffin, and was originally recorded by George Benson for his studio album 20/20, released by Warner Bros. Records.', 1, '3:52', 'nothings_gonna_change_my_love_for_you.jpg', 'nothings_gonna_change_my_love_for_you.mp3', 'R&B'),
(8, 'Hey Jude', 'The Beatles', 1968, '\"Hey Jude\" is a song by the English rock band the Beatles that was released as a non-album single in August 1968. It was written by Paul McCartney and credited to the Lennon–McCartney partnership.', 0, '4:27', 'hey_jude.jpg', 'hey_jude.mp3', 'Pop, Rock'),
(9, 'Can\'t Help Falling In Love', 'Elvis Presley', 1961, '\"Can\'t Help Falling in Love\" is a song recorded by American singer Elvis Presley for the album Blue Hawaii (1961). It was written by Hugo Peretti, Luigi Creatore, and George David Weiss and published by Gladys Music, Inc.', 1, '3:01', 'cant_help_falling_in_love.jpg', 'cant_help_falling_in_love.mp3', 'Pop'),
(10, 'Ain\'t No Mountain High Enough', ' Marvin Gaye & Tammi Terrell', 1967, '\"Ain\'t No Mountain High Enough\" is a pop/soul song written by Nickolas Ashford & Valerie Simpson in 1966 for the Tamla label, a division of Motown. The composition was first successful as a 1967 hit single recorded by Marvin Gaye and Tammi Terrell, and became a hit again in 1970 when recorded by former Supremes frontwoman Diana Ross. The song became Ross\'s first solo number-one hit on the Billboard Hot 100 chart and was nominated for a Grammy Award.', 0, '2:25', 'aint_no_mountain_high_enough.jpg', 'aint_no_mountain_high_enough.mp3', 'Pop'),
(11, 'Don\'t Let Me Down', 'The Beatles', 1970, 'Don\'t Let Me Down\" is a song by the English rock band the Beatles, recorded in 1969 during the Let It Be sessions. It was written by John Lennon and credited to Lennon–McCartney. The band recorded the song with Billy Preston; the single release with \"Get Back\" was credited to \"the Beatles with Billy Preston\".', 0, '3:31', 'dont_let_me_down.jpg', 'dont_let_me_down.mp3', 'Blues, Rock'),
(12, 'Hound Dog', 'Elvis Presley', 1956, 'Larry Birnbaum described Elvis Presley\'s rendition of \"Hound Dog\" as \"an emblem of the rock \'n\' roll revolution\". George Plasketes argues that Elvis Presley\'s version of \"Hound Dog\" should not be considered a cover \"since [most listeners] … were innocent of Willie Mae Thornton\'s original 1953 release\". Michael Coyle asserts that \"Hound Dog\", like almost all of Presley\'s \"covers were all of material whose brief moment in the limelight was over, without the songs having become standards.\"', 1, '2:29', 'hound_dog.jpg', 'hound_dog.mp3', 'Rock'),
(13, 'Crazy Arms', 'Willie Nelson & Ray Price', 1970, '', 0, '2:45', 'crazy_arms.jpg', 'crazy_arms.mp3', 'Country'),
(14, 'Take Five', 'Dave Brubeck Quartet ', 1959, '\"Take Five\" is a jazz standard composed by saxophonist Paul Desmond and originally recorded by the Dave Brubeck Quartet for their album[a][2] Time Out at Columbia Records\' 30th Street Studios in New York City on July 1, 1959.[3] Two years later it became a surprise[4] hit[b] and the biggest-selling jazz single ever.[5][6] Revived since in numerous movie and television soundtracks,[7] the piece still receives significant radio airplay. The single was inducted into the Grammy Hall of Fame in 1996.', 0, '5:30', 'take_five.jpg', 'take_five.mp3', 'Jazz'),
(15, 'Beat It', 'Michael Jackson', 1982, '\"Beat It\" is a song by American singer Michael Jackson from his sixth studio album, Thriller (1982). It was written by Jackson and produced by Jackson and Quincy Jones. Jones encouraged Jackson to include a rock song on the album, though Jackson had never previously shown an interest in the genre.', 1, '4:19', 'beat_it.jpg', 'beat_it.mp3', 'R&B, Pop'),
(16, 'YMCA', 'Village People', 1978, '\"Y.M.C.A.\" is a song by the American disco group Village People. It was released in 1978 as the only single from their third studio album, Cruisin\' (1978). The song was written by Jacques Morali (also the record\'s producer) and singer Victor Willis.', 0, '4:01', 'ymca.jpg', 'ymca.mp3', 'Disco'),
(17, 'Hooked on a Feeling ', 'Blue Swede', 1974, 'In 1974, the Swedish pop group Blue Swede did a cover version, which included the \"ooga chaka\" introduction from Jonathan King\'s 1971 cover. Their arrangement was inspired by a version recorded in 1971 by the Jamaican Reggae band the Twinkle Brothers. The Blue Swede version of the song also tweaked the lyrics to avoid a drug reference.', 0, '2:59', 'hooked_on_a_feeling.jpg', 'hooked_on_a_feeling.mp3', ' R&B, Rock, Pop'),
(18, 'Shoop', 'Salt-N-Pepa', 1993, '\"Shoop\" is the lead single released from Salt-N-Pepa\'s fourth studio album, Very Necessary. It was produced by Mark Sparks and group member Salt. The song features an uncredited verse by rapper Big Twan. Released late in 1993, the song became one of the group\'s most successful singles, reaching number four on the Billboard Hot 100 and topping the Hot Rap Singles chart at number one (their second single to do so). ', 1, '4:09', 'shoop.jpg', 'shoop.mp3', 'Hip Hop'),
(19, 'Angel Of The Morning', 'Juice Newton', 1981, '', 0, '3:53', 'angel_of_the_morning.jpg', 'angel_of_the_morning.mp3', 'Pop, Country'),
(20, 'Careless Whisper', 'George Michael', 1984, '\"Careless Whisper\" is a song by the English singer George Michael. It was written by Michael and Andrew Ridgeley of Wham! and was released on 24 July 1984 on the Wham! album Make It Big.', 1, '5:00', 'careless_whisper.jpg', 'careless_whisper.mp3', 'Pop'),
(21, 'Go All the Way', 'Raspberries', 1972, '\"Go All the Way\" is a single by American rock group Raspberries, released in July 1972 and written by band leader Eric Carmen. The song reached the Top 5 on three principal US charts: number 5 on the Billboard Hot 100, number 4 on Cashbox and number 3 on Record World. The single sold more than 1.3 million copies, earning the band their only certified Gold Record. It was their second single release, their all-time biggest US hit, and appeared on their debut LP, Raspberries.', 1, '3:18', 'go_all_the_way.jpg', 'go_all_the_way.mp3', 'Pop'),
(22, 'Spirit in the Sky', 'Norman Greenbaum', 1969, '\"Spirit in the Sky\" makes several religious references to Jesus, although Greenbaum is Jewish. In a 2006 interview with The New York Times, Greenbaum told a reporter he was inspired to write the song after watching Porter Wagoner singing a gospel song on TV. Greenbaum said: \"I thought, \'Yeah, I could do that,\' knowing nothing about gospel music, so I sat down and wrote my own gospel song. It came easy. I wrote the words in 15 minutes.\"', 0, '4:02', 'spirit_in_the_sky.jpg', 'spirit_in_the_sky.mp3', 'Rock'),
(23, 'Moonage Daydream', 'David Bowie', 1972, 'As the third track on the album, \"Moonage Daydream\" directly introduces the character of Ziggy Stardust,[1] following \"Five Years\" which describes an impending disaster that will result in Earth only having five years left and \"Soul Love\" in which numerous characters deal with love before the impending disaster.', 0, '4:39', 'moonage_daydream.jpg', 'moonage_daydream.mp3', 'Rock'),
(24, 'Fooled Around and Fell in Love', 'Elvin Bishop', 1975, '\"Fooled Around and Fell in Love\" is a song written and performed by blues guitarist Elvin Bishop. It appeared on his 1975 album, Struttin\' My Stuff, and was released as a single the following year.', 1, '4:35', 'fooled_around_and_fell_in_love.jpg', 'fooled_around_and_fell_in_love.mp3', 'Rock, R&B'),
(25, 'Escape (The Piña Colada Song)', 'Rupert Holmes', 1979, 'The song speaks, in three verses and three choruses, of a man who is bored with his current relationship because it has become routine and he desires some variety. One day, he reads the personal advertisements in the newspaper and spots an ad that catches his attention: a woman seeking a man who, among other little things, must like piña coladas (hence it being known as \"the piña colada\" song.)', 0, '3:47', 'escape_pina_colada.jpg', 'escape_pina_colada.mp3', 'Rock'),
(26, 'Father and Son', 'Cat Stevens', 1970, 'Cat Stevens originally wrote \"Father and Son\" as part of a proposed musical project starring Nigel Hawthorne, called Revolussia, that was set during the Russian Revolution, and could also have become a film; the song was about a boy who wanted to join the revolution against the wishes of his conservative farmer father. The musical project faded away when Stevens contracted tuberculosis in 1969.', 0, '3:42', 'father_and_son.jpg', 'father_and_son.mp3', 'Rock'),
(27, 'Wham Bam Shang A Lang', 'Silver', 1976, 'The single\'s title, \"Wham Bam\", was shown as \"Wham Bam Shang-A-Lang\", and peaked at No. 16 on the US Billboard Hot 100 the week of October 2, 1976. It is ranked as the 70th biggest hit of 1976.', 0, '3:35', 'wham_bam.jpg', 'wham_bam.mp3', 'Rock'),
(28, 'Come a Little Bit Closer', 'Jay and the Americans', 1964, 'The lyrics tell the story of a young woman who is romantically involved with a man named José, but seduces the narrator with flattering words until he is love-stricken. After they kiss, José arrives and the narrator flees only to hear, as he is running away, the young woman using on José the same enticing words she had used on him, using her feminine wiles to distract José from attacking her new (now fleeing) love interest.', 0, '2:53', 'come_a_little_bit_closer.jpg', 'come_a_little_bit_closer.mp3', 'Rock, Blues'),
(29, 'My Sweet Lord', 'George Harrison', 1970, '\"My Sweet Lord\" is a song by English musician George Harrison, released in November 1970 on his triple album All Things Must Pass. It was also released as a single, Harrison\'s first as a solo artist, and topped charts worldwide; it was the biggest-selling single of 1971 in the UK. In America and Britain, the song was the first number-one single by an ex-Beatle.', 0, '4:50', 'my_sweet_lord.jpg', 'my_sweet_lord.mp3', 'Country, Rock'),
(30, 'Southern Nights', 'Glen Campbell', 1992, 'The lyrics of \"Southern Nights\" were inspired by childhood memories Allen Toussaint had of visiting relatives in the Louisiana backwoods, which often entailed storytelling under star-filled nighttime skies.When Campbell heard Toussaint\'s version, he immediately identified with the lyrics which reminded him of his own youth growing up on an Arkansas farm. In October 1976, Campbell recorded the song with slightly modified lyrics.', 0, '3:00', 'southern_nights.jpg', 'southern_nights.mp3', 'Country, Pop, Rock'),
(31, 'We Three (My Echo My Shadow And Me)', 'The Ink Spots', 1940, '\"We Three (My Echo, My Shadow and Me)\" is a ballad published in 1939 by Nelson Cogane (né Nelson Cogane Fonarow; 1902–1985), Sammy Mysels and Dick Robertson. The Ink Spots version was recorded in July 1940 and released on Decca in October (b/w \"My Greatest Mistake\").', 0, '3:19', 'we_three.jpg', 'we_three.mp3', 'Jazz'),
(32, 'Take On Me', 'a-ha ', 1984, '\"Take On Me\" is a song by Norwegian synth-pop band A-ha. The original version was produced by Tony Mansfield and remixed by John Ratcliff. The 1985 version was produced by Alan Tarney for the group\'s debut studio album, Hunting High and Low (1985). The song combines synth-pop with a varied instrumentation, including acoustic guitars, keyboards, and drums.', 0, '4:04', 'take_on_me.jpg', 'take_on_me.mp3', 'Pop'),
(33, 'I\'m So Lonesome I Could Cry', 'Hank Williams', 1949, '\"I\'m So Lonesome I Could Cry\" is a song written and recorded by American country music singer-songwriter Hank Williams in 1949. The song has been covered by a wide range of musicians. During his Aloha from Hawaii TV-special, Elvis Presley introduced it by saying, \"I\'d like to sing a song that\'s... probably the saddest song I\'ve ever heard.\"', 0, '3:01', 'im_so_lonesome_i_could_cry.jpg', 'im_so_lonesome_i_could_cry.mp3', 'Country'),
(34, 'Yesterday Once More', 'Carpenters', 1973, '\"Yesterday Once More\", written by Richard Carpenter and John Bettis, is a hit song by the Carpenters from their 1973 album Now & Then. Thematically the song concerns reminiscing about songs of a generation gone by. It segues into a long medley, consisting of eight covers of 1960s tunes incorporated into a faux oldies radio program. The work takes up the entire B-side of the album.', 0, '4:04', 'yesterday_once_more.jpg', 'yesterday_once_more.mp3', 'Pop'),
(35, 'What a Wonderful World', 'Louis Armstrong', 1967, '\"What a Wonderful World\" is a song written by Bob Thiele (as \"George Douglas\") and George David Weiss. It was first recorded by Louis Armstrong and released in 1967 as a single, which topped the pop charts in the United Kingdom,[1] though it performed poorly in the United States because Larry Newton, the president of ABC Records, disliked the song and refused to promote it.', 0, '2:18', 'what_a_wonderful_world.jpg', 'what_a_wonderful_world.mp3', 'Pop, Jazz'),
(36, 'Angel', 'Sarah McLachlan', 1997, '\"Angel\" was McLachlan\'s second consecutive top-five hit on the US Billboard Hot 100, peaking at number four. It also spent 12 weeks at number one on the Billboard Adult Contemporary chart, placing as the number-one song on that chart for 1999.', 0, '5:35', 'angel.jpg', 'angel.mp3', 'Pop'),
(37, 'Someday We\'ll Be Together', 'Diana Ross & the Supremes', 1969, '\"Someday We\'ll Be Together\" was included on the final Diana Ross & the Supremes album, Cream of the Crop (1969). The song was a United States number-one hit on both the Billboard Hot 100 popular singles chart and the R&B singles charts, as well as charting in the top twenty at number 13 on the UK Singles Chart.', 0, '3:31', 'someday_well_be_together.jpg', 'someday_well_be_together.mp3', 'Pop, R&B, Soul, Jazz');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music_genres`
--

DROP TABLE IF EXISTS `tbl_music_genres`;
CREATE TABLE IF NOT EXISTS `tbl_music_genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music_genres`
--

INSERT INTO `tbl_music_genres` (`id`, `genre`) VALUES
(1, 'R&B'),
(2, 'Pop'),
(3, 'Blues'),
(4, 'Rock'),
(5, 'Hip Hop'),
(6, 'Jazz'),
(7, 'Folk'),
(8, 'Disco'),
(9, 'Country');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profiles`
--

DROP TABLE IF EXISTS `tbl_profiles`;
CREATE TABLE IF NOT EXISTS `tbl_profiles` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `profile_name` varchar(50) NOT NULL,
  `profile_pin` varchar(6) NOT NULL,
  `profile_level` int(11) NOT NULL,
  `profile_avatar` varchar(30) NOT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_profiles`
--

INSERT INTO `tbl_profiles` (`profile_id`, `account_id`, `profile_name`, `profile_pin`, `profile_level`, `profile_avatar`) VALUES
(1, 1, 'tom', '123123', 1, 'avatar.jpg'),
(2, 1, 'littletom', '', 0, 'avatar.jpg'),
(3, 2, 'jerry', '123123', 0, 'avatar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tvshows`
--

DROP TABLE IF EXISTS `tbl_tvshows`;
CREATE TABLE IF NOT EXISTS `tbl_tvshows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `year` year(4) NOT NULL,
  `description` varchar(500) NOT NULL,
  `level` int(11) NOT NULL,
  `seasons` varchar(20) NOT NULL,
  `episodes` varchar(20) NOT NULL,
  `cover` varchar(60) NOT NULL,
  `source` varchar(60) NOT NULL,
  `genres` varchar(400) NOT NULL,
  `rating` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tvshows`
--

INSERT INTO `tbl_tvshows` (`id`, `title`, `year`, `description`, `level`, `seasons`, `episodes`, `cover`, `source`, `genres`, `rating`) VALUES
(1, 'The Tom and Jerry Show', 1975, 'Tom and Jerry (who wears a red bow tie) spend various episodes roaming the world competing in sports, enduring on-the-job misadventures, running afoul of dastardly villains, solving mysteries and helping others.', 0, '1', '16', 'tom_and_jerry_1975.jpg', 'tom_and_jerry_1975.mp4', 'Family, Comedy, Animation', 'TV-PG'),
(2, 'The New Adventures of Tom and Jerry', 1980, 'A new colourful take on the classic characters but still with all the madcap slapstick and mayhem.', 0, '1', '15', 'tom_and_jerry_1980.jpg', 'tom_and_jerry_1980.mp4', 'Family, Comedy, Animation', 'TV-PG'),
(3, 'The Mickey Mouse Club', 1955, 'The classic variety show featuring the famous Mouseketeers who entertain with song and dance numbers.', 0, '14', '620', 'the_mickey_mouse_club.jpg', 'the_mickey_mouse_club.mp4', 'Animation, Comedy, Family', 'TV-G'),
(4, 'The Simpsons', 1989, 'Working-class father Homer Simpson and his dysfunctional family deal with comical situations and the ups-and-downs of life in the town of Springfield.', 0, '32', '701', 'the_simpsons.jpg', 'the_simpsons.mp4', 'Animation, Comedy', 'TV-PG'),
(5, 'Popeye the Sailor', 1960, 'Popeye the Sailor Man loves spinach and his girlfriend Olive Oyl. He gets caught up in a series of adventures, both on land and on the seas.', 0, '27', '220', 'popeye_the_sailor.jpg', 'popeye_the_sailor.mp4', 'Animation，Comedy，Family', 'TV-PG'),
(6, 'Teletubbies', 1997, 'In this television show for babies, the four colourful Teletubbies coo and play in idyllic Teletubbyland. They repeat fun, infant-pleasing activities such as rolling on the ground, laughing, running about, and watching real children on the televisions on their bellies. Mysterious pinwheels and telephones rise out of the meadow to loosely direct the day\'s activities.', 0, '2', '52', 'teletubbies.jpg', 'teletubbies.mp4', 'Family, Fantasy, Musical', 'TV-G'),
(7, 'The Charlie Brown and Snoopy Show', 1983, 'Formerly confined to the comics section of the newspaper and occasional TV specials, the Peanuts gang now stars in its own weekly cartoon. The episodes mainly follow the goings-on in the printed comics, with Charlie Brown still not getting any respect, Lucy still being a crab, and Snoopy still living in his strange fantasy world.', 0, '2', '18', 'the_charlie_brown_and_snoopy_show.jpg', 'the_charlie_brown_and_snoopy_show.mp4', 'Animation, Comedy, Family', 'TV-G'),
(8, 'SpongeBob SquarePants', 1999, 'The misadventures of a talking sea sponge who works at a fast food restaurant, attends a boating school, and lives in an underwater pineapple.', 0, '13', '265', 'spongebob_squarepants.jpg', 'spongebob_squarepants.mp4', 'Animation, Comedy, Family, Fantasy', 'TV-G'),
(9, 'Sesame Street', 1969, 'Kermit the Frog is the manager of a cabaret-style theatre house, which invariably has more drama behind the stage than on it. He has to contend with wannabe-comedian bears, the smothering advances of Miss Piggy, crabby regular theatre patrons, homicidal chefs, livestock, not to mention making the weekly guest star feel welcome.', 0, '51', '4561', 'sesame_street.jpg', 'sesame_street.mp4', 'Comedy, Family, Musical', 'TV-G'),
(10, 'Batman: The Animated Series', 1992, 'Heir to the Wayne family fortune, Bruce Wayne lives by day as a seemingly lavish playboy millionaire socialite, but by night assumes the role of his crime-fighting alter-ego: the caped crusader known as The Batman. Throughout the show, Batman receives help from sidekicks Dick Grayson/Robin and Barbara Gordon/Batgirl, as well as Police Commissioner James Gordon, in protecting the streets of Gotham City from a large rogue\'s gallery of criminals, lunatics, and nemeses.', 0, '2', '85', 'batman_the_animated_series.jpg', 'batman_the_animated_series.mp4', 'Animation, Action, Adventure, Family, Sci-Fi', 'TV-PG'),
(11, 'Friends', 1994, 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.', 1, '10', '236', 'friends.jpg', 'friends.mp4', 'Comedy, Romance', 'TV-PG'),
(12, 'South Park', 1997, 'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.', 1, '23', '309', 'south_park.jpg', 'south_park.mp4', 'Animation, Comedy', '18A'),
(13, 'Adventures of Superman', 1952, 'The Mad Scientist threatens to use his Electrothanasia-Ray to cause \"total destruction\" to the fools who had laughed at him. Lois Lane pilots an airplane to his mountaintop laboratory, but The Scientist has her bound and gagged before she knows it. ', 0, '6', '104', 'adventures_of_superman.jpg', 'adventures_of_superman.mp4', 'Animation, Action, Adventure, Family, Fantasy, Sci-Fi', 'TV-PG'),
(14, 'The Lone Ranger', 1949, 'The lone surviving Texas Ranger who was nursed back to health by the Potawatomi tribesman Tonto. He rides with him, on Silver and Scout, throughout the West, doing good while living off a silver mine which supplies him with income and bullets.', 1, '5', '221', 'the_lone_ranger.jpg', 'the_lone_ranger.mp4', 'Western', 'TV-PG'),
(15, 'Agatha Christie\'s Poirot', 1989, 'Hercule Poirot, a famous Belgian detective, who has an impeccable knack for getting embroiled in a mystery, solves crimes along with Captain Hastings and Scotland Yard Chief Inspector James Japp.', 1, '13', '70', 'agatha_christies_poirot.jpg', 'agatha_christies_poirot.mp4', 'Crime, Drama, Thriller', 'TV-G'),
(16, 'Mr. Bean', 1990, 'The childish Mr Bean uses his unusual wit to fulfil everyday tasks. But more often than not, he ends up creating trouble for himself and those around him.', 0, '1', '15', 'mr_bean.jpg', 'mr_bean.mp4', 'Comedy, Family', 'TV-PG'),
(17, 'Miss Marple', 1984, 'Miss Jane Marple, an elderly lady, learns of various mysterious and dangerous crimes and murders in her town. She sets out to help the local police solve the cases.', 1, '3', '12', 'miss_marple.jpg', 'miss_marple.mp4', 'Drama, Crime', 'TV-PG'),
(18, 'Zorro', 1957, 'The masked swordsman swashes a mean buckle as the dashing alter ego of 19th century Spanish California aristocrat Don Diego de la Vega. His faithful manservant, Bernardo, pretends to be a deaf mute so he can eavesdrop. Dimwitted Sgt. Garcia is kind-hearted and loyal. Don Alejandro is Diego\'s wealthy father.', 1, '3', '78', 'zorro.jpg', 'zorro.mp4', 'Western', 'TV-PG'),
(19, 'Ghostbusters', 1986, 'Eddie, Jake and their pet gorilla Tracy track down and eliminate ghosts with the help of a few supernatural sidekicks.', 0, '1', '65', 'ghostbusters.jpg', 'ghostbusters.mp4', 'Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi', 'TV-PG'),
(20, 'The Jimmy Stewart Show', 1971, 'In Easy Valley, Jim Howard is an anthropology professor at Josiah Kessel College which was founded by his grandfather. In each episode, Jim speaks directly to the audience and always ends by wishing peace, love, and laughter.', 1, '1', '24', 'the_jimmy_stewart_show.jpg', 'the_jimmy_stewart_show.mp4', 'Comedy', 'TV-PG'),
(21, 'Happy Days', 1974, 'Richie Cunningham and his friend Potsie face life at Jefferson High in Milwaukee Wisconsin in the 1950s. Lots of changes over time as kids come and go, new series spin off, Richie and pals go to college then the army. Even marriage.', 1, '11', '255', 'happy_days.jpg', 'happy_days.mp4', 'Comedy, Family, Musical', 'TV-PG'),
(22, 'Full House', 1987, 'Danny is a widower who is raising his three little girls after the death of his wife. But he has help from his musician brother-in-law, Jesse Katsopolis, and his best friend, comedian Joey Gladstone.', 1, '8', '192', 'full_house.jpg', 'full_house.mp4', 'Comedy, Drama, Family', 'TV-G');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video_genres`
--

DROP TABLE IF EXISTS `tbl_video_genres`;
CREATE TABLE IF NOT EXISTS `tbl_video_genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_video_genres`
--

INSERT INTO `tbl_video_genres` (`id`, `genre`) VALUES
(1, 'Family'),
(2, 'Animation'),
(3, 'Fantasy'),
(4, 'Drama'),
(5, 'Musical'),
(6, 'Sci-fi'),
(7, 'War'),
(8, 'Western'),
(9, 'Crime'),
(10, 'Comedy'),
(11, 'Romance'),
(12, 'Horror'),
(13, 'Thriller'),
(14, 'History'),
(15, 'Action'),
(16, 'Adventure');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
