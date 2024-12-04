FROM php:8.3.8-apache

WORKDIR /var/www/html

COPY . .

EXPOSE 80