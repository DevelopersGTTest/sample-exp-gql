
CREATE TABLE reader(
    id_reader INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    last_name VARCHAR(100),
    age INT,
    address VARCHAR(100),
    PRIMARY KEY(id_reader)
);


CREATE TABLE category(
	id_category INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY(id_category)
);

CREATE TABLE book(
	id_book INT NOT NULL AUTO_INCREMENT,
    asin INT,
    name VARCHAR(100),
	editorial VARCHAR(100),
	lang VARCHAR(100),
	cover VARCHAR(100),
	isbn VARCHAR(100),
    id_category INT,
	PRIMARY KEY(id_book),
    FOREIGN KEY(id_category ) REFERENCES  category(id_category)
);

CREATE TABLE rental(
	id_rental INT NOT NULL AUTO_INCREMENT,
    id_reader INT NOT NULL,
    description VARCHAR(100),
    PRIMARY KEY(id_rental),
    FOREIGN KEY(id_reader) REFERENCES reader(id_reader)
);


CREATE TABLE rental_detail(
	id_renta_detail INT NOT NULL AUTO_INCREMENT,
    id_book INT NOT NULL,
  	id_rental INT NOT NULL,
    PRIMARY KEY(id_renta_detail),
    FOREIGN KEY(id_rental) REFERENCES rental(id_rental),
    FOREIGN KEY(id_book) REFERENCES book(id_book)
);