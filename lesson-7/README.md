請確保建立好 MySQL database

```sh
CREATE DATABASE test;

USE test;

CREATE TABLE carts
(
  id              INT unsigned NOT NULL,
  quantity            INT NOT NULL
);

CREATE TABLE products
(
  id             INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(150) NOT NULL,
  image            VARCHAR(250) NOT NULL
);
```