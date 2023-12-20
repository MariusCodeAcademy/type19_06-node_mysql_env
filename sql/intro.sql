-- Create posts table

CREATE TABLE `type19_db`.`posts` 
(
  `post_id` INT UNSIGNED NOT NULL AUTO_INCREMENT , 
  `title` VARCHAR(255) NOT NULL , 
  `author` VARCHAR(255) NOT NULL , 
  `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP , 
  `body` TEXT NOT NULL , 
  PRIMARY KEY (`post_id`)
) ENGINE = InnoDB;

-- Add one post 

INSERT INTO `posts` 
  (`title`, `author`, `date`, `body`) 
  VALUES ('Post 5', 'Mike T', '2023-12-15', 'Post about Boxing from T. ');